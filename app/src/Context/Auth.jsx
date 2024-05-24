import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
// import { setToken, createSession, register } from '../Services/Api';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const recoveredUser = localStorage.getItem('user');

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  const handleState = (response) => {
    const loggedUser = response;

    localStorage.setItem('user', JSON.stringify(loggedUser));

    setUser(loggedUser);

    setAuthenticated(true);

    navigate('/videos');
  };

  const login = async (form) => {
    const {email, password} = form
    if (email === "aluno@estacio.com.br" && password === "professorThier") {
      handleState(email);
    }
  };

  // const createUser = async (form) => {
    // const response = await register(form);

    // handleState(response);
  // };

  const logout = () => {
    // setToken(null);
    setUser(null);
    setAuthenticated(false);
    localStorage.removeItem('user');
    // localStorage.removeItem('token');
    navigate('/');
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    authenticated,
    user,
    loading,
    login,
    // createUser,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};