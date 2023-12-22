const getTokenFromLocalStorage = () => {
  return new Promise((resolve, reject) => {
    const handleStorageChange = (event) => {
      if (event.key === 'token') {
        try {
          const token = JSON.parse(event.newValue);
          resolve(token);
        } catch (error) {
          reject({ error: 'Error parsing updated token' });
        }
      }
    };

    const initialToken = localStorage.getItem('token');
    if (initialToken) {
      try {
        const token = JSON.parse(initialToken);
        resolve(token);
      } catch (error) {
        reject({ error: 'Error parsing token data' });
      }
    } else {
      resolve(null); // Return null if no token data is found
    }

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }); 
};

export default getTokenFromLocalStorage;
