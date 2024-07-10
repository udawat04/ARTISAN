import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticate, setAuthenticate] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      // Fetch user details using the token if needed
      setAuthenticate(true);
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    setAuthenticate(true);
    localStorage.setItem("userId", userData._id); // Store user ID in local storage
  };

  const logout = () => {
    setUser(null);
    setAuthenticate(false);
    localStorage.removeItem("userId"); // Remove user ID from local storage
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticate, setAuthenticate, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
