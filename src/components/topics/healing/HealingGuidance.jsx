import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HealingGuidance = () => {
  const healingServices = [
    {
      title: "Emotional Healing",
      description: "Process and release emotional trauma for improved well-being. Our approach combines various therapeutic techniques to help you navigate through past hurts and current challenges. Learn to identify and understand your emotional patterns, develop healthy coping mechanisms, and cultivate emotional resilience. Through guided sessions, you'll work towards achieving emotional balance, fostering self-compassion, and creating a more positive outlook on life."
    },
    {
      title: "Physical Wellness",
      description: "Discover holistic approaches to enhance your physical health. We offer guidance on nutrition, exercise, and lifestyle changes tailored to your individual needs and goals. Learn about the mind-body connection and how it impacts your overall health. Explore natural remedies and alternative therapies that complement traditional medicine. Our comprehensive approach aims to boost your energy levels, improve your immune system, and help you achieve optimal physical well-being."
    },
    {
      title: "Spiritual Growth",
      description: "Explore practices to deepen your spiritual connection and awareness. Whether you're new to spirituality or looking to expand your existing practice, we provide tools and techniques to help you on your journey. Discover meditation and mindfulness practices, learn about different spiritual traditions, and find ways to incorporate spirituality into your daily life. Our guidance aims to help you find meaning, purpose, and a sense of connection to something greater than yourself."
    },
    {
      title: "Energy Balancing",
      description: "Learn techniques to harmonize your body's energy systems. We introduce you to various energy healing modalities such as Reiki, chakra balancing, and acupressure. Understand the concept of life force energy and how it flows through your body. Learn to identify energy blockages and imbalances, and discover techniques to clear and align your energy centers. Through regular practice, you can enhance your vitality, reduce stress, and promote overall wellness on energetic and physical levels."
    }
  ];

  return (
    <div className="container  px-12 py-16 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-16">Healing</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {healingServices.map((service, index) => (
          <motion.div 
            key={index}
            className="bg-white p-8 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-xl font-semibold text-gray-400">0{index + 1}.</span>
            <h3 className="text-2xl font-bold mt-2 mb-4">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <button className="text-orange-500 font-semibold flex items-center">
             <Link to='/pricing/india'> Book Now</Link>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HealingGuidance;