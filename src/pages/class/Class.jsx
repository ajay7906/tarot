



// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import axios from 'axios';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// const stripePromise = loadStripe('pk_test_51Q7ZmIP8a9YwaGKMyGJx51wCnG34uL5mDP1yJDiLf92UYw8RcDgtk6bW8xzTQ92zbBwtEYBaIqbcaG2Vn9J6bgAJ00WW8ybbhb');

// const CheckoutForm = ({ plan, onSuccess, onError }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);

//     if (!stripe || !elements) {
//       return;
//     }

//     try {
//       const response = await axios.post('http://88.222.213.80:5000/api/create-payment', {
//         amount: plan.price,
//         currency: 'usd',
//       });

//       const { error, paymentIntent } = await stripe.confirmCardPayment(response.data.clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement),
//           billing_details: {
//             name: 'John Doe',
//           },
//         },
//       });

//       if (error) {
//         onError(error.message);
//       } else if (paymentIntent.status === 'succeeded') {
//         onSuccess(paymentIntent);
//       }
//     } catch (error) {
//       onError('An error occurred while processing your payment.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button type="submit" disabled={!stripe || loading} className="mt-4 bg-purple-500 text-white font-bold py-2 px-6 rounded hover:bg-purple-700 transition duration-300">
//         {loading ? 'Processing...' : 'Pay Now'}
//       </button>
//     </form>
//   );
// };

// const TarotClasses = () => {
//   const [selectedPlan, setSelectedPlan] = useState(null);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);

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

//   const handlePaymentSuccess = async (paymentIntent) => {
//     try {
//       await axios.post('http://88.222.213.80:5000/api/payment-success', {
//         paymentIntentId: paymentIntent.id,
//         courseId: selectedPlan.title,
//       });
//       setSuccess(true);
//       setSelectedPlan(null);
//     } catch (error) {
//       setError('An error occurred while recording your enrollment. Please contact support.');
//     }
//   };

//   const handlePaymentError = (errorMessage) => {
//     setError(errorMessage);
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
//                 onClick={() => setSelectedPlan(plan)}
//               >
//                 Enroll Now
//               </button>
//             </div>
//           ))}
//         </motion.div>

//         {/* Stripe Checkout */}
//         {selectedPlan && (
//           <Elements stripe={stripePromise}>
//             <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
//               <div className="bg-white p-8 rounded-lg shadow-xl">
//                 <h2 className="text-2xl font-bold mb-4">Checkout for {selectedPlan.title}</h2>
//                 <p className="mb-4">Total: ${selectedPlan.price / 100}</p>
//                 <CheckoutForm
//                   plan={selectedPlan}
//                   onSuccess={handlePaymentSuccess}
//                   onError={handlePaymentError}
//                 />
//                 <button
//                   className="mt-4 text-gray-600 hover:text-gray-800"
//                   onClick={() => setSelectedPlan(null)}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </Elements>
//         )}

//         {error && (
//           <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">
//             {error}
//           </div>
//         )}

//         {success && (
//           <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
//             Payment successful! You're now enrolled in the class.
//           </div>
//         )}

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

















// import React, { useState, useRef } from 'react';
// import { motion } from 'framer-motion';
// import ClassImg from '../../assets/classs.jpg'
// import axios from 'axios';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// const stripePromise = loadStripe('pk_test_51Q7ZmIP8a9YwaGKMyGJx51wCnG34uL5mDP1yJDiLf92UYw8RcDgtk6bW8xzTQ92zbBwtEYBaIqbcaG2Vn9J6bgAJ00WW8ybbhb');

// const CheckoutForm = ({ plan, onSuccess, onError }) => {
//   // ... (CheckoutForm component remains unchanged)
// };

// const TarotClasses = () => {
//   const [selectedPlan, setSelectedPlan] = useState(null);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);
//   const pricingSectionRef = useRef(null);

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

//   const handlePaymentSuccess = async (paymentIntent) => {
//     // ... (handlePaymentSuccess function remains unchanged)
//   };

//   const handlePaymentError = (errorMessage) => {
//     setError(errorMessage);
//   };

