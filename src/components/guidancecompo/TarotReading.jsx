import React, { useState } from 'react';
import { motion } from 'framer-motion';

const tarotCards = [
  {
    id: 1,
    name: 'Wheel of Fortune',
    image: 'https://example.com/wheel-of-fortune.jpg',
    answer: 'Maybe',
    shortDescription: 'Change, cycles, and fate.',
    genericMeaning: 'The Wheel of Fortune represents the cycles of life, change, and destiny. It reminds you that life is constantly in motion, and that you must be ready to adapt to whatever comes your way.',
    relationshipMeaning: 'In relationships, The Wheel of Fortune suggests changes or events that are out of your control. It can signify both positive and challenging shifts.',
    careerMeaning: 'Career-wise, The Wheel of Fortune indicates a turning point. It may signify opportunities or challenges that will require adaptability.',
  },
  // Add more cards here with similar structure
];

const TarotReading = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const selectRandomCard = () => {
    const randomCard = tarotCards[Math.floor(Math.random() * tarotCards.length)];
    setSelectedCard(randomCard);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Get Your Yes/No Tarot Answer</h1>
        <p className="text-center mb-8">
          Welcome to our Free Yes/No Tarot reading. This tool is designed to offer you a brief and
          straightforward answer to your question. Please take a moment to think carefully about
          your question before drawing your card. Remember, this is a generic reading, providing a
          simple "Yes," "No," or "Maybe" response based on the card you draw.
        </p>

        {selectedCard ? (
          <div>
            <h2 className="text-2xl font-bold text-center mb-4">{selectedCard.name}</h2>
            <p className="text-center mb-2">Answer: {selectedCard.answer}</p>
            <p className="text-center mb-4">{selectedCard.shortDescription}</p>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
              <img src={selectedCard.image} alt={selectedCard.name} className="w-48 h-auto rounded-lg shadow-md" />
              <div>
                <h3 className="text-xl font-bold mb-2">What Your Card Means?</h3>
                <h4 className="font-bold mt-4">Generic Meaning</h4>
                <p>{selectedCard.genericMeaning}</p>
                <h4 className="font-bold mt-4">Relationship Meaning</h4>
                <p>{selectedCard.relationshipMeaning}</p>
                <h4 className="font-bold mt-4">Career Meaning</h4>
                <p>{selectedCard.careerMeaning}</p>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="text-blue-500 hover:underline mb-4 block">
                Need Personalized Guidance? Work with India's best tarot reader and get accurate insights →
              </a>
              <motion.button
                className="bg-green-600 text-white px-6 py-2 rounded-full text-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={selectRandomCard}
              >
                Pick Another Card
              </motion.button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <motion.button
              className="bg-purple-600 text-white px-6 py-2 rounded-full text-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={selectRandomCard}
            >
              Draw a Card
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TarotReading;