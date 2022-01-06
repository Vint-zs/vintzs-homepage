import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import IntroduceTitleBack from 'assets/about/IntroduceTitleBack.svg';
import TitleTypo from 'components/TitleTypo';
import { color } from 'GlobalStyle';

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 736px;
  margin-top: 89px;
  position: relative;

  .introduceContent {
    margin-top: 16px;
  }

  .backgroundImgContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 166px;
    height: 56px;
    position: absolute;
    left: 285px;
    z-index: -1;
    animation: draw 4s linear 5s infinite;
  }
  .backgroundImg {
  }
  @keyframes draw {
    0% {
      clip: rect(0px, 0px, 100px, 0px);
    }
    100% {
      clip: rect(0px, 400px, 100px, 0px);
    }
  }
`;

const SContentTypo = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  text-align: center;
  color: ${color.secondaryTextColor};
`;

const Introduce = () => {
  const { t } = useTranslation();

  return (
    <SContainer>
      <TitleTypo title="about_page.introduce_title"></TitleTypo>
      <div className="backgroundImgContainer">
        <IntroduceTitleBack
          className="backgroundImg"
          src={IntroduceTitleBack}
        />
      </div>
      <p className="introduceContent">
        <SContentTypo>{t('about_page.introduce_first_string')}</SContentTypo>
        <br />
        <SContentTypo>{t('about_page.introduce_second_string')}</SContentTypo>
      </p>
    </SContainer>
  );
};

export default Introduce;
