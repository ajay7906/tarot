// import React from 'react';
// import { motion } from 'framer-motion';

// const PricingCard = ({ title, price, features }) => (
//   <motion.div 
//     whileHover={{ scale: 1.05 }}
//     className="bg-white rounded-lg shadow-xl p-6 m-4 flex flex-col justify-between"
//   >
//     <div>
//       <h3 className="text-2xl font-bold text-purple-700 mb-4">{title}</h3>
//       <p className="text-4xl font-bold mb-6">${price}</p>
//       <ul className="text-gray-600 mb-8">
//         {features.map((feature, index) => (
//           <li key={index} className="mb-2">✨ {feature}</li>
//         ))}
//       </ul>
//     </div>
//     <button className="bg-purple-600 text-white font-bold py-2 px-4 rounded-full hover:bg-purple-700 transition duration-300">
//       Choose Plan
//     </button>
//   </motion.div>
// );

// const Pricing = () => {
//   const plans = [
//     { title: "Basic", price: 29, features: ["1 Tarot Reading", "Email Support", "24/7 Access"] },
//     { title: "Premium", price: 59, features: ["3 Tarot Readings", "Priority Email Support", "24/7 Access", "Personal Insights"] },
//     { title: "Ultimate", price: 99, features: ["Unlimited Readings", "Priority Phone Support", "24/7 Access", "Personal Insights", "Monthly Report"] }
//   ];

//   return (
//     <section className="py-20 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center text-purple-800 mb-12">Choose Your Path</h2>
//         <div className="flex flex-wrap justify-center">
//           {plans.map((plan, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//               className="w-full md:w-1/3 lg:w-1/4"
//             >
//               <PricingCard {...plan} />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;















// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// // Pricing Card Component - Matches the design in the image
// const PricingCard = ({ title, price, duration, features }) => (
//   <motion.div 
//     whileHover={{ scale: 1.05 }}
//     className="bg-white rounded-lg shadow-xl p-6 m-4 flex flex-col justify-between max-w-sm"
//   >
//     <div>
//       {/* Title */}
//       <p className="text-sm font-medium text-gray-500 mb-2">Packages Start From</p>
//       <p className="text-4xl font-bold mb-1">₹{price}</p>
//       <p className="text-gray-500 mb-6">/{duration}</p>
//       {/* Consultation Type */}
//       <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
//       {/* Features */}
//       <ul className="text-gray-600">
//         {features.map((feature, index) => (
//           <li key={index} className="mb-2">✨ {feature}</li>
//         ))}
//       </ul>
//     </div>
//   </motion.div>
// );

// // Pricing Section with Toggle for Indian/International Prices
// const Pricing = () => {
//   // State to toggle between Indian and International Pricing
//   const [isIndian, setIsIndian] = useState(true);

//   // Indian Pricing Plans
//   const indianPlans = [
//     { title: "Chat/Audio Consultation", price: 900, duration: "30-Minute", features: [] },
//     { title: "Video Consultation", price: 1200, duration: "30-Minute", features: ["Face-to-Face Online Tarot Sessions"] }
//   ];

//   // International Pricing Plans
//   const internationalPlans = [
//     { title: "Chat/Audio Consultation", price: 50, duration: "30-Minute", features: [] },
//     { title: "Video Consultation", price: 75, duration: "30-Minute", features: ["Face-to-Face Online Tarot Sessions"] }
//   ];

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         {/* Section Title */}
//         <motion.h2
//           className="text-4xl font-bold text-center text-teal-700 mb-12"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           Consultation Packages
//         </motion.h2>

//         {/* Toggle Switch */}
//         <div className="flex justify-center items-center mb-8">
//           <span className="text-gray-700 font-bold">Indian</span>
//           <label className="mx-4 relative inline-flex items-center cursor-pointer">
//             <input
//               type="checkbox"
//               className="sr-only"
//               checked={!isIndian}
//               onChange={() => setIsIndian(!isIndian)}
//             />
//             <div className="w-12 h-6 bg-gray-200 rounded-full peer-checked:bg-teal-600 transition duration-300"></div>
//             <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform peer-checked:translate-x-6"></span>
//           </label>
//           <span className="text-gray-700 font-bold">International/NRI</span>
//         </div>

