import React, { useState } from 'react';
import { Linkedin, Github, ExternalLink } from 'lucide-react';

interface SidebarProps {
  onSelect: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelect }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const sidebarItems = [
    { key: 'personal', label: 'About Me' },
    { key: 'experience', label: 'Experience' },
    { key: 'education', label: 'Education' },
    { key: 'technical', label: 'Technical Skills' },
    { key: 'certifications', label: 'Certifications & Learning' },
  ];

  return (
    <div className="sidebar bg-[#254879] text-white p-4 h-full border-r border-gray-300 w-1/6">
      <h2 className="text-xl font-bold mb-4">James B Hill</h2>
      <ul className="space-y-2">
        {sidebarItems.map((item) => (
          <li
            key={item.key}
            className="relative overflow-hidden"
            onMouseEnter={() => setHoveredItem(item.key)}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => onSelect(item.key)}
          >
            <div className="cursor-pointer p-2 transition-colors duration-200 relative z-10">
              {item.label}
            </div>
            <div
              className={`absolute inset-0 bg-gray-300 transition-transform duration-300 ease-out ${
                hoveredItem === item.key ? 'translate-x-0' : '-translate-x-full'
              }`}
              style={{ zIndex: 0 }}
            ></div>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-col items-center space-y-4">
        <a
          href="/James Hill Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-white text-[#254879] px-4 py-2 rounded hover:bg-gray-200 transition-colors duration-200"
        >
          <ExternalLink size={20} />
          <span>View Resume</span>
        </a>
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/james-hill-0a437326/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-600 hover:text-gray-800 transition-colors duration-200"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/DS-Jay"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-600 hover:text-gray-800 transition-colors duration-200"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

// import React, { useState } from 'react';
// import { Linkedin, Github } from 'lucide-react';

// interface SidebarProps {
//   onSelect: (section: string) => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({ onSelect }) => {
//   const [hoveredItem, setHoveredItem] = useState<string | null>(null);

//   const sidebarItems = [
//     { key: 'personal', label: 'About Me' },
//     { key: 'experience', label: 'Experience' },
//     { key: 'education', label: 'Education' },
//     { key: 'technical', label: 'Technical Skills' },
//     { key: 'certifications', label: 'Certifications & Learning' },
//   ];

//   return (
//     // <div className="sidebar bg-[#e6f3ff] text-gray-800 p-4 h-full border-r border-gray-300 w-64"> // Original
//     //#254879
//     <div className="sidebar bg-[#254879] text-white p-4 h-full border-r border-gray-300 w-1/6">
//       <h2 className="text-xl font-bold mb-4">James B Hill</h2>
//       <ul className="space-y-2">
//         {sidebarItems.map((item) => (
//           <li
//             key={item.key}
//             className="relative overflow-hidden"
//             onMouseEnter={() => setHoveredItem(item.key)}
//             onMouseLeave={() => setHoveredItem(null)}
//             onClick={() => onSelect(item.key)}
//           >
//             <div className="cursor-pointer p-2 transition-colors duration-200 relative z-10">
//               {item.label}
//             </div>
//             <div
//               className={`absolute inset-0 bg-gray-300 transition-transform duration-300 ease-out ${
//                 hoveredItem === item.key ? 'translate-x-0' : '-translate-x-full'
//               }`}
//               style={{ zIndex: 0 }}
//             ></div>
//           </li>
//         ))}
//       </ul>
//       <div className="mt-8 flex justify-center space-x-4">
//         <a
//           href="https://www.linkedin.com/in/james-hill-0a437326/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-white-600 hover:text-gray-800 transition-colors duration-200"
//         >
//           <Linkedin size={24} />
//         </a>
//         <a
//           href="https://github.com/DS-Jay"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-white-600 hover:text-gray-800 transition-colors duration-200"
//         >
//           <Github size={24} />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;



// import React from 'react';
// import { Linkedin, Github } from 'lucide-react';

// interface SidebarProps {
//   onSelect: (section: string) => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({ onSelect }) => {
//   return (
//     <div className="sidebar bg-gray-800 text-white p-4 h-full border-r border-gray-300 w-1/6">
//       <h2 className="text-xl font-bold mb-4">James B Hill</h2>
//       <ul className="space-y-2">
//         <li
//           className="cursor-pointer p-2 hover:bg-gray-700 hover:text-white rounded transition duration-200"
//           onClick={() => onSelect('personal')}
//         >
//           About Me
//         </li>
//         <li
//           className="cursor-pointer p-2 hover:bg-gray-700 hover:text-white rounded transition duration-200"
//           onClick={() => onSelect('experience')}
//         >
//           Experience
//         </li>
//         <li
//           className="cursor-pointer p-2 hover:bg-gray-700 hover:text-white rounded transition duration-200"
//           onClick={() => onSelect('education')}
//         >
//           Education
//         </li>
//         <li
//           className="cursor-pointer p-2 hover:bg-gray-700 hover:text-white rounded transition duration-200"
//           onClick={() => onSelect('technical')}
//         >
//           Technical Skills
//         </li>
//         <li
//           className="cursor-pointer p-2 hover:bg-gray-700 hover:text-white rounded transition duration-200"
//           onClick={() => onSelect('certifications')}
//         >
//           Certifications & Learning
//         </li>
//       </ul>
//       <div className="mt-8 flex justify-center space-x-4">
//         <a 
//           href="https://www.linkedin.com/in/james-hill-0a437326/" 
//           target="_blank" 
//           rel="noopener noreferrer"
//           className="text-gray-400 hover:text-white transition-colors duration-200"
//         >
//           <Linkedin size={24} />
//         </a>
//         <a 
//           href="https://github.com/DS-Jay" 
//           target="_blank" 
//           rel="noopener noreferrer"
//           className="text-gray-400 hover:text-white transition-colors duration-200"
//         >
//           <Github size={24} />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


// // src/components/Sidebar.tsx
// import React from 'react';
// import { Linkedin, Github } from 'lucide-react';

// interface SidebarProps {
//   onSelect: (section: string) => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({ onSelect }) => {
//   return (
//     <div className="sidebar bg-gray-100 p-4 h-full border-r border-gray-300 w-1/6">
//       <h2 className="text-xl font-bold mb-4">James B Hill</h2>
//       <ul className="space-y-2">
//         <li
//           className="cursor-pointer p-2 hover:text-white-400"
//           onClick={() => onSelect('personal')}
//         >
//           About Me
//         </li>
//         <li
//           className="cursor-pointer p-2 hover:text-white-400 rounded"
//           onClick={() => onSelect('experience')}
//         >
//           Experience
//         </li>
//         <li
//           className="cursor-pointer p-2 hover:text-white-400 rounded"
//           onClick={() => onSelect('education')}
//         >
//           Education
//         </li>
//         <li
//           className="cursor-pointer p-2 hover:text-white-400 rounded"
//           onClick={() => onSelect('technical')}
//         >
//           Technical Skills
//         </li>
//         <li
//           className="cursor-pointer p-2 hover:text-white-400 rounded"
//           onClick={() => onSelect('certifications')}
//         >
//           Certifications & Learning
//         </li>
//         {/* Add more items here as needed */}
//       </ul>
//       <div className="mt-8 flex justify-center space-x-4">
//         <a 
//           href="https://www.linkedin.com/in/james-hill-0a437326/" 
//           target="_blank" 
//           rel="noopener noreferrer"
//           className="text-white hover:text-white-400 transition-colors duration-200"
//         >
//           <Linkedin size={24} />
//         </a>
//         <a 
//           href="https://github.com/DS-Jay" 
//           target="_blank" 
//           rel="noopener noreferrer"
//           className="text-white hover:text-white-400 transition-colors duration-200"
//         >
//           <Github size={24} />
//         </a>
//       </div>
//     </div>
//   );
// };
// export default Sidebar;


// // src/components/Sidebar.tsx
// import React from 'react';

// interface SidebarProps {
//   onSelect: (section: string) => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({ onSelect }) => {
//   return (
//     <div className="sidebar bg-gray-100 p-4 h-full border-r border-gray-300 w-1/6">
//       <h2 className="text-xl font-bold mb-4">Navigation</h2>
//       <ul className="space-y-2">
//         <li
//           className="cursor-pointer p-2 hover:bg-gray-200 rounded"
//           onClick={() => onSelect('experience')}
//         >
//           Experience
//         </li>
//         {/* Add more items here as needed */}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;


// // src/components/Sidebar.tsx
// import React from 'react';

// interface SidebarProps {
//   onSelect: (section: string) => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({ onSelect }) => {
//   return (
//     <div className="sidebar">
//       <h2>Navigation</h2>
//       <ul>
//         <li onClick={() => onSelect('experience')}>Experience</li>
//         {/* Add more items here as needed */}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
