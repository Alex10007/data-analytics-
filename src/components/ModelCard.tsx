import { cn } from '../lib/utils';

interface ModelCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export function ModelCard({ title, description, icon, onClick, className }: ModelCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'p-6 bg-white rounded-xl shadow-sm text-left w-full transition-all',
        'hover:shadow-md hover:scale-[1.02]',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        className
      )}
    >
      <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </button>
  );
}