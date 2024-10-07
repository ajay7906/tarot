import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [userResponses, setUserResponses] = useState({});
  const messagesEndRef = useRef(null);

  const questions = [
    "What's your name?",
    "What's your email address?",
    "What's your mobile number?",
    "What problem can we help you with today?",
  ];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addMessage('bot', "Hello! I'm here to help. " + questions[0]);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const addMessage = (sender, text) => {
    setMessages(prev => [...prev, { sender, text }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    addMessage('user', input);

    const currentQuestionIndex = Math.floor(messages.length / 2);
    setUserResponses(prev => ({
      ...prev,
      [questions[currentQuestionIndex]]: input
    }));

    setInput('');

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setTimeout(() => {
        addMessage('bot', questions[nextQuestionIndex]);
      }, 500);
    } else if (nextQuestionIndex === questions.length) {
      setTimeout(() => {
        addMessage('bot', "Thank you for your responses! I'll send this information to our team.");
        sendToGoogleSheet();
      }, 500);
    }
  };

//   const sendToGoogleSheet = async () => {
//     const scriptURL = '';
//     const data = {
//       name: userResponses["What's your name?"],
//       email: userResponses["What's your email address?"],
//       mobile: userResponses["What's your mobile number?"],
//       problem: userResponses["What problem can we help you with today?"]
//     };

//     try {
//       const response = await fetch(scriptURL, {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       const result = await response.json();
//       if (result.result === 'success') {
//         addMessage('bot', "Your information has been sent successfully. We'll get back to you soon!");
//       } else {
//         addMessage('bot', "There was an error sending your information. Please try again later.");
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       addMessage('bot', "There was an error sending your information. Please try again later.");
//     }
//   };
const sendToGoogleSheet = async () => {
    console.log('Sending data to Google Sheet...');
    const scriptURL = 'https://script.google.com/macros/s/AKfycby-fRaqQfV_VI3KfSdGyxvsAgFV38G6iNhpzEzdRlsqbS04x1_Pum9Fit22t922hkhK/exec';
    
    const data = {
      what_s_your_name: userResponses["What's your name?"] || '',
      what_s_your_email_address: userResponses["What's your email address?"] || '',
      what_s_your_mobile_number: userResponses["What's your mobile number?"] || '',
      what_problem_can_we_help_you_with_today: userResponses["What problem can we help you with today?"] || ''
    };
  
    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      
      console.log('Response:', response);
      addMessage('bot', "Your information has been sent. We'll get back to you soon!");
    } catch (error) {
      console.error('Error:', error);
      addMessage('bot', "There was an error sending your information. Please try again later.");
    }
  };
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed right-4 bottom-20 w-80 h-96 bg-white rounded-lg shadow-xl z-50 flex flex-col"
          >
            <div className="p-4 bg-purple-600 text-white rounded-t-lg flex justify-between items-center">
              <h2 className="text-lg font-bold">Tarot Chat</h2>
              <button onClick={() => setIsOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="flex-grow overflow-auto p-4">
              {messages.map((message, index) => (
                <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-purple-100 text-purple-800' : 'bg-gray-200 text-gray-800'}`}>
                    {message.text}
                  </span>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSubmit} className="p-4 border-t">
              <div className="flex">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Type your message..."
                />
                <button type="submit" className="bg-purple-600 text-white p-2 rounded-r-lg">
                  <Send size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed right-4 bottom-4 bg-purple-600 text-white p-3 rounded-full shadow-lg z-50"
      >
        <MessageCircle size={24} />
      </motion.button>
    </>
  );
};

export default Chatbot;