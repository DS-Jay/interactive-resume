// src/components/Display.tsx
import React from 'react';
import ProjectADisplay from './projects/ProjectADisplay';
import ProjectBDisplay from './projects/ProjectBDisplay';
import SmartWarehousingProjectADisplay from './projects/SmartWarehousingProjectADisplay';
import SmartWarehousingProjectBDisplay from './projects/SmartWarehousingProjectBDisplay';
import CAESProjectADisplay from './projects/CAESProjectADisplay';
import CAESProjectBDisplay from './projects/CAESProjectBDisplay';

interface DisplayProps {
  project: string;
}

const Display: React.FC<DisplayProps> = ({ project }) => {
  let projectComponent;
  switch (project) {
    case 'Barron LLC Project A':
      projectComponent = <ProjectADisplay />;
      break;
    case 'Barron LLC Project B':
      projectComponent = <ProjectBDisplay />;
      break;
    case 'Smart Warehousing Project A':
      projectComponent = <SmartWarehousingProjectADisplay />;
      break;
    case 'Smart Warehousing Project B':
      projectComponent = <SmartWarehousingProjectBDisplay />;
      break;
    case 'CAES Data Mart Project':
      projectComponent = <CAESProjectADisplay />;
      break;
    case 'CAES ML ERP Project':
      projectComponent = <CAESProjectBDisplay />;
      break;
    default:
      projectComponent = <p>Select a project to see details</p>;
  }

  return (
    // <div className="display p-4 bg-gray-50 w-6/12 h-full overflow-y-auto">
    //   {projectComponent}
    // </div>
    <div className="display p-4 bg-gray-50 w-6/12 h-full overflow-y-auto scrollbar-hide">
      {projectComponent}
    </div>
    // <div className="display p-4 bg-brand-light w-6/12 h-full overflow-y-auto scrollbar-hide">
    //   {projectComponent}
    // </div>
    // <div className="display p-4 bg-gray-100 w-6/12 h-full overflow-y-auto scrollbar-hide">
    //   {projectComponent}
    // </div>
  );
};

export default Display;

// // src/components/Display.tsx
// import React from 'react';
// import ProjectADisplay from './projects/ProjectADisplay';
// import ProjectBDisplay from './projects/ProjectBDisplay';
// import SmartWarehousingProjectADisplay from './projects/SmartWarehousingProjectADisplay';
// import SmartWarehousingProjectBDisplay from './projects/SmartWarehousingProjectBDisplay';
// import CAESProjectADisplay from './projects/CAESProjectADisplay';
// import CAESProjectBDisplay from './projects/CAESProjectBDisplay';

// interface DisplayProps {
//   project: string;
// }

// const Display: React.FC<DisplayProps> = ({ project }) => {
//   let projectComponent;
//   switch (project) {
//     case 'Project A':
//       projectComponent = <ProjectADisplay />;
//       break;
//     case 'Project B':
//       projectComponent = <ProjectBDisplay />;
//       break;
//     case 'Smart Warehousing Project A':
//       projectComponent = <SmartWarehousingProjectADisplay />;
//       break;
//     case 'Smart Warehousing Project B':
//       projectComponent = <SmartWarehousingProjectBDisplay />;
//       break;
//     case 'CAES Project A':
//       projectComponent = <CAESProjectADisplay />;
//       break;
//     case 'CAES Project B':
//       projectComponent = <CAESProjectBDisplay />;
//       break;
//     default:
//       projectComponent = <p>Select a project to see details</p>;
//   }

//   return (
//     // <div className="display p-4 bg-gray-50 transition-all duration-300 ease-in-out w-1/3 fixed right-0 h-full overflow-y-auto max-h-screen">
//     // <div className="display p-4 bg-gray-50 transition-all duration-300 ease-in-out w-1/3 fixed right-0 h-full overflow-y-auto max-h-screen">
//     <div className="display p-4 bg-gray-50 transition-all duration-300 ease-in-out w-1/3 h-full overflow-y-auto fixed right-0">
//       {projectComponent}
//     </div>
//   );
// };

// export default Display;


