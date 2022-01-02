import React from 'react';
import SContainer from './style';
import CompanyCard from 'components/CompanyCard';
import Introduce from 'components/Introduce';

const AboutPage = () => (
  <SContainer>
    <Introduce />
    <CompanyCard />
  </SContainer>
);

export default AboutPage;
