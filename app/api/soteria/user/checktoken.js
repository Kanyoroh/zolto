"use client";
import { useEffect, useState } from 'react';

const TokenChecker = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'token') {
        try {
          const tokenData = JSON.parse(event.newValue);
          setToken(tokenData);
        } catch (error) {
          setToken({ error: 'Error parsing token data' });
        }
      }
    };

    // Initial check for user data in local storage
    const initialToken = localStorage.getItem('token');
    if (initialToken) {
      try {
        const tokenData = JSON.parse(initialToken);
        setToken(tokenData);
      } catch (error) {
        setToken({ error: 'Error parsing token data from localstorage' });
      }
    }

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return token;
};

export default TokenChecker;