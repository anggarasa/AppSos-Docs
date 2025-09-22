import React, { useState } from 'react';

interface EndpointCardProps {
  endpoint: {
    method: string;
    path: string;
    title: string;
    description: string;
    requestBody?: any;
    queryParams?: string[];
    validationRules?: string[];
    response: any;
    requiresAuth?: boolean;
  };
}

const EndpointCard: React.FC<EndpointCardProps> = ({ endpoint }) => {
  const [activeTab, setActiveTab] = useState<'request' | 'response'>('request');

  const getMethodClass = (method: string) => {
    switch (method) {
      case 'GET':
        return 'method-get';
      case 'POST':
        return 'method-post';
      case 'PUT':
        return 'method-put';
      case 'DELETE':
        return 'method-delete';
      default:
        return 'method-get';
    }
  };

  return (
    <div className="border border-secondary-200 rounded-lg overflow-hidden">
      <div className="bg-secondary-50 px-6 py-4 border-b border-secondary-200">
        <div className="flex items-center gap-4 mb-2">
          <span className={`endpoint-method ${getMethodClass(endpoint.method)}`}>
            {endpoint.method}
          </span>
          <code className="text-lg font-mono text-secondary-900">{endpoint.path}</code>
          {endpoint.requiresAuth && (
            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
              🔒 Auth Required
            </span>
          )}
        </div>
        <h3 className="text-xl font-semibold text-secondary-900">{endpoint.title}</h3>
        <p className="text-secondary-600 mt-1">{endpoint.description}</p>
      </div>

      <div className="p-6">
        <div className="flex space-x-1 mb-6">
          <button
            onClick={() => setActiveTab('request')}
            className={`tab-button ${activeTab === 'request' ? 'active' : 'inactive'}`}
          >
            Request
          </button>
          <button
            onClick={() => setActiveTab('response')}
            className={`tab-button ${activeTab === 'response' ? 'active' : 'inactive'}`}
          >
            Response
          </button>
        </div>

        {activeTab === 'request' && (
          <div className="space-y-4">
            {endpoint.queryParams && (
              <div>
                <h4 className="text-lg font-semibold text-secondary-900 mb-3">Query Parameters</h4>
                <ul className="space-y-1">
                  {endpoint.queryParams.map((param, index) => (
                    <li key={index} className="text-secondary-600 flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      {param}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {endpoint.requestBody && (
              <div>
                <h4 className="text-lg font-semibold text-secondary-900 mb-3">Request Body</h4>
                <div className="code-block">
                  <pre>{JSON.stringify(endpoint.requestBody, null, 2)}</pre>
                </div>
              </div>
            )}
            
            {endpoint.validationRules && (
              <div>
                <h4 className="text-lg font-semibold text-secondary-900 mb-3">Validation Rules</h4>
                <ul className="space-y-1">
                  {endpoint.validationRules.map((rule, index) => (
                    <li key={index} className="text-secondary-600 flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {activeTab === 'response' && (
          <div>
            <h4 className="text-lg font-semibold text-secondary-900 mb-3">Response</h4>
            <div className="code-block">
              <pre>{JSON.stringify(endpoint.response, null, 2)}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EndpointCard;
