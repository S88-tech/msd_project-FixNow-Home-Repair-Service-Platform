import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import Button from '../components/Button';
import FormInput from '../components/FormInput';

const Payment = () => {
  const { bookingData, clearBookingData } = useBooking();
  const navigate = useNavigate();
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would process the payment here
    console.log('Processing payment:', paymentData);
    clearBookingData();
    navigate('/payment-complete');
  };

  const formatCardNumber = (value) => {
    // Remove all non-numeric characters
    const numericValue = value.replace(/\D/g, '');
    // Add spaces every 4 digits
    return numericValue.replace(/(\d{4})(?=\d)/g, '$1 ');
  };

  const formatExpiryDate = (value) => {
    // Remove all non-numeric characters
    const numericValue = value.replace(/\D/g, '');
    // Add slash after month
    if (numericValue.length >= 2) {
      return numericValue.substring(0, 2) + '/' + numericValue.substring(2, 4);
    }
    return numericValue;
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    setPaymentData(prev => ({
      ...prev,
      cardNumber: formatted
    }));
  };

  const handleExpiryDateChange = (e) => {
    const formatted = formatExpiryDate(e.target.value);
    setPaymentData(prev => ({
      ...prev,
      expiryDate: formatted
    }));
  };

  const calculateTotal = () => {
    // In a real app, this would be calculated based on service type and duration
    return 125.00;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link className="flex items-center gap-2 text-primary" to="/dashboard">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"></path>
              </svg>
              <h1 className="text-2xl font-bold">FixNow</h1>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Complete Your Booking
            </h2>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
              Securely enter your payment details to finalize your request.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-sm">
            <form id="payment-form" onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Card Number
                </label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    className="mt-1 w-full pl-10 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary focus:border-primary"
                    id="card-number"
                    name="cardNumber"
                    placeholder="0000 0000 0000 0000"
                    type="text"
                    value={paymentData.cardNumber}
                    onChange={handleCardNumberChange}
                    maxLength={19}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expiry-date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Expiry Date
                  </label>
                  <input
                    className="mt-1 w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary focus:border-primary"
                    id="expiry-date"
                    name="expiryDate"
                    placeholder="MM / YY"
                    type="text"
                    value={paymentData.expiryDate}
                    onChange={handleExpiryDateChange}
                    maxLength={5}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    CVV
                  </label>
                  <input
                    className="mt-1 w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary focus:border-primary"
                    id="cvv"
                    name="cvv"
                    placeholder="123"
                    type="text"
                    value={paymentData.cvv}
                    onChange={handleInputChange}
                    maxLength={4}
                    required
                  />
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  Booking Summary
                </h3>
                <div className="space-y-3 border-t border-gray-200 dark:border-gray-700 pt-3">
                  <div className="flex justify-between text-sm">
                    <span id="summary-service" className="text-gray-600 dark:text-gray-400">
                      {bookingData.service || 'Service'}
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      ${calculateTotal().toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between font-bold text-base border-t border-gray-200 dark:border-gray-700 pt-3 mt-3">
                    <span className="text-gray-900 dark:text-white">Total Amount</span>
                    <span className="text-gray-900 dark:text-white">
                      ${calculateTotal().toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-4 px-4 rounded-lg hover:opacity-90"
                >
                  <span>Pay Now & Complete Booking</span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Payment;
