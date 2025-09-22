import React from 'react';
import EndpointCard from '../EndpointCard';

const AuthenticationDocs: React.FC = () => {
  const endpoints = [
    {
      method: 'POST',
      path: '/auth/register',
      title: 'Register User',
      description: 'Mendaftarkan user baru ke dalam sistem.',
      requestBody: {
        name: 'John Doe',
        username: 'johndoe',
        email: 'john@example.com',
        password: 'password123'
      },
      validationRules: [
        'name: 2-50 karakter',
        'username: 3-20 karakter, hanya huruf, angka, dan underscore',
        'email: format email yang valid',
        'password: minimal 6 karakter'
      ],
      response: {
        status: 201,
        message: 'User registration successful',
        data: {
          user: {
            id: 'uuid',
            name: 'John Doe',
            username: 'johndoe',
            email: 'john@example.com'
          },
          accessToken: 'jwt_token',
          refreshToken: 'refresh_token'
        }
      }
    },
    {
      method: 'POST',
      path: '/auth/login',
      title: 'Login User',
      description: 'Login user dengan username dan password.',
      requestBody: {
        username: 'johndoe',
        password: 'password123'
      },
      response: {
        status: 200,
        message: 'Login successful',
        data: {
          user: {
            id: 'uuid',
            name: 'John Doe',
            username: 'johndoe',
            email: 'john@example.com'
          },
          accessToken: 'jwt_token',
          refreshToken: 'refresh_token'
        }
      }
    },
    {
      method: 'POST',
      path: '/auth/refresh',
      title: 'Refresh Token',
      description: 'Refresh access token menggunakan refresh token.',
      requestBody: {
        refreshToken: 'refresh_token'
      },
      response: {
        status: 200,
        message: 'Token refreshed successfully',
        data: {
          accessToken: 'new_jwt_token',
          refreshToken: 'new_refresh_token'
        }
      }
    },
    {
      method: 'POST',
      path: '/auth/logout',
      title: 'Logout',
      description: 'Logout user (client-side token removal).',
      response: {
        status: 200,
        message: 'Logout successful'
      }
    }
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary-900 mb-4">Authentication</h1>
        <p className="text-lg text-secondary-600">
          API menggunakan JWT (JSON Web Token) untuk autentikasi. Untuk endpoint yang memerlukan autentikasi, sertakan header:
        </p>
        <div className="code-block mt-4">
          <code>Authorization: Bearer &lt;your_jwt_token&gt;</code>
        </div>
      </div>

      <div className="space-y-8">
        {endpoints.map((endpoint, index) => (
          <EndpointCard key={index} endpoint={endpoint} />
        ))}
      </div>
    </div>
  );
};

export default AuthenticationDocs;
