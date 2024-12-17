// import React from "react";
// import PersonalImages from "../../../assets/personals.png";
// import { motion } from 'framer-motion';
// import { Link } from "react-router-dom";
// const PersonalGrowth = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
//     <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between">
//       <div className="w-full md:w-1/2 mb-8 md:mb-0">
//         <h3 className="text-teal-600 text-lg mb-2">Tarot With Deepa</h3>
//         <h1 className="text-4xl md:text-5xl font-serif mb-4">
//           <span className="text-gray-800">Simplify Personal &</span><br />
//           <span className="text-gray-800">Growth </span>
//           <span className="text-green-600">with</span><br />
//           <span className="text-green-600">Tarot</span>
//         </h1>
//         <p className="text-gray-600 mb-8">
//           Hi, I'm Tarot Deepa, one of the best tarot card readers in 
//           India. I specialize in helping you gain insight into your past, 
//           present, and future, offering guidance to create the life you 
//           want and deserve.
//         </p>
//         <div className="flex space-x-4">
//           <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition duration-300">
//             Book a Session
//           </button>
//           <button className="bg-white text-teal-600 px-6 py-2 rounded-full border border-teal-600 hover:bg-teal-50 transition duration-300">
//            <Link to='/pricing/personal'> Explore Services</Link>
//           </button>
//         </div>
//       </div>
      
//       <motion.div
//         initial={{ x: 100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 1, delay: 0.5 }}
//         className="hidden md:block w-1/2"
//       >
//         <div className="relative w-90 h-90 mx-auto perspective-1000">
//           <motion.div
//             className="w-full h-full"
//             style={{
//               transformStyle: 'preserve-3d',
//               transform: 'rotateY(-20deg) rotateX(10deg)',
//             }}
//             whileHover={{
//               rotateY: 0,
//               rotateX: 0,
//               transition: { duration: 0.5 },
//             }}
//           >
//             <img
//               src={PersonalImages}
//               alt="Tarot cards"
//               className="w-full h-full object-contain"
             
//             />
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   </div>
//   );
// };

// export default PersonalGrowth;























import React from "react";
import PersonalImages from "../../../assets/personals.png";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const PersonalGrowth = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-teal-600 text-lg mb-2">Tarot By Deepa</h3>
          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            <span className="text-gray-800">Simplify Personal &</span><br />
            <span className="text-gray-800">Growth </span>
            <span className="text-green-600">By</span><br />
            <span className="text-green-600">Tarot</span>
          </h1>
          <p className="text-gray-600 mb-8">
            Embark on a transformative journey of self-discovery with Tarot Deepa. As a seasoned tarot reader, I provide invaluable insights into your life's path, helping you unlock your potential and navigate personal challenges. Through the ancient wisdom of tarot, we'll explore your inner landscape, identify growth opportunities, and chart a course for your brightest future.
          </p>
          <div className="flex space-x-4">
            <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition duration-300">
              Book a Session
            </button>
            <button className="bg-white text-teal-600 px-6 py-2 rounded-full border border-teal-600 hover:bg-teal-50 transition duration-300">
              <Link to='/pricing/india'> Explore Services</Link>
            </button>
          </div>
        </div>
        
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden md:block w-1/2"
        >
          <div className="relative w-90 h-90 mx-auto perspective-1000">
            <motion.div
              className="w-full h-full"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateY(-20deg) rotateX(10deg)',
              }}
              whileHover={{
                rotateY: 0,
                rotateX: 0,
                transition: { duration: 0.5 },
              }}
            >
              <img
                src={PersonalImages}
                alt="Tarot cards"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PersonalGrowth;