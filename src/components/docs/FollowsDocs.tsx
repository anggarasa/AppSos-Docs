import React from 'react';
import EndpointCard from '../EndpointCard';

const FollowsDocs: React.FC = () => {
  const endpoints = [
    {
      method: 'POST',
      path: '/follow',
      title: 'Follow User',
      description: 'Follow user lain.',
      requiresAuth: true,
      requestBody: {
        followerId: 'uuid',
        followingId: 'uuid'
      },
      response: {
        status: 201,
        message: 'User followed successfully',
        data: {
          id: 'uuid',
          followerId: 'uuid',
          followingId: 'uuid',
          createdAt: '2024-01-01T00:00:00.000Z'
        }
      }
    },
    {
      method: 'DELETE',
      path: '/follow/unfollow',
      title: 'Unfollow User',
      description: 'Unfollow user.',
      requiresAuth: true,
      requestBody: {
        followerId: 'uuid',
        followingId: 'uuid'
      },
      response: {
        status: 200,
        message: 'User unfollowed successfully'
      }
    },
    {
      method: 'GET',
      path: '/follow/followers/:userId',
      title: 'Get Followers List',
      description: 'Mendapatkan daftar followers user.',
      response: {
        status: 200,
        message: 'Success',
        data: [
          {
            id: 'uuid',
            followerId: 'uuid',
            followingId: 'uuid',
            follower: {
              id: 'uuid',
              name: 'John Doe',
              username: 'johndoe',
              avatarUrl: 'https://...'
            },
            createdAt: '2024-01-01T00:00:00.000Z'
          }
        ]
      }
    },
    {
      method: 'GET',
      path: '/follow/following/:userId',
      title: 'Get Following List',
      description: 'Mendapatkan daftar following user.',
      response: {
        status: 200,
        message: 'Success',
        data: [
          {
            id: 'uuid',
            followerId: 'uuid',
            followingId: 'uuid',
            following: {
              id: 'uuid',
              name: 'Jane Doe',
              username: 'janedoe',
              avatarUrl: 'https://...'
            },
            createdAt: '2024-01-01T00:00:00.000Z'
          }
        ]
      }
    },
    {
      method: 'GET',
      path: '/follow/stats/:userId',
      title: 'Get Follow Statistics',
      description: 'Mendapatkan statistik follow user.',
      response: {
        status: 200,
        message: 'Success',
        data: {
          userId: 'uuid',
          followersCount: 50,
          followingCount: 30
        }
      }
    },
    {
      method: 'GET',
      path: '/follow/check/:followerId/:followingId',
      title: 'Check Follow Status',
      description: 'Mengecek apakah user sudah follow user lain.',
      response: {
        status: 200,
        message: 'Success',
        data: {
          isFollowing: true,
          followId: 'uuid'
        }
      }
    }
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary-900 mb-4">Follows</h1>
        <p className="text-lg text-secondary-600">
          Endpoints untuk mengelola sistem follow antar user dalam AppSos.
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

export default FollowsDocs;
