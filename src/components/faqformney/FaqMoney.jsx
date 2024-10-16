import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <p className="mt-2 text-gray-600 animate-fadeIn">
          {answer}
        </p>
      )}
    </div>
  );
};

const FAQMONEY = () => {
  const faqData = [
    {
      question: "What is the refund policy?",
      answer: "Our refund policy allows for full refunds within 30 days of purchase."
    },
    {
      question: "What is the cancellation policy?",
      answer: "Cancellations are accepted up to 24 hours before the scheduled appointment."
    },
    {
      question: "How many times can I reschedule my session?",
      answer: "You can reschedule your session up to 3 times without any additional charges."
    },
    {
      question: "What kind of topics can I ask?",
      answer: "You can ask about a wide range of topics related to personal growth, relationships, and career guidance."
    },
    {
      question: "How can tarot readings help me?",
      answer: "Tarot readings can provide insight, clarity, and guidance on various aspects of your life."
    },
    {
      question: "What should I expect during a tarot reading?",
      answer: "During a tarot reading, you can expect a calm and focused session where cards are drawn and interpreted to provide guidance on your questions or concerns."
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <p className="text-gray-600 mb-8">Your questions are answered here</p>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQMONEY;