// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const tarotCards = [
//   {
//     id: 1,
//     name: 'Wheel of Fortune',
//     image: 'https://example.com/wheel-of-fortune.jpg',
//     answer: 'Maybe',
//     shortDescription: 'Change, cycles, and fate.',
//     genericMeaning: 'The Wheel of Fortune represents the cycles of life, change, and destiny. It reminds you that life is constantly in motion, and that you must be ready to adapt to whatever comes your way.',
//     relationshipMeaning: 'In relationships, The Wheel of Fortune suggests changes or events that are out of your control. It can signify both positive and challenging shifts.',
//     careerMeaning: 'Career-wise, The Wheel of Fortune indicates a turning point. It may signify opportunities or challenges that will require adaptability.',
//   },
//   // Add more cards here with similar structure
// ];

// const TarotReading = () => {
//   const [selectedCard, setSelectedCard] = useState(null);

//   const selectRandomCard = () => {
//     const randomCard = tarotCards[Math.floor(Math.random() * tarotCards.length)];
//     setSelectedCard(randomCard);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 md:p-8">
//       <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
//         <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Get Your Yes/No Tarot Answer</h1>
//         <p className="text-center mb-8">
//           Welcome to our Free Yes/No Tarot reading. This tool is designed to offer you a brief and
//           straightforward answer to your question. Please take a moment to think carefully about
//           your question before drawing your card. Remember, this is a generic reading, providing a
//           simple "Yes," "No," or "Maybe" response based on the card you draw.
//         </p>

//         {selectedCard ? (
//           <div>
//             <h2 className="text-2xl font-bold text-center mb-4">{selectedCard.name}</h2>
//             <p className="text-center mb-2">Answer: {selectedCard.answer}</p>
//             <p className="text-center mb-4">{selectedCard.shortDescription}</p>

//             <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
//               <img src={selectedCard.image} alt={selectedCard.name} className="w-48 h-auto rounded-lg shadow-md" />
//               <div>
//                 <h3 className="text-xl font-bold mb-2">What Your Card Means?</h3>
//                 <h4 className="font-bold mt-4">Generic Meaning</h4>
//                 <p>{selectedCard.genericMeaning}</p>
//                 <h4 className="font-bold mt-4">Relationship Meaning</h4>
//                 <p>{selectedCard.relationshipMeaning}</p>
//                 <h4 className="font-bold mt-4">Career Meaning</h4>
//                 <p>{selectedCard.careerMeaning}</p>
//               </div>
//             </div>

//             <div className="text-center">
//               <a href="#" className="text-blue-500 hover:underline mb-4 block">
//                 Need Personalized Guidance? Work with India's best tarot reader and get accurate insights →
//               </a>
//               <motion.button
//                 className="bg-green-600 text-white px-6 py-2 rounded-full text-lg font-semibold"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={selectRandomCard}
//               >
//                 Pick Another Card
//               </motion.button>
//             </div>
//           </div>
//         ) : (
//           <div className="text-center">
//             <motion.button
//               className="bg-purple-600 text-white px-6 py-2 rounded-full text-lg font-semibold"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={selectRandomCard}
//             >
//               Draw a Card
//             </motion.button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TarotReading;
































































// import React, { useState } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';

// const TarotCard = () => {
//   const [flipped, setFlipped] = useState(false);
//   const [card, setCard] = useState(null);

