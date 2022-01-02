import React from 'react';
import SContainer from './style';
import Header from 'components/Header';
import Introduce from 'components/Introduce';

const AboutPage = () => (
  <SContainer>
    <Header selected="about"></Header>
    <Introduce />
  </SContainer>
);

export default AboutPage;
