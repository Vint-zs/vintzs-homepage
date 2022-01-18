import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppContainer } from './GlobalStyle';
import Footer from 'components/Footer';
import Header from 'components/Header';
import AboutPage from 'pages/AboutPage';
import ContactPage from 'pages/ContactPage';
import LandingPage from 'pages/LandingPage';
import NotFoundPage from 'pages/NotFoundPage';

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <AppContainer>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppContainer>
    <Footer />
  </BrowserRouter>
);

export default App;
