import React from 'react';

const Education: React.FC = () => {
  return (
    <div className="w-full p-8 overflow-y-auto scrollbar-hide bg-gray-50">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Education</h1>
        
        {/* Northwestern University */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Northwestern University</h2>
          <p className="text-lg mb-2 text-gray-700">
            <span className="font-medium">Degree:</span> Master of Science in Predictive Analytics
          </p>
          <p className="text-lg mb-4 text-gray-700">
            <span className="font-medium">GPA:</span> 3.88
          </p>
          {/* <h3 className="text-xl font-semibold mb-2 text-gray-700">Relevant Courses</h3> */}
          {/* <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>
              <span className="font-medium">Machine Learning and Predictive Analytics:</span> Explored advanced machine learning techniques for predictive modeling.
            </li>
            <li>
              <span className="font-medium">Data Mining:</span> Focused on extracting insights from complex datasets.
            </li>
            <li>
              <span className="font-medium">Statistical Analysis:</span> Developed skills in statistical inference and data-driven decision-making.
            </li>
          </ul> */}
        </div>
        
        {/* University of Oklahoma */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">University of Oklahoma</h2>
          <p className="text-lg mb-4 text-gray-700">
            <span className="font-medium">Degree:</span> Bachelor of Arts in Economics
          </p>
          {/* <h3 className="text-xl font-semibold mb-2 text-gray-700">Key Achievements</h3> */}
          {/* <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li></li>
            <li></li>
            <li></li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Education;