//   const scrollToPricing = () => {
//     pricingSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className="bg-gray-100">
//       {/* New Hero Section with Background Image */}
//       <div className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: `url(${ClassImg})`}}>
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="relative z-10 text-center text-white px-4">
//           <h1 className="text-5xl font-bold mb-4">Discover the Art of Tarot</h1>
//           <p className="text-xl mb-8">Unlock the mysteries of the cards and tap into your intuition</p>
//           <button onClick={scrollToPricing} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
//             Join Now
//           </button>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-12">
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
//           ref={pricingSectionRef}
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
//               <h4 className="text-3xl font-semibold text-purple-500">₹{plan.price / 100}</h4>
//               <ul className="list-disc ml-6 mt-4 mb-6 text-gray-700">
//                 {plan.features.map((feature, index) => (
//                   <li key={index} className="mb-2">{feature}</li>
//                 ))}
//               </ul>
//               <button
//                 className="bg-purple-500 text-white font-bold py-2 px-6 rounded hover:bg-purple-700 transition duration-300"
//                 onClick={() => setSelectedPlan(plan)}
//               >
//                 Enroll Now
//               </button>
//             </div>
//           ))}
//         </motion.div>

//         {/* Stripe Checkout */}
//         {selectedPlan && (
//           <Elements stripe={stripePromise}>
//             <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
//               <div className="bg-white p-8 rounded-lg shadow-xl">
//                 <h2 className="text-2xl font-bold mb-4">Checkout for {selectedPlan.title}</h2>
//                 <p className="mb-4">Total: ${selectedPlan.price / 100}</p>
//                 <CheckoutForm
//                   plan={selectedPlan}
//                   onSuccess={handlePaymentSuccess}
//                   onError={handlePaymentError}
//                 />
//                 <button
//                   className="mt-4 text-gray-600 hover:text-gray-800"
//                   onClick={() => setSelectedPlan(null)}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </Elements>
//         )}

//         {error && (
//           <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">
//             {error}
//           </div>
//         )}

//         {success && (
//           <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
//             Payment successful! You're now enrolled in the class.
//           </div>
//         )}

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


































import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ClassImg from '../../assets/classs.jpg'
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51Q7ZmIP8a9YwaGKMyGJx51wCnG34uL5mDP1yJDiLf92UYw8RcDgtk6bW8xzTQ92zbBwtEYBaIqbcaG2Vn9J6bgAJ00WW8ybbhb');

const CheckoutForm = ({ plan, onSuccess, onError }) => {
  // CheckoutForm component code remains unchanged
};

const TarotClasses = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const pricingSectionRef = useRef(null);
  const paymentCardRef = useRef(null); // New reference for payment card

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
      price: 1500000 , // in cents
      description: 'Perfect for beginners starting their Tarot journey.',
      features: ['25 days class will be held.', 'Basic Tarot Reading','PDF will provide', 'E-Certificate  of Completion', '3 days demo class'],
    },
    {
      title: 'Advanced Class',
      price: 2500000, // in cents
      description: 'Master advanced techniques and spreads.',
      features: ['30-35 days class will be held', 'PDF will provide ','	Tarot Reading Basic ', 'E-Certificate  of Mastery', '3 days demo class', '	Free Gift Hampers'], 
    },
  ];

  const handlePaymentSuccess = async (paymentIntent) => {
    // handlePaymentSuccess function remains unchanged
  };

  const handlePaymentError = (errorMessage) => {
    setError(errorMessage);
  };

  const scrollToPricing = () => {
    pricingSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPaymentCard = () => {
    paymentCardRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-100">
      {/* New Hero Section with Background Image */}
      <div className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${ClassImg})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Discover the Art of Tarot</h1>
          <p className="text-xl mb-8">Unlock the mysteries of the cards and tap into your intuition</p>
          <button onClick={scrollToPricing} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Join Now
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
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
          ref={pricingSectionRef}
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
              <h4 className="text-3xl font-semibold text-purple-500">₹{plan.price / 100}</h4>
              <ul className="list-disc ml-6 mt-4 mb-6 text-gray-700">
                {plan.features.map((feature, index) => (
                  <li key={index} className="mb-2">{feature}</li>
                ))}
              </ul>
              <button
                className="bg-purple-500 text-white font-bold py-2 px-6 rounded hover:bg-purple-700 transition duration-300"
                onClick={() => {
                  setSelectedPlan(plan);
                  scrollToPaymentCard(); // Scroll to the payment card when a plan is selected
                }}
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
              <div ref={paymentCardRef} className="bg-white p-8 rounded-lg shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Checkout for {selectedPlan.title}</h2>
                <p className="mb-4">Total: ₹{selectedPlan.price / 100}</p>
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
