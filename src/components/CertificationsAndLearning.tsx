import React from 'react';

const CertificationsAndLearning: React.FC = () => {
  return (
    <div className="w-full p-8 overflow-y-auto scrollbar-hide bg-gray-50">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Certifications & Continuous Learning</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Deep Learning</h2>
          <h3 className="text-xl font-medium mb-2 text-gray-700">Natural Language Processing (NLP) & LLM Development</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
            <li>Pretraining LLMs and Finetuning LLMs – July, 2024</li>
            <li>Natural Language Processing Specialization, DeepLearning.AI - July 22, 2024</li>
            <li>Natural Language Processing with Attention Models, DeepLearning.AI - July 22, 2024</li>
          </ul>
          <h3 className="text-xl font-medium mb-2 text-gray-700">General Deep Learning</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Deep Learning Specialization, DeepLearning.AI - April 18, 2020</li>
            <li>TensorFlow Developer Specialization, DeepLearning.AI - July 25, 2020</li>
            <li>TensorFlow: Data and Deployment, DeepLearning.AI - July 16, 2020</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Finance and Financial Data Science</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Securities Industry Essentials, FINRA - December 15, 2023</li>
            <li>Bloomberg Finance Fundamentals Certificate, Bloomberg - February 2024</li>
            <li>Bloomberg Market Concepts Certificate, Bloomberg - April 2024</li>
            <li>Introduction to Financial Engineering and Risk Management, Columbia University - January 22, 2024</li>
            <li>Investment Management with Python and Machine Learning, EDHEC Business School - August 11, 2020</li>
            <li>Machine Learning for Trading, Google Cloud & New York Institute of Finance - August 9, 2020</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Database and Data Management</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>PostgreSQL, University of Michigan - October 30, 2021</li>
            <li>Database Architecture, Scale, and NoSQL with Elasticsearch, University of Michigan - October 30, 2021</li>
            <li>Big Data Modeling and Management Systems, University of California San Diego - September 14, 2020</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Blockchain</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Blockchain Basics, University at Buffalo - November 6, 2021</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CertificationsAndLearning;