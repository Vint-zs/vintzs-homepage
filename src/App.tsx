import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from 'components/Footer';
import Header from 'components/Header';
import AboutPage from 'pages/AboutPage';
import LandingPage from 'pages/LandingPage';

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<AboutPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
