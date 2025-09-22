import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import DocumentationContent from '../components/DocumentationContent';

const DocumentationPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('authentication');

  return (
    <div className="min-h-screen bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-80 flex-shrink-0">
            <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
          </div>
          <div className="flex-1 min-w-0">
            <DocumentationContent activeSection={activeSection} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;
