import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Project from './Projects.jsx';
import { ThemeProvider } from './context/themeContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/proyectos" element={<Project />} />
      </Routes>
    </Router>
    </ThemeProvider>
  </React.StrictMode>
);
