import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// Load the Stripe object
const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY");

const CheckoutForm = ({ biodataId, selfEmail }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const cardElement = elements.getElement(CardElement);

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (error) {
        setErrorMessage(error.message);
        setIsProcessing(false);
        return;
      }

      // Mock payment processing
      const fee = 5 * 100; // $5 in cents
      console.log("Payment Method ID: ", paymentMethod.id); // Use this for backend

      // TODO: Send paymentMethod.id and fee to the server for processing payment
      console.log("Payment processed successfully");

      setPaymentSuccess(true);
      setIsProcessing(false);
    } catch (err) {
      setErrorMessage(err.message || "An error occurred while processing payment");
      setIsProcessing(false);
    }
  };

  if (paymentSuccess) {
    return (
      <div className="mt-6 text-center">
        <h2 className="text-2xl font-bold text-green-600">Payment Successful</h2>
        <p className="mt-2">You can now view the biodata's contact information!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6">Request Contact Information</h2>
      <div className="mb-4">
        <label htmlFor="biodataId" className="block text-sm font-bold mb-2">
          Biodata ID
        </label>
        <input
          type="text"
          id="biodataId"
          value={biodataId}
          readOnly
          className="w-full border rounded-lg py-2 px-4 bg-gray-100"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="selfEmail" className="block text-sm font-bold mb-2">
          Your Email
        </label>
        <input
          type="email"
          id="selfEmail"
          value={selfEmail}
          readOnly
          className="w-full border rounded-lg py-2 px-4 bg-gray-100"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="card" className="block text-sm font-bold mb-2">
          Stripe Card Number
        </label>
        <div className="border p-2 rounded-lg">
          <CardElement id="card" />
        </div>
      </div>
      {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className={`w-full text-white py-2 px-4 rounded-lg ${
          isProcessing ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {isProcessing ? "Processing..." : "Pay $5 and Submit"}
      </button>
    </form>
  );
};

const Checkout = () => {
  // Mock data (replace these with real data from the backend or state)
  const biodataId = "B12345"; // Replace with actual biodata ID
  const selfEmail = "user@example.com"; // Replace with the user's actual email

  return (
    <Elements stripe={stripePromise}>
      <div className="p-4 min-h-screen bg-gray-50 flex items-center justify-center">
        <CheckoutForm biodataId={biodataId} selfEmail={selfEmail} />
      </div>
    </Elements>
  );
};

export default Checkout;
