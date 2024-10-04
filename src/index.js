// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // React Router v6
import App from './App';

// Get the root element in your HTML
const container = document.getElementById('root');

// Use createRoot instead of ReactDOM.render
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Dynamic route for the calendar */}
        <Route path="/:year/:month" element={<App />} />
        {/* Redirect to the current month if no path is provided */}
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
