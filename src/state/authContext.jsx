// import React, { createContext, useState, useContext } from 'react';
// import axios from 'axios';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const login = async (username, password) => {
//     try {
//       const response = await axios.get('http://localhost:3000/users');
//       const users = response.data;
//       const foundUser = users.find(
//         (user) => user.username === username && user.password === password
//       );
//       if (foundUser) {
//         setUser(foundUser);
//         return true;
//       }
//       return false;
//     } catch (error) {
//       console.error('Error logging in:', error);
//       return false;
//     }
//   };

//   const register = async (username, password) => {
//     try {
//       const response = await axios.get('http://localhost:3000/users');
//       const users = response.data;
//       const userExists = users.some(user => user.username === username);
//       if (userExists) {
//         return false;
//       } else {
//         const newUser = { id: Date.now().toString(), username, password, todos: [] };
//         await axios.post('http://localhost:3000/users', newUser);
//         setUser(newUser);
//         return true;
//       }
//     } catch (error) {
//       console.error('Error registering:', error);
//       return false;
//     }
//   };

//   const logout = () => {
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, register, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    try {
      const response = await axios.get('http://localhost:3000/');
      const users = response.data;
      const foundUser = users.find(
        (user) => user.username === username && user.password === password
      );
      if (foundUser) {
        setUser(foundUser);
        return foundUser;  // Return the user object instead of true
      }
      return null;  // Return null if user is not found
    } catch (error) {
      console.error('Error logging in:', error);
      return null;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
