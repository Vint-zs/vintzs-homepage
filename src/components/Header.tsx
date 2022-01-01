import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import HeaderLogo from 'assets/header/HeaderLogo.svg';
import { color } from 'GlobalStyle';

interface IMenuFont {
  selected: boolean;
}

const STypo = styled.p<IMenuFont>`
  color: ${(props) => {
    if (props.selected) return color.selectedBlueFont;
    return color.disabledFont;
  }};
`;

const SContainer = styled.div`
  width: 100%;
  position: sticky;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(16px);
  padding: 16px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .innerContainer {
    width: 1200px;
    height: 64px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .navContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 36px;
    a {
      width: 105px;
    }
  }

  a,
  a:visited {
    text-decoration: none;
  }

  a:hover {
    font-weight: 500;
  }
`;

const Header = () => {
  const { t } = useTranslation();
  const selected = useLocation().pathname;

  return (
    <SContainer>
      <div className="innerContainer">
        <HeaderLogo />
        <div className="navContainer">
          <Link to="/">
            {<STypo selected={selected === '/'}>{t('header.home')}</STypo>}
          </Link>
          <Link to="/about">
            {
              <STypo selected={selected === '/about'}>
                {t('header.about')}
              </STypo>
            }
          </Link>
          <Link to="/contact">
            {
              <STypo selected={selected === '/contact'}>
                {t('header.contact')}
              </STypo>
            }
          </Link>
        </div>
      </div>
    </SContainer>
  );
};

export default Header;
