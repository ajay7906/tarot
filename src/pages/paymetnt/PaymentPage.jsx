



import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Wallet } from 'lucide-react';
import QrcodeImg from '../../assets/qrcode1.jpg'
const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState('upi');
  const [showQRCode, setShowQRCode] = useState(false);

  const { packageDetails = { title: location.state.title, price: location.state.price, duration: 30, features: [] } } = location.state || {};

  const paymentMethods = [
    {
      id: 'upi',
      name: 'UPI Payment',
      description: 'Pay using any UPI app',
      icon: <Wallet className="w-6 h-6" />,
    },
  ];

  const handleBackClick = () => {
    navigate(-1);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (selectedPayment === 'upi') {
      setShowQRCode(true);
    } else {
      console.log('Processing payment with method:', selectedPayment);
    }
  };

  const closePopup = () => {
    setShowQRCode(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <button
        onClick={handleBackClick}
        className="flex items-center text-gray-600 hover:text-gray-800 transition-colors mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Packages
      </button>

      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-8">
            <h1 className="text-3xl font-bold text-white">Complete Your Booking</h1>
            <p className="text-green-100 mt-2">Secure payment gateway</p>
          </div>

          <div className="p-6 lg:p-8">
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">{packageDetails.title}</span>
                <span className="font-medium">₹{packageDetails.price}</span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Duration</span>
                <span>{packageDetails.duration} minutes</span>
              </div>
              <div className="mt-4 pt-4 border-t">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Total Amount</span>
                  <span className="text-green-600">₹{packageDetails.price}</span>
                </div>
              </div>
            </div>







            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Select Payment Method</h2>
              {paymentMethods.map((method) => (
                <label
                  key={method.id}
                  className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                    selectedPayment === method.id
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-green-200'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={method.id}
                    checked={selectedPayment === method.id}
                    onChange={(e) => setSelectedPayment(e.target.value)}
                    className="sr-only"
                  />
                  <div className="flex items-center flex-1">
                    <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full mr-4">
                      {method.icon}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{method.name}</p>
                      <p className="text-sm text-gray-500">{method.description}</p>
                    </div>
                  </div>
                  <div
                    className={`w-5 h-5 border-2 rounded-full ml-4 flex items-center justify-center ${
                      selectedPayment === method.id ? 'border-green-500' : 'border-gray-300'
                    }`}
                  >
                    {selectedPayment === method.id && (
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    )}
                  </div>
                </label>
              ))}
            </div>

            <button
              onClick={handlePaymentSubmit}
              className="w-full mt-8 bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Pay ₹{packageDetails.price}
            </button>

            {showQRCode && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Scan to Pay</h2>
                  <div className="flex justify-center">
                    <img 
                      src={QrcodeImg}
                      alt="QR Code for payment"
                      className="w-68 h-68 object-contain"
                    />
                  </div>
                  <button
                    onClick={closePopup}
                    className="w-full mt-4 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            <div className="mt-6 text-center text-sm text-gray-500">
              <p className="flex items-center justify-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Secure payment powered by trusted payment gateways
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;