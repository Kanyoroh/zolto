const getUserFromLocalStorage = () => {
  return new Promise((resolve, reject) => {
    const handleStorageChange = (event) => {
      if (event.key === 'user') {
        try {
          const userData = JSON.parse(event.newValue);
          resolve(userData);
        } catch (error) {
          reject({ error: 'Error parsing updated user data' });
        }
      }
    };

    const initialUser = localStorage.getItem('user');
    if (initialUser) {
      try {
        const userData = JSON.parse(initialUser);
        resolve(userData);
      } catch (error) {
        reject({ error: 'Error parsing user data' });
      }
    } else {
      resolve(null); // Return null if no user data is found
    }

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  });
};

export default getUserFromLocalStorage;
