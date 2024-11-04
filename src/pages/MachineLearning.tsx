import { useState } from 'react';
import {
  BrainCircuit,
  TrendingUp,
  Users,
  BarChart3,
  AlertCircle,
  FileSpreadsheet,
} from 'lucide-react';
import { FileUpload } from '../components/FileUpload';
import { ModelCard } from '../components/ModelCard';

const models = [
  {
    id: 'sales-forecast',
    title: 'Sales Forecasting',
    description: 'Predict future sales patterns using historical data and market trends.',
    icon: <TrendingUp className="h-6 w-6" />,
  },
  {
    id: 'customer-segmentation',
    title: 'Customer Segmentation',
    description: 'Group customers based on behavior and characteristics.',
    icon: <Users className="h-6 w-6" />,
  },
  {
    id: 'anomaly-detection',
    title: 'Anomaly Detection',
    description: 'Identify unusual patterns and outliers in your data.',
    icon: <AlertCircle className="h-6 w-6" />,
  },
  {
    id: 'demand-forecasting',
    title: 'Demand Forecasting',
    description: 'Predict future demand for products and services.',
    icon: <BarChart3 className="h-6 w-6" />,
  },
];

export default function MachineLearning() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);

  const handleFileUpload = async (file: File) => {
    setSelectedFile(file);
    // Here you would typically process the file
    // For now, we'll just store it in state
  };

  const handleModelSelect = (modelId: string) => {
    setSelectedModel(modelId);
    if (selectedFile) {
      setProcessing(true);
      // Simulate processing
      setTimeout(() => {
        setProcessing(false);
      }, 2000);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <BrainCircuit className="h-8 w-8 text-blue-500" />
          <h1 className="text-2xl font-bold text-gray-900">Machine Learning Hub</h1>
        </div>
        <p className="text-gray-600 mt-2">
          Upload your data and leverage our AI models for advanced analytics.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
            <h2 className="text-lg font-semibold mb-4">Select AI Model</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {models.map((model) => (
                <ModelCard
                  key={model.id}
                  title={model.title}
                  description={model.description}
                  icon={model.icon}
                  onClick={() => handleModelSelect(model.id)}
                />
              ))}
            </div>
          </div>

          {selectedModel && (
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Model Results</h2>
              {processing ? (
                <div className="text-center py-12">
                  <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4" />
                  <p className="text-gray-600">Processing your data...</p>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  {selectedFile ? (
                    <p>Results will appear here after processing</p>
                  ) : (
                    <p>Upload a file to see results</p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Upload Data</h2>
            <FileUpload
              onFileUpload={handleFileUpload}
              accept={{
                'text/csv': ['.csv'],
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
                'application/pdf': ['.pdf'],
              }}
            />
            {selectedFile && (
              <div className="mt-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FileSpreadsheet className="h-4 w-4" />
                  <span>{selectedFile.name}</span>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Processing Status</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">File Upload</span>
                <span className="text-sm font-medium text-green-600">
                  {selectedFile ? 'Complete' : 'Waiting'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Model Selection</span>
                <span className="text-sm font-medium text-green-600">
                  {selectedModel ? 'Complete' : 'Waiting'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Processing</span>
                <span className="text-sm font-medium text-blue-600">
                  {processing ? 'In Progress' : 'Waiting'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}