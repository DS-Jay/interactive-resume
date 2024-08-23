import React from 'react';
import { Lightbulb, DollarSign, Clock, Target, ChevronRight } from 'lucide-react';

const ProjectADisplay: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">Business Productivity Improvement and Cost Savings Using LLMs</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 flex items-center">
          <Lightbulb className="mr-2 text-yellow-500" /> Motivation
        </h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="mb-2">
            In today's competitive landscape, small businesses face significant challenges, particularly in managing costs while striving for growth. Leveraging Large Language Models (LLMs) like ChatGPT 4 can be a game-changer.
          </p>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic mb-2">
            "Recent analysis from McKinsey client engagements indicates that around 80 percent of activities across the operations environment could benefit from some level of automation through gen AI, or AI more broadly."
          </blockquote>
          <a href="https://www.mckinsey.com/capabilities/operations/our-insights/operations-blog/gen-ais-productivity-promise-huge-potential-but-most-have-not-yet-reached-scaled-impact" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Source: McKinsey & Company
          </a>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 flex items-center">
          <Target className="mr-2 text-red-500" /> Project Overview
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Situation</h3>
            <p>
              Small businesses typically spend substantial amounts on SEO services:
            </p>
            <ul className="list-disc pl-5 mt-2">
              <li>$500 to $5,000 per month for small businesses</li>
              <li>$2,500 to $10,000 per month for larger businesses</li>
            </ul>
            <div className="mt-2">
              <a href="https://quicklyhire.com/how-much-does-seo-cost-for-a-small-business/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                Source: QuicklyHire
              </a>
              <br />
              <a href="https://www.outerboxdesign.com/search-marketing/search-engine-optimization/seo-pricing-costs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                Source: OuterBox
              </a>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Task</h3>
            <p>
              Demonstrate how businesses can leverage LLMs like ChatGPT 4, Gemini, and Claude 3.5 to generate SEO content at a fraction of the time and cost traditionally required.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 flex items-center">
          <ChevronRight className="mr-2 text-green-500" /> Action
        </h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="mb-2">We created a drop-shipping e-commerce site using Shopify with over 200 products. The project involved:</p>
          <ul className="list-disc pl-5">
            <li>Data Integration: Connected Shopify's API to PostgreSQL database using Python scripts.</li>
            <li>SEO Optimization: Utilized ChatGPT 3.5 and Google Gemini APIs with custom prompt engineering.</li>
            <li>Automation: Bulk uploaded the optimized content back into the Shopify store.</li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 flex items-center">
          <Clock className="mr-2 text-purple-500" /> Results
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-100 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold mb-2">Time Savings</h3>
            <p className="text-3xl font-bold text-green-600">Months → 1 Hour</p>
            <p className="mt-2">SEO content creation time</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold mb-2">Cost Efficiency</h3>
            <p className="text-3xl font-bold text-blue-600">40¢</p>
            <p className="mt-2">Total optimization cost</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold mb-2">Scalability</h3>
            <p className="text-3xl font-bold text-yellow-600">200+</p>
            <p className="mt-2">Products optimized</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2 flex items-center">
          <DollarSign className="mr-2 text-green-500" /> Business Impact
        </h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p>
            This project demonstrates the transformative potential of LLMs in business operations, particularly for small and medium-sized enterprises. By dramatically reducing the time and cost associated with SEO content creation, LLMs enable businesses to:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>Allocate resources more effectively</li>
            <li>Accelerate growth and innovation</li>
            <li>Compete with larger companies in digital marketing</li>
            <li>Adapt quickly to market changes</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ProjectADisplay;


// import React from 'react';

// const ProjectADisplay: React.FC = () => {
//   return (
//     <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold mb-4">Business Productivity Improvement and Cost Savings Using LLMs</h1>
      
//       <section className="mb-6">
//         <h2 className="text-2xl font-semibold mb-2">Motivation</h2>
//         <p className="mb-2">
//           In today's competitive landscape, small businesses face significant challenges, particularly in managing costs while striving for growth. Leveraging Large Language Models (LLMs) like ChatGPT 4 can be a game-changer.
//         </p>
//         <p className="mb-2">
//           According to McKinsey, around 80% of operational activities could benefit from automation through AI, leading to substantial productivity improvements and cost savings.
//         </p>
//         <p>
//           Traditionally, businesses would spend between $500 to $10,000 per month on professional SEO services. However, with the rise of LLMs, these costs can be dramatically reduced while achieving faster and more effective results.
//         </p>
//       </section>

