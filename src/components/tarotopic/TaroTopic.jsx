import React from 'react';
import { motion } from 'framer-motion';

const TopicCard = ({ title, description, icon }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-lg shadow-lg p-6 m-4 flex flex-col items-center"
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-purple-700 mb-2">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </motion.div>
);

const TarotTopics = () => {
  const topics = [
    { title: "Love & Relationships", description: "Gain insights into your romantic life and personal connections.", icon: "❤️" },
    { title: "Career & Finance", description: "Navigate your professional path and financial decisions for success.", icon: "💼" },
    { title: "Personal Growth", description: "Discover opportunities for self-improvement and spiritual development.", icon: "🌱" },
  
    { title: "Healing", description: "Find guidance for physical, emotional, and spiritual healing processes.", icon: "🌟" }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-purple-800 mb-12">Explore Tarot Topics</h2>
        <div className="flex flex-wrap justify-center">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="w-full md:w-1/2 lg:w-1/5"
            >
              <TopicCard {...topic} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TarotTopics;