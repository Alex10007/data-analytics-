import { Package, AlertCircle, TrendingUp, Truck } from 'lucide-react';
import { DashboardCard } from '../components/DashboardCard';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const inventoryData = [
  { date: '2024-01', stock: 1200, demand: 1000 },
  { date: '2024-02', stock: 1100, demand: 1200 },
  { date: '2024-03', stock: 1300, demand: 1100 },
  { date: '2024-04', stock: 1400, demand: 1300 },
  { date: '2024-05', stock: 1200, demand: 1400 },
  { date: '2024-06', stock: 1500, demand: 1200 },
];

const lowStockItems = [
  { id: 1, name: 'Product A', stock: 15, threshold: 20 },
  { id: 2, name: 'Product B', stock: 8, threshold: 25 },
  { id: 3, name: 'Product C', stock: 12, threshold: 30 },
];

export default function Inventory() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Inventory Management</h1>
        <p className="text-gray-600">Track stock levels, demand, and inventory health.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard
          title="Total Stock Items"
          value="2,847"
          icon={<Package className="h-6 w-6" />}
          trend={5.2}
        />
        <DashboardCard
          title="Low Stock Alerts"
          value="12"
          icon={<AlertCircle className="h-6 w-6" />}
          trend={-8.4}
        />
        <DashboardCard
          title="Stock Turnover"
          value="4.2x"
          icon={<TrendingUp className="h-6 w-6" />}
          trend={2.1}
        />
        <DashboardCard
          title="Incoming Orders"
          value="24"
          icon={<Truck className="h-6 w-6" />}
          trend={15.3}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Stock vs Demand Trend</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={inventoryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="stock"
                  stroke="#3B82F6"
                  name="Stock Level"
                />
                <Line
                  type="monotone"
                  dataKey="demand"
                  stroke="#EF4444"
                  name="Demand"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Low Stock Alerts</h2>
          <div className="space-y-4">
            {lowStockItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 bg-red-50 rounded-lg"
              >
                <div>
                  <h3 className="font-medium text-red-700">{item.name}</h3>
                  <p className="text-sm text-red-600">
                    Stock: {item.stock} / {item.threshold}
                  </p>
                </div>
                <div className="h-2 w-24 bg-red-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-500"
                    style={{
                      width: `${(item.stock / item.threshold) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}