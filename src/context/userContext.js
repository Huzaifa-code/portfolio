// UserContext.js
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user'))?.user);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch(`${process.env.REACT_APP_BASE_URL}/api/auth/logout`, {
        method: 'POST',
        credentials: 'include', // Include credentials to send the HTTP-only cookie
      });

      // Clear user data from localStorage
      localStorage.removeItem('user');
      setUser(null);

      // Redirect to login page or home page
      navigate('/login');
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
