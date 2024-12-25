import React from 'react';

const PaymentForm = ({ onSubmit }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Payment Form</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({ message: 'Payment data submitted!' });
        }}
        className="w-full flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Name"
          className="border p-2 rounded w-full"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded w-full"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white font-bold py-2 px-4 rounded-full hover:bg-green-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
