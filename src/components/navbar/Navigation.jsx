






import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/useContext';
import { ChevronDown } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [isTopicOpen, setIsTopicOpen] = useState(false); // New state for "Topic" dropdown
  const { user, logout, admin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const menuItems = ['Home', 'Contact'];
  const pricingOptions = [
    { name: 'International', path: '/pricing/international' },
    { name: 'India', path: '/pricing/india' },
   
  ];

  const tarotOptions = [
    { name: 'Love & Relationship', path: '/topic/relationship' },
    { name: 'Career & Finance', path: '/topic/career' },
    { name: 'Personal Growth', path: '/topic/personal' },
    { name: 'Healing', path: '/topic/healing' },
  ];

  return (
    <nav className="bg-gray-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-teal-600">Tarot With Deepa</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to='/' className='text-gray-600 hover:bg-teal-500 hover:text-white px-3 py-2 rounded-md text-base md:text-lg font-medium'>Home</Link>
              
              {/* Pricing Dropdown */}
              <div className="relative" onMouseEnter={() => setIsPricingOpen(true)} onMouseLeave={() => setIsPricingOpen(false)}>
                <button className="text-gray-600 hover:bg-teal-500 hover:text-white px-3 py-2 rounded-md text-base md:text-lg font-medium flex items-center">
                  Pricing
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <AnimatePresence>
                  {isPricingOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute z-10 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    >
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {pricingOptions.map((option) => (
                          <Link
                            key={option.name}
                            to={option.path}
                            className="block px-4 py-2 text-base md:text-lg text-gray-700 hover:bg-teal-500 hover:text-white"
                            role="menuitem"
                          >
                            {option.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Topic Dropdown */}
              <div className="relative" onMouseEnter={() => setIsTopicOpen(true)} onMouseLeave={() => setIsTopicOpen(false)}>
                <button className="text-gray-600 hover:bg-teal-500 hover:text-white px-3 py-2 rounded-md text-base md:text-lg font-medium flex items-center">
                  Topic
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <AnimatePresence>
                  {isTopicOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute z-10 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    >
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {tarotOptions.map((option) => (
                          <Link
                            key={option.name}
                            to={option.path}
                            className="block px-4 py-2 text-base md:text-lg text-gray-700 hover:bg-teal-500 hover:text-white"
                            role="menuitem"
                          >
                            {option.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to='/class' className='text-gray-600 hover:bg-teal-500 hover:text-white px-3 py-2 rounded-md text-base md:text-lg font-medium'>Class</Link>
              
              {admin ? (
                <Link to='/admin' className='text-gray-600 hover:bg-teal-500 hover:text-white px-3 py-2 rounded-md text-base md:text-lg font-medium'>Admin</Link>
              ) : (
                <Link to='/blog' className='text-gray-600 hover:bg-teal-500 hover:text-white px-3 py-2 rounded-md text-base md:text-lg font-medium'>Blog</Link>
              )}
              
              {user ? (
                <button
                  onClick={handleLogout}
                  className="text-gray-600 hover:bg-teal-500 hover:text-white px-3 py-2 rounded-md text-base md:text-lg font-medium"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to='/login'
                  className="text-gray-600 hover:bg-teal-500 hover:text-white px-3 py-2 rounded-md text-base md:text-lg font-medium"
                >
                  Login
                </Link>
              )}
               <Link to='/guidance' className='text-gray-600 hover:bg-teal-500 hover:text-white px-3 py-2 rounded-md text-base md:text-lg font-medium'>Guidance</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:bg-teal-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item}
                </a>
              ))}
              
              {/* Mobile Pricing Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setIsPricingOpen(!isPricingOpen)}
                  className="text-gray-600 hover:bg-teal-500 hover:text-white px-3 py-2 rounded-md text-base font-medium w-full flex items-center"
                >
                  Pricing
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <AnimatePresence>
                  {isPricingOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-2"
                    >
                      <div className="py-1">
                        {pricingOptions.map((option) => (
                          <Link
                            key={option.name}
                            to={option.path}
                            className="block px-4 py-2 text-base md:text-lg text-gray-700 hover:bg-teal-500 hover:text-white"
                            role="menuitem"
                          >
                            {option.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Topic Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setIsTopicOpen(!isTopicOpen)}
                  className="text-gray-600 hover:bg-teal-500 hover:text-white px-3 py-2 rounded-md text-base font-medium w-full flex items-center"
                >
                  Topic
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <AnimatePresence>
                  {isTopicOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-2"
                    >
                      <div className="py-1">
                        {tarotOptions.map((option) => (
                          <Link
                            key={option.name}
                            to={option.path}
                            className="block px-4 py-2 text-base md:text-lg text-gray-700 hover:bg-teal-500 hover:text-white"
                            role="menuitem"
                          >
                            {option.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to='/class'
                className="text-gray-600 hover:bg-teal-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Class
              </Link>
              
              {user ? (
                <button
                  onClick={handleLogout}
                  className="text-gray-600 hover:bg-teal-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to='/login'
                  className="text-gray-600 hover:bg-teal-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Login
                </Link>
              )}
               <Link
                to='/guidance'
                className="text-gray-600 hover:bg-teal-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Guidance
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;





























