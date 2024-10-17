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


















// import React from 'react';
// import { motion } from 'framer-motion';
// import MainImage  from '../../assets/tarot.jpg'
// const TarotLandingPage = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
//       <div className="max-w-4xl w-full px-4 z-10">
//         <h1 className="text-4xl md:text-5xl font-bold mb-2">
//           <span className="text-teal-600">Discover the future</span>
//         </h1>
//         <h2 className="text-4xl md:text-5xl font-bold mb-8">
//           <span className="text-teal-600">you deserve with</span>
//           <br />
//           <span className="text-teal-600">Tarot</span>
//         </h2>
//         <p className="text-gray-600 mb-8">Tarot With Pooja</p>
//         <div className="flex space-x-4 mb-12">
//           <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition duration-300">
//             Book a Session
//           </button>
//           <button className="bg-white text-teal-600 px-6 py-2 rounded-full border border-teal-600 hover:bg-teal-50 transition duration-300">
//             Explore Services
//           </button>
//         </div>
//       </div>
      
//       <motion.div
//         initial={{ x: 100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 1, delay: 0.5 }}
//         className="flex flex-wrap justify-center gap-4 mt-8 md:mt-0 md:absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2 z-0"
//       >
//         {[1, 2, 3, 4].map((index) => (
//           <motion.div
//             key={index}
//             whileHover={{ y: -10 }}
//             className="w-32 h-48 md:w-40 md:h-64 bg-white rounded-lg shadow-lg transform -rotate-6 hover:rotate-0 transition duration-300"
//             style={{
//               backgroundImage: `url(${MainImage})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//             }}
//           />
//         ))}
//       </motion.div>
      
//       <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
//         <path fill="#14b8a6" fillOpacity="0.2" d="M0,96L48,117.3C96,139,192,181,288,186.7C384,192,480,160,576,138.7C672,117,768,107,864,122.7C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
//       </svg>
//     </div>
//   );
// };

// export default TarotLandingPage;







// import React from 'react';
// import { motion } from 'framer-motion';

// const TarotLandingPage = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
//       <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between">
//         <div className="w-full md:w-1/2 mb-8 md:mb-0">
//           <h3 className="text-teal-600 text-lg mb-2">Tarot With Lavanya</h3>
//           <h1 className="text-4xl md:text-5xl font-serif mb-4">
//             <span className="text-gray-800">Discover the future</span><br />
//             <span className="text-gray-800">you deserve </span>
//             <span className="text-teal-600">with</span><br />
//             <span className="text-teal-600">Tarot</span>
//           </h1>
//           <p className="text-gray-600 mb-8">
//             Hi, I'm Tarot Lavanya, one of the best tarot card readers in 
//             India. I specialize in helping you gain insight into your past, 
//             present, and future, offering guidance to create the life you 
//             want and deserve.
//           </p>
//           <div className="flex space-x-4">
//             <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition duration-300">
//               Book a Session
//             </button>
//             <button className="bg-white text-teal-600 px-6 py-2 rounded-full border border-teal-600 hover:bg-teal-50 transition duration-300">
//               Explore Services
//             </button>
//           </div>
//         </div>
        
//         <motion.div
//           initial={{ x: 100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           className="hidden md:flex flex-wrap justify-center gap-4 w-1/2"
//         >
//           {[1, 2, 3, 4].map((index) => (
//             <motion.div
//               key={index}
//               whileHover={{ y: -10 }}
//               className="w-32 h-48 bg-white rounded-lg shadow-lg transform -rotate-6 hover:rotate-0 transition duration-300"
//             >
//               <img src="/api/placeholder/128/192" alt={`Tarot card ${index}`} className="w-full h-full object-cover rounded-lg" />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default TarotLandingPage;























// import React from 'react';
// import { motion } from 'framer-motion';
// import LandingImage from '../../assets/tarotcard.jpg'
// const TarotLandingPage = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
//       <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between">
//         <div className="w-full md:w-1/2 mb-8 md:mb-0">
//           <h3 className="text-teal-600 text-lg mb-2">Tarot With Lavanya</h3>
//           <h1 className="text-4xl md:text-5xl font-serif mb-4">
//             <span className="text-gray-800">Discover the future</span><br />
//             <span className="text-gray-800">you deserve </span>
//             <span className="text-teal-600">with</span><br />
//             <span className="text-teal-600">Tarot</span>
//           </h1>
//           <p className="text-gray-600 mb-8">
//             Hi, I'm Tarot Lavanya, one of the best tarot card readers in 
//             India. I specialize in helping you gain insight into your past, 
//             present, and future, offering guidance to create the life you 
//             want and deserve.
//           </p>
//           <div className="flex space-x-4">
//             <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition duration-300">
//               Book a Session
//             </button>
//             <button className="bg-white text-teal-600 px-6 py-2 rounded-full border border-teal-600 hover:bg-teal-50 transition duration-300">
//               Explore Services
//             </button>
//           </div>
//         </div>
        
