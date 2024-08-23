// src/components/projects/CAESProjectBDisplay.tsx
import React from 'react';
import { Lightbulb, Database, ArrowRight, ChevronRight, BarChart2 } from 'lucide-react';

const CAESProjectBDisplay: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">On-Time Delivery (OTD) Dashboard Development</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 flex items-center">
          <Lightbulb className="mr-2 text-yellow-500" /> Motivation
        </h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="mb-2">
            On-time delivery is key to customer satisfaction and meeting supplier agreements. Supply-chain performance significantly impacts customer retention, especially in industries like semiconductors where timely delivery is crucial.
          </p>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic mb-2">
            "When it comes to customer retention, supply-chain performance matters. That much became clear when we asked managers at six major semiconductor customers and distributors to rate the factors that influenced their purchase decisions on a scale of one to ten, with ten being the most influential. Product specifications, which include quality and features, ranked first at 9.7, but OTD tied price for second."
          </blockquote>
          <a href="https://www.mckinsey.com/industries/semiconductors/our-insights/right-product-right-time-right-location-quantifying-the-semiconductor-supply-chain" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Source: McKinsey & Company
          </a>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 flex items-center">
          <Database className="mr-2 text-purple-500" /> Project Overview
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Situation</h3>
            <p>
              The business ERP system had not been updated in 20 years and was not designed to handle over 200 different products. After speaking with stakeholders and SMEs, we found that the forecasting portion of the ERP system was turned off because it couldn’t provide accurate results and interfered with operations. An example problem was with product testing, where the system incorrectly planned for partial completion, causing forecasting and demand planning issues.
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Task</h3>
            <p>
              The task was to develop a dashboard that shows supervisors, managers, and planners the exact location of their products in the manufacturing process in near real-time. The dashboard needed to include next steps, predictions on when a product will be complete, and warnings if a product was at risk of being late or was predicted to be late.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 flex items-center">
          <ChevronRight className="mr-2 text-green-500" /> Action
        </h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="mb-2">
            I worked with SMEs to understand the data and followed the entire product journey through the manufacturing process. After processing and cleaning the data, I removed outliers and iterated over hundreds of machine learning algorithms using hyperparameter tuning and AutoML. We developed three different prediction models:
          </p>
          <ul className="list-disc pl-5">
            <li>A model predicting the total time to complete an entire product.</li>
            <li>A model predicting the time a product would take to complete in a specific area.</li>
            <li>A model predicting the optimal time an employee should spend at a workstation on a specific product.</li>
          </ul>
          <p className="mt-2">
            All valuable information was then provided in a comprehensive dashboard.
          </p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 flex items-center">
          <BarChart2 className="mr-2 text-blue-500" /> Results
        </h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="mb-2">
            The dashboard provided supervisors, managers, and planners with real-time visibility into the manufacturing process. They could track where each product was in the process, see expected completion dates, and receive warnings if any product was at risk of missing its deadline. This increased transparency allowed for better decision-making and proactive management of potential delays.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-100 p-4 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Real-Time Visibility</h3>
              <p className="text-3xl font-bold text-green-600">Available</p>
              <p className="mt-2">Instant access to product status and progress</p>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Predictive Insights</h3>
              <p className="text-3xl font-bold text-blue-600">Integrated</p>
              <p className="mt-2">Predictions on completion times and delays</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Decision Support</h3>
              <p className="text-3xl font-bold text-yellow-600">Enhanced</p>
              <p className="mt-2">Improved planning and proactive management</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2 flex items-center">
          <ArrowRight className="mr-2 text-red-500" /> Business Impact
        </h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p>
            This project provided crucial real-time insights into the manufacturing process, significantly improving the organization’s ability to manage production timelines. By offering predictive analytics and transparent tracking, the company was able to enhance its decision-making processes, ultimately leading to more reliable on-time deliveries and greater customer satisfaction.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CAESProjectBDisplay;



// const CAESProjectBDisplay: React.FC = () => {
//   return (
//     <div className="project-display">
//       <h2 className="text-2xl font-semibold mb-4">CAES Project B</h2>
//       <p>This project increased forecast accuracy by 87% through multi-stage boosting algorithms and quantile outlier analysis, optimizing operations and product lead times.</p>
//       {/* Add more detailed content for this project */}
//     </div>
//   );
// };

// export default CAESProjectBDisplay;
