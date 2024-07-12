import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticate, setAuthenticate] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const storedUser = localStorage.getItem("user");
    if (token && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setAuthenticate(true);
        setUser(parsedUser);
      } catch (error) {
        console.error("Failed to parse user from local storage", error);
      }
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    setAuthenticate(true);
    localStorage.setItem("user", JSON.stringify(userData)); // Store user object in local storage
    localStorage.setItem("accessToken", userData.accessToken); // Assuming accessToken is part of userData
  };

  const logout = () => {
    setUser(null);
    setAuthenticate(false);
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticate,
        setAuthenticate,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
