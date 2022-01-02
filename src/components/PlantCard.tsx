import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import PlantBase from 'assets/about/plantBase.svg';
import PlantLeftLeaf from 'assets/about/plantLeftLeaf.svg';
import PlantRightLeaf from 'assets/about/plantRightLeaf.svg';
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

const PlantCard = () => {
  const { t } = useTranslation();

  return (
    <SContainer>
      <SPlantImage>
        <PlantBase className="leafBase" />
        <PlantLeftLeaf className="leaf leftLeaf" />
        <PlantRightLeaf className="leaf rightLeaf" />
      </SPlantImage>
      <SCompanyIntroduceTitle>
        {t('about_page.company_third_title')}
      </SCompanyIntroduceTitle>
      <SCompanyIntroduceContent>
        {t('about_page.company_third_content')}
      </SCompanyIntroduceContent>
    </SContainer>
  );
};

export default PlantCard;