// // src/components/Display.tsx
// import React from 'react';
// import ProjectADisplay from './projects/ProjectADisplay';
// import ProjectBDisplay from './projects/ProjectBDisplay';
// import SmartWarehousingProjectADisplay from './projects/SmartWarehousingProjectADisplay';
// import SmartWarehousingProjectBDisplay from './projects/SmartWarehousingProjectBDisplay';
// import CAESProjectADisplay from './projects/CAESProjectADisplay';
// import CAESProjectBDisplay from './projects/CAESProjectBDisplay';

// interface DisplayProps {
//   project: string;
// }

// const Display: React.FC<DisplayProps> = ({ project }) => {
//   let projectComponent;
//   switch (project) {
//     case 'Project A':
//       projectComponent = <ProjectADisplay />;
//       break;
//     case 'Project B':
//       projectComponent = <ProjectBDisplay />;
//       break;
//     case 'Smart Warehousing Project A':
//       projectComponent = <SmartWarehousingProjectADisplay />;
//       break;
//     case 'Smart Warehousing Project B':
//       projectComponent = <SmartWarehousingProjectBDisplay />;
//       break;
//     case 'CAES Project A':
//       projectComponent = <CAESProjectADisplay />;
//       break;
//     case 'CAES Project B':
//       projectComponent = <CAESProjectBDisplay />;
//       break;
//     default:
//       projectComponent = <p>Select a project to see details</p>;
//   }

//   return (
//     <div className="display p-4 bg-gray-50 transition-all duration-300 ease-in-out w-1/3 fixed right-0 h-full overflow-y-auto">
//       {projectComponent}
//     </div>
//   );
// };

// export default Display;


// // src/components/Display.tsx
// import React from 'react';
// import ProjectADisplay from './projects/ProjectADisplay';
// import ProjectBDisplay from './projects/ProjectBDisplay';
// import SmartWarehousingProjectADisplay from './projects/SmartWarehousingProjectADisplay';
// import SmartWarehousingProjectBDisplay from './projects/SmartWarehousingProjectBDisplay';
// import CAESProjectADisplay from './projects/CAESProjectADisplay';
// import CAESProjectBDisplay from './projects/CAESProjectBDisplay';

// interface ProjectDetails {
//   details: string;
//   features: string[];
//   technologies: string[];
// }

// interface DisplayProps {
//   project: string;
// }

// const Display: React.FC<DisplayProps> = ({ project }) => {
//   let projectComponent;
//   switch (project) {
//     case 'Project A':
//       projectComponent = <ProjectADisplay />;
//       break;
//     case 'Project B':
//       projectComponent = <ProjectBDisplay />;
//       break;
//     case 'Smart Warehousing Project A':
//       projectComponent = <SmartWarehousingProjectADisplay />;
//       break;
//     case 'Smart Warehousing Project B':
//       projectComponent = <SmartWarehousingProjectBDisplay />;
//       break;
//     case 'CAES Project A':
//       projectComponent = <CAESProjectADisplay />;
//       break;
//     case 'CAES Project B':
//       projectComponent = <CAESProjectBDisplay />;
//       break;
//     default:
//       projectComponent = <p>Select a project to see details</p>;
//   }

//   return (
//     <div className="display p-4 bg-gray-50 transition-all duration-300 ease-in-out w-1/3">
//       {projectComponent}
//     </div>
//   );
// };

// export default Display;


// // src/components/Display.tsx
// import React from 'react';
// import ProjectADisplay from './projects/ProjectADisplay';
// import ProjectBDisplay from './projects/ProjectBDisplay';

// interface ProjectDetails {
//   details: string;
//   features: string[];
//   technologies: string[];
// }

// interface DisplayProps {
//   project: string;
// }

// const Display: React.FC<DisplayProps> = ({ project }) => {
//   const projectDetails: Record<string, ProjectDetails> = {
//     'Project A': {
//       details: 'Project A involved building a comprehensive data mart...',
//       features: ['Data integration from multiple sources', 'Automated data cleaning'],
//       technologies: ['Python', 'SQL', 'AWS'],
//     },
//     'Project B': {
//       details: 'Project B involved enhancing product rankings...',
//       features: ['Real-time analytics', 'Optimized listings'],
//       technologies: ['ChatGPT/Gemini', 'Shopify API'],
//     },
//   };

