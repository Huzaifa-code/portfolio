// UserContext.js
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('user'))?.user || null;
    } catch {
      return null;
    }
  });

  const handleLogout = async () => {
    try {
      await fetch(`${import.meta.env.BASE_URL_API || 'https://portfolio-backend-beta-six.vercel.app'}/api/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });

      localStorage.removeItem('user');
      setUser(null);

      // Astro navigation (no react-router)
      window.location.href = '/login';
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
