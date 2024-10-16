// import React from 'react';
// import { motion } from 'framer-motion';

import FAQMONEY from "../../components/faqformney/FaqMoney";
import TarotPackagesPage from "../../components/international/International"
import VideoVsChat from "../../components/videochat/VideoVsChat";

// const packages = [
//   {
//     name: 'Quickfire Tarot',
//     price: '$40 / 30-Minute',
//     oldPrice: '$50 / 30 Mins',
//     extraCharge: '$1/Min Applicable Post 30 Minutes',
//     description: 'Starter Package',
//     features: ['Pre-determined questions', 'Yes/No type answers', 'Quick advice on current issues'],
//   },
//   {
//     name: 'Inneralign Tarot',
//     price: '$60 / 60-Minute',
//     oldPrice: '$100 / 60 Mins',
//     extraCharge: '$1/Min Applicable Post 60 Minutes',
//     description: 'Includes Everything in Quickfire Tarot',
//     features: ['Details on specific topics', 'Help identifying root-cause', 'Guidance for future challenges', 'Improvement action plan'],
//   },
//   {
//     name: 'Soulsync Tarot',
//     price: '$80 / 90-Minute',
//     oldPrice: '$150 / 90 Mins',
//     extraCharge: '$1/Min Applicable Post 90 Minutes',
//     description: 'Includes Everything in Inneralign Tarot',
//     features: ['Details on multiple topics', 'Resolving current challenges', 'Healing & anxiety management', 'Vent and support system'],
//   },
// ];

// const consultationPackages = [
//   {
//     name: 'Flexible Reading',
//     price: '$30 / 30-Minute',
//     oldPrice: '$40 / 30 Mins',
//     extraCharge: '$0.75/Min Applicable Post 30 Minutes',
//     description: 'Starter Package',
//     features: ['Pre-determined questions', 'Yes/No type answers', 'Quick advice on current issues'],
//   },
//   {
//     name: 'Tarot Spreads',
//     price: '$45 / 60-Minute',
//     oldPrice: '$80 / 60 Mins',
//     extraCharge: '$0.75/Min Applicable Post 60 Minutes',
//     description: 'Includes Everything in Flexible Reading',
//     features: ['Details on specific topics', 'Help identifying root-cause', 'Guidance for future challenges', 'Improvement action plan'],
//   },
//   {
//     name: 'Detailed Reading',
//     price: '$60 / 90-Minute',
//     oldPrice: '$120 / 90 Mins',
//     extraCharge: '$0.75/Min Applicable Post 90 Minutes',
//     description: 'Includes Everything in Tarot Spreads',
//     features: ['Details on multiple topics', 'Resolving current challenges', 'Healing & anxiety management', 'Vent and support system'],
//   },
// ];

// const InternationalTarotPage = () => {
//   return (
//     <div className="bg-gray-50 py-10">
//       {/* Header Section */}
//       <section className="text-center mb-10">
//         <h1 className="text-4xl font-semibold text-gray-800">Explore Online Tarot Reading Packages</h1>
//         <p className="mt-4 text-lg text-gray-600">
//           For International Clients only. Please be assured all packages have been curated for the best tarot experience at an affordable price.
//         </p>
//         <div className="flex justify-center mt-6">
//           <button className="px-4 py-2 mx-2 bg-green-600 text-white rounded">Audio / Text</button>
//           <button className="px-4 py-2 mx-2 bg-green-600 text-white rounded">Video Call</button>
//         </div>
//       </section>

