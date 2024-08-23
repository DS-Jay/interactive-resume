// src/components/projects/CAESProjectADisplay.tsx
import React from 'react';
import { Lightbulb, Database, ArrowRight, ChevronRight, BarChart2 } from 'lucide-react';

const CAESProjectADisplay: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">Data Mart Development for Integrated Circuit Manufacturing</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 flex items-center">
          <Lightbulb className="mr-2 text-yellow-500" /> Motivation
        </h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="mb-2">
            Data democratization is essential for a business to make well-informed decisions and prevent data silos. The process ensures that the right people can see the right data at the right time and for the right purpose. This accessibility allows them to make informed decisions and identify opportunities or problems, without requiring in-depth knowledge.
          </p>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic mb-2">
            "The process ensures that the right people can see the right data at the right time and for the right purpose. They can use it to make informed decisions and identify opportunities or problems, without requiring in-depth knowledge."
          </blockquote>
          <a href="https://www.databricks.com/blog/data-democratization-embracing-trusted-data-transform-your-business" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Source: Databricks
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
              During meetings with various stakeholders, it was discovered that the integrated circuit manufacturing company, which employed over 100 engineers, did not have direct access to raw manufacturing data. Each engineer had to submit individual data requests, which could take up to two weeks to fulfill. This created a significant bottleneck for development.
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Task</h3>
            <p>
              The goal was to create an ETL (Extract, Transform, Load) process from the production database to the data science team's database. The project also required developing dashboards using Power BI, Shiny, and Tableau, allowing engineers to access raw and transformed data, download it, and perform further analysis.
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
            We developed a PostgreSQL database to aggregate data from various sources, including the production database. I spent time with engineers to understand the types of data they typically request and the analyses they perform. This ensured the system met their needs. The project involved:
          </p>
          <ul className="list-disc pl-5">
            <li>Data Integration: Built a pipeline to automatically extract, transform, and load data into the PostgreSQL database.</li>
            <li>User Requirement Gathering: Conducted interviews with engineers to identify their data access and analysis needs.</li>
            <li>Dashboard Development: Created interactive dashboards in Power BI, Shiny, and Tableau to provide access to the raw and transformed data.</li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 flex items-center">
          <BarChart2 className="mr-2 text-blue-500" /> Results
        </h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="mb-2">
            The entire organization could now log into a dashboard with their credentials, view various raw and transformed data tables, filter and further transform them, and download the data for additional analysis. This reduced the data request time from two weeks to immediate access, significantly accelerating the development process.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-100 p-4 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Data Access Time Reduction</h3>
              <p className="text-3xl font-bold text-green-600">100%</p>
              <p className="mt-2">Reduction in waiting time for data access</p>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Engineer Efficiency</h3>
              <p className="text-3xl font-bold text-blue-600">50%</p>
              <p className="mt-2">Increase in productivity due to instant data access</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Overall Development Speed</h3>
              <p className="text-3xl font-bold text-yellow-600">60%</p>
              <p className="mt-2">Reduction in time taken for project completions</p>
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
            This project enabled engineers to have immediate access to essential data, dramatically speeding up the development process and removing a critical bottleneck. By democratizing data access, the company saw a significant improvement in productivity and decision-making, ultimately leading to more efficient and timely project completions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CAESProjectADisplay;



// const CAESProjectADisplay: React.FC = () => {
//   return (
//     <div className="project-display">
//       <h2 className="text-2xl font-semibold mb-4">CAES Project A</h2>
//       <p>This project focused on accelerating decision-making for 100+ engineers by reducing data access latency from 2 weeks to near real-time, streamlining data processes with a self-service portal.</p>
//       {/* Add more detailed content for this project */}
//     </div>
//   );
// };

// export default CAESProjectADisplay;