//         {/* Pricing Cards */}
//         <div className="flex flex-wrap justify-center">
//           {(isIndian ? indianPlans : internationalPlans).map((plan, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//               className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
//             >
//               <PricingCard {...plan} />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;


























// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const PricingCard = ({ title, price, currency, features }) => (
//   <motion.div 
//     whileHover={{ scale: 1.05 }}
//     className="bg-white rounded-lg shadow-xl p-6 m-4 flex flex-col justify-between"
//   >
//     <div>
//       {/* Plan Title */}
//       <h3 className="text-2xl font-bold text-purple-700 mb-4">{title}</h3>
//       {/* Plan Price */}
//       <p className="text-4xl font-bold mb-6">
//         {currency}{price}
//       </p>
//       {/* Plan Features */}
//       <ul className="text-gray-600 mb-8">
//         {features.map((feature, index) => (
//           <li key={index} className="mb-2">✨ {feature}</li>
//         ))}
//       </ul>
//     </div>
//     <button className="bg-purple-600 text-white font-bold py-2 px-4 rounded-full hover:bg-purple-700 transition duration-300">
//       Choose Plan
//     </button>
//   </motion.div>
// );

// const Pricing = () => {
//   const [isIndian, setIsIndian] = useState(true); // Toggle between Indian and International pricing

//   // Indian Pricing Plans (INR)
//   const indianPlans = [
//     { title: "Basic", price: 1500, currency: "₹", features: ["1 Tarot Reading", "Email Support", "24/7 Access"] },
//     { title: "Premium", price: 3500, currency: "₹", features: ["3 Tarot Readings", "Priority Email Support", "24/7 Access", "Personal Insights"] },
//     { title: "Ultimate", price: 7000, currency: "₹", features: ["Unlimited Readings", "Priority Phone Support", "24/7 Access", "Personal Insights", "Monthly Report"] }
//   ];

//   // International Pricing Plans (USD)
//   const internationalPlans = [
//     { title: "Basic", price: 50, currency: "$", features: ["1 Tarot Reading", "Email Support", "24/7 Access"] },
//     { title: "Premium", price: 100, currency: "$", features: ["3 Tarot Readings", "Priority Email Support", "24/7 Access", "Personal Insights"] },
//     { title: "Ultimate", price: 200, currency: "$", features: ["Unlimited Readings", "Priority Phone Support", "24/7 Access", "Personal Insights", "Monthly Report"] }
//   ];

//   return (
//     <section className="py-20 bg-gray-100">
//       <div className="container mx-auto px-4">
//         {/* Section Title */}
//         <h2 className="text-4xl font-bold text-center text-purple-800 mb-12">Choose Your Path</h2>

//         {/* Pricing Toggle (Indian vs International) */}
//         <div className="flex justify-center items-center mb-8">
//           <span className="text-gray-700 font-bold">Indian</span>
//           <label className="mx-4 relative inline-flex items-center cursor-pointer">
//             <input
//               type="checkbox"
//               className="sr-only"
//               checked={!isIndian}
//               onChange={() => setIsIndian(!isIndian)}
//             />
//             <div className="w-12 h-6 bg-gray-200 rounded-full peer-checked:bg-purple-600 transition duration-300"></div>
//             <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform peer-checked:translate-x-6"></span>
//           </label>
//           <span className="text-gray-700 font-bold">International/NRI</span>
//         </div>

//         {/* Pricing Cards */}
//         <div className="flex flex-wrap justify-center">
//           {(isIndian ? indianPlans : internationalPlans).map((plan, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//               className="w-full md:w-1/3 lg:w-1/4"
//             >
//               <PricingCard {...plan} />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;


























































// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const PricingCard = ({ title, price, currency, features }) => (
//   <motion.div 
//     whileHover={{ scale: 1.05 }}
//     className="bg-white rounded-lg shadow-xl p-6 m-4 flex flex-col justify-between"
//   >
//     <div>
//       {/* Plan Title */}
//       <h3 className="text-2xl font-bold text-purple-700 mb-4">{title}</h3>
//       {/* Plan Price */}
//       <p className="text-4xl font-bold mb-6">
//         {currency}{price}
//       </p>
//       {/* Plan Features */}
//       <ul className="text-gray-600 mb-8">
//         {features.map((feature, index) => (
//           <li key={index} className="mb-2">✨ {feature}</li>
//         ))}
//       </ul>
//     </div>
//     <button className="bg-purple-600 text-white font-bold py-2 px-4 rounded-full hover:bg-purple-700 transition duration-300">
//       Choose Plan
//     </button>
//   </motion.div>
// );

// const Pricing = () => {
//   const [isIndian, setIsIndian] = useState(true); // Toggle between Indian and International pricing

//   // Indian Pricing Plans (INR)
//   const indianPlans = [
//     { title: "Basic", price: 1500, currency: "₹", features: ["1 Tarot Reading", "Email Support", "24/7 Access"] },
//     { title: "Premium", price: 3500, currency: "₹", features: ["3 Tarot Readings", "Priority Email Support", "24/7 Access", "Personal Insights"] },
//     { title: "Ultimate", price: 7000, currency: "₹", features: ["Unlimited Readings", "Priority Phone Support", "24/7 Access", "Personal Insights", "Monthly Report"] }
//   ];

//   // International Pricing Plans (USD)
//   const internationalPlans = [
//     { title: "Basic", price: 50, currency: "$", features: ["1 Tarot Reading", "Email Support", "24/7 Access"] },
//     { title: "Premium", price: 100, currency: "$", features: ["3 Tarot Readings", "Priority Email Support", "24/7 Access", "Personal Insights"] },
//     { title: "Ultimate", price: 200, currency: "$", features: ["Unlimited Readings", "Priority Phone Support", "24/7 Access", "Personal Insights", "Monthly Report"] }
//   ];

//   return (
//     <section className="py-20 bg-gray-100">
//       <div className="container mx-auto px-4">
//         {/* Section Title */}
//         <h2 className="text-4xl font-bold text-center text-purple-800 mb-12">Choose Your Path</h2>

//         {/* Pricing Toggle (Indian vs International) */}
//         <div className="flex justify-center items-center mb-8">
//           <span className={`text-gray-700 font-bold ${isIndian ? 'text-purple-700' : ''}`}>Indian</span>
//           <label className="mx-4 relative inline-flex items-center cursor-pointer">
//             <input
//               type="checkbox"
//               className="sr-only"
//               checked={!isIndian}
//               onChange={() => setIsIndian(!isIndian)}
//             />
//             {/* Toggle Background - Changes color based on isIndian */}
//             <div className={`w-12 h-6 rounded-full transition duration-300 ${isIndian ? 'bg-purple-500' : 'bg-green-500'}`}></div>
//             {/* Toggle Circle - Changes direction based on isIndian */}
//             <span
//               className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 transform ${!isIndian ? 'translate-x-6' : ''}`}
//             ></span>
//           </label>
//           <span className={`text-gray-700 font-bold ${!isIndian ? 'text-green-700' : ''}`}>International/NRI</span>
//         </div>

//         {/* Pricing Cards */}
//         <div className="flex flex-wrap justify-center">
//           {(isIndian ? indianPlans : internationalPlans).map((plan, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//               className="w-full md:w-1/3 lg:w-1/4"
//             >
//               <PricingCard {...plan} />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;

































// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const PricingCard = ({ title, price, currency, features }) => (
//   <motion.div 
//     whileHover={{ scale: 1.05 }}
//     className="bg-white rounded-lg shadow-xl p-6 m-4 flex flex-col justify-between max-w-xs"
//   >
//     <div>
//       {/* Plan Title */}
//       <h3 className="text-xl font-bold text-green-700 mb-4">{title}</h3>
//       {/* Plan Price */}
//       <p className="text-4xl font-bold mb-6">
//         {currency}{price} <span className="text-sm">/30-Minute</span>
//       </p>
//       {/* Plan Features */}
//       <ul className="text-gray-600 mb-8">
//         {features.map((feature, index) => (
//           <li key={index} className="mb-2">✓ {feature}</li>
//         ))}
//       </ul>
//     </div>
//     <button className="bg-green-600 text-white font-bold py-2 px-4 rounded-full hover:bg-green-700 transition duration-300">
//       Book a Session
//     </button>
//   </motion.div>
// );

