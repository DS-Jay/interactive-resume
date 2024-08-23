// src/components/projects/SmartWarehousingProjectADisplay.tsx
import React from 'react';
import { Lightbulb, DollarSign, Clock, Target, ChevronRight } from 'lucide-react';

const SmartWarehousingProjectADisplay: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">Network Optimization Solution for Final Mile Savings</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 flex items-center">
          <Lightbulb className="mr-2 text-yellow-500" /> Motivation
        </h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="mb-2">
            Final mile delivery has long been a challenge for 3PL systems, as ensuring that products are stored closest to their final destination is crucial for cost efficiency. According to a report by McKinsey & Company, there is potential for a 6-8% savings in final mile costs if 3PLs move approximately 70% of clients' products one or more zones closer to their final destinations by creating additional injection sites.
          </p>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic mb-2">
            "There could be a 6-8% final mile savings if 3PLs would move ~70% of clients 1+ zones closer to final destinations by creating additional injection sites."
          </blockquote>
          <a href="https://www.mckinsey.com/industries/travel-logistics-and-infrastructure/our-insights/the-promise-and-challenge-of-multi-client-fulfillment-for-e-commerce" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
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
              Through meetings with SMEs and evaluating shipping location and cost data, it became apparent that there were significant inefficiencies in the 3PL company's product shipping strategy. Products were often shipped from distant warehouses, such as from California to the East Coast, despite the availability of closer warehouse locations within the company’s network.
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Task</h3>
            <p>
              Our goal was to analyze the client's product storage locations and the distances they travel to their final mile destinations, identifying which products and companies would benefit the most from relocating their products closer to their demand locations, while still adhering to service level agreements.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 flex items-center">
          <ChevronRight className="mr-2 text-green-500" /> Action
        </h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="mb-2">We analyzed over 26,000 products, including their locations, order histories, and shipping costs over a 2-year period. The project involved:</p>
          <ul className="list-disc pl-5">
            <li>Data Integration: Connected to FedEx APIs to calculate shipping costs based on ship-from and ship-to zip codes.</li>
            <li>Machine Learning: Applied clustering algorithms to group products that frequently ship to the same locations.</li>
            <li>Ranking System: Ranked clients and their products based on potential savings by identifying optimal warehouse locations to reduce shipping costs and delivery times.</li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 flex items-center">
          <Clock className="mr-2 text-purple-500" /> Results
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-100 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold mb-2">Distance Reduction</h3>
            <p className="text-3xl font-bold text-green-600">80%</p>
            <p className="mt-2">Reduction in distance for key clients</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold mb-2">Cost Savings</h3>
            <p className="text-3xl font-bold text-blue-600">60%</p>
            <p className="mt-2">Reduction in shipping costs for key clients</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold mb-2">Overall Savings</h3>
            <p className="text-3xl font-bold text-yellow-600">40%</p>
            <p className="mt-2">Average cost savings for most clients</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2 flex items-center">
          <DollarSign className="mr-2 text-green-500" /> Business Impact
        </h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p>
            This project significantly optimized the final mile delivery for several clients, allowing them to achieve substantial cost savings and more efficient delivery times. By repositioning products closer to their final destinations, the 3PL company can offer competitive shipping solutions, improve customer satisfaction, and maintain service level agreements without incurring extra costs.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SmartWarehousingProjectADisplay;


 