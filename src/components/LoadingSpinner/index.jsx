// src/components/LoadingSpinner/index.jsx
import React from "react";
import "./index.css";

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div role="status" className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
