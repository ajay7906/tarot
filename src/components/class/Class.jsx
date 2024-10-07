import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Book, Star } from 'lucide-react';

const TarotClassPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Mystic Tarot Academy</h1>
          <p className="text-xl md:text-2xl">Unlock the secrets of the cards</p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Our Online Classes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg"
            >
              <Book className="w-12 h-12 mb-4 text-yellow-300" />
              <h3 className="text-2xl font-semibold mb-2">Tarot Fundamentals</h3>
              <p>Master the basics of tarot reading in this comprehensive course.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg"
            >
              <Star className="w-12 h-12 mb-4 text-yellow-300" />
              <h3 className="text-2xl font-semibold mb-2">Advanced Interpretations</h3>
              <p>Take your readings to the next level with advanced techniques.</p>
            </motion.div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Try Before You Buy</h2>
          <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">2-Day Free Demo</h3>
            <p className="mb-6">Experience our teaching style and course content with a free 2-day demo.</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 text-purple-900 font-bold py-3 px-6 rounded-full"
            >
              Start Your Free Demo
            </motion.button>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Beginner', 'Intermediate', 'Advanced'].map((level, index) => (
              <motion.div
                key={level}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg text-center"
              >
                <h3 className="text-2xl font-semibold mb-4">{level}</h3>
                <p className="text-3xl font-bold mb-4">${(index + 1) * 99}</p>
                <ul className="text-left mb-6">
                  <li className="mb-2">✔️ {4 + index * 2} weeks of lessons</li>
                  <li className="mb-2">✔️ {1 + index} 1-on-1 sessions</li>
                  <li className="mb-2">✔️ Course materials</li>
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-purple-500 text-white font-bold py-2 px-4 rounded-full"
                >
                  Enroll Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default TarotClassPage;