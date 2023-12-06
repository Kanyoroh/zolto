"use client";
import { useEffect, useState } from 'react';

const UserChecker = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'user') {
        try {
          const userData = JSON.parse(event.newValue);
          setUser(userData);
        } catch (error) {
          setUser({ error: 'Error parsing updated user data' });
        }
      }
    };

    // Initial check for user data in local storage
    const initialUser = localStorage.getItem('user');
    if (initialUser) {
      try {
        const userData = JSON.parse(initialUser);
        setUser(userData);
      } catch (error) {
        setUser({ error: 'Error parsing user data' });
      }
    }

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Only stringify user after component has mounted
  const [userString, setUserString] = useState(null);
  useEffect(() => {
    setUserString(JSON.stringify(user));
  }, [user]);

  return userString;
};

export default UserChecker;