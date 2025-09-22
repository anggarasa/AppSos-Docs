import React from 'react';
import { Link } from 'react-router-dom';
import imgAppSos1 from '../assets/img_app_sos_doc-1.svg';
import imgAppSos2 from '../assets/img_app_sos_doc-2.svg';
import imgAppSos3 from '../assets/img_app_sos_doc-3.svg';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-primary-200">AppSos API</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Complete REST API for building modern social media applications. 
            Built with Node.js, Express, and Prisma for scalability and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/docs"
              className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg"
            >
              Get Started
            </Link>
            <a
              href="https://github.com/anggarasa/AppSosV2"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg"
            >
              View on GitHub
            </a>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast & Reliable</h3>
            <p className="text-primary-200">Built with performance in mind using modern technologies</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure</h3>
            <p className="text-primary-200">JWT authentication and comprehensive security measures</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Well Documented</h3>
            <p className="text-primary-200">Comprehensive documentation with examples and responses</p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-primary-100 mb-8">AppSos API in Action</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <img 
                src={imgAppSos1} 
                alt="AppSos API Documentation" 
                className="w-full h-48 object-contain mb-4"
              />
              <h4 className="text-lg font-semibold text-white mb-2">User Management</h4>
              <p className="text-primary-100">Complete user authentication and profile management</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <img 
                src={imgAppSos2} 
                alt="AppSos API Features" 
                className="w-full h-48 object-contain mb-4"
              />
              <h4 className="text-lg font-semibold text-white mb-2">Social Features</h4>
              <p className="text-primary-100">Posts, comments, likes, and follow system</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <img 
                src={imgAppSos3} 
                alt="AppSos API Integration" 
                className="w-full h-48 object-contain mb-4"
              />
              <h4 className="text-lg font-semibold text-white mb-2">Easy Integration</h4>
              <p className="text-primary-100">RESTful API with comprehensive documentation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
