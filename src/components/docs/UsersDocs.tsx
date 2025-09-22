import React from 'react';
import EndpointCard from '../EndpointCard';

const UsersDocs: React.FC = () => {
  const endpoints = [
    {
      method: 'GET',
      path: '/users',
      title: 'Get All Users',
      description: 'Mendapatkan daftar semua users dengan pagination.',
      queryParams: [
        'page (optional): halaman (default: 1)',
        'limit (optional): jumlah data per halaman (default: 10)'
      ],
      response: {
        status: 200,
        message: 'Success',
        data: [
          {
            id: 'uuid',
            name: 'John Doe',
            username: 'johndoe',
            email: 'john@example.com',
            bio: 'User bio',
            avatarUrl: 'https://...',
            createdAt: '2024-01-01T00:00:00.000Z',
            updatedAt: '2024-01-01T00:00:00.000Z'
          }
        ],
        pagination: {
          page: 1,
          limit: 10,
          total: 100,
          totalPages: 10
        }
      }
    },
    {
      method: 'GET',
      path: '/users/search?q=search_term',
      title: 'Search Users',
      description: 'Mencari users berdasarkan query.',
      queryParams: [
        'q (required): search query',
        'page (optional): halaman',
        'limit (optional): jumlah data per halaman'
      ],
      response: {
        status: 200,
        message: 'Users found successfully',
        data: [],
        pagination: {}
      }
    },
    {
      method: 'GET',
      path: '/users/username/:username',
      title: 'Get User by Username',
      description: 'Mendapatkan user berdasarkan username.',
      response: {
        status: 200,
        message: 'User retrieved successfully',
        data: {
          id: 'uuid',
          name: 'John Doe',
          username: 'johndoe',
          email: 'john@example.com',
          bio: 'User bio',
          avatarUrl: 'https://...',
          createdAt: '2024-01-01T00:00:00.000Z',
          updatedAt: '2024-01-01T00:00:00.000Z'
        }
      }
    },
    {
      method: 'GET',
      path: '/users/profile/:id',
      title: 'Get User Profile with Stats',
      description: 'Mendapatkan profil user dengan statistik (posts count, followers count, dll).',
      response: {
        status: 200,
        message: 'User profile retrieved successfully',
        data: {
          user: {},
          stats: {
            postsCount: 10,
            followersCount: 50,
            followingCount: 30
          }
        }
      }
    },
    {
      method: 'PUT',
      path: '/users/:id',
      title: 'Update User',
      description: 'Update data user. Mendukung upload avatar.',
      requiresAuth: true,
      requestBody: {
        name: 'Updated Name',
        username: 'updated_username',
        email: 'updated@example.com',
        bio: 'Updated bio',
        avatar: 'file_upload'
      },
      response: {
        status: 200,
        message: 'User update successful',
        data: {
          id: 'uuid',
          name: 'Updated Name',
          username: 'updated_username',
          email: 'updated@example.com',
          bio: 'Updated bio',
          avatarUrl: 'https://...',
          updatedAt: '2024-01-01T00:00:00.000Z'
        }
      }
    },
    {
      method: 'DELETE',
      path: '/users/:id',
      title: 'Delete User',
      description: 'Menghapus user.',
      requiresAuth: true,
      response: {
        status: 200,
        message: 'User deleted successfully'
      }
    }
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary-900 mb-4">Users</h1>
        <p className="text-lg text-secondary-600">
          Endpoints untuk mengelola data pengguna dalam sistem AppSos.
        </p>
      </div>

      <div className="space-y-8">
        {endpoints.map((endpoint, index) => (
          <EndpointCard key={index} endpoint={endpoint} />
        ))}
      </div>
    </div>
  );
};

export default UsersDocs;
