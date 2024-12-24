// import React from 'react';
// import { motion } from 'framer-motion';

// const Contact = () => {
//   return (
//     <section className="py-20 bg-purple-700 text-white">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
//         <div className="max-w-3xl mx-auto">
//           <motion.form 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="bg-white rounded-lg p-8 shadow-xl"
//           >
//             <div className="mb-4">
//               <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
//               <input type="text" id="name" className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-purple-500" placeholder="Your Name" />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
//               <input type="email" id="email" className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-purple-500" placeholder="Your Email" />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
//               <textarea id="message" rows="4" className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-purple-500" placeholder="Your Message"></textarea>
//             </div>
//             <motion.button 
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="w-full bg-purple-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
//             >
//               Send Message
//             </motion.button>
//           </motion.form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;












import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // To handle submission status

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset status
    setStatus(null);

    try {
      const response = await fetch('https://tarotbydeepa.com:4000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        const errorData = await response.json();
        setStatus({ type: 'error', message: errorData.error || 'Something went wrong.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
    }
  };

  return (
    <section className="py-20 bg-purple-700 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="max-w-3xl mx-auto">
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg p-8 shadow-xl"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-purple-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-purple-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-purple-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-purple-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
              type="submit"
            >
              Send Message
            </motion.button>
          </motion.form>
          {status && (
            <div
              className={`mt-4 p-3 rounded-lg text-center font-bold ${
                status.type === 'success' ? 'bg-green-500' : 'bg-red-500'
              }`}
            >
              {status.message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