//         <motion.div
//           initial={{ x: 100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           className="hidden md:block w-1/2"
//         >
//           <div className="relative w-80 h-80 mx-auto   bg-transparent">
//             <motion.img
//               src={LandingImage}
//               alt="Tarot cards"
//               className="w-full h-full object-cover rounded-lg shadow-xl  "
//               style={{
//                 transformStyle: 'preserve-3d',
//                 transform: 'rotateY(-20deg) rotateX(10deg)',
//                 backfaceVisibility: 'hidden',
//               }}
//               whileHover={{
//                 rotateY: 0,
//                 rotateX: 0,
//                 transition: { duration: 0.5 },
//               }}
//             />
//             <div 
//               className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-50 rounded-lg"
//               style={{
//                 mixBlendMode: 'overlay',
//               }}
//             ></div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default TarotLandingPage;























// import React from 'react';
// import { motion } from 'framer-motion';
// import LandingImage from '../../assets/tarotcard1.png';
// import {Link } from 'react-router-dom'

// const TarotLandingPage = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
//       <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between">
//         <div className="w-full md:w-1/2 mb-8 md:mb-0">
//           <h3 className="text-teal-600 text-lg mb-2">Tarot With Deepa</h3>
//           <h1 className="text-4xl md:text-5xl font-serif mb-4">
//             <span className="text-gray-800">Discover the future</span><br />
//             <span className="text-gray-800">you deserve </span>
//             <span className="text-teal-600">with</span><br />
//             <span className="text-teal-600">Tarot</span>
//           </h1>
//           <p className="text-gray-600 mb-8">
//             Hi, I'm Tarot Deepa, one of the best tarot card readers in 
//             India. I specialize in helping you gain insight into your past, 
//             present, and future, offering guidance to create the life you 
//             want and deserve.
//           </p>
//           <div className="flex space-x-4">
//             <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition duration-300">
//               Book a Session
//             </button>
//             <Link to='/pricing/india' className="bg-white text-teal-600 px-6 py-2 rounded-full border border-teal-600 hover:bg-teal-50 transition duration-300">
//               Explore Services
//             </Link>
//           </div>
//         </div>
        
//         <motion.div
//           initial={{ x: 100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           className="hidden md:block w-1/2"
//         >
//           <div className="relative w-90 h-90 mx-auto perspective-1000">
//             <motion.div
//               className="w-full h-full"
//               style={{
//                 transformStyle: 'preserve-3d',
//                 transform: 'rotateY(-20deg) rotateX(10deg)',
//               }}
//               whileHover={{
//                 rotateY: 0,
//                 rotateX: 0,
//                 transition: { duration: 0.5 },
//               }}
//             >
//               <img
//                 src={LandingImage}
//                 alt="Tarot cards"
//                 className="w-full h-full object-contain"
               
//               />
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default TarotLandingPage;



































import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TarotLandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-teal-600 text-lg mb-2">Tarot With Deepa</h3>
          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            <span className="text-gray-800">Discover the future</span><br />
            <span className="text-gray-800">you deserve </span>
            <span className="text-teal-600">with</span><br />
            <span className="text-teal-600">Tarot</span>
          </h1>
          <p className="text-gray-600 mb-8">
            Hi, I'm Tarot Deepa, one of the best tarot card readers in 
            India. I specialize in helping you gain insight into your past, 
            present, and future, offering guidance to create the life you 
            want and deserve.
          </p>
          <div className="flex space-x-4">
            <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition duration-300">
              Book a Session
            </button>
            <Link to='/pricing/india' className="bg-white text-teal-600 px-6 py-2 rounded-full border border-teal-600 hover:bg-teal-50 transition duration-300">
              Explore Services
            </Link>
          </div>
        </div>
        
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full md:w-1/2 mt-8 md:mt-0"
        >
          <div className="relative w-full h-0 pb-[56.25%] md:pb-[75%] perspective-1000">
            <motion.div
              className="absolute inset-0"
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
              <video
                className="w-full h-full object-cover rounded-lg shadow-lg"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="https://hpcpl.gntind.com/hpcpl/wp-content/uploads/2024/10/Mystical-tarot-cards-animation-_-Tarot-Card-_-Animation-_-Motion-Graphics-_-2024.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TarotLandingPage;