//       {/* Video Consultation Packages */}
//       <section className="py-8">
//         <h2 className="text-3xl font-bold text-center mb-6">Video Consultation Packages</h2>
//         <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {packages.map((pkg, idx) => (
//             <motion.div
//               key={idx}
//               className="bg-white shadow-md p-6 rounded-lg"
//               whileHover={{ scale: 1.05 }}
//             >
//               <h3 className="text-xl font-semibold text-gray-800">{pkg.name}</h3>
//               <p className="mt-2 text-lg text-gray-600">
//                 <span className="line-through">{pkg.oldPrice}</span> {pkg.price}
//               </p>
//               <p className="mt-2 text-sm text-gray-500">{pkg.extraCharge}</p>
//               <p className="mt-4 font-medium text-gray-700">{pkg.description}</p>
//               <ul className="mt-4 space-y-2 text-gray-600">
//                 {pkg.features.map((feature, i) => (
//                   <li key={i} className="flex items-center">
//                     <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M9 11L12 14L22 4L20.59 2.58L12 11.17L9.41 8.58L8 10L9 11ZM22 12H2V14H22V12Z" />
//                     </svg>
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//               <button className="mt-6 bg-green-600 text-white px-4 py-2 rounded w-full">
//                 Book a Session
//               </button>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Call/Chat Consultation Packages */}
//       <section className="py-8 bg-gray-100">
//         <h2 className="text-3xl font-bold text-center mb-6">Call/Chat Consultation Packages</h2>
//         <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {consultationPackages.map((pkg, idx) => (
//             <motion.div
//               key={idx}
//               className="bg-white shadow-md p-6 rounded-lg"
//               whileHover={{ scale: 1.05 }}
//             >
//               <h3 className="text-xl font-semibold text-gray-800">{pkg.name}</h3>
//               <p className="mt-2 text-lg text-gray-600">
//                 <span className="line-through">{pkg.oldPrice}</span> {pkg.price}
//               </p>
//               <p className="mt-2 text-sm text-gray-500">{pkg.extraCharge}</p>
//               <p className="mt-4 font-medium text-gray-700">{pkg.description}</p>
//               <ul className="mt-4 space-y-2 text-gray-600">
//                 {pkg.features.map((feature, i) => (
//                   <li key={i} className="flex items-center">
//                     <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M9 11L12 14L22 4L20.59 2.58L12 11.17L9.41 8.58L8 10L9 11ZM22 12H2V14H22V12Z" />
//                     </svg>
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//               <button className="mt-6 bg-green-600 text-white px-4 py-2 rounded w-full">
//                 Book a Session
//               </button>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default InternationalTarotPage;



































// import React from 'react';
// import { motion } from 'framer-motion';

// const PackageCard = ({ title, price, duration, originalPrice, features, buttonText }) => (
//   <motion.div 
//     className="bg-white p-6 rounded-lg shadow-md"
//     whileHover={{ scale: 1.05 }}
//     transition={{ type: "spring", stiffness: 300 }}
//   >
//     <h3 className="text-xl font-semibold mb-2">{title}</h3>
//     <div className="text-3xl font-bold mb-1">${price}</div>
//     <div className="text-sm text-gray-500 mb-4">/{duration}-Minute</div>
//     <div className="text-sm line-through text-gray-400 mb-2">${originalPrice}/{duration} Mins</div>
//     <ul className="mb-4">
//       {features.map((feature, index) => (
//         <li key={index} className="flex items-start mb-2">
//           <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
//             <path d="M5 13l4 4L19 7"></path>
//           </svg>
//           {feature}
//         </li>
//       ))}
//     </ul>
//     <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300">
//       {buttonText}
//     </button>
//     <p className="text-xs text-gray-500 mt-2">Indian Visitors are requested to Book via Indian Pricing</p>
//   </motion.div>
// );

// const TarotPackagesPage = () => {

//   const videoPackages = [
//     {
//       title: "Quickfire Tarot",
//       price: 40,
//       duration: 30,
//       originalPrice: 50,
//       features: [
//         "Need help on pre-determined topics",
//         "Need short or Yes/No type answers",
//         "Need quick advice on current issues"
//       ],
//       buttonText: "Book a Session"
//     },
//     {
//       title: "Inneralign Tarot",
//       price: 60,
//       duration: 60,
//       originalPrice: 100,
//       features: [
//         "Need details on specific topics",
//         "Need help identifying root-cause",
//         "Need guidance for future challenges",
//         "Need an improvement action plan"
//       ],
//       buttonText: "Book a Session"
//     },
//     {
//       title: "Soulsync Tarot",
//       price: 80,
//       duration: 90,
//       originalPrice: 150,
//       features: [
//         "Need details on multiple topics",
//         "Need help resolving current challenges",
//         "Need healing and anxiety management",
//         "Need a vent and support system"
//       ],
//       buttonText: "Book a Session"
//     }
//   ];

