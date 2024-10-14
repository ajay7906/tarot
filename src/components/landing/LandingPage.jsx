// import React from 'react';
// import { motion } from 'framer-motion';

// const TarotLandingPage = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
//       <div className="max-w-4xl w-full px-4">
//         <h1 className="text-4xl md:text-5xl font-bold mb-2">
//           <span className="text-teal-600">Discover the future</span>
//         </h1>
//         <h2 className="text-4xl md:text-5xl font-bold mb-8">
//           <span className="text-teal-600">you deserve with</span>
//           <br />
//           <span className="text-teal-600">Tarot</span>
//         </h2>
//         <p className="text-gray-600 mb-8">Tarot With Lavanya</p>
//         <div className="flex space-x-4 mb-12">
//           <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition duration-300">
//             Book a Session
//           </button>
//           <button className="bg-white text-teal-600 px-6 py-2 rounded-full border border-teal-600 hover:bg-teal-50 transition duration-300">
//             Explore Services
//           </button>
//         </div>
//       </div>
      
//       <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
//         <motion.div
//           initial={{ x: 100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           className="flex space-x-2"
//         >
//           {[1, 2, 3, 4].map((index) => (
//             <motion.div
//               key={index}
//               whileHover={{ y: -10 }}
//               className="w-40 h-64 bg-white rounded-lg shadow-lg transform -rotate-6 hover:rotate-0 transition duration-300"
//               style={{
//                 backgroundImage: `url('/api/placeholder/160/256')`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//               }}
//             />
//           ))}
//         </motion.div>
//       </div>
      
//       <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
//         <path fill="#14b8a6" fillOpacity="0.2" d="M0,96L48,117.3C96,139,192,181,288,186.7C384,192,480,160,576,138.7C672,117,768,107,864,122.7C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
//       </svg>
//     </div>
//   );
// };

// export default TarotLandingPage;


















import React from 'react';
import { motion } from 'framer-motion';
import MainImage  from '../../assets/tarot.jpg'
const TarotLandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="max-w-4xl w-full px-4 z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          <span className="text-teal-600">Discover the future</span>
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="text-teal-600">you deserve with</span>
          <br />
          <span className="text-teal-600">Tarot</span>
        </h2>
        <p className="text-gray-600 mb-8">Tarot With Pooja</p>
        <div className="flex space-x-4 mb-12">
          <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition duration-300">
            Book a Session
          </button>
          <button className="bg-white text-teal-600 px-6 py-2 rounded-full border border-teal-600 hover:bg-teal-50 transition duration-300">
            Explore Services
          </button>
        </div>
      </div>
      
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-wrap justify-center gap-4 mt-8 md:mt-0 md:absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2 z-0"
      >
        {[1, 2, 3, 4].map((index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="w-32 h-48 md:w-40 md:h-64 bg-white rounded-lg shadow-lg transform -rotate-6 hover:rotate-0 transition duration-300"
            style={{
              backgroundImage: `url(${MainImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </motion.div>
      
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
        <path fill="#14b8a6" fillOpacity="0.2" d="M0,96L48,117.3C96,139,192,181,288,186.7C384,192,480,160,576,138.7C672,117,768,107,864,122.7C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
  );
};

export default TarotLandingPage;