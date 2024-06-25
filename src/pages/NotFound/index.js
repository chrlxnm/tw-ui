// src/pages/NotFound.js

import { Navigate } from 'react-router-dom';
import React from 'react';

const NotFound = () => {
  return <Navigate to="/beranda" replace />;
};

export default NotFound;
