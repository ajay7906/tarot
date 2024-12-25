// src/components/UPIVerificationForm.jsx
import React, { useState } from 'react';
import { X } from 'lucide-react';

const UPIVerificationForm = ({ onClose, packageDetails, userData, onSubmit }) => {
  const [verificationData, setVerificationData] = useState({
    paymentLink: '',
    upiReference: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVerificationData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Validate UPI payment link format
      if (!verificationData.paymentLink.includes('upi://pay')) {
        throw new Error('Please enter a valid UPI payment success link');
      }

      await onSubmit({
        ...verificationData,
        packageDetails,
        // userData
      });
      
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Verify Payment</h2>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-blue-800">
              Please paste the UPI payment success link and reference number from your payment app
            </p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-700 p-3 rounded-md mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                UPI Payment Success Link
              </label>
              <input
                type="text"
                name="paymentLink"
                required
                value={verificationData.paymentLink}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Paste UPI payment success link here"
              />
              <p className="text-xs text-gray-500 mt-1">
                Share the payment success link from your UPI payment app
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                UPI Reference Number
              </label>
              <input
                type="text"
                name="upiReference"
                required
                value={verificationData.upiReference}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter UPI reference number"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 rounded-md text-white transition ${
                loading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              {loading ? 'Verifying...' : 'Verify Payment'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UPIVerificationForm;