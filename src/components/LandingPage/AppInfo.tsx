import React, { ReactElement } from 'react';
import * as S from 'components/LandingPage/AppInfo.style';

interface IAppInfo {
  type: 'left' | 'right';
  SVGComponent: ReactElement;
  appTitle: string;
  appInfo: string[];
}

const LeftAppInfo = (props: Omit<IAppInfo, 'type'>) => (
  <>
    <S.LeftImageContainer>{props.SVGComponent}</S.LeftImageContainer>
    <S.TextContainer>
      <S.HeaderText>{props.appTitle}</S.HeaderText>
      {props.appInfo.map((element, index) => (
        <S.InfoText key={index}>{element}</S.InfoText>
      ))}
    </S.TextContainer>
  </>
);

const RightAppInfo = (props: Omit<IAppInfo, 'type'>) => (
  <>
    <S.TextContainer>
      <S.HeaderText>{props.appTitle}</S.HeaderText>
      {props.appInfo.map((element, index) => (
        <S.InfoText key={index}>{element}</S.InfoText>
      ))}
    </S.TextContainer>
    <S.RightImageContainer>{props.SVGComponent}</S.RightImageContainer>
  </>
);

const AppInfo = (props: IAppInfo) => (
  <S.Container>
    {props.type === 'left' ? (
      <LeftAppInfo {...props} />
    ) : (
      <RightAppInfo {...props} />
    )}
  </S.Container>
);

export default AppInfo;
