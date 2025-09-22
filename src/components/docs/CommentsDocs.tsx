import React from 'react';
import EndpointCard from '../EndpointCard';

const CommentsDocs: React.FC = () => {
  const endpoints = [
    {
      method: 'GET',
      path: '/comment/post/:postId',
      title: 'Get Comments by Post',
      description: 'Mendapatkan komentar untuk post tertentu.',
      response: {
        status: 200,
        message: 'Success',
        data: [
          {
            id: 'uuid',
            content: 'Comment content',
            userId: 'uuid',
            postId: 'uuid',
            user: {
              id: 'uuid',
              name: 'John Doe',
              username: 'johndoe',
              avatarUrl: 'https://...'
            },
            createdAt: '2024-01-01T00:00:00.000Z',
            updatedAt: '2024-01-01T00:00:00.000Z'
          }
        ]
      }
    },
    {
      method: 'GET',
      path: '/comment/user/:userId',
      title: 'Get Comments by User',
      description: 'Mendapatkan komentar dari user tertentu.',
      response: {
        status: 200,
        message: 'Success',
        data: []
      }
    },
    {
      method: 'GET',
      path: '/comment/:id',
      title: 'Get Comment by ID',
      description: 'Mendapatkan komentar berdasarkan ID.',
      response: {
        status: 200,
        message: 'Success',
        data: {
          id: 'uuid',
          content: 'Comment content',
          userId: 'uuid',
          postId: 'uuid',
          user: {},
          createdAt: '2024-01-01T00:00:00.000Z',
          updatedAt: '2024-01-01T00:00:00.000Z'
        }
      }
    },
    {
      method: 'POST',
      path: '/comment',
      title: 'Create Comment',
      description: 'Membuat komentar baru.',
      requiresAuth: true,
      requestBody: {
        userId: 'uuid',
        postId: 'uuid',
        content: 'Comment content'
      },
      validationRules: [
        'content: 1-2000 karakter',
        'userId dan postId: format UUID'
      ],
      response: {
        status: 201,
        message: 'Comment created successfully',
        data: {
          id: 'uuid',
          content: 'Comment content',
          userId: 'uuid',
          postId: 'uuid',
          createdAt: '2024-01-01T00:00:00.000Z'
        }
      }
    },
    {
      method: 'PUT',
      path: '/comment/:id',
      title: 'Update Comment',
      description: 'Update komentar.',
      requiresAuth: true,
      requestBody: {
        userId: 'uuid',
        content: 'Updated comment content'
      },
      response: {
        status: 200,
        message: 'Comment updated successfully',
        data: {
          id: 'uuid',
          content: 'Updated comment content',
          updatedAt: '2024-01-01T00:00:00.000Z'
        }
      }
    },
    {
      method: 'DELETE',
      path: '/comment/:id',
      title: 'Delete Comment',
      description: 'Menghapus komentar.',
      requiresAuth: true,
      response: {
        status: 200,
        message: 'Comment deleted successfully'
      }
    }
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary-900 mb-4">Comments</h1>
        <p className="text-lg text-secondary-600">
          Endpoints untuk mengelola komentar pada posts dalam sistem AppSos.
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

export default CommentsDocs;
