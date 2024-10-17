// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import First from '../../assets/first.jpeg';
// import Second from '../../assets/second.jpeg';
// const FAQItem = ({ question, children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="border-b border-gray-200 py-4"
//     >
//       <button
//         className="flex justify-between items-center w-full text-left"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span className="text-lg font-medium">{question}</span>
//         <motion.span
//           animate={{ rotate: isOpen ? 45 : 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           +
//         </motion.span>
//       </button>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: 'auto', opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="mt-2 text-gray-600"
//           >
//             {children}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// const AnimatedFAQComponent = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br bg-gray-100 p-4 md:p-8 flex flex-col md:flex-row items-center justify-center">
//       <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="relative"
//         >
//           <motion.img
//             src={First}
//             alt="Tarot reader 1"
//             className="w-64 h-64 object-cover rounded-full shadow-lg z-10 relative"
//             whileHover={{ scale: 1.05 }}
//           />
//           <motion.img
//             src={Second}
//             alt="Tarot reader 2"
//             className="w-64 h-64 object-cover rounded-full shadow-lg absolute top-32 left-32"
//             whileHover={{ scale: 1.05 }}
//           />
//         </motion.div>
//       </div>
//       <div className="w-full md:w-1/2">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-2xl font-semibold text-gray-600 mb-2"
//         >
//           FAQs
//         </motion.h2>
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="text-4xl font-bold text-gray-800 mb-6"
//         >
//           Everything Tarot, Answered
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           className="text-gray-600 mb-8"
//         >
//           Here are some common questions that people generally ask about tarot reading
//         </motion.p>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6 }}
//           className="space-y-4"
//         >
//           <FAQItem question="How can Tarot Reading help me?">
//             Tarot reading can provide insight, guidance, and a fresh perspective on your life situations.
//           </FAQItem>
//           <FAQItem question="Can Tarot Reading help with my Mental Health?">
//             While not a substitute for professional help, tarot can offer emotional support and self-reflection.
//           </FAQItem>
//           <FAQItem question="Why Should I Consult with Tarot Readers Online?">
//             Online consultations offer convenience, privacy, and access to a wide range of experienced readers.
//           </FAQItem>
//           <FAQItem question="Who Should Consult Tarot?">
//             Anyone seeking guidance, clarity, or a new perspective on their life can benefit from tarot readings.
//           </FAQItem>
//           <FAQItem question="Is Tarot Reading Renowned?">
//             Tarot has been practiced for centuries and is respected in many cultures as a tool for insight and guidance.
//           </FAQItem>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default AnimatedFAQComponent;















































import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import First from '../../assets/first.jpeg';
import Second from '../../assets/second.jpeg';

const FAQItem = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="border-b border-gray-200 py-4"
    >
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 text-gray-600"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const AnimatedFAQComponent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br bg-gray-100 p-4 md:p-8 flex flex-col md:flex-row items-center justify-center">
      <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-xs mx-auto md:max-w-none"
        >
          <motion.img
            src={First}
            alt="Tarot reader 1"
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-lg z-10 relative mx-auto md:mx-0"
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            src={Second}
            alt="Tarot reader 2"
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-lg absolute top-16 left-1/2 md:top-32 md:left-32 transform -translate-x-1/2 md:-translate-x-0"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </div>
      <div className="w-full md:w-1/2">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-semibold text-gray-600 mb-2"
        >
          FAQs
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-gray-800 mb-6"
        >
          Everything Tarot, Answered
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 mb-8"
        >
          Here are some common questions that people generally ask about tarot reading
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-4"
        >
          <FAQItem question="How can Tarot Reading help me?">
            Tarot reading can provide insight, guidance, and a fresh perspective on your life situations.
          </FAQItem>
          <FAQItem question="Can Tarot Reading help with my Mental Health?">
            While not a substitute for professional help, tarot can offer emotional support and self-reflection.
          </FAQItem>
          <FAQItem question="Why Should I Consult with Tarot Readers Online?">
            Online consultations offer convenience, privacy, and access to a wide range of experienced readers.
          </FAQItem>
          <FAQItem question="Who Should Consult Tarot?">
            Anyone seeking guidance, clarity, or a new perspective on their life can benefit from tarot readings.
          </FAQItem>
          <FAQItem question="Is Tarot Reading Renowned?">
            Tarot has been practiced for centuries and is respected in many cultures as a tool for insight and guidance.
          </FAQItem>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedFAQComponent;