import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Bulb from 'assets/about/bulb.svg';
import PlantBase from 'assets/about/plantBase.svg';
import Smile from 'assets/about/smile.svg';
import BulbCard from 'components/BulbCard';
import PlantCard from 'components/PlantCard';
import SmileCard from 'components/SmileCard';
import { color } from 'GlobalStyle';

const SContainer = styled.div`
  display: flex;
  width: 1260px;
  height: 420px;
  flex-direction: row;
  margin-top: 37px;
  justify-content: space-between;
  white-space: pre-wrap;
`;

const SCompanyCard = styled.div`
  display: flex;
  justify-content: center;
  width: 380px;
  height: 100%;
  border-radius: 20px;
  background-color: ${color.defaultBackground};
`;

const CompanyCard = () => {
  const { t } = useTranslation();

  return (
    <SContainer>
      <SCompanyCard>
        <BulbCard />
      </SCompanyCard>
      <SCompanyCard>
        <SmileCard />
      </SCompanyCard>
      <SCompanyCard>
        <PlantCard />
      </SCompanyCard>
    </SContainer>
  );
};

export default CompanyCard;