//       <section className="mb-6">
//         <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
        
//         <div className="mb-4">
//           <h3 className="text-xl font-semibold mb-1">Situation</h3>
//           <p>
//             Small businesses typically spend substantial amounts on SEO services to ensure their products and services reach the right audience. The costs range significantly, with professional services being a financial burden, especially for startups and small enterprises.
//           </p>
//         </div>

//         <div className="mb-4">
//           <h3 className="text-xl font-semibold mb-1">Task</h3>
//           <p>
//             The objective was to demonstrate how businesses can leverage LLMs like ChatGPT 4, Gemini, and Claude 3.5 to generate SEO content at a fraction of the time and cost traditionally required.
//           </p>
//         </div>

//         <div className="mb-4">
//           <h3 className="text-xl font-semibold mb-1">Action</h3>
//           <p>We created a drop-shipping e-commerce site using Shopify with over 200 products. The project involved:</p>
//           <ul className="list-disc pl-5 mt-2">
//             <li>Data Integration: Connected Shopify's API to PostgreSQL database using Python scripts.</li>
//             <li>SEO Optimization: Utilized ChatGPT 3.5 and Google Gemini APIs with custom prompt engineering.</li>
//             <li>Automation: Bulk uploaded the optimized content back into the Shopify store.</li>
//           </ul>
//         </div>

//         <div>
//           <h3 className="text-xl font-semibold mb-1">Results</h3>
//           <ul className="list-disc pl-5">
//             <li>Time Savings: Reduced SEO content creation time from months to under an hour.</li>
//             <li>Cost Efficiency: Achieved the entire optimization process at a cost of just 40 cents.</li>
//             <li>Scalability: Highlighted the scalability of LLMs for businesses of all sizes.</li>
//           </ul>
//         </div>
//       </section>

//       <section className="mb-6">
//         <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
//         <ul className="list-disc pl-5">
//           <li>Data Integration: Seamless connection between Shopify API and PostgreSQL database.</li>
//           <li>Automated Content Creation: Using LLMs for efficient SEO optimization.</li>
//           <li>Bulk Upload: Efficiently handling large volumes of product data.</li>
//         </ul>
//       </section>

//       <section className="mb-6">
//         <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
//         <ul className="list-disc pl-5">
//           <li>Python: For scripting and automation.</li>
//           <li>SQL/PostgreSQL: For data storage and manipulation.</li>
//           <li>LLMs: ChatGPT 3.5, Google Gemini for content generation.</li>
//         </ul>
//       </section>

//       <section className="mb-6">
//         <h2 className="text-2xl font-semibold mb-2">Outcome</h2>
//         <ul className="list-disc pl-5">
//           <li>Dramatic Cost Reduction: Reduced SEO content creation costs to less than $1 for 200+ products.</li>
//           <li>Unprecedented Time Efficiency: Compressed months of work into a 20-minute automated process.</li>
//           <li>Democratization of SEO: Leveled the playing field for small businesses in digital marketing.</li>
//         </ul>
//       </section>

//       <section>
//         <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
//         <p>
//           This project demonstrates the transformative potential of LLMs in business operations, particularly for small and medium-sized enterprises. By dramatically reducing the time and cost associated with SEO content creation, LLMs enable businesses to allocate resources more effectively, potentially accelerating growth and innovation.
//         </p>
//       </section>
//     </div>
//   );
// };

// export default ProjectADisplay;

// import React from 'react';

// const ProjectADisplay: React.FC = () => {
//   return (
//     <div className="p-6 bg-white rounded-lg shadow-lg space-y-6">
//       <h1 className="text-3xl font-bold text-gray-900">Business Productivity Improvement and Cost Savings Using LLMs</h1>

//       <section>
//         <h2 className="text-xl font-semibold text-gray-800">Motivation</h2>
//         <p className="mt-2 text-gray-700">
//           In today’s competitive landscape, small businesses face significant challenges, particularly in managing costs while striving for growth. Leveraging Large Language Models (LLMs) like ChatGPT 4 can be a game-changer. According to McKinsey, around 80% of operational activities could benefit from automation through AI, leading to substantial productivity improvements and cost savings.
//         </p>
//       </section>

