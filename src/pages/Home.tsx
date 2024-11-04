import { ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Welcome to <span className="text-blue-600">DataPro</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Empower your business with advanced analytics, AI-driven insights, and
            comprehensive data visualization tools.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/analytics"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Get started
            </a>
            <a
              href="/docs"
              className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-1"
            >
              Learn more <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why choose DataPro?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500 mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    title: 'Advanced Analytics',
    description: 'Leverage AI and machine learning for predictive insights and data-driven decision making.',
    icon: ArrowUpRight,
  },
  {
    title: 'Real-time Monitoring',
    description: 'Track KPIs and metrics in real-time with interactive dashboards and alerts.',
    icon: ArrowUpRight,
  },
  {
    title: 'Scalable Infrastructure',
    description: 'Built for growth with enterprise-grade security and performance.',
    icon: ArrowUpRight,
  },
];