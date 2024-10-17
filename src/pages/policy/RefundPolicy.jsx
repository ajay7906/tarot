import React from 'react';
import { motion } from 'framer-motion';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-pink-800 mb-8"
        >
          Refund Policy
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md overflow-hidden p-6"
        >
          <p className="text-gray-700 mb-4">
            At Tarot by Deepa, we strive to provide a high-quality tarot reading service. However, please be aware that all bookings made with us are non-refundable. Once you have booked a session, we are unable to offer any refunds.
          </p>
          <p className="text-gray-700 mb-4">
            We understand that circumstances may change, and you may have unforeseen situations that prevent you from attending the scheduled session. However, please note that we are unable to accommodate refund requests, regardless of the reason.
          </p>
          <p className="text-gray-700 mb-4">
            We encourage you to carefully consider your availability and commitment before making a booking. If you have any doubts or questions about our services, we are more than happy to address them prior to your booking.
          </p>
          <p className="text-gray-700 mb-4">
            You can contact us via email at <a href="mailto:tarotbydeepa@gmail.com" className="text-pink-600 hover:text-pink-800">tarotbydeepa@gmail.com</a> or through WhatsApp at the provided number.
          </p>
          <p className="text-gray-700 mb-4">
            We appreciate your understanding and cooperation in adhering to our refund policy. We are committed to providing you with an enriching and insightful tarot reading experience, and we look forward to assisting you on your journey.
          </p>
          <p className="text-gray-700 font-semibold">
            Thank you for choosing Tarot by Deepa.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default RefundPolicy;