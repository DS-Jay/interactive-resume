// src/components/projects/SmartWarehousingProjectBDisplay.tsx
import React from 'react';
import { Lightbulb, DollarSign, Clock, Target, ChevronRight } from 'lucide-react';

const SmartWarehousingProjectBDisplay: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">Warehouse Optimization System for Enhanced Efficiency</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 flex items-center">
          <Lightbulb className="mr-2 text-yellow-500" /> Motivation
        </h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="mb-2">
            Traditional benchmark-based approaches can overlook specific warehouse needs. A bottom-up analysis allows for a more tailored approach, determining what costs should be for any given warehouse and helping companies prioritize improvements and investments.
          </p>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic mb-2">
            "Rather than the traditional benchmark-based approach, a bottom-up analysis can determine what costs should be for any given warehouse, helping companies prioritize improvements and investments."
          </blockquote>
          <a href="https://www.mckinsey.com/capabilities/operations/our-insights/getting-a-handle-on-warehousing-costs" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
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
              While working on a cost capturing project, I identified inefficiencies in material and labor cost applications during receiving and shipping. To gain deeper insights, I spent time on the warehouse floor, particularly focusing on the journey of pickers as they received orders and navigated through the warehouse. The analysis revealed several inefficiencies, including:
            </p>
            <ul className="list-disc pl-5 mt-2">
              <li>Pickers zigzagging inefficiently through the warehouse</li>
              <li>Varied warehouse layouts and rack configurations</li>
              <li>High-frequency products often shipped with less frequent items, ordering by frequency alone as insufficient</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Task</h3>
            <p>
              Our goal was to develop a warehouse optimization system that enables managers and supervisors to print out a document to reorganize products based on frequency and order combinations. The system needed to accommodate different warehouse layouts and sizes, and include a recommendation engine that would suggest optimal product placements based on historical data, seasonality, and product combinations.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 flex items-center">
          <ChevronRight className="mr-2 text-green-500" /> Action
        </h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="mb-2">We developed an application that grouped products by client or warehouse, organized by frequency over a set duration (defaulted to 3 months based on seasonality). The project involved:</p>
          <ul className="list-disc pl-5">
            <li>Data Integration: Grouped products based on their frequency of shipping within a specified timeframe.</li>
            <li>Machine Learning: Applied hierarchical clustering using a distance matrix to create 3-12 groups of products, allowing flexibility for different warehouse capacities.</li>
            <li>Output: The system generated an Excel spreadsheet with multiple tabs, providing managers with a detailed, customizable layout for product placement.</li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 flex items-center">
          <Clock className="mr-2 text-purple-500" /> Results
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-100 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold mb-2">Accuracy</h3>
            <p className="text-3xl font-bold text-green-600">100%</p>
            <p className="mt-2">Match with client's historical layout recommendations</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold mb-2">Efficiency</h3>
            <p className="text-3xl font-bold text-blue-600">Significant</p>
            <p className="mt-2">Reduction in picker travel time</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold mb-2">Adoption</h3>
            <p className="text-3xl font-bold text-yellow-600">High</p>
            <p className="mt-2">Warehouse manager and supervisor confidence</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2 flex items-center">
          <DollarSign className="mr-2 text-green-500" /> Business Impact
        </h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p>
            The successful testing of the recommendation system on a new client with historical data validated the system’s accuracy and effectiveness. This proof of concept provided warehouse managers and supervisors with the confidence to implement the system, leading to more efficient warehouse operations and reduced labor costs.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SmartWarehousingProjectBDisplay;
