



import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import International from '../../assets/intern.avif'
import { useNavigate } from 'react-router-dom';

const PackageCard = ({ title, price, duration, originalPrice, features, buttonText }) => (

  <motion.div 
    className="bg-white p-6 rounded-lg shadow-md"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <h3 className="text-xl font-semibold mb-2 font-playfair">{title}</h3>
    <div className="text-3xl font-bold mb-1 font-playfair">₹{price}</div>
    <div className="text-sm text-gray-500 mb-4">/{duration}-Minute</div>
    <div className="text-sm line-through text-gray-400 mb-2">₹{originalPrice}/{duration} Mins</div>
    <ul className="mb-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start mb-2">
          <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M5 13l4 4L19 7"></path>
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300 font-semibold">
      {buttonText}
    </button>
    <p className="text-xs text-gray-500 mt-2">International Visitors are requested to Book via International Pricing</p>
  </motion.div>
);

const TarotPackagesPageIndia = () => {
  const navigate = useNavigate();
  const handleBooking = (data) => {
    console.log(data);
    
    navigate('/payment',
      {
        state:{
          data

        }
      }
    )
  }
  const videoPackages = [
    {
      title: "flexible reading me",
      price: 50,
      duration: 1,
      originalPrice: 70,
      features: [
        "Starting 5 min is free",
        "Need help on pre-determined topics",
        "Need short or Yes/No type answers",
        "Need quick advice on current issues",
        "Need quick advice on upcoming challenges",
        "3 short questions is free"
      ],
      buttonText: "Book a Session"
    },
    {
      title: "tarot spread me",
      price: 25,
      duration: 1,
      originalPrice: 40,
      features: [
        "Need details on specific topics",
        "Need help identifying root-cause",
        "Need guidance for future challenges",
        "Need an improvement action plan",
         "3 short questions is free"
      ],
      buttonText: "Book a Session"
    },
    {
      title: "detailed reading",
      price: 75,
      duration: 1,
      originalPrice: 150,
      features: [
        "Starting 5 min is free",
        "Need details on multiple topics",
        "Need help resolving current challenges",
        "Need healing and anxiety management",
        "Need a vent and support system",
         "3 short questions is free"
      ],
      buttonText: "Book a Session"
    }
  ];

  const chatPackages = [
    {
      title: "flexible reading me",
      price: 50,
      duration: 1,
      originalPrice: 70,
      features: [
        "Starting 5 min is free",
        "Need help on pre-determined topics",
        "Need short or Yes/No type answers",
        "Need quick advice on current issues",
        "Need guidance on future challenges",
         "3 short questions is free"
      ],
      buttonText: "Book a Session"
    },
    {
      title: "tarot spread me",
      price: 25,
      duration: 1,
      originalPrice: 40,
      features: [
        "Need details on specific topics",
        "Need help identifying root-cause",
        "Need guidance for future challenges",
        "Need an improvement action plan",
         "3 short questions is free"
      ],
      buttonText: "Book a Session"
    },
    {
      title: "detailed reading",
      price: 75,
      duration: 1,
      originalPrice: 150,
      features: [
        "Starting 5 min is free",
        "Need details on multiple topics",
        "Need help resolving current challenges",
        "Need healing and anxiety management",
        "Need a vent and support system",
         "3 short questions is free"
      ],
      buttonText: "Book a Session"
    }
  ];

  const videoSectionRef = useRef(null);
  const audioSectionRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-lato">
      {/* Hero Section with Background Image */}
      <motion.div 
        className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-center p-4"
        style={{backgroundImage: `url(${International})`}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-white bg-opacity-50 p-8 rounded-lg max-w-3xl w-full">
          <h1 className="text-4xl md:text-5xl font-playfair font-semibold mb-4">Explore Online Tarot Reading Packages</h1>
          <p className="text-lg mb-4 text-gray-600">For Indian Clients only</p>
          <p className="mb-6 text-gray-700">First of all, thank you for showing interest in tarot by Deepa!</p>
          <p className="mb-8 text-gray-700">Secondly, please be assured that all packages have been curated carefully for the best tarot experience at probably the most affordable cost among top-rated tarot card readers in India.</p>
          <div className="flex justify-center space-x-4">
            <motion.button 
              className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition duration-300 font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(audioSectionRef)}
            >
              Audio / Text
            </motion.button>
            <motion.button 
              className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition duration-300 font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(videoSectionRef)}
            >
              Video Call
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Consultation Packages Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            ref={videoSectionRef}
            className="text-3xl font-playfair font-semibold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Video Consultation Packages
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {videoPackages.map((pkg, index) => (
              <motion.div
                key={index}
                onClick={()=>handleBooking(pkg)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PackageCard {...pkg} />
              </motion.div>
            ))}
          </div>

          <motion.h2 
            ref={audioSectionRef}
            className="text-3xl font-playfair font-semibold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Call/Chat Consultation Packages
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chatPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PackageCard {...pkg} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarotPackagesPageIndia;