//   const chatPackages = [
//     {
//       title: "Flexible Reading",
//       price: 30,
//       duration: 30,
//       originalPrice: 40,
//       features: [
//         "Need help on pre-determined topics",
//         "Need short or Yes/No type answers",
//         "Need quick advice on current issues"
//       ],
//       buttonText: "Book a Session"
//     },
//     {
//       title: "Tarot Spreads",
//       price: 45,
//       duration: 60,
//       originalPrice: 80,
//       features: [
//         "Need details on specific topics",
//         "Need help identifying root-cause",
//         "Need guidance for future challenges",
//         "Need an improvement action plan"
//       ],
//       buttonText: "Book a Session"
//     },
//     {
//       title: "Detailed Reading",
//       price: 60,
//       duration: 90,
//       originalPrice: 120,
//       features: [
//         "Need details on multiple topics",
//         "Need help resolving current challenges",
//         "Need healing and anxiety management",
//         "Need a vent and support system"
//       ],
//       buttonText: "Book a Session"
//     }
//   ];

//   return (
//     <div className="min-h-screen font-sans bg-cover bg-center bg-no-repeat bg-gray-100" style={{backgroundImage: `url(${International})`}}>
//       <div className="container mx-auto px-4 py-8 bg-white bg-opacity-90">
//         <h1 className="text-3xl font-semibold text-center mb-2">Explore Online Tarot Reading Packages</h1>
//         <p className="text-center mb-4 text-gray-600">For International Clients only</p>
//         <p className="text-center mb-8 text-gray-600">First of all, thank you for showing interest in tarot with Lavanya!</p>
//         <p className="text-center mb-8 text-gray-600">Secondly, please be assured that all packages have been curated carefully for the best tarot experience at probably the most affordable cost among top-rated tarot card readers in India.</p>
        
//         <div className="flex justify-center space-x-4 mb-8">
//           <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300">Audio / Text</button>
//           <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300">Video Call</button>
//         </div>

//         <h2 className="text-2xl font-semibold text-center mb-6">Video Consultation Packages</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//           {videoPackages.map((pkg, index) => (
//             <PackageCard key={index} {...pkg} />
//           ))}
//         </div>

//         <h2 className="text-2xl font-semibold text-center mb-6">Call/Chat Consultation Packages</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {chatPackages.map((pkg, index) => (
//             <PackageCard key={index} {...pkg} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TarotPackagesPage;












































// import React from 'react';
// import { motion } from 'framer-motion';
//  import International from '../../assets/intern.avif'
// const PackageCard = ({ title, price, duration, originalPrice, features, buttonText }) => (
//   <motion.div 
//     className="bg-white p-6 rounded-lg shadow-md"
//     whileHover={{ scale: 1.05 }}
//     transition={{ type: "spring", stiffness: 300 }}
//   >
//     <h3 className="text-xl font-semibold mb-2">{title}</h3>
//     <div className="text-3xl font-bold mb-1">${price}</div>
//     <div className="text-sm text-gray-500 mb-4">/{duration}-Minute</div>
//     <div className="text-sm line-through text-gray-400 mb-2">${originalPrice}/{duration} Mins</div>
//     <ul className="mb-4">
//       {features.map((feature, index) => (
//         <li key={index} className="flex items-start mb-2">
//           <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
//             <path d="M5 13l4 4L19 7"></path>
//           </svg>
//           {feature}
//         </li>
//       ))}
//     </ul>
//     <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300">
//       {buttonText}
//     </button>
//     <p className="text-xs text-gray-500 mt-2">Indian Visitors are requested to Book via Indian Pricing</p>
//   </motion.div>
// );

