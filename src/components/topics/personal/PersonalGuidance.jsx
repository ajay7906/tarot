// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

// const PersonalGrowthGuidance = () => {
//   const personalGrowthServices = [
//     {
//       title: "Set and Achieve Goals",
//       description: "Develop effective strategies to reach your personal and professional goals."
//     },
//     {
//       title: "Boost Self-Confidence",
//       description: "Build self-esteem and overcome self-doubt for personal empowerment."
//     },
//     {
//       title: "Develop New Skills",
//       description: "Identify and cultivate skills that align with your passions and aspirations."
//     },
//     {
//       title: "Mindfulness and Meditation",
//       description: "Learn practices to increase presence and reduce stress in daily life."
//     }
//   ];

//   return (
//     <div className="container px-12 py-16 bg-gray-100">
//       <h1 className="text-4xl font-bold text-center mb-16">Personal Growth</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {personalGrowthServices.map((service, index) => (
//           <motion.div 
//             key={index}
//             className="bg-white p-8 rounded-lg shadow-md"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//           >
//             <span className="text-xl font-semibold text-gray-400">0{index + 1}.</span>
//             <h3 className="text-2xl font-bold mt-2 mb-4">{service.title}</h3>
//             <p className="text-gray-600 mb-4">{service.description}</p>
//             <button className="text-orange-500 font-semibold flex items-center">
//             <Link to='/pricing/india'> Book Now</Link>
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </button>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PersonalGrowthGuidance;













import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PersonalGrowthGuidance = () => {
  const personalGrowthServices = [
    {
      title: "Set and Achieve Goals",
      description: "Develop effective strategies to reach your personal and professional goals. Learn to set SMART goals that are specific, measurable, achievable, relevant, and time-bound. We'll work together to create a roadmap for your success, breaking down large objectives into manageable steps. You'll also learn techniques to stay motivated and overcome obstacles along the way."
    },
    {
      title: "Boost Self-Confidence",
      description: "Build self-esteem and overcome self-doubt for personal empowerment. Discover the roots of your insecurities and learn practical techniques to challenge negative self-talk. We'll explore methods to celebrate your strengths, accept your weaknesses, and develop a growth mindset. Through guided exercises and reflections, you'll cultivate a strong sense of self-worth that empowers you in all areas of life."
    },
    {
      title: "Develop New Skills",
      description: "Identify and cultivate skills that align with your passions and aspirations. We'll start by assessing your current abilities and interests to find areas of potential growth. Learn effective strategies for rapid skill acquisition and create a personalized learning plan. Whether you're looking to advance your career, start a new hobby, or broaden your horizons, we'll provide you with the tools and support to master new competencies."
    },
    {
      title: "Mindfulness and Meditation",
      description: "Learn practices to increase presence and reduce stress in daily life. Discover various meditation techniques suitable for beginners and experienced practitioners alike. We'll explore mindfulness exercises that you can integrate into your daily routine, helping you to stay grounded and focused. You'll learn how to use these practices to manage anxiety, improve emotional regulation, enhance your relationships, and cultivate a deeper sense of inner peace."
    }
  ];

  return (
    <div className="container px-12 py-16 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-16">Personal Growth</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {personalGrowthServices.map((service, index) => (
          <motion.div 
            key={index}
            className="bg-white p-8 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-xl font-semibold text-gray-400">0{index + 1}.</span>
            <h3 className="text-2xl font-bold mt-2 mb-4">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <button className="text-orange-500 font-semibold flex items-center">
              <Link to='/pricing/india'>Book Now</Link>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PersonalGrowthGuidance;