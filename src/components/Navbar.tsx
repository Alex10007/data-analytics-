import { BarChart3, Home, Users, Package, Calendar, BrainCircuit } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Customers', href: '/customers', icon: Users },
  { name: 'Inventory', href: '/inventory', icon: Package },
  { name: 'Scheduling', href: '/scheduling', icon: Calendar },
  { name: 'Machine Learning', href: '/ml', icon: BrainCircuit },
];

export function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white p-4">
      <div className="flex items-center gap-2 mb-8">
        <BarChart3 className="h-8 w-8 text-blue-500" />
        <span className="text-xl font-bold">DataPro</span>
      </div>
      <div className="space-y-1">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
                'hover:bg-gray-800',
                location.pathname === item.href
                  ? 'bg-gray-800 text-blue-500'
                  : 'text-gray-300'
              )}
            >
              <Icon className="h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}