// import React from 'react';
// import { motion } from 'framer-motion';

// const TarotClasses = () => {
//   const features = [
//     'Learn Tarot Basics',
//     'Reading Tarot Cards',
//     'Advanced Spreads',
//     'Understanding Major Arcana',
//     'Practical Sessions with Real Cases',
//   ];

//   const pricingPlans = [
//     {
//       title: 'Beginner Class',
//       price: '$49',
//       description: 'Perfect for beginners starting their Tarot journey.',
//       features: ['5 Live Sessions', 'Basic Tarot Reading', 'Certificate of Completion'],
//     },
//     {
//       title: 'Advanced Class',
//       price: '$99',
//       description: 'Master advanced techniques and spreads.',
//       features: ['10 Live Sessions', 'Advanced Tarot Spreads', 'Certificate of Mastery'],
//     },
//   ];

//   return (
//     <div className="bg-gray-100 py-12">
//       <div className="container mx-auto px-4">
//         {/* Hero Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: 'easeInOut' }}
//           className="text-center mb-12"
//         >
//           <h1 className="text-4xl font-bold text-purple-700">Join Our Tarot Classes</h1>
//           <p className="mt-4 text-lg text-gray-600">
//             Discover the secrets of Tarot with our professional Tarot classes designed for all levels.
//           </p>
//         </motion.div>

//         {/* Features Section */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="grid md:grid-cols-2 gap-8 mb-12"
//         >
//           <div className="p-6 bg-white rounded-lg shadow-lg">
//             <h2 className="text-2xl font-semibold mb-4">Class Features</h2>
//             <ul className="list-disc ml-6 text-gray-700">
//               {features.map((feature, index) => (
//                 <li key={index} className="mb-2">{feature}</li>
//               ))}
//             </ul>
//           </div>

//           <div className="p-6 bg-white rounded-lg shadow-lg">
//             <h2 className="text-2xl font-semibold mb-4">What You Will Learn</h2>
//             <p className="text-gray-700 leading-relaxed">
//               Our Tarot classes cover everything from the basics to advanced spreads. You'll learn how to interpret cards, explore the meaning of different tarot suits, and master the major arcana. We offer practical sessions with real cases and live readings.
//             </p>
//           </div>
//         </motion.div>

//         {/* Pricing Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="grid md:grid-cols-2 gap-8"
//         >
//           {pricingPlans.map((plan, index) => (
//             <div
//               key={index}
//               className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
//             >
//               <h3 className="text-xl font-bold mb-4 text-purple-700">{plan.title}</h3>
//               <p className="text-gray-600 mb-6">{plan.description}</p>
//               <h4 className="text-3xl font-semibold text-purple-500">{plan.price}</h4>
//               <ul className="list-disc ml-6 mt-4 mb-6 text-gray-700">
//                 {plan.features.map((feature, index) => (
//                   <li key={index} className="mb-2">{feature}</li>
//                 ))}
//               </ul>
//               <button className="bg-purple-500 text-white font-bold py-2 px-6 rounded hover:bg-purple-700 transition duration-300">
//                 Enroll Now
//               </button>
//             </div>
//           ))}
//         </motion.div>

//         {/* FAQ Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="mt-16"
//         >
//           <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-lg font-semibold mb-2">Who can join the Tarot classes?</h3>
//               <p className="text-gray-600">Anyone interested in Tarot, from beginners to advanced learners, can join these classes.</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-lg font-semibold mb-2">Are there any prerequisites?</h3>
//               <p className="text-gray-600">No prior knowledge is required for the beginner class. For advanced class, some experience in Tarot is recommended.</p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default TarotClasses;












// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import axios from 'axios';

// const TarotClasses = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const features = [
//     'Learn Tarot Basics',
//     'Reading Tarot Cards',
//     'Advanced Spreads',
//     'Understanding Major Arcana',
//     'Practical Sessions with Real Cases',
//   ];

//   const pricingPlans = [
//     {
//       title: 'Beginner Class',
//       price: 4900, // in cents
//       description: 'Perfect for beginners starting their Tarot journey.',
//       features: ['5 Live Sessions', 'Basic Tarot Reading', 'Certificate of Completion'],
//     },
//     {
//       title: 'Advanced Class',
//       price: 9900, // in cents
//       description: 'Master advanced techniques and spreads.',
//       features: ['10 Live Sessions', 'Advanced Tarot Spreads', 'Certificate of Mastery'],
//     },
//   ];

