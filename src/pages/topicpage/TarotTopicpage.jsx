// import React from 'react';
// import { motion } from 'framer-motion';

// const TarotTopics = () => {
//   const topics = [
//     {
//       title: "Love & Relationships",
//       description: "Gain insights into your romantic life and personal connections, guiding you towards a more fulfilling relationship with your partner or potential loved ones.",
//       icon: "❤️",
//       image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&fit=crop&w=500&h=500",  // Placeholder image URL
//     },
//     {
//       title: "Career & Finance",
//       description: "Navigate your professional path and financial decisions with ease. This reading helps you uncover opportunities or challenges in your career and wealth management.",
//       icon: "💼",
//       image: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?crop=entropy&fit=crop&w=500&h=500",  // Placeholder image URL
//     },
//     {
//       title: "Personal Growth",
//       description: "Discover opportunities for self-improvement, spiritual development, and emotional balance. Tarot helps you understand your personal growth journey and ways to overcome challenges.",
//       icon: "🌱",
//       image: "https://images.unsplash.com/photo-1514846355013-f5cc2a0146df?crop=entropy&fit=crop&w=500&h=500",  // Placeholder image URL
//     },
//     {
//       title: "Life Path",
//       description: "Understand your life's purpose and gain clarity on future directions. Tarot guides you through your life's journey, making it easier to identify your soul’s true calling.",
//       icon: "🛤️",
//       image: "https://images.unsplash.com/photo-1523206489230-c012ac1d5d2f?crop=entropy&fit=crop&w=500&h=500",  // Placeholder image URL
//     },
//     {
//       title: "Healing",
//       description: "Find guidance for physical, emotional, and spiritual healing processes. Tarot offers a path to recovery and well-being, addressing areas in need of attention and care.",
//       icon: "🌟",
//       image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?crop=entropy&fit=crop&w=500&h=500",  // Placeholder image URL
//     },
//   ];

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: 'easeInOut' }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl font-bold text-purple-800 mb-4">Explore Tarot Topics</h2>
//           <p className="text-lg text-gray-600">Dive deep into different aspects of your life and gain clarity with our detailed Tarot readings.</p>
//         </motion.div>

//         {/* Topic Cards */}
//         <div className="flex flex-wrap justify-center">
//           {topics.map((topic, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//               className="w-full md:w-1/2 lg:w-1/4"
//             >
//               <div className="bg-white rounded-lg shadow-lg p-6 m-4 flex flex-col items-center">
//                 <motion.img
//                   src={topic.image}
//                   alt={topic.title}
//                   className="rounded-md mb-4 w-32 h-32 object-cover"
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5 }}
//                 />
//                 <div className="text-4xl mb-4">{topic.icon}</div>
//                 <h3 className="text-xl font-bold text-purple-700 mb-2">{topic.title}</h3>
//                 <p className="text-gray-600 text-center">{topic.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TarotTopics;


import React from 'react';
import { motion } from 'framer-motion';

const TarotTopics = () => {
  const topics = [
    {
      title: "Love & Relationships",
      description: "Gain insights into your romantic life and personal connections. Tarot readings on love can reveal the hidden dynamics in your relationships, offering clarity on how to foster deeper connections with your partner or even attract new love. Whether you're single, in a relationship, or experiencing emotional challenges, tarot can help guide you to make informed decisions and bring harmony into your romantic life.",
      icon: "❤️",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&fit=crop&w=500&h=500",  // Placeholder image URL
    },
    {
      title: "Career & Finance",
      description: "Navigate your professional path and financial decisions with tarot. Discover how to achieve growth, overcome career blocks, and identify new opportunities for financial success. Tarot readings for career provide clarity on your current work challenges, how to maximize your earning potential, and make informed decisions about business ventures or job changes. With this reading, you can align your career path with your true aspirations.",
      icon: "💼",
      image: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?crop=entropy&fit=crop&w=500&h=500",  // Placeholder image URL
    },
    {
      title: "Personal Growth",
      description: "Tarot is an excellent tool for self-reflection and personal development. By exploring your inner thoughts and emotions, you can uncover new ways to improve yourself and evolve spiritually. This reading focuses on understanding your personal blocks, strengths, and the steps needed to achieve your full potential. Personal growth tarot readings guide you in aligning with your higher self and exploring your unique talents and purpose.",
      icon: "🌱",
      image: "https://images.unsplash.com/photo-1514846355013-f5cc2a0146df?crop=entropy&fit=crop&w=500&h=500",  // Placeholder image URL
    },
    {
      title: "Life Path",
      description: "Discover your true life's purpose and gain direction with a life path tarot reading. Whether you're feeling lost or at a crossroads, tarot can help you clarify the next steps on your spiritual and material journey. This reading can assist in identifying your soul’s mission, long-term goals, and the challenges you may encounter along the way. It’s perfect for anyone seeking clarity on their future.",
      icon: "🛤️",
      image: "https://images.unsplash.com/photo-1523206489230-c012ac1d5d2f?crop=entropy&fit=crop&w=500&h=500",  // Placeholder image URL
    },
    {
      title: "Healing",
      description: "Healing tarot readings help guide you through physical, emotional, and spiritual healing processes. This reading offers insight into how to recover from trauma, grief, and illness. Whether you're looking for guidance on overcoming mental health struggles, emotional wounds, or spiritual blockages, healing tarot helps you find the peace, balance, and rejuvenation needed to move forward and restore harmony in your life.",
      icon: "🌟",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?crop=entropy&fit=crop&w=500&h=500",  // Placeholder image URL
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-purple-800 mb-4">Explore Tarot Topics</h2>
          <p className="text-lg text-gray-600">Dive deep into different aspects of your life and gain clarity with our detailed Tarot readings.</p>
        </motion.div>

        {/* Topic Cards */}
        <div className="flex flex-wrap justify-center">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="w-full md:w-1/2 lg:w-1/4"
            >
              <div className="bg-white rounded-lg shadow-lg p-6 m-4 flex flex-col items-center">
                <motion.img
                  src={topic.image}
                  alt={topic.title}
                  className="rounded-md mb-4 w-40 h-40 object-cover"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="text-4xl mb-4">{topic.icon}</div>
                <h3 className="text-xl font-bold text-purple-700 mb-2 text-center">{topic.title}</h3>
                <p className="text-gray-600 text-center mb-4">{topic.description}</p>
                <button className="px-6 py-2 bg-purple-700 text-white rounded-full hover:bg-purple-600 transition-all duration-300 ease-in-out">
                  Book a Session
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TarotTopics;