//       <section>
//         <h2 className="text-xl font-semibold text-gray-800">Situation</h2>
//         <p className="mt-2 text-gray-700">
//           Small businesses typically spend substantial amounts on SEO services to ensure their products and services reach the right audience. The costs range significantly, with professional services being a financial burden, especially for startups and small enterprises.
//         </p>
//       </section>

//       <section>
//         <h2 className="text-xl font-semibold text-gray-800">Task</h2>
//         <p className="mt-2 text-gray-700">
//           The objective of this project was to demonstrate how businesses, regardless of size, can leverage LLMs like ChatGPT 4, Gemini, and Claude 3.5 to generate SEO content at a fraction of the time and cost traditionally required.
//         </p>
//       </section>

//       <section>
//         <h2 className="text-xl font-semibold text-gray-800">Action</h2>
//         <p className="mt-2 text-gray-700">
//           To illustrate the potential of LLMs, we created a drop-shipping e-commerce site using Shopify. This site featured over 200 products from various vendors. We connected Shopify’s API to our PostgreSQL database using Python scripts for ETL (Extract, Transform, Load) and data model creation. Using LLMs for content optimization, we automated the creation of titles, descriptions, and SEO metadata, which was then bulk-uploaded to the store.
//         </p>
//       </section>

//       <section>
//         <h2 className="text-xl font-semibold text-gray-800">Results</h2>
//         <p className="mt-2 text-gray-700">
//           The project successfully demonstrated significant time savings and cost efficiency. The entire optimization process took less than 20 minutes and cost approximately 40 cents, compared to traditional SEO services that could cost thousands of dollars.
//         </p>
//       </section>

//       <section>
//         <h2 className="text-xl font-semibold text-gray-800">Project Overview</h2>
//         <p className="mt-2 text-gray-700">
          
//         </p>
//       </section>

//       <section>
//         <h2 className="text-xl font-semibold text-gray-800">Features</h2>
//         <ul className="list-disc list-inside mt-2 text-gray-700">
//           <li> </li>
//           <li> </li>
//           <li> </li>
//         </ul>
//       </section>

//       <section>
//         <h2 className="text-xl font-semibold text-gray-800">Technologies Used</h2>
//         <ul className="list-disc list-inside mt-2 text-gray-700">
//           <li>Python</li>
//           <li>PostgreSQL</li>
//           <li>API</li>
//           <li>ChatGPT 3.5</li>
//           <li>Google Gemini</li>
//         </ul>
//       </section>

//       <section>
//         <h2 className="text-xl font-semibold text-gray-800">Outcomes</h2>
//         <ul className="list-disc list-inside mt-2 text-gray-700">
//           <li>Cost Efficiency</li>
//           <li>Significant Time Savings and Productivity Gains</li>
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default ProjectADisplay;






// import React from 'react';

// const ProjectADisplay: React.FC = () => {
//   return (
//     <div className="jupyter-notebook">
//       <h2 className="text-2xl font-semibold mb-4">Project A - Mock Jupyter Notebook</h2>
//       <div className="mb-4">
//         <h3 className="font-semibold">Notebook Cell [1]</h3>
//         <div className="bg-gray-100 p-4 rounded shadow-md">
//           <code className="block text-gray-800">
//             {`# Import necessary libraries
// import pandas as pd
// import numpy as np`}
//           </code>
//         </div>
//       </div>
//       <div className="mb-4">
//         <h3 className="font-semibold">Notebook Cell [2]</h3>
//         <div className="bg-gray-100 p-4 rounded shadow-md">
//           <code className="block text-gray-800">
//             {`# Load data
// data = pd.read_csv('data.csv')
// print(data.head())`}
//           </code>
//         </div>
//       </div>
//       <div className="mb-4">
//         <h3 className="font-semibold">Output</h3>
//         <div className="bg-gray-100 p-4 rounded shadow-md">
//           <code className="block text-gray-800">
//             {`   A  B  C
// 0  1  2  3
// 1  4  5  6
// 2  7  8  9`}
//           </code>
//         </div>
//       </div>
//       {/* Add more cells as needed */}
//     </div>
//   );
// };

// export default ProjectADisplay;
