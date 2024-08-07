import React, { createContext, useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("token");
    if (savedUser) {
      setUser(savedUser);
      navigate("/beranda", { replace: true });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = (userData) => {
    if (userData && userData !== undefined && userData !== "") {
      setUser(userData);
      localStorage.setItem("token", userData);
      navigate("/beranda", { replace: true });
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("unit_division");
    localStorage.removeItem("nik");
    setUser(null);
    navigate("/login", { replace: true });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
