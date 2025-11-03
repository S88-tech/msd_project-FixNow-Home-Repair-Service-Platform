// src/context/AuthContext.js
import React, { createContext, useContext } from 'react';

// Create the context
const AuthContext = createContext();

// Create a custom hook to use the context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Create the provider component
export const AuthProvider = ({ children }) => {
  
  const signup = async (formData) => {
    try {
      const response = await fetch('http://localhost:5001/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Send fullName, email, and password to the backend
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // If the server responds with an error (e.g., 409 Conflict)
        return { success: false, error: data.message };
      }

      // If signup is successful
      return { success: true };

    } catch (error) {
      console.error('Signup error:', error);
      return { success: false, error: 'Network error or server is down.' };
    }
  };

  const value = {
    signup,
    // You can add other values like login, logout, currentUser here
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};