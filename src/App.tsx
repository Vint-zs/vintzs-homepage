import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from 'pages/AboutPage';
import LandingPage from 'pages/LandingPage';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
