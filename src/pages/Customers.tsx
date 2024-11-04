import { Users, UserPlus, UserMinus, DollarSign, LineChart } from 'lucide-react';
import { DashboardCard } from '../components/DashboardCard';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const customerSegments = [
  { name: 'Enterprise', value: 4000, color: '#3B82F6' },
  { name: 'SMB', value: 3000, color: '#60A5FA' },
  { name: 'Startup', value: 2000, color: '#93C5FD' },
  { name: 'Individual', value: 1000, color: '#BFDBFE' },
];

const customerActivity = [
  { month: 'Jan', new: 400, churned: 200 },
  { month: 'Feb', new: 300, churned: 150 },
  { month: 'Mar', new: 500, churned: 250 },
  { month: 'Apr', new: 450, churned: 180 },
  { month: 'May', new: 600, churned: 220 },
  { month: 'Jun', new: 550, churned: 230 },
];

export default function Customers() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Customer Analytics</h1>
        <p className="text-gray-600">Track customer growth, behavior, and segmentation.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard
          title="Total Customers"
          value="10,847"
          icon={<Users className="h-6 w-6" />}
          trend={8.2}
        />
        <DashboardCard
          title="New Customers"
          value="547"
          icon={<UserPlus className="h-6 w-6" />}
          trend={12.5}
        />
        <DashboardCard
          title="Churn Rate"
          value="2.4%"
          icon={<UserMinus className="h-6 w-6" />}
          trend={-1.1}
        />
        <DashboardCard
          title="Avg. Customer LTV"
          value="$1,240"
          icon={<DollarSign className="h-6 w-6" />}
          trend={4.3}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Customer Growth</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={customerActivity}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="new" fill="#3B82F6" name="New Customers" />
                <Bar dataKey="churned" fill="#EF4444" name="Churned Customers" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Customer Segments</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={customerSegments}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {customerSegments.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {customerSegments.map((segment) => (
              <div key={segment.name} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: segment.color }}
                />
                <span className="text-sm text-gray-600">{segment.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}