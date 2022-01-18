import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import HeaderLogo from 'assets/header/HeaderLogo.svg';
import * as S from 'components/Header/Header.style';

const Header = () => {
  const { t } = useTranslation();
  const selected = useLocation().pathname;

  return (
    <S.Container>
      <S.InnerContainer>
        <HeaderLogo />
        <S.NavContainer>
          <S.HeaderButton to="/">
            {<S.Typo selected={selected === '/'}>{t('header.home')}</S.Typo>}
          </S.HeaderButton>
          <S.HeaderButton to="/about">
            {
              <S.Typo selected={selected === '/about'}>
                {t('header.about')}
              </S.Typo>
            }
          </S.HeaderButton>
          <S.HeaderButton to="/contact">
            {
              <S.Typo selected={selected === '/contact'}>
                {t('header.contact')}
              </S.Typo>
            }
          </S.HeaderButton>
        </S.NavContainer>
      </S.InnerContainer>
    </S.Container>
  );
};

export default Header;
