import React from 'react';
import { motion } from 'framer-motion';

const TarotClasses = () => {
  const features = [
    'Learn Tarot Basics',
    'Reading Tarot Cards',
    'Advanced Spreads',
    'Understanding Major Arcana',
    'Practical Sessions with Real Cases',
  ];

  const pricingPlans = [
    {
      title: 'Beginner Class',
      price: '$49',
      description: 'Perfect for beginners starting their Tarot journey.',
      features: ['5 Live Sessions', 'Basic Tarot Reading', 'Certificate of Completion'],
    },
    {
      title: 'Advanced Class',
      price: '$99',
      description: 'Master advanced techniques and spreads.',
      features: ['10 Live Sessions', 'Advanced Tarot Spreads', 'Certificate of Mastery'],
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-purple-700">Join Our Tarot Classes</h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover the secrets of Tarot with our professional Tarot classes designed for all levels.
          </p>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Class Features</h2>
            <ul className="list-disc ml-6 text-gray-700">
              {features.map((feature, index) => (
                <li key={index} className="mb-2">{feature}</li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">What You Will Learn</h2>
            <p className="text-gray-700 leading-relaxed">
              Our Tarot classes cover everything from the basics to advanced spreads. You'll learn how to interpret cards, explore the meaning of different tarot suits, and master the major arcana. We offer practical sessions with real cases and live readings.
            </p>
          </div>
        </motion.div>

        {/* Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
            >
              <h3 className="text-xl font-bold mb-4 text-purple-700">{plan.title}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <h4 className="text-3xl font-semibold text-purple-500">{plan.price}</h4>
              <ul className="list-disc ml-6 mt-4 mb-6 text-gray-700">
                {plan.features.map((feature, index) => (
                  <li key={index} className="mb-2">{feature}</li>
                ))}
              </ul>
              <button className="bg-purple-500 text-white font-bold py-2 px-6 rounded hover:bg-purple-700 transition duration-300">
                Enroll Now
              </button>
            </div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-2">Who can join the Tarot classes?</h3>
              <p className="text-gray-600">Anyone interested in Tarot, from beginners to advanced learners, can join these classes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-2">Are there any prerequisites?</h3>
              <p className="text-gray-600">No prior knowledge is required for the beginner class. For advanced class, some experience in Tarot is recommended.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TarotClasses;
