import React from 'react';
import { motion } from 'framer-motion';
import Third from '../../assets/third.jpeg'
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
            src={Third} 
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
             DeepaS is a Tarot Card Reader, Angel Card Reade Pranic healer, Numerologist, and psychologica healer and does Twin Heart Meditationg for several years. She has been a Pranic Healer for the last 8
              years and has also been doing Tarot card reading for the last 7 years. She has a great client base who regularly reach her for their predictions. Her predictions and healings are most accurate and effective as per the reviews of the clients. She wants to dedicate her life to serving needy and helpless people as much as she can. She combines all her studies and knowledge to give the perfect and accurate diagnosis of the client's problem. According to that, she gives fact-based effective remedies and solutions which are the turning points in the life of many people
            </motion.p>
            
            <motion.p 
              className="mb-4 text-indigo-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              
            </motion.p>
            
            <motion.p 
              className="text-indigo-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
             
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;