// const Pricing = () => {
//   const [isIndian, setIsIndian] = useState(true); // Toggle between Indian and International pricing

//   // Indian Pricing Plans (INR)
//   const indianPlans = [
//     { title: "Chat/Audio Consultation", price: 30, currency: "$", features: ["Accurate and straightforward answers", "Minimal energy support"] },
//     { title: "Video Consultation", price: 40, currency: "$", features: ["High-energy experience", "Support for focus"] },
//   ];

//   // International Pricing Plans (USD)
//   const internationalPlans = [
//     { title: "Chat/Audio Consultation", price: 1500, currency: "₹", features: ["Accurate and straightforward answers", "Minimal energy support"] },
//     { title: "Video Consultation", price: 2500, currency: "₹", features: ["High-energy experience", "Support for focus"] },
//   ];

//   return (
//     <section className="py-20 bg-gray-100">
//       <div className="container mx-auto px-4">
//         {/* Section Title */}
//         <h2 className="text-4xl font-bold text-center text-green-800 mb-12">Packages Start From</h2>

//         {/* Pricing Toggle (Indian vs International) */}
//         <div className="flex justify-center items-center mb-8">
//           <span className={`text-gray-700 font-bold ${isIndian ? 'text-green-700' : ''}`}>Indian</span>
//           <label className="mx-4 relative inline-flex items-center cursor-pointer">
//             <input
//               type="checkbox"
//               className="sr-only"
//               checked={!isIndian}
//               onChange={() => setIsIndian(!isIndian)}
//             />
//             {/* Toggle Background - Changes color based on isIndian */}
//             <div className={`w-12 h-6 rounded-full transition duration-300 ${isIndian ? 'bg-green-500' : 'bg-purple-500'}`}></div>
//             {/* Toggle Circle - Changes direction based on isIndian */}
//             <span
//               className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 transform ${!isIndian ? 'translate-x-6' : ''}`}
//             ></span>
//           </label>
//           <span className={`text-gray-700 font-bold ${!isIndian ? 'text-purple-700' : ''}`}>International/NRI</span>
//         </div>

//         {/* Pricing Cards */}
//         <div className="flex flex-wrap justify-center">
//           {(isIndian ? indianPlans : internationalPlans).map((plan, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//               className="w-full md:w-1/2 lg:w-1/3"
//             >
//               <PricingCard {...plan} />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;

























import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PricingCard = ({ title, price, currency, description, suitableFor, sessionDetails }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-lg shadow-xl p-6 m-4 flex flex-col justify-between max-w-xs"
  >
    <div>
      {/* Plan Title */}
      <h3 className="text-xl font-bold text-green-700 mb-4">{title}</h3>
      {/* Plan Price */}
      <p className="text-4xl font-bold mb-6">
        {currency}{price} <span className="text-sm">/30-Minute</span>
      </p>
      {/* Plan Description */}
      <p className="text-gray-700 mb-6">
        {description}
      </p>
      {/* Suitable For Section */}
      <h4 className="text-lg font-semibold text-green-600 mb-4">Suitable for those who:</h4>
      <ul className="text-gray-600 mb-8">
        {suitableFor.map((point, index) => (
          <li key={index} className="mb-2">✓ {point}</li>
        ))}
      </ul>
    </div>
    {/* Session Details */}
    <p className="text-gray-600 mb-6">{sessionDetails}</p>
    <button className="bg-green-600 text-white font-bold py-2 px-4 rounded-full hover:bg-green-700 transition duration-300">
      Book a Session
    </button>
  </motion.div>
);

