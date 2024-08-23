// src/components/PersonalDetails.tsx
import React from 'react';

const PersonalDetails: React.FC = () => {
  return (
    <div className="w-full p-8 overflow-y-auto scrollbar-hide bg-gray-50">
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Personal</h1>
        
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">Who I am...</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
          My name is James, and I am an Army Artillery Officer veteran turned data scientist and machine learning engineer.  With a Bachelor’s in Economics and a Master’s in Predictive Analytics, I blend analytical rigor and intuition in my decision-making, always focusing on team and organizational success.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">What I do...</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
          I specialize in understanding people’s needs and developing data-driven solutions, ranging from simple data provisions to advanced machine learning algorithms.  My experience spans diverse industries, including health trend forecasting for startups, product development for integrated circuit manufacturing, supply chain optimization for logistics, and leveraging large language models to enhance e-commerce operations.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4 text-gray-700">Why I am unique...</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
                What makes me unique is my multifaceted experience across various industries. I've developed a keen product and business sense by:
            </p>
            <ul className="list-disc pl-6 mb-4 text-lg text-gray-600 space-y-2">
                <li>Understanding diverse organizational contexts and user needs</li>
                <li>Creating and integrating metrics, KPIs, and experimentation</li>
                <li>Applying data science and machine learning solutions to real business problems</li>
            </ul>
            <p className="text-lg text-gray-600 leading-relaxed">
                I've worn many hats - from data engineer to product manager - and communicated effectively with stakeholders at all levels, from SMEs to CEOs. This allows me to adapt quickly to changing business goals and deliver value consistently.
            </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-6 text-gray-700">Personal Goals & Hobbies</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-medium mb-4 text-gray-600">Personal Goals</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>To lead pioneering projects in data science that significantly impact business operations and customer experiences.</li>
              <li>To continuously expand my knowledge in quantitative development and AI technologies.</li>
              <li>To contribute to the data science community through mentorship and knowledge sharing.</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-medium mb-4 text-gray-600">Hobbies</h3>
            <ul className="space-y-3 text-gray-600">
              <li><strong className="text-gray-700">Programming:</strong> I enjoy coding and exploring new technologies in my spare time.</li>
              <li><strong className="text-gray-700">Data Science Competitions:</strong> Participating in Kaggle competitions and other data challenges.</li>
              <li><strong className="text-gray-700">Outdoor Activities:</strong> Hiking, biking, and enjoying the natural beauty of Colorado.</li>
              <li><strong className="text-gray-700">Continuous Learning:</strong> Taking online courses and attending workshops to stay updated with the latest developments in AI and data science.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PersonalDetails;
// // src/components/PersonalDetails.tsx
// import React from 'react';

// const PersonalDetails: React.FC = () => {
//   return (
//     <div className="space-y-6">
//       <h2 className="text-3xl font-bold mb-4">Personal</h2>
      
//       <section>
//         <h3 className="text-2xl font-semibold mb-2">Elevator Pitch</h3>
//         <p>
//           Hello! I'm James Barron Hill, a dedicated and innovative data scientist with a robust background in machine learning and predictive analytics. I excel at transforming complex data into actionable insights, driving strategic decisions, and developing AI-driven solutions to enhance business performance. With over 6 years of experience across various sectors, I bring a unique blend of technical expertise and business acumen to every project.
//         </p>
//       </section>

//       <section>
//         <h3 className="text-2xl font-semibold mb-2">Personal Goals & Hobbies</h3>
//         <h4 className="text-xl font-medium mt-3 mb-2">Personal Goals</h4>
//         <ul className="list-disc pl-5 space-y-1">
//           <li>To lead pioneering projects in data science that significantly impact business operations and customer experiences.</li>
//           <li>To continuously expand my knowledge in quantitative development and AI technologies.</li>
//           <li>To contribute to the data science community through mentorship and knowledge sharing.</li>
//         </ul>
        
//         <h4 className="text-xl font-medium mt-3 mb-2">Hobbies</h4>
//         <ul className="list-disc pl-5 space-y-1">
//           <li><strong>Programming:</strong> I enjoy coding and exploring new technologies in my spare time.</li>
//           <li><strong>Data Science Competitions:</strong> Participating in Kaggle competitions and other data challenges.</li>
//           <li><strong>Outdoor Activities:</strong> Hiking, biking, and enjoying the natural beauty of Colorado.</li>
//           <li><strong>Continuous Learning:</strong> Taking online courses and attending workshops to stay updated with the latest developments in AI and data science.</li>
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default PersonalDetails;