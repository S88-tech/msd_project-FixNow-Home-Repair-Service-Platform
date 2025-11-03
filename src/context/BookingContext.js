import React, { createContext, useContext, useState, useEffect } from 'react';

const BookingContext = createContext({});

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};

export const BookingProvider = ({ children }) => {
  const [bookingData, setBookingData] = useState({
    service: '',
    date: '',
    time: '',
    address: '',
    city: '',
    zipCode: '',
    notes: ''
  });

  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    // Load booking data from localStorage on mount
    const savedData = localStorage.getItem('bookingData');
    if (savedData) {
      setBookingData(JSON.parse(savedData));
    }
  }, []);

  const updateBookingData = (newData) => {
    const updatedData = { ...bookingData, ...newData };
    setBookingData(updatedData);
    localStorage.setItem('bookingData', JSON.stringify(updatedData));
  };

  const clearBookingData = () => {
    setBookingData({
      service: '',
      date: '',
      time: '',
      address: '',
      city: '',
      zipCode: '',
      notes: ''
    });
    localStorage.removeItem('bookingData');
    setCurrentStep(1);
  };

  const setService = (service) => {
    updateBookingData({ service });
  };

  const setDate = (date) => {
    updateBookingData({ date });
    setCurrentStep(2);
  };

  const setTime = (time) => {
    updateBookingData({ time });
    setCurrentStep(3);
  };

  const setAddress = (address) => {
    updateBookingData({ address });
  };

  const setCity = (city) => {
    updateBookingData({ city });
  };

  const setZipCode = (zipCode) => {
    updateBookingData({ zipCode });
  };

  const setNotes = (notes) => {
    updateBookingData({ notes });
  };

  const confirmBooking = () => {
    // Here you would typically send the booking to your backend
    console.log('Booking confirmed:', bookingData);
    clearBookingData();
    setCurrentStep(4);
  };

  const value = {
    bookingData,
    currentStep,
    setService,
    setDate,
    setTime,
    setAddress,
    setCity,
    setZipCode,
    setNotes,
    updateBookingData,
    clearBookingData,
    confirmBooking
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};
