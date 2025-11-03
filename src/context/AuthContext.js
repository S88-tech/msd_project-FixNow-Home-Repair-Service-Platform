// ===============================
// FixNow Frontend - AuthContext.js
// ===============================

import React, { createContext, useContext, useState, useEffect } from 'react';

// Create authentication context
const AuthContext = createContext();

// Custom hook for easy access
export const useAuth = () => useContext(AuthContext);

// ======================================
// ✅ AuthProvider Component
// ======================================
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // ✅ Works in both Vite and CRA
  const API_URL =
    (typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_URL) ||
    process.env.REACT_APP_API_URL ||
    'http://localhost:5001';

  // ========================
  // ✅ Signup Function
  // ========================
  const signup = async (formData) => {
    try {
      const response = await fetch(`${API_URL}/api/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName?.trim(),
          email: formData.email?.trim(),
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.warn('❌ Signup failed:', data);
        return {
          success: false,
          error: data.error || 'Signup failed. Please try again.',
        };
      }

      console.log('✅ Signup successful:', data);
      return {
        success: true,
        message: data.message || 'Signup successful!',
      };
    } catch (error) {
      console.error('⚠️ Signup network error:', error);
      return {
        success: false,
        error: 'Network error or backend server is down.',
      };
    }
  };

  // ========================
  // ✅ Signin Function
  // ========================
  const signin = async (formData) => {
    try {
      const response = await fetch(`${API_URL}/api/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email?.trim(),
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.warn('❌ Signin failed:', data);
        return {
          success: false,
          error: data.error || 'An error occurred. Please try again.',
        };
      }

      console.log('✅ Signin successful:', data);

      // Save token and user info
      localStorage.setItem('fixnow_token', data.token);
      localStorage.setItem('fixnow_user', JSON.stringify(data.user));
      setUser(data.user);

      return {
        success: true,
        message: data.message || 'Signin successful!',
        user: data.user,
      };
    } catch (error) {
      console.error('⚠️ Signin network error:', error);
      return {
        success: false,
        error: 'Network error or backend server is down.',
      };
    }
  };

  // ========================
  // ✅ Logout Function
  // ========================
  const logout = () => {
    localStorage.removeItem('fixnow_token');
    localStorage.removeItem('fixnow_user');
    setUser(null);
  };

  // ========================
  // ✅ Auto-Load User
  // ========================
  useEffect(() => {
    const savedUser = localStorage.getItem('fixnow_user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // Provide values
  const value = { user, signup, signin, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
