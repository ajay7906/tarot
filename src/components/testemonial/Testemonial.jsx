// import React from 'react';
// import { motion } from 'framer-motion';

// const TestimonialCard = ({ name, quote }) => (
//   <motion.div 
//     whileHover={{ scale: 1.05 }}
//     className="bg-white rounded-lg shadow-lg p-6 m-4"
//   >
//     <p className="text-gray-600 italic mb-4">"{quote}"</p>
//     <p className="text-purple-600 font-bold">- {name}</p>
//   </motion.div>
// );

// const Testimonials = () => {
//   const testimonials = [
//     { name: "Sarah J.", quote: "The tarot reading was incredibly insightful. It helped me gain clarity on my career path." },
//     { name: "Michael R.", quote: "I was skeptical at first, but the accuracy of my reading was astounding. Highly recommended!" },
//     { name: "Emma L.", quote: "The spiritual guidance I received was exactly what I needed during a difficult time in my life." }
//   ];

//   return (
//     <section className="py-20 bg-purple-100">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center text-purple-800 mb-12">What Our Clients Say</h2>
//         <div className="flex flex-wrap justify-center">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//               className="w-full md:w-1/2 lg:w-1/3"
//             >
//               <TestimonialCard {...testimonial} />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;


import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ name, quote }) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg p-6 m-4 w-80 flex-shrink-0"
  >
    <p className="text-gray-600 italic mb-4">"{quote}"</p>
    <p className="text-purple-600 font-bold">- {name}</p>
  </motion.div>
);

const Testimonials = () => {
  const testimonials = [
    { name: "Sarah J.", quote: "The tarot reading was incredibly insightful. It helped me gain clarity on my career path." },
    { name: "Michael R.", quote: "I was skeptical at first, but the accuracy of my reading was astounding. Highly recommended!" },
    { name: "Emma L.", quote: "The spiritual guidance I received was exactly what I needed during a difficult time in my life." },
    { name: "David K.", quote: "The energy healing session left me feeling refreshed and rejuvenated. A truly transformative experience." },
    { name: "Olivia P.", quote: "The astrological chart reading provided deep insights into my personality and life path." },
    { name: "Thomas W.", quote: "The meditation techniques I learned have greatly improved my daily mindfulness practice." },
    { name: "Sophia C.", quote: "The crystal healing session was both relaxing and enlightening. I felt a positive shift in my energy." },
  ];

  return (
    <section className="py-20 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-purple-800 mb-12">What Our Clients Say</h2>
        <motion.div 
          className="flex"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;