//   const handleCardDraw = async () => {
//     try {
//       const response = await axios.get('https://tarotapi.dev/api/v1/cards/random?n=1');
//       const drawnCard = response.data.cards[0];
//       setCard(drawnCard);
//       setFlipped(true);
//     } catch (error) {
//       console.error('Error fetching tarot card:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-600 to-blue-500 text-white p-4">
//       <h1 className="text-3xl font-bold mb-8">Get Your Yes/No Tarot Answer</h1>
//       {!flipped ? (
//         <motion.div
//           className="relative w-64 h-96 bg-gray-700 rounded-lg shadow-lg cursor-pointer"
//           onClick={handleCardDraw}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <img
//             src="https://example.com/backside-tarot.jpg" // Use any tarot card backside image URL
//             alt="Backside of Tarot card"
//             className="absolute inset-0 w-full h-full object-cover rounded-lg"
//           />
//           <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-lg">
//             <p>Tap to Draw Your Card</p>
//           </div>
//         </motion.div>
//       ) : (
//         <motion.div
//           initial={{ rotateY: 180 }}
//           animate={{ rotateY: 0 }}
//           transition={{ duration: 0.6 }}
//           className="relative w-64 h-96 bg-white rounded-lg shadow-lg text-gray-900"
//         >
//           {card ? (
//             <>
//               <img
//                 src={`https://example.com/cards/${card.name_short}.jpg`} // Replace with actual card images
//                 alt={card.name}
//                 className="absolute inset-0 w-full h-full object-cover rounded-lg"
//               />
//               <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 p-4 text-center text-white">
//                 <h2 className="text-lg font-semibold">{card.name}</h2>
//                 <p>{card.meaning_up}</p>
//                 <p className="mt-2 text-sm">{getYesNoMaybe(card)}</p>
//               </div>
//             </>
//           ) : (
//             <p>Loading...</p>
//           )}
//         </motion.div>
//       )}

//       <button
//         onClick={() => setFlipped(false)}
//         className="mt-6 bg-blue-500 px-4 py-2 rounded-lg text-white shadow-md hover:bg-blue-700"
//       >
//         Draw Another Card
//       </button>
//     </div>
//   );
// };

// // Function to determine Yes/No/Maybe based on the card's type or value
// const getYesNoMaybe = (card) => {
//   if (card.type === 'major') return 'Maybe';
//   if (['ace', '2', '3'].includes(card.value.toLowerCase())) return 'Yes';
//   if (['10', '9', '8'].includes(card.value.toLowerCase())) return 'No';
//   return 'Maybe';
// };

// export default TarotCard;




























































































// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const YesNoTarot = () => {
//   const [cards, setCards] = useState([]);
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [isRevealed, setIsRevealed] = useState(false);

//   useEffect(() => {
//     fetchRandomCards();
//   }, []);

//   const fetchRandomCards = async () => {
//     try {
//       const response = await fetch('https://tarotapi.dev/api/v1/cards/random?n=3');
//       const data = await response.json();
//       setCards(data.cards);
//     } catch (error) {
//       console.error('Error fetching cards:', error);
//     }
//   };

//   const handleCardClick = (card) => {
//     setSelectedCard(card);
//     setIsRevealed(true);
//   };

//   const getYesNoAnswer = (card) => {
//     const upKeywords = card.meaning_up.toLowerCase();
//     if (upKeywords.includes('yes') || upKeywords.includes('positive') || upKeywords.includes('success')) {
//       return 'Yes';
//     } else if (upKeywords.includes('no') || upKeywords.includes('negative') || upKeywords.includes('failure')) {
//       return 'No';
//     } else {
//       return 'Maybe';
//     }
//   };

//   const resetReading = () => {
//     setSelectedCard(null);
//     setIsRevealed(false);
//     fetchRandomCards();
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-purple-600 to-indigo-900 text-white p-4">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-4xl font-bold text-center mb-8">Get Your Yes/No Tarot Answer</h1>
//         <p className="text-lg text-center mb-8">
//           Welcome to our Free Yes/No Tarot reading. Think carefully about your question, then choose a card.
//         </p>

