import React from 'react';
import { motion } from 'framer-motion';

const ClientProfile = () => {
  return (
    <div className="w-full bg-indigo-50">
      <div className="max-w-4xl mx-auto p-6">
        <motion.h1 
          className="text-3xl font-bold mb-6 text-center text-indigo-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Lavanya
        </motion.h1>
        
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
          <motion.img 
            src="/api/placeholder/300/300" 
            alt="Profile" 
            className="w-64 h-64 rounded-full object-cover shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          
          <div className="flex-1">
            <motion.h2 
              className="text-2xl font-semibold mb-4 text-indigo-700"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Trusted, Reliable, Accurate and so on...
            </motion.h2>
            
            <motion.p 
              className="mb-4 text-indigo-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Bold claims can be risky. They often backfire and elicit surprised reactions. However, deep down, we all crave boldness sometimes.
            </motion.p>
            
            <motion.p 
              className="mb-4 text-indigo-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              After many of my sessions, clients often tell me "you are the best tarot reader we've worked with." While it initially felt like flattery, it's become more commonplace.
            </motion.p>
            
            <motion.p 
              className="text-indigo-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Apart from the general claims, Tarot With Lavanya stands out as the premier card reading service in India, offering accurate and insightful guidance. Led by Lavanya Arora, a highly intuitive tarot card reader, the platform combines traditional tarot interpretations with Lavanya's profound intuition to provide a distinctive experience.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;