const Pricing = () => {
  const [isIndian, setIsIndian] = useState(true); // Toggle between Indian and International pricing

  // Expanded Indian Pricing Plans (with more detailed content)
  const indianPlans = [
    {
      title: "Chat/Audio Consultation",
      price: 1500,
      currency: "₹",
      description: "Chat and Audio tarot sessions for those who are looking for accurate and straightforward answers and need minimal energy support.",
      suitableFor: [
        "Need detailed clarity without energy exchange",
        "Do not struggle with focus and low energy",
        "Do not need in-session intervention",
        "Need an improvement action plan"
      ],
      sessionDetails: "Need slot details? Connect through WhatsApp or email us at tarotbydeepa@gmail.com"
    },
    {
      title: "Video Consultation",
      price: 2500,
      currency: "₹",
      description: "A highly engaging session that focuses on providing guidance with a deep connection and higher energy support.",
      suitableFor: [
        "Need focused guidance on personal or professional matters",
        "Prefer visual interaction for better clarity",
        "Need a combination of clarity and energy support",
        "Desire real-time interventions during the session"
      ],
      sessionDetails: "For slot details, reach out to us via WhatsApp or email."
    },
    {
      title: "Extended Session (45-Min)",
      price: 3500,
      currency: "₹",
      description: "A comprehensive session with deeper focus on challenges and solutions, including an exclusive action plan for your personal growth.",
      suitableFor: [
        "Have multiple areas of life that need clarity",
        "Need more time to dive deep into issues",
        "Expect a detailed follow-up action plan",
        "Desire WhatsApp support for one week"
      ],
      sessionDetails: "For slot availability and details, connect through WhatsApp or email us at tarotbydeepa@gmail.com."
    }
  ];

  // International Pricing Plans
  const internationalPlans = [
    {
      title: "Chat/Audio Consultation",
      price: 30,
      currency: "$",
      description: "Chat and Audio tarot sessions for those who are looking for accurate and straightforward answers and need minimal energy support.",
      suitableFor: [
        "Need detailed clarity without energy exchange",
        "Do not struggle with focus and low energy",
        "Do not need in-session intervention",
        "Need an improvement action plan"
      ],
      sessionDetails: "Need slot details? Connect through WhatsApp or email us at tarotbydeepa@gmail.com"
    },
    {
      title: "Video Consultation",
      price: 40,
      currency: "$",
      description: "A highly engaging session that focuses on providing guidance with a deep connection and higher energy support.",
      suitableFor: [
        "Need focused guidance on personal or professional matters",
        "Prefer visual interaction for better clarity",
        "Need a combination of clarity and energy support",
        "Desire real-time interventions during the session"
      ],
      sessionDetails: "For slot details, reach out to us via WhatsApp or email."
    },
    {
      title: "Extended Session (45-Min)",
      price: 60,
      currency: "$",
      description: "A comprehensive session with deeper focus on challenges and solutions, including an exclusive action plan for your personal growth.",
      suitableFor: [
        "Have multiple areas of life that need clarity",
        "Need more time to dive deep into issues",
        "Expect a detailed follow-up action plan",
        "Desire WhatsApp support for one week"
      ],
      sessionDetails: "For slot availability and details, connect through WhatsApp or email us at tarotbydeepa@gmail.com."
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">Packages Start From</h2>

        {/* Pricing Toggle (Indian vs International) */}
        <div className="flex justify-center items-center mb-8">
          <span className={`text-gray-700 font-bold ${isIndian ? 'text-green-700' : ''}`}>Indian</span>
          <label className="mx-4 relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={!isIndian}
              onChange={() => setIsIndian(!isIndian)}
            />
            {/* Toggle Background */}
            <div className={`w-12 h-6 rounded-full transition duration-300 ${isIndian ? 'bg-green-500' : 'bg-purple-500'}`}></div>
            {/* Toggle Circle */}
            <span
              className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 transform ${!isIndian ? 'translate-x-6' : ''}`}
            ></span>
          </label>
          <span className={`text-gray-700 font-bold ${!isIndian ? 'text-purple-700' : ''}`}>International/NRI</span>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-wrap justify-center">
          {(isIndian ? indianPlans : internationalPlans).map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="w-full md:w-1/2 lg:w-1/3"
            >
              <PricingCard {...plan} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
