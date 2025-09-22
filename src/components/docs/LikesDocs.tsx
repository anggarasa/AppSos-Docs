import React from 'react';
import EndpointCard from '../EndpointCard';

const LikesDocs: React.FC = () => {
  const endpoints = [
    {
      method: 'POST',
      path: '/like',
      title: 'Create Like',
      description: 'Memberikan like pada post.',
      requiresAuth: true,
      requestBody: {
        userId: 'uuid',
        postId: 'uuid'
      },
      response: {
        status: 201,
        message: 'Like created successfully',
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
      path: '/like/unlike',
      title: 'Unlike Post',
      description: 'Menghapus like dari post.',
      requiresAuth: true,
      requestBody: {
        userId: 'uuid',
        postId: 'uuid'
      },
      response: {
        status: 200,
        message: 'Post unliked successfully'
      }
    },
    {
      method: 'GET',
      path: '/like/user/:userId/posts',
      title: 'Get Liked Posts by User',
      description: 'Mendapatkan posts yang di-like oleh user.',
      response: {
        status: 200,
        message: 'Success',
        data: [
          {
            id: 'uuid',
            postId: 'uuid',
            userId: 'uuid',
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
      path: '/like/count/:postId',
      title: 'Get Post Like Count',
      description: 'Mendapatkan jumlah like untuk post tertentu.',
      response: {
        status: 200,
        message: 'Success',
        data: {
          postId: 'uuid',
          likeCount: 25
        }
      }
    },
    {
      method: 'GET',
      path: '/like/check/:userId/:postId',
      title: 'Check User Like',
      description: 'Mengecek apakah user sudah like post tertentu.',
      response: {
        status: 200,
        message: 'Success',
        data: {
          hasLiked: true,
          likeId: 'uuid'
        }
      }
    }
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary-900 mb-4">Likes</h1>
        <p className="text-lg text-secondary-600">
          Endpoints untuk mengelola sistem like pada posts dalam AppSos.
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

export default LikesDocs;
