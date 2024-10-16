import React from 'react';
import { motion } from 'framer-motion';

const SessionExperience = () => {
  const steps = [
    {
      icon: (
        <svg className="w-16 h-16 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="#4a9f88" strokeWidth="1">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M6 12h12" />
          <path d="M12 6v12" />
        </svg>
      ),
      title: "We will first relax your mind and establish an energy connect",
    },
    {
      icon: (
        <svg className="w-16 h-16 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="#4a9f88" strokeWidth="1">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M12 16l4-4-4-4" />
          <path d="M8 12h8" />
        </svg>
      ),
      title: "We will address all your questions and help you refocus on the right things",
    },
    {
      icon: (
        <svg className="w-16 h-16 mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="#4a9f88" strokeWidth="1">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M8 12s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      ),
      title: "We will end the session with an action plan that will help you rediscover the real you",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen font-serif text-gray-700">
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-green-600 text-center text-xl mb-4"
        >
          Session Experience
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800"
        >
          Relax, Refocus, & Rediscover
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center max-w-2xl mx-auto mb-8 text-lg text-gray-600"
        >
          Online Tarot Consultations with TWL go above and beyond the realm of
          "answering questions." My goal is to help you become a better, more
          informed, and confident person than you were before the session.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center mb-16"
        >
          <button className="bg-orange-400 text-white px-6 py-3 rounded-full hover:bg-orange-500 transition duration-300">
            Book A Session
          </button>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * (index + 4) }}
              className="text-center p-6 border border-green-100 rounded-lg"
            >
              <div className="text-green-600 mb-4">{step.icon}</div>
              <p className="text-lg text-gray-700">{step.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SessionExperience;