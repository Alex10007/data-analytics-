import { Calendar, Clock, Users, DollarSign } from 'lucide-react';
import { DashboardCard } from '../components/DashboardCard';

const scheduleData = [
  {
    id: 1,
    employee: 'John Doe',
    role: 'Senior Developer',
    shift: 'Morning',
    hours: '9:00 AM - 5:00 PM',
    status: 'active',
  },
  {
    id: 2,
    employee: 'Jane Smith',
    role: 'Project Manager',
    shift: 'Morning',
    hours: '8:00 AM - 4:00 PM',
    status: 'break',
  },
  {
    id: 3,
    employee: 'Mike Johnson',
    role: 'Designer',
    shift: 'Afternoon',
    hours: '2:00 PM - 10:00 PM',
    status: 'active',
  },
];

export default function Scheduling() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Employee Scheduling</h1>
        <p className="text-gray-600">Manage shifts, attendance, and workforce planning.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard
          title="Total Employees"
          value="124"
          icon={<Users className="h-6 w-6" />}
          trend={3.2}
        />
        <DashboardCard
          title="Active Shifts"
          value="45"
          icon={<Clock className="h-6 w-6" />}
          trend={0}
        />
        <DashboardCard
          title="Monthly Hours"
          value="4,120"
          icon={<Calendar className="h-6 w-6" />}
          trend={2.4}
        />
        <DashboardCard
          title="Labor Cost"
          value="$52,400"
          icon={<DollarSign className="h-6 w-6" />}
          trend={-1.2}
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Current Shift Schedule</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Employee
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Shift
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hours
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {scheduleData.map((employee) => (
                <tr key={employee.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {employee.employee}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{employee.role}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{employee.shift}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{employee.hours}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        employee.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {employee.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}