import React from 'react';
import EndpointCard from '../EndpointCard';

const HealthDocs: React.FC = () => {
  const endpoints = [
    {
      method: 'GET',
      path: '/health',
      title: 'Health Check',
      description: 'Mengecek status server.',
      response: {
        status: 'Okee',
        message: 'Server is running',
        timestamp: '2024-01-01T00:00:00.000Z'
      }
    },
    {
      method: 'GET',
      path: '/api/v1',
      title: 'API Status',
      description: 'Mengecek status API v1.',
      response: {
        message: 'API v1 is working'
      }
    }
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary-900 mb-4">Health Check</h1>
        <p className="text-lg text-secondary-600">
          Endpoints untuk mengecek status server dan API.
        </p>
      </div>

      <div className="space-y-8">
        {endpoints.map((endpoint, index) => (
          <EndpointCard key={index} endpoint={endpoint} />
        ))}
      </div>

      <div className="mt-12 bg-secondary-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-secondary-900 mb-4">Error Codes</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-secondary-200">
            <thead className="bg-secondary-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Code
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-secondary-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-secondary-900">200</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-500">Success</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-secondary-900">201</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-500">Created</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-secondary-900">400</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-500">Bad Request</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-secondary-900">401</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-500">Unauthorized</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-secondary-900">403</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-500">Forbidden</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-secondary-900">404</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-500">Not Found</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-secondary-900">409</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-500">Conflict</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-secondary-900">500</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-500">Internal Server Error</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 bg-primary-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-secondary-900 mb-4">Notes</h3>
        <ul className="space-y-2 text-secondary-600">
          <li>• 🔒 = Endpoint memerlukan autentikasi</li>
          <li>• Semua ID menggunakan format UUID</li>
          <li>• File upload mendukung format gambar umum (jpg, jpeg, png, gif)</li>
          <li>• Pagination default: page=1, limit=10</li>
          <li>• Timezone menggunakan UTC</li>
          <li>• CORS diaktifkan untuk origin yang dikonfigurasi</li>
        </ul>
      </div>
    </div>
  );
};

export default HealthDocs;
