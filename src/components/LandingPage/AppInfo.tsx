import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface IAppInfo {
  type: 'left' | 'right';
  SVGComponent: ReactElement;
  appTitle: string;
  appInfo: string[];
}

const SContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  margin: 100px 0px;

  .innerContainer {
    width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .textContainer {
    height: 100%;
    padding-top: 80px;
  }
`;

const SImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .left {
    width: 487px;
    height: 646px;
    border-radius: 191px;
    background: linear-gradient(
      2.7deg,
      #ffd8d6 -11.08%,
      rgba(255, 216, 214, 0) 92.88%
    );
    box-shadow: 0px 8px 24px rgba(249, 153, 148, 0.1);
    border-radius: 191px;
    transform: rotate(23.43deg);
    & > * {
      transform: rotate(-23.43deg);
    }
  }
  .right {
    width: 487px;
    height: 646px;
    border-radius: 191px;
    background: linear-gradient(
      2.7deg,
      #ffd8d6 -11.08%,
      rgba(255, 216, 214, 0) 92.88%
    );
    box-shadow: 0px 8px 24px rgba(249, 153, 148, 0.1);
    border-radius: 191px;
    transform: rotate(-27.85deg);
    & > * {
      transform: rotate(27.85deg);
    }
  }
`;

const SHeaderText = styled.p`
  font-family: 'Gmarket Sans';
  font-weight: 700;
  font-size: 42px;
  margin-bottom: 36px;
  color: ${(props) => props.theme.palette.defaultBlackFont};
`;

const SInfoText = styled.p`
  font-family: 'Noto Sans KR';
  font-weight: 400;
  margin-bottom: 16px;
  color: ${(props) => props.theme.palette.secondaryBlackFont};
`;

const AppInfo = (props: IAppInfo) => {
  if (props.type === 'left') {
    return (
      <SContainer>
        <div className="innerContainer">
          <SImageContainer>
            <div className="left">{props.SVGComponent}</div>
          </SImageContainer>
          <div className="textContainer">
            <SHeaderText>{props.appTitle}</SHeaderText>
            {props.appInfo.map((element, index) => (
              <SInfoText key={index}>{element}</SInfoText>
            ))}
          </div>
        </div>
      </SContainer>
    );
  }
  if (props.type === 'right') {
    return (
      <SContainer>
        <div className="innerContainer">
          <div className="textContainer">
            <SHeaderText>{props.appTitle}</SHeaderText>
            {props.appInfo.map((element, index) => (
              <SInfoText key={index}>{element}</SInfoText>
            ))}
          </div>
          <SImageContainer>
            <div className="right">{props.SVGComponent}</div>
          </SImageContainer>
        </div>
      </SContainer>
    );
  }
  return <></>;
};

export default AppInfo;
