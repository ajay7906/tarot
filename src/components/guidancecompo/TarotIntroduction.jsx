import React from 'react';
import TaroImg from '../../assets/guid.webp';
const TarotIntroduction = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center flex items-center justify-center p-4" 
         style={{backgroundImage: `url(${TaroImg})`}}>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <p className="text-lg mb-4 font-serif">Pick a Card</p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-serif">
          Free Yes/ No Tarot Reading
        </h1>
        <div className="w-24 h-px bg-white mx-auto mb-8"></div>
        <p className="text-xl mb-4 font-serif">Are you seeking guidance for a question or decision?</p>
        <p className="text-lg max-w-2xl mx-auto font-serif leading-relaxed">
          The Free Yes/No Tarot Reading is a simple yet powerful tool that can 
          provide you with a clear answer—whether it's "Yes," "No," or "Maybe." By 
          drawing a single card from the tarot deck, you can gain insights into the 
          situation at hand, helping you navigate life's uncertainties with 
          confidence.
        </p>
        <div className="mt-12">
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-800 transition duration-300">
            Start Reading
          </button>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 z-20">
        <div className="bg-green-500 rounded-full p-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TarotIntroduction;