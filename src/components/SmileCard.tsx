import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Smile from 'assets/about/smile.svg';
import { color } from 'GlobalStyle';
import {
  SCompanyIntroduceTitle,
  SCompanyIntroduceContent,
} from 'pages/AboutPage/style';

const SContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SPlantImage = styled.div`
  display: flex;
  position: relative;
  width: 250px;
  height: 250px;
  justify-content: center;
  align-items: center;
`;

const SmileCard = () => {
  const { t } = useTranslation();

  return (
    <SContainer>
      <SPlantImage>
        <Smile />
      </SPlantImage>
      <SCompanyIntroduceTitle>
        {t('about_page.company_second_title')}
      </SCompanyIntroduceTitle>
      <SCompanyIntroduceContent>
        {t('about_page.company_second_content')}
      </SCompanyIntroduceContent>
    </SContainer>
  );
};

export default SmileCard;
