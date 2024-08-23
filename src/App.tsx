import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import ResponsiveProjectDisplay from './components/ResponsiveProjectDisplay';
import PersonalDetails from './components/PersonalDetails';
import Education from './components/Education';
import TechnicalSkills from './components/TechnicalSkills';
import CertificationsAndLearning from './components/CertificationsAndLearning';

const App: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState('personal');
  const [selectedProject, setSelectedProject] = useState('');

  const handleSectionChange = (section: string) => {
    setSelectedSection(section);
    if (section !== 'experience') {
      setSelectedProject('');
    }
  };

  const renderContent = () => {
    switch (selectedSection) {
      case 'personal':
        return <PersonalDetails />;
      case 'education':
        return <Education />;
      case 'technical':
        return <TechnicalSkills />;
      case 'certifications':
        return <CertificationsAndLearning />;
      case 'experience':
        return (
          <Content
            section={selectedSection}
            onProjectSelect={setSelectedProject}
            isDisplayOpen={!!selectedProject}
          />
        );
      default:
        return <div>Select a section from the sidebar</div>;
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
      <Sidebar onSelect={handleSectionChange} />
      <div className="flex-grow overflow-y-auto">
        {renderContent()}
      </div>
      {selectedProject && (
        <ResponsiveProjectDisplay 
          project={selectedProject} 
          onClose={() => setSelectedProject('')}
        />
      )}
    </div>
  );
};

export default App;

// // src/App.tsx
// import React, { useState } from 'react';
// import Sidebar from './components/Sidebar';
// import Content from './components/Content';
// import Display from './components/Display';
// import PersonalDetails from './components/PersonalDetails';
// import Education from './components/Education';
// import TechnicalSkills from './components/TechnicalSkills';
// import CertificationsAndLearning from './components/CertificationsAndLearning';
// // import './index.css';
// // import './App.css';

// const App: React.FC = () => {
//   const [selectedSection, setSelectedSection] = useState('personal');
//   const [selectedProject, setSelectedProject] = useState('');

//   const handleSectionChange = (section: string) => {
//     setSelectedSection(section);
//     if (section !== 'experience') {
//       setSelectedProject('');
//     }
//   };

//   const renderContent = () => {
//     switch (selectedSection) {
//       case 'personal':
//         return <PersonalDetails />;
//       case 'education':
//         return <Education />;
//       case 'technical':
//         return <TechnicalSkills />;
//       case 'certifications':
//         return <CertificationsAndLearning />;
//       case 'experience':
//         return (
//           <Content
//             section={selectedSection}
//             onProjectSelect={setSelectedProject}
//             isDisplayOpen={!!selectedProject}
//           />
//         );
//       default:
//         return <div>Select a section from the sidebar</div>;
//     }
//   };

//   return (
//     <div className="flex h-screen overflow-hidden">
//       <Sidebar onSelect={handleSectionChange} />
//       <div className="flex-grow flex overflow-hidden">
//         {renderContent()}
//         {selectedSection === 'experience' && selectedProject && <Display project={selectedProject} />}
//       </div>
//     </div>
//   );
// };

// export default App;

// // src/App.tsx
// import React, { useState } from 'react';
// import Sidebar from './components/Sidebar';
// import Content from './components/Content';
// import Display from './components/Display';
// import PersonalDetails from './components/PersonalDetails';
// import './index.css';

// const App: React.FC = () => {
//   const [selectedSection, setSelectedSection] = useState('personal');
//   const [selectedProject, setSelectedProject] = useState('');

//   return (
//     <div className="flex h-screen overflow-hidden">
//       <Sidebar onSelect={setSelectedSection} />
//       <div className="flex-grow flex overflow-hidden">
//         {selectedSection === 'personal' ? (
//           <PersonalDetails />
//         ) : (
//           <Content
//             section={selectedSection}
//             onProjectSelect={setSelectedProject}
//             isDisplayOpen={!!selectedProject}
//           />
//         )}
//         {selectedProject && <Display project={selectedProject} />}
//       </div>
//     </div>
//   );
// };

// export default App;


// // src/App.tsx
// import React, { useState } from 'react';
// import Sidebar from './components/Sidebar';
// import Content from './components/Content';
// import Display from './components/Display';
// import PersonalDetails from './components/PersonalDetails';
// import './index.css';

// const App: React.FC = () => {
//   const [selectedSection, setSelectedSection] = useState('personal');
//   // const [selectedSection, setSelectedSection] = useState('experience');
//   const [selectedProject, setSelectedProject] = useState('');

//   return (
//     <div className="flex h-screen overflow-hidden">
//       <Sidebar onSelect={setSelectedSection} />
//       <div className="flex flex-grow overflow-hidden">
//         <Content
//           section={selectedSection}
//           onProjectSelect={setSelectedProject}
//           isDisplayOpen={!!selectedProject}
//         />
//         {selectedProject && <Display project={selectedProject} />}
//       </div>
//     </div>
//   );
// };

// export default App;

// // src/App.tsx
// import React, { useState } from 'react';
// import Sidebar from './components/Sidebar';
// import Content from './components/Content';
// import Display from './components/Display';
// import './index.css';

// const App: React.FC = () => {
//   const [selectedSection, setSelectedSection] = useState('experience');
//   const [selectedProject, setSelectedProject] = useState('');

//   return (
//     <div className="flex h-screen overflow-hidden">
//       <Sidebar onSelect={setSelectedSection} />
//       <div className="flex-grow flex overflow-hidden">
//         <div className="flex-grow overflow-y-auto">
//           <Content section={selectedSection} onProjectSelect={setSelectedProject} />
//         </div>
//         {selectedProject && <Display project={selectedProject} />}
//       </div>
//     </div>
//   );
// };

// export default App;


// // src/App.tsx
// import React, { useState } from 'react';
// import Sidebar from './components/Sidebar';
// import Content from './components/Content';
// import Display from './components/Display';
// import './index.css'; // Ensure TailwindCSS is imported

// const App: React.FC = () => {
//   const [selectedSection, setSelectedSection] = useState('experience');
//   const [selectedProject, setSelectedProject] = useState('');

//   return (
//     <div className="flex h-screen">
//       <Sidebar onSelect={setSelectedSection} />
//       <div className="flex-grow flex">
//         <Content section={selectedSection} onProjectSelect={setSelectedProject} />
//         {/* Conditionally render the Display component only if a project is selected */}
//         {selectedProject && <Display project={selectedProject} />}
//       </div>
//     </div>
//   );
// };

// export default App;


// // src/App.tsx
// import React, { useState } from 'react';
// import Sidebar from './components/Sidebar';
// import Content from './components/Content';
// import Display from './components/Display';
// import './styles.css';

// const App: React.FC = () => {
//   const [selectedSection, setSelectedSection] = useState('experience');
//   const [selectedProject, setSelectedProject] = useState('');

//   return (
//     <div className="app">
//       <Sidebar onSelect={setSelectedSection} />
//       <Content section={selectedSection} onProjectSelect={setSelectedProject} />
//       <Display project={selectedProject} />
//     </div>
//   );
// };

// export default App;

