import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CareerGuidance = () => {
  const careerServices = [
    {
      title: "Explore Career Opportunities",
      description: "While having a multitude of options is a great advantage. Trough tarot cards I can assist you in making informed decisions regarding what career opportunities do you need to consider more closely."
    },
    {
      title: "Prepare for Appraisals and Promotions",
      description: "Promotions and Appraisals can be tricky and sometimes even exploitative. Emphasizing your contributions is crucial, and I can help you craft a script that maximizes your chances for success."
    },
    {
      title: "Deal with Office Politics",
      description: "Navigate the intricate landscape of office politics with tact and resilience. Learn to navigate interpersonal dynamics, build strategic alliances, and effectively manage conflicts for a harmonious and successful work environment.."
    },
    {
      title: "Be Interview Ready",
      description: "Ace your interviews by crafting compelling responses to mastering body language. With the power of tarot cards, I can hep you boost your confidence and equip you with the skills to make a lasting impression on potential employers.."
    }
  ];

  return (
    <div className="container px-12 py-16 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-16">Career Guidance</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {careerServices.map((service, index) => (
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

export default CareerGuidance;