//         {!isRevealed ? (
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//             {cards.map((card, index) => (
//               <motion.div
//                 key={index}
//                 className="cursor-pointer"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => handleCardClick(card)}
//               >
//                 <div className="bg-indigo-800 rounded-lg shadow-lg aspect-[2/3] flex items-center justify-center">
//                   <div className="text-6xl">🎴</div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         ) : (
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="bg-white text-gray-800 rounded-lg shadow-lg p-6"
//           >
//             <h2 className="text-2xl font-bold mb-4">{selectedCard.name}</h2>
//             <p className="text-xl mb-4">Answer: <span className="font-bold">{getYesNoAnswer(selectedCard)}</span></p>
//             <p className="mb-4">{selectedCard.meaning_up}</p>
//             <button
//               onClick={resetReading}
//               className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
//             >
//               New Reading
//             </button>
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default YesNoTarot;





























































































// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const YesNoTarot = () => {
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const fetchRandomCard = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch('https://tarotapi.dev/api/v1/cards/random');
//       const data = await response.json();
//       setSelectedCard(data.cards[0]);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching card:', error);
//       setLoading(false);
//     }
//   };

//   const handleCardClick = () => {
//     if (!selectedCard) {
//       fetchRandomCard();
//     } else {
//       setIsFlipped(!isFlipped);
//     }
//   };

//   const getYesNoAnswer = () => {
//     if (!selectedCard) return '';
//     const upright = Math.random() < 0.5;
//     const meaning = upright ? selectedCard.meaning_up : selectedCard.meaning_rev;
//     if (meaning.toLowerCase().includes('yes')) return 'Yes';
//     if (meaning.toLowerCase().includes('no')) return 'No';
//     return 'Maybe';
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-purple-600 to-indigo-900 text-white p-4">
//       <div className="max-w-2xl mx-auto">
//         <h1 className="text-4xl font-bold text-center mb-6">Get Your Yes/No Tarot Answer</h1>
//         <p className="text-lg text-center mb-8">
//           Welcome to our Free Yes/No Tarot reading. This tool is designed to offer you a brief and straightforward answer to your question. Please take a moment to think carefully about your question before drawing your card.
//         </p>
//         <div className="flex justify-center mb-8">
//           <motion.div
//             className="w-64 h-96 bg-purple-800 rounded-lg shadow-xl cursor-pointer perspective"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handleCardClick}
//           >
//             <motion.div
//               className="w-full h-full relative"
//               animate={{ rotateY: isFlipped ? 180 : 0 }}
//               transition={{ duration: 0.6 }}
//               style={{ transformStyle: 'preserve-3d' }}
//             >
//               <div className="absolute w-full h-full backface-hidden">
//                 <div className="w-full h-full flex items-center justify-center bg-tarot-back bg-cover rounded-lg">
//                   <span className="text-2xl font-bold">
//                     {loading ? 'Drawing...' : selectedCard ? 'Flip Card' : 'Draw a Card'}
//                   </span>
//                 </div>
//               </div>
//               <div className="absolute w-full h-full backface-hidden rotate-y-180">
//                 {selectedCard && (
//                   <div className="w-full h-full bg-white text-black p-4 rounded-lg overflow-y-auto flex flex-col items-center">
//                     <h2 className="text-xl font-bold mb-2">{selectedCard.name}</h2>
//                     <img 
//                       src={`https://tarotapi.dev/images/cards/${selectedCard.name_short}.jpg`} 
//                       alt={selectedCard.name} 
//                       className="w-32 h-48 object-contain mb-2"
//                     />
//                     <p className="mb-2"><strong>Answer:</strong> {getYesNoAnswer()}</p>
//                     <p className="mb-2"><strong>Description:</strong> {selectedCard.desc}</p>
//                     <p><strong>Meaning:</strong> {selectedCard.meaning_up}</p>
//                   </div>
//                 )}
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//         {selectedCard && (
//           <motion.button
//             className="block mx-auto bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => {
//               setSelectedCard(null);
//               setIsFlipped(false);
//             }}
//           >
//             Draw Another Card
//           </motion.button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default YesNoTarot;



































// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const YesNoTarot = () => {
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const fetchRandomCard = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch('https://tarotapi.dev/api/v1/cards/random');
//       const data = await response.json();
//       setSelectedCard(data.cards[0]);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching card:', error);
//       setLoading(false);
//     }
//   };

//   const handleCardClick = () => {
//     if (!selectedCard) {
//       fetchRandomCard();
//     } else {
//       setIsFlipped(!isFlipped);
//     }
//   };

//   const getYesNoAnswer = () => {
//     if (!selectedCard) return '';
//     const upright = Math.random() < 0.5;
//     const meaning = upright ? selectedCard.meaning_up : selectedCard.meaning_rev;
//     if (meaning.toLowerCase().includes('yes')) return 'Yes';
//     if (meaning.toLowerCase().includes('no')) return 'No';
//     return 'Maybe';
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-purple-600 to-indigo-900 text-white p-4">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-4xl font-bold text-center mb-6">Get Your Yes/No Tarot Answer</h1>
//         <p className="text-lg text-center mb-8">
//           Welcome to our Free Yes/No Tarot reading. This tool is designed to offer you a brief and straightforward answer to your question. Please take a moment to think carefully about your question before drawing your card.
//         </p>
//         <div className="flex justify-center mb-8">
//           <motion.div
//             className="w-72 h-[32rem] bg-purple-800 rounded-lg shadow-xl cursor-pointer"
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             onClick={handleCardClick}
//             style={{ 
//               perspective: '1000px',
//               transformStyle: 'preserve-3d'
//             }}
//           >
//             <motion.div
//               className="w-full h-full relative"
//               animate={{ rotateY: isFlipped ? 180 : 0 }}
//               transition={{ duration: 0.6 }}
//               style={{ transformStyle: 'preserve-3d' }}
//             >
//               {/* Card Back */}
//               <div 
//                 className="absolute w-full h-full backface-hidden bg-gradient-to-br from-purple-900 to-indigo-800 rounded-lg border-2 border-purple-300/20"
//                 style={{ backfaceVisibility: 'hidden' }}
//               >
//                 <div className="w-full h-full flex items-center justify-center">
//                   <span className="text-2xl font-bold text-white/90 pointer-events-none">
//                     {loading ? 'Drawing...' : selectedCard ? 'Flip Card' : 'Draw a Card'}
//                   </span>
//                 </div>
//               </div>
              
//               {/* Card Front */}
//               <div 
//                 className="absolute w-full h-full backface-hidden rounded-lg bg-white/95 text-gray-800"
//                 style={{ 
//                   backfaceVisibility: 'hidden',
//                   transform: 'rotateY(180deg)'
//                 }}
//               >
//                 {selectedCard && (
//                   <div className="w-full h-full p-6 flex flex-col items-center">
//                     <h2 className="text-2xl font-bold mb-4">{selectedCard.name}</h2>
//                     <img 
//                       src="/api/placeholder/240/360"
//                       alt={selectedCard.name}
//                       className="w-60 h-80 object-cover rounded-lg mb-4 shadow-md"
//                     />
//                     <div className="space-y-2 text-center">
//                       <p className="text-xl font-semibold">
//                         <span className="text-purple-600">Answer:</span> {getYesNoAnswer()}
//                       </p>
//                       <p className="text-sm line-clamp-3">
//                         <span className="font-semibold">Meaning:</span> {selectedCard.meaning_up}
//                       </p>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
        
