import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/useContext';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user, logout, admin } = useAuth()
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const menuItems = ['Home', 'About', 'Price', 'Services', 'Contact'];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-teal-600">Tarot With Lavanya</span>
            </div>
          </div>
          <div className="hidden md:block">
            {/* <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:bg-teal-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item}
                </a>
              ))}

            </div> */}
            <div className='ml-10 flex item-baseline space-x-4'>


               <Link to='/' className='text-gray-600 hover:bg-teal-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Home</Link>
              
               <Link to='/class' className='text-gray-600 hover:bg-teal-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Class</Link>
               <Link to='/topic' className='text-gray-600 hover:bg-teal-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Topic</Link>
             {
              admin ? (
                <Link to='/admin' className='text-gray-600 hover:bg-teal-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Admin</Link>
              ) : 
              (
                <Link to='/blog' className='text-gray-600 hover:bg-teal-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Blog</Link>
              )
             }
               {user ? (
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:bg-teal-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
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

      {isOpen && (
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
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
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default NavBar;