//   const handlePayment = async (plan) => {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await axios.post('http://localhost:3000/api/create-order', {
//         amount: plan.price,
//         currency: 'INR',
//         receipt: `receipt_${Date.now()}`,
//         notes: {
//           planTitle: plan.title,
//         },
//       });

//       const options = {
//         key: 'pk_test_51Q7ZmIP8a9YwaGKMyGJx51wCnG34uL5mDP1yJDiLf92UYw8RcDgtk6bW8xzTQ92zbBwtEYBaIqbcaG2Vn9J6bgAJ00WW8ybbhb', // Replace with your Razorpay test key ID
//         amount: response.data.amount,
//         currency: response.data.currency,
//         name: 'Tarot Classes',
//         description: `Payment for ${plan.title}`,
//         order_id: response.data.id,
//         handler: async function (response) {
//           try {
//             const verificationResponse = await axios.post('http://localhost:3000/api/verify-payment', {
//               razorpay_order_id: response.razorpay_order_id,
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_signature: response.razorpay_signature
//             });
            
//             if (verificationResponse.data.success) {
//               alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
//             } else {
//               setError('Payment verification failed. Please contact support.');
//             }
//           } catch (error) {
//             console.error('Error verifying payment:', error);
//             setError('An error occurred while verifying your payment. Please contact support.');
//           }
//         },
//         prefill: {
//           name: 'John Doe',
//           email: 'john@example.com',
//           contact: '9999999999',
//         },
//         theme: {
//           color: '#7C3AED',
//         },
//       };

//       const razorpay = new window.Razorpay(options);
//       razorpay.open();
//     } catch (error) {
//       console.error('Error creating order:', error);
//       setError('An error occurred while processing your payment. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-gray-100 py-12">
//       <div className="container mx-auto px-4">
//         {/* Hero Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: 'easeInOut' }}
//           className="text-center mb-12"
//         >
//           <h1 className="text-4xl font-bold text-purple-700">Join Our Tarot Classes</h1>
//           <p className="mt-4 text-lg text-gray-600">
//             Discover the secrets of Tarot with our professional Tarot classes designed for all levels.
//           </p>
//         </motion.div>

//         {/* Features Section */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="grid md:grid-cols-2 gap-8 mb-12"
//         >
//           <div className="p-6 bg-white rounded-lg shadow-lg">
//             <h2 className="text-2xl font-semibold mb-4">Class Features</h2>
//             <ul className="list-disc ml-6 text-gray-700">
//               {features.map((feature, index) => (
//                 <li key={index} className="mb-2">{feature}</li>
//               ))}
//             </ul>
//           </div>

//           <div className="p-6 bg-white rounded-lg shadow-lg">
//             <h2 className="text-2xl font-semibold mb-4">What You Will Learn</h2>
//             <p className="text-gray-700 leading-relaxed">
//               Our Tarot classes cover everything from the basics to advanced spreads. You'll learn how to interpret cards, explore the meaning of different tarot suits, and master the major arcana. We offer practical sessions with real cases and live readings.
//             </p>
//           </div>
//         </motion.div>

//         {/* Pricing Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="grid md:grid-cols-2 gap-8"
//         >
//           {pricingPlans.map((plan, index) => (
//             <div
//               key={index}
//               className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
//             >
//               <h3 className="text-xl font-bold mb-4 text-purple-700">{plan.title}</h3>
//               <p className="text-gray-600 mb-6">{plan.description}</p>
//               <h4 className="text-3xl font-semibold text-purple-500">${plan.price / 100}</h4>
//               <ul className="list-disc ml-6 mt-4 mb-6 text-gray-700">
//                 {plan.features.map((feature, index) => (
//                   <li key={index} className="mb-2">{feature}</li>
//                 ))}
//               </ul>
//               <button
//                 className="bg-purple-500 text-white font-bold py-2 px-6 rounded hover:bg-purple-700 transition duration-300"
//                 onClick={() => handlePayment(plan)}
//                 disabled={loading}
//               >
//                 {loading ? 'Processing...' : 'Enroll Now'}
//               </button>
//               {error && <p className="text-red-500 mt-2">{error}</p>}
//             </div>
//           ))}
//         </motion.div>

//         {/* FAQ Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="mt-16"
//         >
//           <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-lg font-semibold mb-2">Who can join the Tarot classes?</h3>
//               <p className="text-gray-600">Anyone interested in Tarot, from beginners to advanced learners, can join these classes.</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-lg font-semibold mb-2">Are there any prerequisites?</h3>
//               <p className="text-gray-600">No prior knowledge is required for the beginner class. For advanced class, some experience in Tarot is recommended.</p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default TarotClasses;









