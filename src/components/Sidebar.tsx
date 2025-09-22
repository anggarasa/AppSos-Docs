import React from 'react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const sections = [
    {
      id: 'authentication',
      title: 'Authentication',
      items: [
        { id: 'register', title: 'Register User' },
        { id: 'login', title: 'Login User' },
        { id: 'refresh', title: 'Refresh Token' },
        { id: 'logout', title: 'Logout' }
      ]
    },
    {
      id: 'users',
      title: 'Users',
      items: [
        { id: 'get-users', title: 'Get All Users' },
        { id: 'search-users', title: 'Search Users' },
        { id: 'get-user', title: 'Get User by Username' },
        { id: 'get-profile', title: 'Get User Profile' },
        { id: 'update-user', title: 'Update User' },
        { id: 'delete-user', title: 'Delete User' }
      ]
    },
    {
      id: 'posts',
      title: 'Posts',
      items: [
        { id: 'get-posts', title: 'Get All Posts' },
        { id: 'get-post', title: 'Get Post by ID' },
        { id: 'get-user-posts', title: 'Get Posts by User' },
        { id: 'get-saved-posts', title: 'Get Saved Posts' },
        { id: 'create-post', title: 'Create Post' },
        { id: 'update-post', title: 'Update Post' },
        { id: 'delete-post', title: 'Delete Post' }
      ]
    },
    {
      id: 'comments',
      title: 'Comments',
      items: [
        { id: 'get-comments', title: 'Get Comments by Post' },
        { id: 'get-user-comments', title: 'Get Comments by User' },
        { id: 'get-comment', title: 'Get Comment by ID' },
        { id: 'create-comment', title: 'Create Comment' },
        { id: 'update-comment', title: 'Update Comment' },
        { id: 'delete-comment', title: 'Delete Comment' }
      ]
    },
    {
      id: 'likes',
      title: 'Likes',
      items: [
        { id: 'create-like', title: 'Create Like' },
        { id: 'unlike', title: 'Unlike Post' },
        { id: 'get-liked-posts', title: 'Get Liked Posts' },
        { id: 'get-like-count', title: 'Get Like Count' },
        { id: 'check-like', title: 'Check User Like' }
      ]
    },
    {
      id: 'saves',
      title: 'Saves',
      items: [
        { id: 'save-post', title: 'Save Post' },
        { id: 'unsave-post', title: 'Unsave Post' },
        { id: 'get-saved-posts', title: 'Get Saved Posts' },
        { id: 'check-save', title: 'Check User Save' },
        { id: 'get-save-count', title: 'Get Save Count' }
      ]
    },
    {
      id: 'follows',
      title: 'Follows',
      items: [
        { id: 'follow-user', title: 'Follow User' },
        { id: 'unfollow-user', title: 'Unfollow User' },
        { id: 'get-followers', title: 'Get Followers' },
        { id: 'get-following', title: 'Get Following' },
        { id: 'get-follow-stats', title: 'Get Follow Stats' },
        { id: 'check-follow', title: 'Check Follow Status' }
      ]
    },
    {
      id: 'notifications',
      title: 'Notifications',
      items: [
        { id: 'get-notifications', title: 'Get Notifications' },
        { id: 'get-unread-count', title: 'Get Unread Count' },
        { id: 'mark-read', title: 'Mark as Read' },
        { id: 'mark-all-read', title: 'Mark All as Read' },
        { id: 'delete-notification', title: 'Delete Notification' }
      ]
    },
    {
      id: 'health',
      title: 'Health Check',
      items: [
        { id: 'health-check', title: 'Health Check' },
        { id: 'api-status', title: 'API Status' }
      ]
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6 sticky top-8">
      <h2 className="text-lg font-semibold text-secondary-900 mb-6">API Reference</h2>
      
      <nav className="space-y-2">
        {sections.map((section) => (
          <div key={section.id}>
            <button
              onClick={() => onSectionChange(section.id)}
              className={`w-full text-left px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                activeSection === section.id
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-secondary-600 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              {section.title}
            </button>
            
            {activeSection === section.id && (
              <div className="ml-4 mt-2 space-y-1">
                {section.items.map((item) => (
                  <button
                    key={item.id}
                    className="block w-full text-left px-3 py-1 text-sm text-secondary-500 hover:text-primary-600 hover:bg-primary-50 rounded transition-colors duration-200"
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
