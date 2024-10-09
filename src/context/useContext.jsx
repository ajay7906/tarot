// import { User } from 'lucide-react';
// import React, { createContext, useState, useContext, useEffect } from 'react';

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Check if user is logged in (e.g., by checking local storage)
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const login = (userData) => {
//     console.log('userData',userData);
    
//     setUser({userData});
//     localStorage.setItem('user', JSON.stringify());
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('authToken');
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

























import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
 const [admin, setAdmin] =  useState(false);

  useEffect(() => {
    // Check if user is logged in by checking for the token in local storage
    const token = localStorage.getItem('authToken');
    if (token) {
      setUser({ token });
    }
  }, []);

  const login = (token, email) => {
    setAdmin(email == 'royal969014@gmail.com')
    console.log(email ,admin);
    
    console.log('Logging in with token:', token);
    setUser({ token });
    localStorage.setItem('authToken', token);
  };

  const logout = () => {
    setUser(null);
    setAdmin(false)
    localStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, admin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);