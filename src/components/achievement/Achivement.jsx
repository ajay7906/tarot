import React from 'react';
import { motion } from 'framer-motion';

const AchievementsComponent = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full space-y-8"
      >
        <h2 className="text-2xl font-semibold text-gray-400">Achievements</h2>
        <h1 className="text-5xl font-bold mb-12">High Fives and Praises All Around</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-blue-400">India's Best Tarot Blog by FeedSpot</h3>
            <p className="text-gray-300">tarotwithlavanya.com has been ranked among the top-20 tarot related platforms by Feedspot</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-blue-400">5-Star Average Rating</h3>
            <p className="text-gray-300">Lavanya has garnered over 1000 5-Star reviews and is ranked among the best tarot card readers in India.</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-blue-400">#1 Tarot Reader on Medium</h3>
            <p className="text-gray-300">Lavanya has been ranked the best tarot reader by Medium's writer Karla. The comparison was between 137 tarot readers in India.</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-blue-400">90%+ Return Rate</h3>
            <p className="text-gray-300">Tarot With Lavanya also boasts an amazing return rate among its clientele. This signifies the value and quality of the services provided.</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AchievementsComponent;