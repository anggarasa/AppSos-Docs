import React from "react";
import { Link } from "react-router-dom";

const QuickStartSection: React.FC = () => {
  return (
    <section className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Quick Start
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Get up and running with AppSos API in minutes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-secondary-900 mb-6">
              Base URL
            </h3>
            <div className="code-block mb-6">
              <code>https://app-sos.vercel.app/api/v1</code>
            </div>

            <h3 className="text-2xl font-semibold text-secondary-900 mb-6">
              Authentication
            </h3>
            <p className="text-secondary-600 mb-4">
              All protected endpoints require a JWT token in the Authorization
              header:
            </p>
            <div className="code-block mb-6">
              <code>Authorization: Bearer &lt;your_jwt_token&gt;</code>
            </div>

            <h3 className="text-2xl font-semibold text-secondary-900 mb-6">
              Example Request
            </h3>
            <div className="code-block">
              <pre>{`curl -X GET \\
  https://app-sos.vercel.app/api/v1 \\
  -H "Authorization: Bearer your_token_here"`}</pre>
            </div>
          </div>

          <div className="space-y-8">
            <div className="card">
              <h4 className="text-lg font-semibold text-secondary-900 mb-3">
                🚀 Ready to start?
              </h4>
              <p className="text-secondary-600 mb-4">
                Explore our comprehensive API documentation with detailed
                examples and responses.
              </p>
              <Link to="/docs" className="btn-primary inline-block">
                View Documentation
              </Link>
            </div>

            <div className="card">
              <h4 className="text-lg font-semibold text-secondary-900 mb-3">
                📚 API Endpoints
              </h4>
              <ul className="space-y-2 text-secondary-600">
                <li>• Authentication & User Management</li>
                <li>• Posts & Comments</li>
                <li>• Likes & Saves</li>
                <li>• Follow System</li>
                <li>• Notifications</li>
              </ul>
            </div>

            <div className="card">
              <h4 className="text-lg font-semibold text-secondary-900 mb-3">
                🔧 Response Format
              </h4>
              <div className="code-block text-xs">
                <pre>{`{
  "status": 200,
  "message": "Success",
  "data": { ... },
  "pagination": { ... }
}`}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickStartSection;
