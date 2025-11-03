import React, { createContext, useContext, useState, useEffect } from 'react';

const PaymentHistoryContext = createContext({});

export const usePaymentHistory = () => {
  const context = useContext(PaymentHistoryContext);
  if (!context) {
    throw new Error('usePaymentHistory must be used within a PaymentHistoryProvider');
  }
  return context;
};

export const PaymentHistoryProvider = ({ children }) => {
  const [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    // Load payment history from localStorage on mount
    const savedHistory = localStorage.getItem('paymentHistory');
    if (savedHistory) {
      setPaymentHistory(JSON.parse(savedHistory));
    }
  }, []);

  const addPaymentToHistory = (paymentData) => {
    const newPayment = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      amount: paymentData.amount || 125.00,
      service: paymentData.service,
      status: 'completed',
      ...paymentData
    };

    const updatedHistory = [newPayment, ...paymentHistory];
    setPaymentHistory(updatedHistory);
    localStorage.setItem('paymentHistory', JSON.stringify(updatedHistory));
  };

  const clearPaymentHistory = () => {
    setPaymentHistory([]);
    localStorage.removeItem('paymentHistory');
  };

  const value = {
    paymentHistory,
    addPaymentToHistory,
    clearPaymentHistory
  };

  return (
    <PaymentHistoryContext.Provider value={value}>
      {children}
    </PaymentHistoryContext.Provider>
  );
};
