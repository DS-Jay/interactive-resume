// src/components/projects/ProjectBDisplay.tsx
import React from 'react';
import { Lightbulb, DollarSign, Clock, Target, ChevronRight } from 'lucide-react';

const ProjectBDisplay: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">Integrated 5G and Automated Inventory Management System for Enhanced Warehouse Efficiency</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 flex items-center">
          <Lightbulb className="mr-2 text-yellow-500" /> Identification and Significance of the Problem
        </h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="mb-2">
            The DLA Distribution is facing challenges with inadequate communication networks, manual inventory auditing, third-party warehouse management, and cybersecurity vulnerabilities. These issues lead to inefficiencies in operations and affect the ability to track and manage inventory effectively.
          </p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 flex items-center">
          <Target className="mr-2 text-red-500" /> Technical Objectives
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Objective 1</h3>
            <p>5G Network Migration Study: Assess existing IT infrastructure and plan migration from WiFi to 5G in warehouse communication networks.</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Objective 2</h3>
            <p>Automated Inventory Management System (AIMS): Evaluate the viability of developing an AIMS using Industry 4.0 technologies to reduce human intervention in inventory auditing.</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Objective 3</h3>
            <p>3rd-party Warehouse System: Examine methods to effectively integrate with third-party warehouses and upgrade their inventory management capabilities.</p>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 flex items-center">
          <ChevronRight className="mr-2 text-green-500" /> Phase I Statement of Work
        </h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="mb-2">The Phase I work includes:</p>
          <ul className="list-disc pl-5">
            <li>Identification of capability gaps</li>
            <li>Requirements analysis</li>
            <li>End-user requirements gathering</li>
            <li>Development of Concept of Operations (CONOPS)</li>
            <li>Definition of functional and system requirements</li>
            <li>Establishment of preliminary metrics</li>
            <li>Technology Readiness Assessments (TRAs)</li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 flex items-center">
          <Clock className="mr-2 text-purple-500" /> Related Work and Key Personnel
        </h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p>
            The project team includes experts in data science, machine learning, and cybersecurity. Key personnel include James Hill (Principal Investigator), Jason Yi and Ike Okonkwo (Data Science Subcontractors), and Dan Ross (Cybersecurity Consultant).
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2 flex items-center">
          <DollarSign className="mr-2 text-green-500" /> Commercialization Strategy
        </h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p>
            The commercialization strategy focuses on targeting large enterprises, forming strategic partnerships, and maintaining a commitment to innovation and support. The global warehouse management systems market is projected to grow at a CAGR of 19.0% from 2023 to 2030, indicating significant potential for the proposed system.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProjectBDisplay;

// import React from 'react';

// const ProjectBDisplay: React.FC = () => {
//   return (
//     <div className="project-display">
//       <h2 className="text-2xl font-semibold mb-4">Project B</h2>
//       <p>This project focused on enhancing product rankings using advanced algorithms...</p>
//       {/* Add detailed content and features for Project B */}
//     </div>
//   );
// };

// export default ProjectBDisplay;
