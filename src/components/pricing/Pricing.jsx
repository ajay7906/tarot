import React from 'react';
import { motion } from 'framer-motion';

const PricingCard = ({ title, price, features }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-lg shadow-xl p-6 m-4 flex flex-col justify-between"
  >
    <div>
      <h3 className="text-2xl font-bold text-purple-700 mb-4">{title}</h3>
      <p className="text-4xl font-bold mb-6">${price}</p>
      <ul className="text-gray-600 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="mb-2">✨ {feature}</li>
        ))}
      </ul>
    </div>
    <button className="bg-purple-600 text-white font-bold py-2 px-4 rounded-full hover:bg-purple-700 transition duration-300">
      Choose Plan
    </button>
  </motion.div>
);

const Pricing = () => {
  const plans = [
    { title: "Basic", price: 29, features: ["1 Tarot Reading", "Email Support", "24/7 Access"] },
    { title: "Premium", price: 59, features: ["3 Tarot Readings", "Priority Email Support", "24/7 Access", "Personal Insights"] },
    { title: "Ultimate", price: 99, features: ["Unlimited Readings", "Priority Phone Support", "24/7 Access", "Personal Insights", "Monthly Report"] }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-purple-800 mb-12">Choose Your Path</h2>
        <div className="flex flex-wrap justify-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="w-full md:w-1/3 lg:w-1/4"
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