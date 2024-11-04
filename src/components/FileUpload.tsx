import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';
import { cn } from '../lib/utils';

interface FileUploadProps {
  onFileUpload: (file: File) => void;
  accept: Record<string, string[]>;
  className?: string;
}

export function FileUpload({ onFileUpload, accept, className }: FileUploadProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onFileUpload(acceptedFiles[0]);
    }
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className={cn(
        'border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors',
        isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-500',
        className
      )}
    >
      <input {...getInputProps()} />
      <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
      {isDragActive ? (
        <p className="text-blue-500">Drop the file here...</p>
      ) : (
        <div>
          <p className="text-gray-600">Drag & drop a file here, or click to select</p>
          <p className="text-sm text-gray-500 mt-2">
            Supported formats: CSV, Excel, PDF
          </p>
        </div>
      )}
    </div>
  );
}