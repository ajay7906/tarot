import React from 'react';

const VideoVsChat = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center py-10 px-5 sm:px-10 lg:px-20">
      <div className="max-w-4xl bg-gray-800 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center text-green-300">Video vs. Chat/Audio Sessions</h1>
        <p className="text-lg mb-6 text-center">
          When it comes to accuracy and session quality – <span className="font-semibold">There is no difference between a video and an audio/chat session.</span>
        </p>
        <h2 className="text-2xl font-semibold mb-3 text-purple-400">Why do video sessions cost more?</h2>
        <p className="text-md mb-5">
          Video sessions are more intimate and are relatively more intense in terms of energy exchange. So, it is a relatively more involved experience for both parties.
        </p>
        <p className="text-md mb-5">
          So, if you are someone who struggles with energy fluctuations and mood swings, then video calls might be for you.
        </p>
        <p className="text-md mb-5">
          Now that the main contention is clear, the following are some of the points that you can consider while choosing between audio/chat vs. video sessions.
        </p>

        <ul className="list-disc pl-5 mb-5">
          <li className="mb-3">If you need a more intimate environment and like having face-to-face conversations, then video sessions are for you.</li>
          <li className="mb-3">If cost is your primary consideration, then you may opt for audio calls.</li>
          <li>If you need straightforward Yes/No type answers, then opt for audio calls.</li>
        </ul>

        {/* WhatsApp button */}
        <div className="flex justify-center mt-6">
          <a href="https://wa.me" className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-md transition-transform transform hover:scale-105">
            <i className="fab fa-whatsapp mr-2"></i> Contact us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoVsChat;