// const TarotPackagesPage = () => {
//   const videoPackages = [
//     {
//       title: "Quickfire Tarot",
//       price: 40,
//       duration: 30,
//       originalPrice: 50,
//       features: [
//         "Need help on pre-determined topics",
//         "Need short or Yes/No type answers",
//         "Need quick advice on current issues"
//       ],
//       buttonText: "Book a Session"
//     },
//     {
//       title: "Inneralign Tarot",
//       price: 60,
//       duration: 60,
//       originalPrice: 100,
//       features: [
//         "Need details on specific topics",
//         "Need help identifying root-cause",
//         "Need guidance for future challenges",
//         "Need an improvement action plan"
//       ],
//       buttonText: "Book a Session"
//     },
//     {
//       title: "Soulsync Tarot",
//       price: 80,
//       duration: 90,
//       originalPrice: 150,
//       features: [
//         "Need details on multiple topics",
//         "Need help resolving current challenges",
//         "Need healing and anxiety management",
//         "Need a vent and support system"
//       ],
//       buttonText: "Book a Session"
//     }
//   ];

//   const chatPackages = [
//     {
//       title: "Flexible Reading",
//       price: 30,
//       duration: 30,
//       originalPrice: 40,
//       features: [
//         "Need help on pre-determined topics",
//         "Need short or Yes/No type answers",
//         "Need quick advice on current issues"
//       ],
//       buttonText: "Book a Session"
//     },
//     {
//       title: "Tarot Spreads",
//       price: 45,
//       duration: 60,
//       originalPrice: 80,
//       features: [
//         "Need details on specific topics",
//         "Need help identifying root-cause",
//         "Need guidance for future challenges",
//         "Need an improvement action plan"
//       ],
//       buttonText: "Book a Session"
//     },
//     {
//       title: "Detailed Reading",
//       price: 60,
//       duration: 90,
//       originalPrice: 120,
//       features: [
//         "Need details on multiple topics",
//         "Need help resolving current challenges",
//         "Need healing and anxiety management",
//         "Need a vent and support system"
//       ],
//       buttonText: "Book a Session"
//     }
//   ];

//   return (
//     <div className="font-sans">
//       {/* Hero Section with Background Image */}
//       <motion.div 
//         className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-center p-4"
//         style={{backgroundImage: `url(${International})`}}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <div className="bg-white bg-opacity-80 p-8 rounded-lg max-w-3xl">
//           <h1 className="text-4xl md:text-5xl font-semibold mb-4">Explore Online Tarot Reading Packages</h1>
//           <p className="text-lg mb-4 text-gray-600">For International Clients only</p>
//           <p className="mb-6 text-gray-700">First of all, thank you for showing interest in tarot with lavanya!</p>
//           <p className="mb-8 text-gray-700">Secondly, please be assured that all packages have been curated carefully for the best tarot experience at probably the most affordable cost among top-rated tarot card readers in India.</p>
//           <div className="flex justify-center space-x-4">
//             <motion.button 
//               className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Audio / Text
//             </motion.button>
//             <motion.button 
//               className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Video Call
//             </motion.button>
//           </div>
//         </div>
//       </motion.div>

//       {/* Consultation Packages Section */}
//       <div className="bg-gray-100 py-16">
//         <div className="container mx-auto px-4">
//           <motion.h2 
//             className="text-3xl font-semibold text-center mb-12"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             Video Consultation Packages
//           </motion.h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//             {videoPackages.map((pkg, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <PackageCard {...pkg} />
//               </motion.div>
//             ))}
//           </div>

//           <motion.h2 
//             className="text-3xl font-semibold text-center mb-12"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             Call/Chat Consultation Packages
//           </motion.h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {chatPackages.map((pkg, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <PackageCard {...pkg} />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TarotPackagesPage;



const TarotPackagesPagesInr = () => {
  return (
    <div>
        <TarotPackagesPage/>
        <VideoVsChat/>
        <FAQMONEY/>
      
    </div>
  )
}

export default TarotPackagesPagesInr;
