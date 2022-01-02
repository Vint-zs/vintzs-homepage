import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Bulb from 'assets/about/bulb.svg';
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
  .leafBase {
    z-index: 999;
  }
  .leaf {
    position: absolute;
  }
  .leftLeaf {
    left: 30px;
    top: 50px;
  }
  .rightLeaf {
    right: 30px;
    top: 26px;
  }
`;

const BulbCard = () => {
  const { t } = useTranslation();

  return (
    <SContainer>
      <SPlantImage>
        <Bulb />
      </SPlantImage>
      <SCompanyIntroduceTitle>
        {t('about_page.company_first_title')}
      </SCompanyIntroduceTitle>
      <SCompanyIntroduceContent>
        {t('about_page.company_first_content')}
      </SCompanyIntroduceContent>
    </SContainer>
  );
};

export default BulbCard;