//         {selectedCard && (
//           <motion.button
//             className="block mx-auto bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg"
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             onClick={() => {
//               setSelectedCard(null);
//               setIsFlipped(false);
//             }}
//           >
//             Draw Another Card
//           </motion.button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default YesNoTarot;


































// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const YesNoTarot = () => {
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const fetchRandomCard = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch('https://tarotapi.dev/api/v1/cards/random');
//       const data = await response.json();
//       setSelectedCard(data.cards[0]);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching card:', error);
//       setLoading(false);
//     }
//   };

//   const handleCardClick = () => {
//     if (!selectedCard) {
//       fetchRandomCard();
//     } else {
//       setIsFlipped(!isFlipped);
//     }
//   };

//   const getYesNoAnswer = () => {
//     if (!selectedCard) return '';
//     const upright = Math.random() < 0.5;
//     const meaning = upright ? selectedCard.meaning_up : selectedCard.meaning_rev;
//     if (meaning.toLowerCase().includes('yes')) return 'Yes';
//     if (meaning.toLowerCase().includes('no')) return 'No';
//     return 'Maybe';
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-purple-600 to-indigo-900 text-white p-4">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-4xl font-bold text-center mb-6">Get Your Yes/No Tarot Answer</h1>
//         <p className="text-lg text-center mb-8">
//           Welcome to our Free Yes/No Tarot reading. This tool is designed to offer you a brief and straightforward answer to your question. Please take a moment to think carefully about your question before drawing your card.
//         </p>
//         <div className="flex justify-center mb-8">
//           <motion.div
//             className="w-[36rem] h-[32rem] bg-purple-800 rounded-lg shadow-xl cursor-pointer"
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             onClick={handleCardClick}
//             style={{ 
//               perspective: '1000px',
//               transformStyle: 'preserve-3d'
//             }}
//           >
//             <motion.div
//               className="w-full h-full relative"
//               animate={{ rotateY: isFlipped ? 180 : 0 }}
//               transition={{ duration: 0.6 }}
//               style={{ transformStyle: 'preserve-3d' }}
//             >
//               {/* Card Back */}
//               <div 
//                 className="absolute w-full h-full backface-hidden bg-gradient-to-br from-purple-900 to-indigo-800 rounded-lg border-2 border-purple-300/20"
//                 style={{ backfaceVisibility: 'hidden' }}
//               >
//                 <div className="w-full h-full flex items-center justify-center">
//                   <span className="text-2xl font-bold text-white/90 pointer-events-none">
//                     {loading ? 'Drawing...' : selectedCard ? 'Flip Card' : 'Draw a Card'}
//                   </span>
//                 </div>
//               </div>
              
//               {/* Card Front */}
//               <div 
//                 className="absolute w-full h-full backface-hidden rounded-lg bg-white/95 text-gray-800"
//                 style={{ 
//                   backfaceVisibility: 'hidden',
//                   transform: 'rotateY(180deg)'
//                 }}
//               >
//                 {selectedCard && (
//                   <div className="w-full h-full p-6 flex gap-6">
//                     {/* Left side - Image */}
//                     <div className="flex flex-col items-center w-80">
//                       <h2 className="text-2xl font-bold mb-4">{selectedCard.name}</h2>
//                       <img 
//                         src="/api/placeholder/240/360"
//                         alt={selectedCard.name}
//                         className="w-60 h-80 object-cover rounded-lg shadow-md"
//                       />
//                     </div>

//                     {/* Right side - Content */}
//                     <div className="flex-1 overflow-y-auto pr-4 space-y-4">
//                       <div className="bg-purple-100 p-4 rounded-lg">
//                         <p className="text-2xl font-bold text-purple-800 mb-1">
//                           Answer: <span className="text-indigo-600">{getYesNoAnswer()}</span>
//                         </p>
//                       </div>

//                       <div className="space-y-4">
//                         <div>
//                           <h3 className="text-lg font-semibold text-purple-800 mb-1">Description</h3>
//                           <p className="text-sm leading-relaxed text-gray-700">
//                             {selectedCard.desc}
//                           </p>
//                         </div>

//                         <div>
//                           <h3 className="text-lg font-semibold text-purple-800 mb-1">Upright Meaning</h3>
//                           <p className="text-sm leading-relaxed text-gray-700">
//                             {selectedCard.meaning_up}
//                           </p>
//                         </div>

//                         <div>
//                           <h3 className="text-lg font-semibold text-purple-800 mb-1">Reversed Meaning</h3>
//                           <p className="text-sm leading-relaxed text-gray-700">
//                             {selectedCard.meaning_rev}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
        
//         {selectedCard && (
//           <motion.button
//             className="block mx-auto bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg"
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             onClick={() => {
//               setSelectedCard(null);
//               setIsFlipped(false);
//             }}
//           >
//             Draw Another Card
//           </motion.button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default YesNoTarot;






































import React, { useState } from 'react';
import { motion } from 'framer-motion';

const YesNoTarot = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchRandomCard = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://tarotapi.dev/api/v1/cards/random');
      const data = await response.json();
      setSelectedCard(data.cards[0]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching card:', error);
      setLoading(false);
    }
  };

  const handleCardClick = () => {
    if (!selectedCard) {
      fetchRandomCard();
    } else {
      setIsFlipped(!isFlipped);
    }
  };

  const getYesNoAnswer = () => {
    if (!selectedCard) return '';
    const upright = Math.random() < 0.5;
    const meaning = upright ? selectedCard.meaning_up : selectedCard.meaning_rev;
    if (meaning.toLowerCase().includes('yes')) return 'Yes';
    if (meaning.toLowerCase().includes('no')) return 'No';
    return 'Maybe';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 to-indigo-900 text-white p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Get Your Yes/No Tarot Answer</h1>
        <p className="text-lg text-center mb-8">
          Welcome to our Free Yes/No Tarot reading. This tool is designed to offer you a brief and straightforward answer to your question. Please take a moment to think carefully about your question before drawing your card.
        </p>
        <div className="flex justify-center mb-8">
          <div
            className="w-[36rem] h-[32rem] bg-purple-800 rounded-lg shadow-xl cursor-pointer"
            onClick={handleCardClick}
            style={{ 
              perspective: '1000px',
              transformStyle: 'preserve-3d'
            }}
          >
            <motion.div
              className="w-full h-full relative"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Card Back */}
              <div 
                className="absolute w-full h-full backface-hidden bg-gradient-to-br from-purple-900 to-indigo-800 rounded-lg border-2 border-purple-300/20"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white/90 pointer-events-none">
                    {loading ? 'Drawing...' : selectedCard ? 'Flip Card' : 'Draw a Card'}
                  </span>
                </div>
              </div>
              
              {/* Card Front */}
              <div 
                className="absolute w-full h-full backface-hidden rounded-lg bg-white/95 text-gray-800"
                style={{ 
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                }}
              >
                {selectedCard && (
                  <div className="w-full h-full p-6 flex gap-6">
                    {/* Left side - Image */}
                    <div className="flex flex-col items-center w-80">
                      <h2 className="text-2xl font-bold mb-4">{selectedCard.name}</h2>
                      <img 
                        src="/api/placeholder/240/360"
                        alt={selectedCard.name}
                        className="w-60 h-80 object-cover rounded-lg shadow-md"
                      />
                    </div>

                    {/* Right side - Content */}
                    <div className="flex-1 overflow-y-auto pr-4 space-y-4">
                      <div className="bg-purple-100 p-4 rounded-lg">
                        <p className="text-2xl font-bold text-purple-800 mb-1">
                          Answer: <span className="text-indigo-600">{getYesNoAnswer()}</span>
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold text-purple-800 mb-1">Description</h3>
                          <p className="text-sm leading-relaxed text-gray-700">
                            {selectedCard.desc}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-purple-800 mb-1">Upright Meaning</h3>
                          <p className="text-sm leading-relaxed text-gray-700">
                            {selectedCard.meaning_up}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-purple-800 mb-1">Reversed Meaning</h3>
                          <p className="text-sm leading-relaxed text-gray-700">
                            {selectedCard.meaning_rev}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
        
        {selectedCard && (
          <motion.button
            className="block mx-auto bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setSelectedCard(null);
              setIsFlipped(false);
            }}
          >
            Draw Another Card
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default YesNoTarot;