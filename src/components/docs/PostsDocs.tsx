import React from 'react';
import EndpointCard from '../EndpointCard';

const PostsDocs: React.FC = () => {
  const endpoints = [
    {
      method: 'GET',
      path: '/posts',
      title: 'Get All Posts',
      description: 'Mendapatkan daftar semua posts dengan pagination.',
      queryParams: [
        'page (optional): halaman',
        'limit (optional): jumlah data per halaman'
      ],
      response: {
        status: 200,
        message: 'Success',
        data: [
          {
            id: 'uuid',
            content: 'Post content',
            imageUrl: 'https://...',
            userId: 'uuid',
            user: {
              id: 'uuid',
              name: 'John Doe',
              username: 'johndoe',
              avatarUrl: 'https://...'
            },
            createdAt: '2024-01-01T00:00:00.000Z',
            updatedAt: '2024-01-01T00:00:00.000Z'
          }
        ],
        pagination: {}
      }
    },
    {
      method: 'GET',
      path: '/posts/:id',
      title: 'Get Post by ID',
      description: 'Mendapatkan post berdasarkan ID.',
      response: {
        status: 200,
        message: 'Success',
        data: {
          id: 'uuid',
          content: 'Post content',
          imageUrl: 'https://...',
          userId: 'uuid',
          user: {},
          createdAt: '2024-01-01T00:00:00.000Z',
          updatedAt: '2024-01-01T00:00:00.000Z'
        }
      }
    },
    {
      method: 'GET',
      path: '/posts/user/:userId',
      title: 'Get Posts by User',
      description: 'Mendapatkan posts dari user tertentu dengan pagination.',
      queryParams: [
        'page (optional): halaman',
        'limit (optional): jumlah data per halaman'
      ],
      response: {
        status: 200,
        message: 'User posts retrieved successfully',
        data: [],
        pagination: {}
      }
    },
    {
      method: 'GET',
      path: '/posts/saved/:userId',
      title: 'Get Saved Posts by User',
      description: 'Mendapatkan posts yang disimpan user dengan pagination.',
      requiresAuth: true,
      queryParams: [
        'page (optional): halaman',
        'limit (optional): jumlah data per halaman'
      ],
      response: {
        status: 200,
        message: 'Saved posts retrieved successfully',
        data: [],
        pagination: {}
      }
    },
    {
      method: 'POST',
      path: '/posts',
      title: 'Create Post',
      description: 'Membuat post baru. Mendukung upload gambar.',
      requiresAuth: true,
      requestBody: {
        userId: 'uuid',
        content: 'Post content',
        image: 'file_upload'
      },
      response: {
        status: 201,
        message: 'Post created successfully',
        data: {
          id: 'uuid',
          content: 'Post content',
          imageUrl: 'https://...',
          userId: 'uuid',
          createdAt: '2024-01-01T00:00:00.000Z'
        }
      }
    },
    {
      method: 'PUT',
      path: '/posts/:id',
      title: 'Update Post',
      description: 'Update post. Hanya owner yang bisa update.',
      requiresAuth: true,
      requestBody: {
        userId: 'uuid',
        content: 'Updated content',
        image: 'file_upload'
      },
      response: {
        status: 200,
        message: 'Post updated successfully',
        data: {
          id: 'uuid',
          content: 'Updated content',
          imageUrl: 'https://...',
          updatedAt: '2024-01-01T00:00:00.000Z'
        }
      }
    },
    {
      method: 'DELETE',
      path: '/posts/:id',
      title: 'Delete Post',
      description: 'Menghapus post.',
      requiresAuth: true,
      response: {
        status: 200,
        message: 'Post deleted successfully'
      }
    }
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary-900 mb-4">Posts</h1>
        <p className="text-lg text-secondary-600">
          Endpoints untuk mengelola posts dalam sistem AppSos. Mendukung upload gambar dan pagination.
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

export default PostsDocs;