//   const defaultProjectContent: ProjectDetails = {
//     details: 'Select a project to see details',
//     features: [],
//     technologies: [],
//   };

//   const projectContent = projectDetails[project] || defaultProjectContent;

//   // Conditional rendering based on selected project
//   let projectComponent;
//   switch (project) {
//     case 'Project A':
//       projectComponent = <ProjectADisplay />;
//       break;
//     case 'Project B':
//       // Replace with actual Project B component when created
//       projectComponent = <ProjectBDisplay />;
//       break;
//     default:
//       projectComponent = <p>Select a project to see details</p>;
//   }

//   return (
//     <div className="display p-4 bg-gray-50 transition-all duration-300 ease-in-out w-2/4">
//       {projectComponent}
//     </div>
//   );
// };

// export default Display;



// // src/components/Display.tsx
// import React from 'react';

// interface ProjectDetails {
//   details: string;
//   features: string[];
//   technologies: string[];
// }

// interface DisplayProps {
//   project: string;
// }

// const Display: React.FC<DisplayProps> = ({ project }) => {
//   const projectDetails: Record<string, ProjectDetails> = {
//     'Project A': {
//       details: 'Project A involved building a comprehensive data mart...',
//       features: ['Data integration from multiple sources', 'Automated data cleaning'],
//       technologies: ['Python', 'SQL', 'AWS'],
//     },
//     'Project B': {
//       details: 'Project B involved enhancing product rankings...',
//       features: ['Real-time analytics', 'Optimized listings'],
//       technologies: ['ChatGPT/Gemini', 'Shopify API'],
//     },
//   };

//   const defaultProjectContent: ProjectDetails = {
//     details: 'Select a project to see details',
//     features: [],
//     technologies: [],
//   };

//   const projectContent = projectDetails[project] || defaultProjectContent;

//   return (
//     <div className="display p-4 bg-gray-50">
//       <h2 className="text-2xl font-semibold mb-2">{project}</h2>
//       <p className="mb-4">{projectContent.details}</p>
//       <h3 className="text-xl font-semibold mb-2">Features</h3>
//       <ul className="list-disc pl-5 mb-4">
//         {projectContent.features.map((feature, index) => (
//           <li key={index}>{feature}</li>
//         ))}
//       </ul>
//       <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
//       <ul className="list-disc pl-5">
//         {projectContent.technologies.map((tech, index) => (
//           <li key={index}>{tech}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Display;


// // src/components/Display.tsx
// import React from 'react';

// interface ProjectDetails {
//     details: string;
//     features: string[];
//     technologies: string[];
//   }

// interface DisplayProps {
//   project: string;
// }

// const Display: React.FC<DisplayProps> = ({ project }) => {
//   // Define a type for the keys of the projectDetails object
//   const projectDetails: Record<string, ProjectDetails> = {
//     'Project A': {
//       details: 'Project A involved building a comprehensive data mart...',
//       features: ['Data integration from multiple sources', 'Automated data cleaning'],
//       technologies: ['Python', 'SQL', 'AWS'],
//     },
//     'Project B': {
//       details: 'Project B involved enhancing product rankings...',
//       features: ['Real-time analytics', 'Optimized listings'],
//       technologies: ['ChatGPT/Gemini', 'Shopify API'],
//     },
//   };

// //   const projectContent = projectDetails[project] || {
// //     details: 'Select a project to see details',
// //     features: [],
// //     technologies: [],
// //   };

//   const defaultProjectContent: ProjectDetails = {
//     details: 'Select a project to see details',
//     features: [],
//     technologies: [],
//   };
  
//   const projectContent = projectDetails[project] || defaultProjectContent;
  

  

//   return (
//     <div className="display">
//       <h2>{project}</h2>
//       <p>{projectContent.details}</p>
//       <h3>Features</h3>
//       <ul>
//         {/* {projectContent.features.map((feature, index) => ( */}
//         {projectContent.features.map((feature: string, index: number) => (
//           <li key={index}>{feature}</li>
//         ))}
//       </ul>
//       <h3>Technologies Used</h3>
//       <ul>
//         {/* {projectContent.technologies.map((tech, index) => ( */}
//         {projectContent.technologies.map((tech: string, index: number) => (
//           <li key={index}>{tech}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Display;
