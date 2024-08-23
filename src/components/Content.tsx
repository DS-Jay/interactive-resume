// src/components/Content.tsx
import React, { useState } from 'react';

interface ContentProps {
  section: string;
  onProjectSelect: (project: string) => void;
  isDisplayOpen: boolean;
}

const Content: React.FC<ContentProps> = ({ section, onProjectSelect, isDisplayOpen }) => {
  // State to manage the visibility of each section's bullet points
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  // Toggle function to show/hide sections
  const toggleSection = (sectionName: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName],
    }));
  };

  const BulletPointsButton: React.FC<{ sectionName: string }> = ({ sectionName }) => (
    <a
      href="#_"
      onClick={(e) => {
        e.preventDefault();
        toggleSection(sectionName);
      }}
      className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#254879] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
    >
      <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#254879] group-hover:h-full"></span>
      <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-y-12">
        <svg className="w-5 h-5 text-green-400 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </span>
      <span className="absolute left-0 pl-2.5 -translate-y-12 group-hover:translate-y-0 ease-out duration-200">
        <svg className="w-5 h-5 text-green-400 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </span>
      <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
        Bullet Points
      </span>
    </a>
  );

  const experienceContent = (
    <div className="space-y-8">
      {/* Position 1 - Barron LLC */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
          Data Science/AI Product Developer, Barron LLC
        </h2>
        <p className="mb-2 text-gray-600">Duration: Mar. 2023 - Present</p>
        <p className="mb-2 text-gray-600">Location: Denver, CO</p>
        <p className="mb-4 text-gray-700">
          Responsibilities: Lead the development of AI-powered solutions for e-commerce optimization and business
          intelligence, focusing on customer behavior analysis and revenue growth.
        </p>
        <button
          className="text-blue-600 underline mb-4"
          onClick={() => toggleSection('barron')}
        > 
        {expandedSections['barron'] ? 'Hide Details' : 'Show Details'}
        </button>
        {/* <BulletPointsButton sectionName="barron" /> */}
        {expandedSections['barron'] && (
          <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
            <li>Optimized product rankings by 480%+, boosting 250+ product listings and reducing SEO expenditure by $1000-5000 through AI-driven strategies.</li>
            <li>Developed Python tools integrating LLMs to automate content optimization, improving SEO performance and user engagement.</li>
            <li>Conceptualized large-scale optimization solutions incorporating IoT and ML for warehouse operations, demonstrating strategic thinking in identifying data-driven opportunities.</li>
          </ul>
        )}

        <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-700">Projects</h3>
        <ul className="space-y-2">
          <li
            className="cursor-pointer p-2 hover:bg-gray-100 rounded text-blue-600"
            // className="text-left w-full hover:bg-gray-100 p-2"
            onClick={() => onProjectSelect('Barron LLC Project A')}
          >
            Business Productivity Improvement and Cost Savings Using LLMs
          </li>
          <li
            className="cursor-pointer p-2 hover:bg-gray-100 rounded text-blue-600"
            onClick={() => onProjectSelect('Barron LLC Project B')}
          >
            SBIR Grant Proposal for Smart Warehouse System for DoD DLA
          </li>
        </ul>
      </div>

      {/* Position 2 - Smart Warehousing */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
          Data Scientist & Product Manager AI, Smart Warehousing
        </h2>
        <p className="mb-2 text-gray-600">Duration: Feb. 2022 - Mar. 2023</p>
        <p className="mb-2 text-gray-600">Location: Kansas City, MO</p>
        <p className="mb-4 text-gray-700">
          Responsibilities: Managed a team of Lead Data Scientists and cross-functional teams in developing AI-driven solutions for supply chain optimization. Led efforts in product discovery and development, machine learning engineering, and stakeholder collaboration to create impactful AI products.
        </p>
        <button
          className="text-blue-600 underline mb-4"
          onClick={() => toggleSection('smartWarehousing')}
        >
          {expandedSections['smartWarehousing'] ? 'Hide Details' : 'Show Details'}
        </button>
        {expandedSections['smartWarehousing'] && (
          <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
            <li>
              Developed a warehouse product storage optimizer by conducting extensive on-site research, including walking the warehouse floors with managers, supervisors, and pickers to understand the entire user journey from order receipt to product shipment. Collaborated closely with the Vice President of Operations to ensure alignment with operational goals.
            </li>
            <li>
              Validated hierarchical clustering algorithms against historical order and shipment data by comparing customer data from a client who previously stored and ordered their own products. This rigorous validation process ensured the optimizer's effectiveness across different product types and storage methodologies.
            </li>
            <li>
              Directed the development of a 39-warehouse network optimization solution, improving on-time delivery and reducing shipping costs through advanced analytics and machine learning clustering algorithms.
            </li>
            <li>
              Headed daily stand-ups, backlog refinement, story building, and retrospectives with the scrum master, DevOps team, and other stakeholders to develop AI features and manage sprints for the MVP.
            </li>
            <li>
              Partnered with C-suite executives, directors, and managers to create a long-term product roadmap, develop epics and stories in Jira, and design architecture diagrams in Lucidchart. Collaborated with designers in Figma to develop wireframes and prototypes.
            </li>
            <li>
              Led research and development for AI-based features including replenishment forecasting, cost optimization, open order ranking, and warehouse product placement recommendations.
            </li>
            <li>
              Spearheaded the development of an NLP-based cost tracking system that harmonized 200+ unique customer databases, automating precise cost allocation and improving billing accuracy.
            </li>
          </ul>
        )}
        <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-700">Projects</h3>
        <ul className="space-y-2">
          <li
            className="cursor-pointer p-2 hover:bg-gray-100 rounded text-blue-600"
            onClick={() => onProjectSelect('Smart Warehousing Project A')}
          >
            Network Optimization Solution for Final Mile Savings
          </li>
          <li
            className="cursor-pointer p-2 hover:bg-gray-100 rounded text-blue-600"
            onClick={() => onProjectSelect('Smart Warehousing Project B')}
          >
            Warehouse Layout Optimizer
          </li>
        </ul>
      </div>


      {/* Position 3 - CAES */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
          Data Scientist III – Machine Learning Product Developer, CAES
        </h2>
        <p className="mb-2 text-gray-600">Duration: Dec. 2018 – Feb. 2022</p>
        <p className="mb-2 text-gray-600">Location: Colorado Springs, CO</p>
        <p className="mb-4 text-gray-700">
          Responsibilities: Spearheaded the development of enterprise-wide data strategies, focusing on improving product development cycles and operational efficiency. Handled multiple roles, including Data Scientist, Data Engineer, Product Manager/Owner, and Backend/Frontend Developer, to build a comprehensive data science infrastructure.
        </p>
        <button
          className="text-blue-600 underline mb-4"
          onClick={() => toggleSection('caes')}
        >
          {expandedSections['caes'] ? 'Hide Details' : 'Show Details'}
        </button>
        {expandedSections['caes'] && (
          <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
            <li>
              Accelerated decision-making for 100+ engineers by reducing data access latency from 2 weeks to near real-time through a self-service portal, streamlining data processes and improving efficiency.
            </li>
            <li>
              Architected a Data Mart serving over 100 engineers, developed ETL pipelines, and designed a user interface for instant data access, slashing data request times from weeks to seconds.
            </li>
            <li>
              Engineered ETL/ELT processes to migrate data from production Oracle databases to data science/product Postgres databases, enabling the development of advanced analytics and machine learning models.
            </li>
            <li>
              Built a tri-level manufacturing completion system utilizing various machine learning algorithms to predict overall manufacturing completion, area completion, and workbench completion time.
            </li>
            <li>
              Increased forecast accuracy by 87% through multi-stage boosting algorithms and quantile outlier analysis, optimizing operations and product lead times.
            </li>
            <li>
              Supported the sale of over $10M in excess inventory to distributors by building ensemble time series forecasting models to predict inventory burn-down rates over a 2-year period for 200+ products.
            </li>
            <li>
              Spearheaded partnerships with C-Suite executives, directors, and managers to identify revenue-driving and cost-reducing solutions, leading one-on-one advisories and lunch-and-learn sessions focused on data science and machine learning.
            </li>
          </ul>
        )}
      <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-700">Projects</h3>
        <ul className="space-y-2">
          <li
            className="cursor-pointer p-2 hover:bg-gray-100 rounded text-blue-600"
            onClick={() => onProjectSelect('CAES Data Mart Project')}
          >
            Data Mart for Data Democratization 
          </li>
          <li
            className="cursor-pointer p-2 hover:bg-gray-100 rounded text-blue-600"
            onClick={() => onProjectSelect('CAES ML ERP Project')}
          >
            Machine Learning / ERP Integration
          </li>
        </ul>
      </div>


      {/* Position 4 - Sickweather */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
          Data Scientist, Sickweather
        </h2>
        <p className="mb-2 text-gray-600">Duration: Mar. 2018 – Nov. 2018</p>
        <p className="mb-2 text-gray-600">Location: Kansas City, MO</p>
        <p className="mb-4 text-gray-700">
          Responsibilities: Data Scientist for a startup that detects illnesses from social media. Led efforts in time series forecasting, exploratory analysis, feature engineering, and model selection and optimization.
        </p>
        <button
          className="text-blue-600 underline mb-4"
          onClick={() => toggleSection('sickweather')}
        >
          {expandedSections['sickweather'] ? 'Hide Details' : 'Show Details'}
        </button>
        {expandedSections['sickweather'] && (
          <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
            <li>
              Utilized time series forecasting models to predict illnesses from social media posts at a regional level, deploying these models in AWS and visualizing forecasts with R Shiny Dashboards.
            </li>
            <li>
              Conducted exploratory analysis, feature engineering, model selection, and optimization for CDC Regions, States, and Direct Marketing Areas (DMAs).
            </li>
            <li>
              Conceived and won a Phase I Air Force SBIR Grant to build a sickness reporting app as the Principal Investigator.
            </li>
            <li>
              Automated forecasting R scripts in cron jobs and presented data through R Shiny Dashboards.
            </li>
          </ul>
        )}
      </div>


      {/* Position 4 - Chartwell LLC (Real Estate Investor Advisor) */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Real Estate Investor Advisor, Chartwell LLC</h2>
        <p className="mb-2 text-gray-600">Duration: Mar. 2014 – Mar. 2016</p>
        <p className="mb-2 text-gray-600">Location: Kansas City, MO</p>
        <p className="mb-4 text-gray-700">
          Responsibilities: Developed and executed comprehensive, multi-channel marketing strategies to drive business growth.
        </p>
        <button
          className="text-blue-600 underline mb-4"
          onClick={() => toggleSection('realtor')}
        >
          {expandedSections['realtor'] ? 'Hide Details' : 'Show Details'}
        </button>
        {expandedSections['realtor'] && (
          <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
            <li>Built a client base of over 500 individuals in 3 months by integrating CRM systems, digital platforms, and community engagement initiatives.</li>
            <li>Analyzed marketing data to optimize client acquisition strategies and establish strategic partnerships.</li>
          </ul>
        )}
      </div>

      {/* Position 5 - Honeywell Aerospace */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
          Quality Team Manager, Honeywell Aerospace Federal Manufacturing & Technologies
        </h2>
        <p className="mb-2 text-gray-600">Duration: May 2012 – Jun. 2014</p>
        <p className="mb-2 text-gray-600">Location: Kansas City, MO</p>
        <p className="mb-4 text-gray-700">
          Responsibilities: Directly supervised 18 associates and managed 2 quality departments. Collaborated with C-suite, managers, supervisors, and labor union leaders to ensure continuous operations of both departments while removing any blockers.
        </p>
        <button
          className="text-blue-600 underline mb-4"
          onClick={() => toggleSection('honeywell')}
        >
          {expandedSections['honeywell'] ? 'Hide Details' : 'Show Details'}
        </button>
        {expandedSections['honeywell'] && (
          <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
            <li>
              Implemented Lean Six Sigma and 5S procedures to improve quality of inspection, operations, and planning.
            </li>
            <li>
              Led daily standups to prioritize work, discuss the weekly and monthly roadmap of work, discuss blockers, and most importantly, recognize employee contributions.
            </li>
          </ul>
        )}
      </div>


      {/* Position 6 - U.S. Army */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
          U.S. Army Field Artillery Officer
        </h2>
        <p className="mb-2 text-gray-600">Duration: Jul. 2005 - 2012</p>
        <p className="mb-2 text-gray-600">
          Location: South Korea, Ft. Sill, Zabul Afghanistan, Fort Carson
        </p>
        <p className="mb-4 text-gray-700">
          Responsibilities: Leveraged expertise in artillery and air operations to mentor junior officers and serve as a senior advisor, enhancing analytical skills, fire support coordination, and operational effectiveness across U.S. Army, Marine, and allied forces.
        </p>
        <button
          className="text-blue-600 underline mb-4"
          onClick={() => toggleSection('army')}
        >
          {expandedSections['army'] ? 'Hide Details' : 'Show Details'}
        </button>
        {expandedSections['army'] && (
          <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
            <li>
              Orchestrated complex military operations, from managing an artillery company's training and support missions to coordinating multinational exercises, demonstrating adaptability across diverse operational environments.
            </li>
            <li>
              Spearheaded critical advising and mentoring roles, including:
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Leading cross-cultural teams to coordinate U.S.-South Korean Army operations.</li>
                <li>Embedding with the Afghan Army to modernize organizational structures.</li>
                <li>Advising light infantry Battalion Commanders on comprehensive fire support strategies.</li>
              </ul>
            </li>
          </ul>
        )}
      </div>

    </div>
  );

  return (
    <div 
      className={`
        content p-8 overflow-y-auto transition-all duration-300 ease-in-out 
        ${isDisplayOpen ? 'w-7/12' : 'w-full'}
        scrollbar-hide bg-gray-50
      `}
    >
      <div className="max-w-4xl mx-auto">
        {section === 'experience' ? experienceContent : <p>Select a section from the sidebar</p>}
      </div>
    </div>
  );
};

export default Content;





















// // src/components/Content.tsx
// import React from 'react';

// interface ContentProps {
//   section: string;
//   onProjectSelect: (project: string) => void;
//   isDisplayOpen: boolean;
// }

// const Content: React.FC<ContentProps> = ({ section, onProjectSelect, isDisplayOpen }) => {
//   const experienceContent = (
//     <div className="space-y-8">
//       {/* Position 1 - Barron LLC */}
//       <div className="mb-8">
//         <h2 className="text-2xl font-semibold mb-2">Data Science/AI Product Developer, Barron LLC</h2>
//         <p className="mb-2">Role: Data Science Consultant / Machine Learning Engineer</p>
//         <p className="mb-2">Duration: Mar. 2022 - Present</p>
//         <p className="mb-2">Location: Denver, CO</p>
//         <p className="mb-2">
//           Responsibilities: Lead the development of AI-powered solutions for e-commerce optimization and business
//           intelligence, focusing on customer behavior analysis and revenue growth.
//         </p>
//         <h3 className="text-xl font-semibold mt-4 mb-2">Projects</h3>
//         <ul className="space-y-2">
//           <li
//             className="cursor-pointer p-2 hover:bg-gray-200 rounded"
//             onClick={() => onProjectSelect('Project A')}
//           >
//             Project A
//           </li>
//           <li
//             className="cursor-pointer p-2 hover:bg-gray-200 rounded"
//             onClick={() => onProjectSelect('Project B')}
//           >
//             Project B
//           </li>
//         </ul>
//       </div>

//             {/* Position 2 - Smart Warehousing */}
//             <div className="mb-8">
//         <h2 className="text-2xl font-semibold mb-2">Data Scientist & Product Manager AI, Smart Warehousing</h2>
//         <p className="mb-2">Duration: Feb. 2022 - Mar. 2023</p>
//         <p className="mb-2">Location: Denver, CO</p>
//         <p className="mb-2">
//           Responsibilities: Led cross-functional teams in developing AI-driven solutions for supply chain optimization,
//           focusing on customer journey analysis and product improvement.
//         </p>
//         <h3 className="text-xl font-semibold mt-4 mb-2">Projects</h3>
//         <ul className="space-y-2">
//           <li
//             className="cursor-pointer p-2 hover:bg-gray-200 rounded"
//             onClick={() => onProjectSelect('Smart Warehousing Project A')}
//           >
//             Smart Warehousing Project A
//           </li>
//           <li
//             className="cursor-pointer p-2 hover:bg-gray-200 rounded"
//             onClick={() => onProjectSelect('Smart Warehousing Project B')}
//           >
//             Smart Warehousing Project B
//           </li>
//         </ul>
//       </div>

//       {/* Position 3 - CAES */}
//       <div className="mb-8">
//         <h2 className="text-2xl font-semibold mb-2">Data Scientist III, Cobham Advanced Electronic Solutions</h2>
//         <p className="mb-2">Duration: Dec. 2018 - Feb. 2022</p>
//         <p className="mb-2">Location: Colorado Springs, CO</p>
//         <p className="mb-2">
//           Responsibilities: Spearheaded the development of enterprise-wide data strategies, focusing on improving
//           product development cycles and operational efficiency.
//         </p>
//         <h3 className="text-xl font-semibold mt-4 mb-2">Projects</h3>
//         <ul className="space-y-2">
//           <li
//             className="cursor-pointer p-2 hover:bg-gray-200 rounded"
//             onClick={() => onProjectSelect('CAES Project A')}
//           >
//             CAES Project A
//           </li>
//           <li
//             className="cursor-pointer p-2 hover:bg-gray-200 rounded"
//             onClick={() => onProjectSelect('CAES Project B')}
//           >
//             CAES Project B
//           </li>
//         </ul>
//       </div>
//        {/* Position 5 - Chartwell LLC (Real Estate Investor Advisor) */}
//        <div className="mb-8">
//         <h2 className="text-2xl font-semibold mb-2">Real Estate Investor Advisor, Chartwell LLC</h2>
//         <p className="mb-2">Duration: Mar. 2014 – Mar. 2016</p>
//         <p className="mb-2">Location: Kansas City, MO</p>
//         <p className="mb-2">
//           Responsibilities: Developed and executed comprehensive, multi-channel marketing strategies to drive business growth.
//         </p>
//         <ul className="list-disc pl-5 mb-2">
//           <li>Built a client base of over 500 individuals in 3 months by integrating CRM systems, digital platforms, and community engagement initiatives.</li>
//           <li>Analyzed marketing data to optimize client acquisition strategies and establish strategic partnerships.</li>
//         </ul>
//       </div>

//       {/* Position 6 - Honeywell Aerospace */}
//       <div className="mb-8">
//         <h2 className="text-2xl font-semibold mb-2">Quality Team Manager, Honeywell Aerospace</h2>
//         <p className="mb-2">Duration: May 2012 – Jun. 2014</p>
//         <p className="mb-2">Location: Kansas City, MO</p>
//         <p className="mb-2">
//           Responsibilities: Directed multiple quality departments in a high-tech manufacturing environment, focusing on process improvement
//           and operational efficiency.
//         </p>
//         <ul className="list-disc pl-5 mb-2">
//           <li>Developed a Lean Six Sigma program resulting in annual cost savings of $210,000 and reduced flow time by 5 days.</li>
//           <li>Led a major industrial relocation project, coordinating with government agencies and contractors to start operations ahead of schedule.</li>
//         </ul>
//       </div>

//       {/* Position 7 - U.S. Army */}
//       <div className="mb-8">
//         <h2 className="text-2xl font-semibold mb-2">U.S. Army Field Artillery Officer</h2>
//         <p className="mb-2">Duration: Jul. 2005 - 2012</p>
//         <p className="mb-2">Location: Various Locations</p>
//         <p className="mb-2">
//           Responsibilities: Led complex joint operations and strategic planning, demonstrating leadership and analytical skills in high-pressure
//           environments.
//         </p>
//         <ul className="list-disc pl-5 mb-2">
//           <li>Managed post-deployment integration for 500+ personnel, meeting all logistical and personnel deadlines.</li>
//           <li>Advised foreign national leadership during critical operations, showcasing ability to translate complex information into actionable strategies.</li>
//         </ul>
//       </div>
//     </div>
//   );

//   const getContent = () => {
//     switch (section) {
//       case 'experience':
//         return experienceContent;
//       default:
//         return <p>Select a section from the sidebar</p>;
//     }
//   };

//   return (
//     <div className={`content p-4 overflow-y-auto transition-all duration-300 ease-in-out ${isDisplayOpen ? 'w-6/12' : 'w-full'} scrollbar-hide`}>
//       <div className="max-w-3xl mx-auto">
//         {section === 'experience' ? experienceContent : <p>Select a section from the sidebar</p>}
//       </div>
//     </div>
//   );
// };

// export default Content;



// // src/components/Content.tsx
// import React from 'react';

// interface ContentProps {
//   section: string;
//   onProjectSelect: (project: string) => void;
// }

// const Content: React.FC<ContentProps> = ({ section, onProjectSelect }) => {
//   const experienceContent = (
//     // <div>
//     <div className="flex flex-col space-y-8">
//       {/* Position 1 - Barron LLC */}
//       <div className="mb-8">
//         <h2 className="text-2xl font-semibold mb-2">Data Science/AI Product Developer, Barron LLC</h2>
//         <p className="mb-2">Role: Data Science Consultant / Machine Learning Engineer</p>
//         <p className="mb-2">Duration: Mar. 2022 - Present</p>
//         <p className="mb-2">Location: Denver, CO</p>
//         <p className="mb-2">
//           Responsibilities: Lead the development of AI-powered solutions for e-commerce optimization and business
//           intelligence, focusing on customer behavior analysis and revenue growth.
//         </p>
//         <h3 className="text-xl font-semibold mt-4 mb-2">Projects</h3>
//         <ul className="space-y-2">
//           <li
//             className="cursor-pointer p-2 hover:bg-gray-200 rounded"
//             onClick={() => onProjectSelect('Project A')}
//           >
//             Project A
//           </li>
//           <li
//             className="cursor-pointer p-2 hover:bg-gray-200 rounded"
//             onClick={() => onProjectSelect('Project B')}
//           >
//             Project B
//           </li>
//         </ul>
//       </div>

      // {/* Position 2 - Smart Warehousing */}
      // <div className="mb-8">
      //   <h2 className="text-2xl font-semibold mb-2">Data Scientist & Product Manager AI, Smart Warehousing</h2>
      //   <p className="mb-2">Duration: Feb. 2022 - Mar. 2023</p>
      //   <p className="mb-2">Location: Denver, CO</p>
      //   <p className="mb-2">
      //     Responsibilities: Led cross-functional teams in developing AI-driven solutions for supply chain optimization,
      //     focusing on customer journey analysis and product improvement.
      //   </p>
      //   <h3 className="text-xl font-semibold mt-4 mb-2">Projects</h3>
      //   <ul className="space-y-2">
      //     <li
      //       className="cursor-pointer p-2 hover:bg-gray-200 rounded"
      //       onClick={() => onProjectSelect('Smart Warehousing Project A')}
      //     >
      //       Smart Warehousing Project A
      //     </li>
      //     <li
      //       className="cursor-pointer p-2 hover:bg-gray-200 rounded"
      //       onClick={() => onProjectSelect('Smart Warehousing Project B')}
      //     >
      //       Smart Warehousing Project B
      //     </li>
      //   </ul>
      // </div>

      // {/* Position 3 - CAES */}
      // <div className="mb-8">
      //   <h2 className="text-2xl font-semibold mb-2">Data Scientist III, Cobham Advanced Electronic Solutions</h2>
      //   <p className="mb-2">Duration: Dec. 2018 - Feb. 2022</p>
      //   <p className="mb-2">Location: Colorado Springs, CO</p>
      //   <p className="mb-2">
      //     Responsibilities: Spearheaded the development of enterprise-wide data strategies, focusing on improving
      //     product development cycles and operational efficiency.
      //   </p>
      //   <h3 className="text-xl font-semibold mt-4 mb-2">Projects</h3>
      //   <ul className="space-y-2">
      //     <li
      //       className="cursor-pointer p-2 hover:bg-gray-200 rounded"
      //       onClick={() => onProjectSelect('CAES Project A')}
      //     >
      //       CAES Project A
      //     </li>
      //     <li
      //       className="cursor-pointer p-2 hover:bg-gray-200 rounded"
      //       onClick={() => onProjectSelect('CAES Project B')}
      //     >
      //       CAES Project B
      //     </li>
      //   </ul>
      // </div>
//     </div>
//   );

//   return (
//     // <div className="content flex-grow p-4 w-2/3 overflow-y-auto">
//     // <div className="content flex-grow p-4 w-full md:w-2/3 overflow-y-auto">
//     <div className="content flex-grow p-4 w-full overflow-y-auto">
//       {section === 'experience' ? experienceContent : <p>Select a section from the sidebar</p>}
//     </div>
//   );
// };

// export default Content;

// // src/components/Content.tsx
// import React from 'react';

// interface ContentProps {
//   section: string;
//   onProjectSelect: (project: string) => void;
// }

// const Content: React.FC<ContentProps> = ({ section, onProjectSelect }) => {
//   const experienceContent = (
//     <div>
//       {/* Position 1 - Barron LLC */}
//       <div className="mb-8">
//         <h2 className="text-2xl font-semibold mb-2">Data Science/AI Product Developer, Barron LLC</h2>
//         <p className="mb-2">Role: Data Science Consultant / Machine Learning Engineer</p>
//         <p className="mb-2">Duration: Mar. 2022 - Present</p>
//         <p className="mb-2">Location: Denver, CO</p>
//         <p className="mb-2">
//           Responsibilities: Lead the development of AI-powered solutions for e-commerce optimization and business
//           intelligence, focusing on customer behavior analysis and revenue growth.
//         </p>
//         <h3 className="text-xl font-semibold mt-4 mb-2">Projects</h3>
//         <ul className="space-y-2">
//           <li
//             className="cursor-pointer p-2 hover:bg-gray-200 rounded"
//             onClick={() => onProjectSelect('Project A')}
//           >
//             Project A
//           </li>
//           <li
//             className="cursor-pointer p-2 hover:bg-gray-200 rounded"
//             onClick={() => onProjectSelect('Project B')}
//           >
//             Project B
//           </li>
//         </ul>
//       </div>

//       {/* Position 2 - Smart Warehousing */}
//       <div className="mb-8">
//         <h2 className="text-2xl font-semibold mb-2">Data Scientist & Product Manager AI, Smart Warehousing</h2>
//         <p className="mb-2">Duration: Feb. 2022 - Mar. 2023</p>
//         <p className="mb-2">Location: Denver, CO</p>
//         <p className="mb-2">
//           Responsibilities: Led cross-functional teams in developing AI-driven solutions for supply chain optimization,
//           focusing on customer journey analysis and product improvement.
//         </p>
//         <h3 className="text-xl font-semibold mt-4 mb-2">Projects</h3>
//         <ul className="space-y-2">
//           <li
//             className="cursor-pointer p-2 hover:bg-gray-200 rounded"
//             onClick={() => onProjectSelect('Smart Warehousing Project A')}
//           >
//             Smart Warehousing Project A
//           </li>
//           <li
//             className="cursor-pointer p-2 hover:bg-gray-200 rounded"
//             onClick={() => onProjectSelect('Smart Warehousing Project B')}
//           >
//             Smart Warehousing Project B
//           </li>
//         </ul>
//       </div>

//       {/* Position 3 - CAES */}
//       <div className="mb-8">
//         <h2 className="text-2xl font-semibold mb-2">Data Scientist III, Cobham Advanced Electronic Solutions</h2>
//         <p className="mb-2">Duration: Dec. 2018 - Feb. 2022</p>
//         <p className="mb-2">Location: Colorado Springs, CO</p>
//         <p className="mb-2">
//           Responsibilities: Spearheaded the development of enterprise-wide data strategies, focusing on improving
//           product development cycles and operational efficiency.
//         </p>
//         <h3 className="text-xl font-semibold mt-4 mb-2">Projects</h3>
//         <ul className="space-y-2">
//           <li
//             className="cursor-pointer p-2 hover:bg-gray-200 rounded"
//             onClick={() => onProjectSelect('CAES Project A')}
//           >
//             CAES Project A
//           </li>
//           <li
//             className="cursor-pointer p-2 hover:bg-gray-200 rounded"
//             onClick={() => onProjectSelect('CAES Project B')}
//           >
//             CAES Project B
//           </li>
//         </ul>
//       </div>

//       {/* Add other positions here similarly if needed */}
//     </div>
//   );

//   return (
//     <div className="content flex-grow p-4 w-2/3">
//       {section === 'experience' ? experienceContent : <p>Select a section from the sidebar</p>}
//     </div>
//   );
// };

// export default Content;



// // src/components/Content.tsx
// import React from 'react';

// interface ContentProps {
//   section: string;
//   onProjectSelect: (project: string) => void;
// }

// const Content: React.FC<ContentProps> = ({ section, onProjectSelect }) => {
//   const experienceContent = (
//     <div>
//       <h2 className="text-2xl font-semibold mb-2">Job 1 - Company A</h2>
//       <p className="mb-2">Role: Data Science Consultant / Machine Learning Engineer</p>
//       <p className="mb-2">Duration: Mar. 2022 - Present</p>
//       <p className="mb-2">Location: Denver, CO</p>
//       <p className="mb-2">Responsibilities: ...</p>
//       <h3 className="text-xl font-semibold mt-4 mb-2">Projects</h3>
//       <ul className="space-y-2">
//         <li
//           className="cursor-pointer p-2 hover:bg-gray-200 rounded"
//           onClick={() => onProjectSelect('Project A')}
//         >
//           Project A
//         </li>
//         <li
//           className="cursor-pointer p-2 hover:bg-gray-200 rounded"
//           onClick={() => onProjectSelect('Project B')}
//         >
//           Project B
//         </li>
//       </ul>
//     </div>
//   );

//   return (
//     <div className="content flex-grow p-4 w-2/4">
//       {section === 'experience' ? experienceContent : <p>Select a section from the sidebar</p>}
//     </div>
//   );
// };

// export default Content;


// // src/components/Content.tsx
// import React, { useState } from 'react';

// interface ContentProps {
//   section: string;
//   onProjectSelect: (project: string) => void;
// }

// const Content: React.FC<ContentProps> = ({ section, onProjectSelect }) => {
//   const experienceContent = (
//     <div>
//       <h2>Job 1 - Company A</h2>
//       <p>Role: Data Science Consultant / Machine Learning Engineer</p>
//       <p>Duration: Mar. 2022 - Present</p>
//       <p>Location: Denver, CO</p>
//       <p>Responsibilities: ...</p>
//       <h3>Projects</h3>
//       <ul>
//         <li onClick={() => onProjectSelect('Project A')}>Project A</li>
//         <li onClick={() => onProjectSelect('Project B')}>Project B</li>
//       </ul>
//     </div>
//   );

//   return (
//     <div className="content">
//       {section === 'experience' ? experienceContent : <p>Select a section from the sidebar</p>}
//     </div>
//   );
// };

// export default Content;
