import React from 'react';
import AuthenticationDocs from './docs/AuthenticationDocs';
import UsersDocs from './docs/UsersDocs';
import PostsDocs from './docs/PostsDocs';
import CommentsDocs from './docs/CommentsDocs';
import LikesDocs from './docs/LikesDocs';
import SavesDocs from './docs/SavesDocs';
import FollowsDocs from './docs/FollowsDocs';
import NotificationsDocs from './docs/NotificationsDocs';
import HealthDocs from './docs/HealthDocs';

interface DocumentationContentProps {
  activeSection: string;
}

const DocumentationContent: React.FC<DocumentationContentProps> = ({ activeSection }) => {
  const renderContent = () => {
    switch (activeSection) {
      case 'authentication':
        return <AuthenticationDocs />;
      case 'users':
        return <UsersDocs />;
      case 'posts':
        return <PostsDocs />;
      case 'comments':
        return <CommentsDocs />;
      case 'likes':
        return <LikesDocs />;
      case 'saves':
        return <SavesDocs />;
      case 'follows':
        return <FollowsDocs />;
      case 'notifications':
        return <NotificationsDocs />;
      case 'health':
        return <HealthDocs />;
      default:
        return <AuthenticationDocs />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-secondary-200">
      {renderContent()}
    </div>
  );
};

export default DocumentationContent;
