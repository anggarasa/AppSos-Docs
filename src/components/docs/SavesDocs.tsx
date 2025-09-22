import React from 'react';
import EndpointCard from '../EndpointCard';

const SavesDocs: React.FC = () => {
  const endpoints = [
    {
      method: 'POST',
      path: '/save',
      title: 'Save Post',
      description: 'Menyimpan post.',
      requiresAuth: true,
      requestBody: {
        userId: 'uuid',
        postId: 'uuid'
      },
      response: {
        status: 201,
        message: 'Post saved successfully',
        data: {
          id: 'uuid',
          userId: 'uuid',
          postId: 'uuid',
          createdAt: '2024-01-01T00:00:00.000Z'
        }
      }
    },
    {
      method: 'DELETE',
      path: '/save/unsave',
      title: 'Unsave Post',
      description: 'Menghapus post dari saved.',
      requiresAuth: true,
      requestBody: {
        userId: 'uuid',
        postId: 'uuid'
      },
      response: {
        status: 200,
        message: 'Post unsaved successfully'
      }
    },
    {
      method: 'GET',
      path: '/save/user/:userId',
      title: 'Get Saved Posts by User',
      description: 'Mendapatkan posts yang disimpan user.',
      requiresAuth: true,
      response: {
        status: 200,
        message: 'Success',
        data: [
          {
            id: 'uuid',
            userId: 'uuid',
            postId: 'uuid',
            post: {
              id: 'uuid',
              content: 'Post content',
              imageUrl: 'https://...',
              user: {}
            },
            createdAt: '2024-01-01T00:00:00.000Z'
          }
        ]
      }
    },
    {
      method: 'GET',
      path: '/save/check/:userId/:postId',
      title: 'Check User Save',
      description: 'Mengecek apakah user sudah menyimpan post.',
      response: {
        status: 200,
        message: 'Success',
        data: {
          hasSaved: true,
          saveId: 'uuid'
        }
      }
    },
    {
      method: 'GET',
      path: '/save/count/:postId',
      title: 'Get Post Save Count',
      description: 'Mendapatkan jumlah save untuk post.',
      response: {
        status: 200,
        message: 'Success',
        data: {
          postId: 'uuid',
          saveCount: 15
        }
      }
    }
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary-900 mb-4">Saves</h1>
        <p className="text-lg text-secondary-600">
          Endpoints untuk mengelola sistem save posts dalam AppSos.
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

export default SavesDocs;
