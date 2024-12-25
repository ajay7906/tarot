


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; 











const PricingCard = ({ title, price, currency, description, suitableFor, sessionDetails }) => {
  const navigate = useNavigate(); // Call useNavigate within the component

  const handleBooking = (currency) => {
    console.log(currency);
    if (currency === "₹") {
      navigate('/pricing/india');
    } else {
      navigate('/pricing/international');
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-xl p-6 m-4 flex flex-col justify-between max-w-xs"
    >
      <div>
        <h3 className="text-xl font-bold text-green-700 mb-4">{title}</h3>
        <p className="text-4xl font-bold mb-6">
          {currency}{price} <span className="text-sm">/{currency === "$" ? "30-Minute" : "1-Minute"}</span>
        </p>
        <p className="text-gray-700 mb-6">{description}</p>
        <h4 className="text-lg font-semibold text-green-600 mb-4">Suitable for those who:</h4>
        <ul className="text-gray-600 mb-8">
          {suitableFor.map((point, index) => (
            <li key={index} className="mb-2">✓ {point}</li>
          ))}
        </ul>
      </div>
      <p className="text-gray-600 mb-6">{sessionDetails}</p>
      <button
        className="bg-green-600 text-white font-bold py-2 px-4 rounded-full hover:bg-green-700 transition duration-300"
        onClick={() => handleBooking(currency)} // Call the function
      >
        Book a Session
      </button>
    </motion.div>
  );
};













const Pricing = () => {
  const [isIndian, setIsIndian] = useState(true); // Toggle between Indian and International pricing   
 
 
  
  const indianPlans = [
    {
      title: "Chat/Audio Consultation",
      price: 35,
      currency: "₹",
      description: "Chat and Audio tarot sessions for those who are looking for accurate and straightforward answers and need minimal energy support.",
      suitableFor: [
        "Need detailed clarity without energy exchange",
        "Do not struggle with focus and low energy",
        "Need a combination of clarity and energy support",
        "Do not need in-session intervention",
        "Need an improvement action plan",
        "3 short questions is free"
      ],
      sessionDetails: "Need slot details? Connect through WhatsApp or email us at tarotbydeepa@gmail.com"
    },
    {
      title: "Video Consultation",
      price: 50,
      currency: "₹",
      description: "A highly engaging session that focuses on providing guidance with a deep connection and higher energy support.",
      suitableFor: [
        "Need focused guidance on personal or professional matters",
        "Prefer visual interaction for better clarity",
        "Need a combination of clarity and energy support",
        "Desire real-time interventions during the session",
        "3 short questions is free"
      ],
      sessionDetails: "Need slot details? Connect through WhatsApp or email us at tarotbydeepa@gmail.com."
    },
    {
      title: "Extended Session (3-Min)",
      price: 75,
      currency: "₹",
      description: "A comprehensive session with deeper focus on challenges and solutions, including an exclusive action plan for your personal growth.",
      suitableFor: [
        "Have multiple areas of life that need clarity",
        "Need more time to dive deep into issues",
        "Expect a detailed follow-up action plan",
        "Desire WhatsApp support for one week",
        "3 short questions is free"
      ],
      sessionDetails: "Need slot details? Connect through WhatsApp or email us at tarotbydeepa@gmail.com."
    }
  ];

  // International Pricing Plans
  const internationalPlans = [
    {
      title: "Chat/Audio Consultation",
      price: 40,
      currency: "$",
      description: "Chat and Audio tarot sessions for those who are looking for accurate and straightforward answers and need minimal energy support.",
      suitableFor: [
        "Need detailed clarity without energy exchange",
        "Do not struggle with focus and low energy",
        "Do not need in-session intervention",
        "Need an improvement action plan",
        "3 short questions is free"
      ],
      sessionDetails: "Need slot details? Connect through WhatsApp or email us at tarotbydeepa@gmail.com"
    },
    {
      title: "Video Consultation",
      price: 60,
      currency: "$",
      description: "A highly engaging session that focuses on providing guidance with a deep connection and higher energy support.",
      suitableFor: [
        "Need focused guidance on personal or professional matters",
        "Prefer visual interaction for better clarity",
        "Need a combination of clarity and energy support",
        "Desire real-time interventions during the session",
        "3 short questions is free"
      ],
      sessionDetails: "For slot availability and details, connect through WhatsApp or email us at tarotbydeepa@gmail.com.l."
    },
    {
      title: "Extended Session (45-Min)",
      price: 80,
      currency: "$",
      description: "A comprehensive session with deeper focus on challenges and solutions, including an exclusive action plan for your personal growth.",
      suitableFor: [
        "Have multiple areas of life that need clarity",
        "Need more time to dive deep into issues",
        "Expect a detailed follow-up action plan",
        "Desire WhatsApp support for one week",
        "3 short questions is free"
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
