import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import FooterLogo from 'assets/footer/FooterLogo.svg';
import { color } from 'GlobalStyle';

const SContainer = styled.div`
  width: 100%;
  padding: 16px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${color.defaultBackground};
  position: absolute;
  bottom: 0px;

  .innerContainer {
    width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .navContainer {
    display: flex;
    flex-direction: column;
    gap: 4px;

    a {
      color: ${color.defaultBlackFont};
      font-weight: 400;
      font-size: 14px;
      width: 100%;
    }
  }
`;

const Footer = () => {
  const { t } = useTranslation();

  return (
    <SContainer>
      <div className="innerContainer">
        <FooterLogo />
        <div className="navContainer">
          <div>
            <a href={'mailto:vintzscompany@gmail.com'}>
              vintzscompany@gmail.com
            </a>
          </div>
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </SContainer>
  );
};

export default Footer;
