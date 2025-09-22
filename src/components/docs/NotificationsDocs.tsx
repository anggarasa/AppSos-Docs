import React from 'react';
import EndpointCard from '../EndpointCard';

const NotificationsDocs: React.FC = () => {
  const endpoints = [
    {
      method: 'GET',
      path: '/notifications',
      title: 'Get User Notifications',
      description: 'Mendapatkan notifikasi user.',
      requiresAuth: true,
      response: {
        status: 200,
        message: 'Success',
        data: [
          {
            id: 'uuid',
            userId: 'uuid',
            type: 'like',
            message: 'John Doe liked your post',
            isRead: false,
            relatedId: 'uuid',
            createdAt: '2024-01-01T00:00:00.000Z'
          }
        ]
      }
    },
    {
      method: 'GET',
      path: '/notifications/unread-count',
      title: 'Get Unread Count',
      description: 'Mendapatkan jumlah notifikasi yang belum dibaca.',
      requiresAuth: true,
      response: {
        status: 200,
        message: 'Success',
        data: {
          unreadCount: 5
        }
      }
    },
    {
      method: 'PUT',
      path: '/notifications/:notificationId/read',
      title: 'Mark as Read',
      description: 'Menandai notifikasi sebagai sudah dibaca.',
      requiresAuth: true,
      response: {
        status: 200,
        message: 'Notification marked as read'
      }
    },
    {
      method: 'PUT',
      path: '/notifications/mark-all-read',
      title: 'Mark All as Read',
      description: 'Menandai semua notifikasi sebagai sudah dibaca.',
      requiresAuth: true,
      response: {
        status: 200,
        message: 'All notifications marked as read'
      }
    },
    {
      method: 'DELETE',
      path: '/notifications/:notificationId',
      title: 'Delete Notification',
      description: 'Menghapus notifikasi.',
      requiresAuth: true,
      response: {
        status: 200,
        message: 'Notification deleted successfully'
      }
    }
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary-900 mb-4">Notifications</h1>
        <p className="text-lg text-secondary-600">
          Endpoints untuk mengelola notifikasi user dalam AppSos. Semua endpoint memerlukan autentikasi.
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

export default NotificationsDocs;
