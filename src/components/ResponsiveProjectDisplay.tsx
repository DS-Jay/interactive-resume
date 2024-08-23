import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectADisplay from './projects/ProjectADisplay';
import ProjectBDisplay from './projects/ProjectBDisplay';
import SmartWarehousingProjectADisplay from './projects/SmartWarehousingProjectADisplay';
import SmartWarehousingProjectBDisplay from './projects/SmartWarehousingProjectBDisplay';
import CAESProjectADisplay from './projects/CAESProjectADisplay';
import CAESProjectBDisplay from './projects/CAESProjectBDisplay';

interface ResponsiveProjectDisplayProps {
  project: string;
  onClose: () => void;
}

const ResponsiveProjectDisplay: React.FC<ResponsiveProjectDisplayProps> = ({ project, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const getProjectComponent = () => {
    switch (project) {
      case 'Barron LLC Project A':
        return <ProjectADisplay />;
      case 'Barron LLC Project B':
        return <ProjectBDisplay />;
      case 'Smart Warehousing Project A':
        return <SmartWarehousingProjectADisplay />;
      case 'Smart Warehousing Project B':
        return <SmartWarehousingProjectBDisplay />;
      case 'CAES Data Mart Project':
        return <CAESProjectADisplay />;
      case 'CAES ML ERP Project':
        return <CAESProjectBDisplay />;
      default:
        return <p>Select a project to see details</p>;
    }
  };

  return (
    <div className={`fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">{project}</h3>
          <button onClick={() => { setIsOpen(false); setTimeout(onClose, 300); }} className="text-gray-400 hover:text-gray-600">
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="mt-2 overflow-y-auto max-h-[calc(100vh-200px)]">
          {getProjectComponent()}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveProjectDisplay;