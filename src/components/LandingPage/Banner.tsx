import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import banner from 'assets/landing/banner.png';

const SContainer = styled.div`
  width: 100%;
  position: relative;

  img {
    width: 100%;
    object-fit: cover;
  }
  p {
    font-family: 'Gmarket Sans';
    font-size: 42px;
    color: white;
  }
  div {
    position: absolute;
    bottom: 50px;
    left: calc(50% - 330px);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    & > p:first-child {
      font-weight: 500;
    }
    & > p:last-child {
      font-weight: 300;
    }
  }
`;

const Banner = () => {
  const { t } = useTranslation();

  return (
    <SContainer>
      <img src={banner} />
      <div>
        <p>{t('banner.aboveText')}</p>
        <p>{t('banner.bottomText')}</p>
      </div>
    </SContainer>
  );
};

export default Banner;
