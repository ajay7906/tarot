









// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaReddit, FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from 'react-icons/fa';

// const AnimatedFooter = () => {
//   const socialIcons = [
//     { Icon: FaFacebook, href: 'https://www.facebook.com/share/7KzUh9k5HSevwxHs/' },
//     { Icon: FaInstagram, href: 'https://www.instagram.com/tarotbydeepaa/profilecard/?igsh=NWlxY3A5cW42YTM3' },
//     { Icon: FaYoutube, href: '#' },
//     { Icon: FaLinkedin, href: '#' },
//   ];

//   const footerLinks = [
//     { text: 'Contact Us', href: '#' },
//     { text: 'Privacy Policy', href: '/privacy' },
//     { text: 'Terms & Services', href: '/terms' },
//     { text: 'Refund Policy', href: '/refund' },
//   ];

//   return (
//     <footer className="bg-green-900 text-white py-8">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h3 className="text-xl font-semibold mb-4">Follow us:</h3>
//             <div className="flex space-x-4">
//               {socialIcons.map(({ Icon, href }, index) => (
//                 <motion.a
//                   key={index}
//                   href={href}
//                   whileHover={{ scale: 1.2, rotate: 360 }}
//                   whileTap={{ scale: 0.9 }}
//                   transition={{ type: 'spring', stiffness: 300 }}
//                 >
//                   <Icon className="text-2xl text-white hover:text-teal-300" />
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <h3 className="text-xl font-semibold mb-4">Contact</h3>
//             <motion.p
//               whileHover={{ scale: 1.05 }}
//               className="mb-2"
//             >
//               P: +91 95495 59778
//             </motion.p>
//             <motion.p
//               whileHover={{ scale: 1.05 }}
//               className="mb-2"
//             >
//               E: tarotbydeepa@gmail.com
//             </motion.p>
//             <motion.p
//               whileHover={{ scale: 1.05 }}
//             >
//               Address: 87 Himmat Nagar, Tonk Road,<br />
//               Jaipur, Gandhi Nagar,<br />
//               Rajasthan, 302015
//             </motion.p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//           >
//             <h3 className="text-xl font-semibold mb-4">Consult India's #1 tarot reader</h3>
//             <p className="mb-4">Life can be difficult, often confusing. Let Deepa help find an actionable plan that is realistic and achievable.</p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition duration-300"
//             >
//               Book your Session
//             </motion.button>
//           </motion.div>
//         </div>

//         <motion.hr 
//           className="my-8 border-green-700"
//           initial={{ scaleX: 0 }}
//           animate={{ scaleX: 1 }}
//           transition={{ duration: 0.5, delay: 0.6 }}
//         />

//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.8 }}
//           >
//             Copyright © 2024 Tarot With Deepa
//           </motion.p>
//           <motion.div
//             className="flex space-x-4 mt-4 md:mt-0"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 1 }}
//           >
//             {footerLinks.map((link, index) => (
//               <motion.a
//                 key={index}
//                 href={link.href}
//                 className="hover:text-teal-300 transition duration-300"
//                 whileHover={{ y: -2 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {link.text}
//               </motion.a>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default AnimatedFooter;






























import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaReddit, FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from 'react-icons/fa';

const AnimatedFooter = () => {
  const socialIcons = [
    { Icon: FaFacebook, href: 'https://www.facebook.com/share/7KzUh9k5HSevwxHs/' },
    { Icon: FaInstagram, href: 'https://www.instagram.com/tarotbydeepaa/profilecard/?igsh=NWlxY3A5cW42YTM3' },
    { Icon: FaYoutube, href: '#' },
    { Icon: FaLinkedin, href: '#' },
  ];

  const footerLinks = [
    { text: 'Contact Us', href: '#' },
    { text: 'Privacy Policy', href: '/privacy' },
    { text: 'Terms & Services', href: '/terms' },
    { text: 'Refund Policy', href: '/refund' },
  ];

  const MotionLink = motion(Link);

  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4">Follow us:</h3>
            <div className="flex space-x-4">
              {socialIcons.map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon className="text-2xl text-white hover:text-teal-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <motion.p
              whileHover={{ scale: 1.05 }}
              className="mb-2"
            >
              P: +91 95495 59778
            </motion.p>
            <motion.p
              whileHover={{ scale: 1.05 }}
              className="mb-2"
            >
              E: tarotbydeepa@gmail.com
            </motion.p>
            <motion.p
              whileHover={{ scale: 1.05 }}
            >
              Address: 87 Himmat Nagar, Tonk Road,<br />
              Jaipur, Gandhi Nagar,<br />
              Rajasthan, 302015
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4">Consult India's #1 tarot reader</h3>
            <p className="mb-4">Life can be difficult, often confusing. Let Deepa help find an actionable plan that is realistic and achievable.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition duration-300"
            >
              Book your Session
            </motion.button>
          </motion.div>
        </div>

        <motion.hr 
          className="my-8 border-green-700"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Copyright © 2024 Tarot With Deepa
          </motion.p>
          <motion.div
            className="flex space-x-4 mt-4 md:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            {footerLinks.map((link, index) => (
              <MotionLink
                key={index}
                to={link.href}
                className="hover:text-teal-300 transition duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.text}
              </MotionLink>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default AnimatedFooter;