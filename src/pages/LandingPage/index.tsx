import React from 'react';
import SContainer from './style';
import Footer from 'components/Footer';
import Header from 'components/Header';

const LandingPage = () => (
  <SContainer>
    <Header selected="home"></Header>
    <Footer></Footer>
  </SContainer>
);

export default LandingPage;
