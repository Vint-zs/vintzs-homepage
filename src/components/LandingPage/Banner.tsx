import React from 'react';
import { useTranslation } from 'react-i18next';
import banner from 'assets/landing/banner.png';
import * as S from 'components/LandingPage/Banner.style';

const Banner = () => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.Image src={banner} />
      <S.TextContainer>
        <S.Typo weight="regular">{t('banner.aboveText')}</S.Typo>
        <S.Typo weight="thin">{t('banner.bottomText')}</S.Typo>
      </S.TextContainer>
    </S.Container>
  );
};

export default Banner;
