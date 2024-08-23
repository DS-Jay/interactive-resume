import React from 'react';

const PersonalDetails: React.FC = () => {
  return (
    <div className="w-full p-8 overflow-y-auto scrollbar-hide bg-gray-50">
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
            About Me{' '}
            <span style={{ fontSize: '0.65em' }} role="img" aria-label="mountain">
                🏔️
            </span>
        </h1>
        
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">Who I am...</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            An applied technology leader and adventurist, my experience is focused on data science and machine learning. I believe that having a team with the right variety of technical skills can solve almost any organization’s complex problems and drive value.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Some of the best ideas happen not in front of a computer, but through conversations, walks, or even hiking a mountain. Community and family are vital when driving to try new things, making everyone’s lives better and more prosperous.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            The unique combination of values I cherish and bring to an organization are curiosity, adaptability, collaboration, and gratitude.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">My Journey</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            My journey began with a bachelor's degree in Economics, where I developed an understanding of the complex interplay between macro and microeconomic factors. After graduation, I applied this knowledge in the Army, where I served as an Artillery Officer.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Following my military service, I worked as a Quality Manager at Honeywell FM&T, managing two departments and using data to evaluate product quality, negotiate priorities, and assess performance. This experience drove me to pursue a master's in predictive analytics at Northwestern University, which opened my eyes to the possibilities of data science.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Since graduating, I’ve held roles in various industries, applying data science and machine learning to solve real-world problems. I’m excited to continue my journey and discover the next adventures that data science, machine learning, and AI will bring.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">Leadership Approach</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Trust and empowerment are the cornerstones of my leadership approach. A leader should trust their team members’ abilities, and empower them to take on tasks and push their boundaries. When challenges arise, a leader should offer guidance, encouragement, and support.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">Industry Experience</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            My experience spans diverse industries, including:
          </p>
          <ul className="list-disc pl-6 mb-4 text-lg text-gray-600 space-y-2">
            <li>Health trend forecasting for startups</li>
            <li>Product development for integrated circuit manufacturing</li>
            <li>Supply chain optimization for logistics</li>
            <li>Leveraging large language models to enhance e-commerce operations</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">Key Strengths</h2>
          <ul className="list-disc pl-6 mb-4 text-lg text-gray-600 space-y-2">
            <li>Designing machine learning systems</li>
            <li>Applying data science and machine learning solutions to real business problems</li>
            <li>Understanding diverse organizational contexts and user needs</li>
            <li>Creating and integrating metrics, KPIs, and experimentation</li>
            <li>Effective communication with stakeholders at all levels, including C-Suite, SMEs, and users</li>
            <li>Quick adaptation to changing business goals and consistent value delivery</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-6 text-gray-700">Personal Goals & Hobbies</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-medium mb-4 text-gray-600">Personal Goals</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Get ASA Certified Sailing</li>
              <li>Develop my knowledge toward CFA certifications</li>
              <li>Collaborate with entrepreneurs around the world, including startup communities in Paris and Seoul</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-medium mb-4 text-gray-600">Hobbies</h3>
            <ul className="space-y-3 text-gray-600">
              <li><strong className="text-gray-700">Outdoor Activities:</strong> Hiking, biking, and enjoying the natural beauty of Colorado, with plans to expand to oceanic activities.</li>
              <li><strong className="text-gray-700">Financial Markets:</strong> Continue honing my skills in financial options trading using data science and machine learning.</li>
              <li><strong className="text-gray-700">Continuous Learning:</strong> Taking online courses and attending workshops to stay updated with the latest developments in AI and data science.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PersonalDetails;



//////////////////////// B //////////////////////////
// import React from 'react';

// const PersonalDetails: React.FC = () => {
//   return (
//     <div className="w-full p-8 overflow-y-auto scrollbar-hide bg-gray-50">
//       <div className="max-w-4xl mx-auto space-y-12">
//         <h1 className="text-4xl font-bold mb-8 text-gray-800">
//             The Pitch!{' '}
//             <span style={{ fontSize: '0.65em' }} role="img" aria-label="baseball">
//                 ⚾
//             </span>
//         </h1>
        
//         <section className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-3xl font-semibold mb-4 text-gray-700">Who I am...</h2>
//           <p className="text-lg text-gray-600 leading-relaxed mb-4">
//             I'm James, an Army Artillery Officer veteran turned data scientist and machine learning engineer. With degrees in Economics and Predictive Analytics, I blend analytical rigor with intuition to drive team and organizational success.
//           </p>
//           <p className="text-lg text-gray-600 leading-relaxed">
//             My unique value comes from cross-industry experience and versatility. I combine technical expertise in data science with strong business acumen, developing solutions ranging from simple data provision to advanced machine learning algorithms across various industries.
//           </p>
//         </section>

//         <section className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-3xl font-semibold mb-4 text-gray-700">Leadership Approach</h2>
//           <p className="text-lg text-gray-600 leading-relaxed">
//             As a leader, I balance persistence with adaptability, focusing on micro-level actions to achieve macro goals. By clearly defining success, maintaining momentum, and pivoting when necessary, I ensure continuous progress in dynamic environments.
//           </p>
//         </section>

//         <section className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-3xl font-semibold mb-4 text-gray-700">Industry Experience</h2>
//           <p className="text-lg text-gray-600 leading-relaxed">
//             My experience spans diverse industries, including:
//           </p>
//           <ul className="list-disc pl-6 mb-4 text-lg text-gray-600 space-y-2">
//             <li>Health trend forecasting for startups</li>
//             <li>Product development for integrated circuit manufacturing</li>
//             <li>Supply chain optimization for logistics</li>
//             <li>Leveraging large language models to enhance e-commerce operations</li>
//           </ul>
//         </section>

//         <section className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-3xl font-semibold mb-4 text-gray-700">Key Strengths</h2>
//           <ul className="list-disc pl-6 mb-4 text-lg text-gray-600 space-y-2">
//             <li>Understanding diverse organizational contexts and user needs</li>
//             <li>Creating and integrating metrics, KPIs, and experimentation</li>
//             <li>Applying data science and machine learning solutions to real business problems</li>
//             <li>Effective communication with stakeholders at all levels, C-Suite, SMEs, and users</li>
//             <li>Quick adaptation to changing business goals and consistent value delivery</li>
//           </ul>
//         </section>

//         <section className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-3xl font-semibold mb-6 text-gray-700">Personal Goals & Hobbies</h2>
          
//           <div className="mb-8">
//             <h3 className="text-2xl font-medium mb-4 text-gray-600">Personal Goals</h3>
//             <ul className="list-disc pl-6 space-y-2 text-gray-600">
//               <li>To lead pioneering projects in data science that significantly impact business operations and customer experiences.</li>
//               <li>To continuously expand my knowledge in quantitative development and AI technologies.</li>
//               <li>To contribute to the data science community through mentorship and knowledge sharing.</li>
//             </ul>
//           </div>
          
//           <div>
//             <h3 className="text-2xl font-medium mb-4 text-gray-600">Hobbies</h3>
//             <ul className="space-y-3 text-gray-600">
//               <li><strong className="text-gray-700">Programming:</strong> I enjoy coding and exploring new technologies in my spare time.</li>
//               <li><strong className="text-gray-700">Data Science Competitions:</strong> Participating in Kaggle competitions and other data challenges.</li>
//               <li><strong className="text-gray-700">Outdoor Activities:</strong> Hiking, biking, and enjoying the natural beauty of Colorado.</li>
//               <li><strong className="text-gray-700">Continuous Learning:</strong> Taking online courses and attending workshops to stay updated with the latest developments in AI and data science.</li>
//             </ul>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default PersonalDetails;






// // src/components/PersonalDetails.tsx
// import React from 'react';

// const PersonalDetails: React.FC = () => {
//   return (
//     <div className="w-full p-8 overflow-y-auto scrollbar-hide bg-gray-50">
//       <div className="max-w-4xl mx-auto space-y-12">
//         <h1 className="text-4xl font-bold mb-8 text-gray-800">Personal</h1>
        
//         <section className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-3xl font-semibold mb-4 text-gray-700">Who I am...</h2>
//           <p className="text-lg text-gray-600 leading-relaxed">
//           My name is James, and I am an Army Artillery Officer veteran turned data scientist and machine learning engineer.  With a Bachelor’s in Economics and a Master’s in Predictive Analytics, I blend analytical rigor and intuition in my decision-making, always focusing on team and organizational success.
//           </p>
//         </section>

//         <section className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-3xl font-semibold mb-4 text-gray-700">What I do...</h2>
//           <p className="text-lg text-gray-600 leading-relaxed">
//           I specialize in understanding people’s needs and developing data-driven solutions, ranging from simple data provisions to advanced machine learning algorithms.  My experience spans diverse industries, including health trend forecasting for startups, product development for integrated circuit manufacturing, supply chain optimization for logistics, and leveraging large language models to enhance e-commerce operations.
//           </p>
//         </section>

//         <section className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-3xl font-semibold mb-4 text-gray-700">Why I am unique...</h2>
//             <p className="text-lg text-gray-600 leading-relaxed mb-4">
//                 What makes me unique is my multifaceted experience across various industries. I've developed a keen product and business sense by:
//             </p>
//             <ul className="list-disc pl-6 mb-4 text-lg text-gray-600 space-y-2">
//                 <li>Understanding diverse organizational contexts and user needs</li>
//                 <li>Creating and integrating metrics, KPIs, and experimentation</li>
//                 <li>Applying data science and machine learning solutions to real business problems</li>
//             </ul>
//             <p className="text-lg text-gray-600 leading-relaxed">
//                 I've worn many hats - from data engineer to product manager - and communicated effectively with stakeholders at all levels, from SMEs to CEOs. This allows me to adapt quickly to changing business goals and deliver value consistently.
//             </p>
//         </section>

//         <section className="bg-white p-6 rounded-lg shadow-md">
//           <h2 className="text-3xl font-semibold mb-6 text-gray-700">Personal Goals & Hobbies</h2>
          
//           <div className="mb-8">
//             <h3 className="text-2xl font-medium mb-4 text-gray-600">Personal Goals</h3>
//             <ul className="list-disc pl-6 space-y-2 text-gray-600">
//               <li>To lead pioneering projects in data science that significantly impact business operations and customer experiences.</li>
//               <li>To continuously expand my knowledge in quantitative development and AI technologies.</li>
//               <li>To contribute to the data science community through mentorship and knowledge sharing.</li>
//             </ul>
//           </div>
          
//           <div>
//             <h3 className="text-2xl font-medium mb-4 text-gray-600">Hobbies</h3>
//             <ul className="space-y-3 text-gray-600">
//               <li><strong className="text-gray-700">Programming:</strong> I enjoy coding and exploring new technologies in my spare time.</li>
//               <li><strong className="text-gray-700">Data Science Competitions:</strong> Participating in Kaggle competitions and other data challenges.</li>
//               <li><strong className="text-gray-700">Outdoor Activities:</strong> Hiking, biking, and enjoying the natural beauty of Colorado.</li>
//               <li><strong className="text-gray-700">Continuous Learning:</strong> Taking online courses and attending workshops to stay updated with the latest developments in AI and data science.</li>
//             </ul>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default PersonalDetails;



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