import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51Q7ZmIP8a9YwaGKMyGJx51wCnG34uL5mDP1yJDiLf92UYw8RcDgtk6bW8xzTQ92zbBwtEYBaIqbcaG2Vn9J6bgAJ00WW8ybbhb');

const CheckoutForm = ({ plan, onSuccess, onError }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    try {
      const response = await axios.post('http://88.222.213.80:5000/api/create-payment', {
        amount: plan.price,
        currency: 'usd',
      });

      const { error, paymentIntent } = await stripe.confirmCardPayment(response.data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: 'John Doe',
          },
        },
      });

      if (error) {
        onError(error.message);
      } else if (paymentIntent.status === 'succeeded') {
        onSuccess(paymentIntent);
      }
    } catch (error) {
      onError('An error occurred while processing your payment.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || loading} className="mt-4 bg-purple-500 text-white font-bold py-2 px-6 rounded hover:bg-purple-700 transition duration-300">
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
};

const TarotClasses = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const features = [
    'Learn Tarot Basics',
    'Reading Tarot Cards',
    'Advanced Spreads',
    'Understanding Major Arcana',
    'Practical Sessions with Real Cases',
  ];

  const pricingPlans = [
    {
      title: 'Beginner Class',
      price: 4900, // in cents
      description: 'Perfect for beginners starting their Tarot journey.',
      features: ['5 Live Sessions', 'Basic Tarot Reading', 'Certificate of Completion'],
    },
    {
      title: 'Advanced Class',
      price: 9900, // in cents
      description: 'Master advanced techniques and spreads.',
      features: ['10 Live Sessions', 'Advanced Tarot Spreads', 'Certificate of Mastery'],
    },
  ];

  const handlePaymentSuccess = async (paymentIntent) => {
    try {
      await axios.post('http://88.222.213.80:5000/api/payment-success', {
        paymentIntentId: paymentIntent.id,
        courseId: selectedPlan.title,
      });
      setSuccess(true);
      setSelectedPlan(null);
    } catch (error) {
      setError('An error occurred while recording your enrollment. Please contact support.');
    }
  };

  const handlePaymentError = (errorMessage) => {
    setError(errorMessage);
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-purple-700">Join Our Tarot Classes</h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover the secrets of Tarot with our professional Tarot classes designed for all levels.
          </p>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Class Features</h2>
            <ul className="list-disc ml-6 text-gray-700">
              {features.map((feature, index) => (
                <li key={index} className="mb-2">{feature}</li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">What You Will Learn</h2>
            <p className="text-gray-700 leading-relaxed">
              Our Tarot classes cover everything from the basics to advanced spreads. You'll learn how to interpret cards, explore the meaning of different tarot suits, and master the major arcana. We offer practical sessions with real cases and live readings.
            </p>
          </div>
        </motion.div>

        {/* Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
            >
              <h3 className="text-xl font-bold mb-4 text-purple-700">{plan.title}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <h4 className="text-3xl font-semibold text-purple-500">${plan.price / 100}</h4>
              <ul className="list-disc ml-6 mt-4 mb-6 text-gray-700">
                {plan.features.map((feature, index) => (
                  <li key={index} className="mb-2">{feature}</li>
                ))}
              </ul>
              <button
                className="bg-purple-500 text-white font-bold py-2 px-6 rounded hover:bg-purple-700 transition duration-300"
                onClick={() => setSelectedPlan(plan)}
              >
                Enroll Now
              </button>
            </div>
          ))}
        </motion.div>

        {/* Stripe Checkout */}
        {selectedPlan && (
          <Elements stripe={stripePromise}>
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
              <div className="bg-white p-8 rounded-lg shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Checkout for {selectedPlan.title}</h2>
                <p className="mb-4">Total: ${selectedPlan.price / 100}</p>
                <CheckoutForm
                  plan={selectedPlan}
                  onSuccess={handlePaymentSuccess}
                  onError={handlePaymentError}
                />
                <button
                  className="mt-4 text-gray-600 hover:text-gray-800"
                  onClick={() => setSelectedPlan(null)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Elements>
        )}

        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        {success && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
            Payment successful! You're now enrolled in the class.
          </div>
        )}

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-2">Who can join the Tarot classes?</h3>
              <p className="text-gray-600">Anyone interested in Tarot, from beginners to advanced learners, can join these classes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-2">Are there any prerequisites?</h3>
              <p className="text-gray-600">No prior knowledge is required for the beginner class. For advanced class, some experience in Tarot is recommended.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TarotClasses;