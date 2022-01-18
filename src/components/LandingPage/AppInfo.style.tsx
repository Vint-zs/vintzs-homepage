import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  margin: 100px 0px;
`;

export const InnerContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const TextContainer = styled.div`
  height: 100%;
  padding-top: 80px;
`;

export const LeftImageContainer = styled.div`
  width: 480px;
  height: 640px;
  border-radius: 190px;
  box-shadow: 0px 8px 24px rgba(249, 153, 148, 0.1);

  background: linear-gradient(
    2.7deg,
    #ffd8d6 -11.08%,
    rgba(255, 216, 214, 0) 92.88%
  );
  transform: rotate(23.43deg);
  & > * {
    transform: rotate(-23.43deg);
  }
  & > svg {
    position: absolute;
    left: 30px;
    bottom: 50px;
  }
`;

export const RightImageContainer = styled.div`
  width: 480px;
  height: 640px;
  border-radius: 190px;
  box-shadow: 0px 8px 24px rgba(249, 153, 148, 0.1);

  background: linear-gradient(
    2.7deg,
    #ffd8d6 -11.08%,
    rgba(255, 216, 214, 0) 92.88%
  );
  transform: rotate(-27.85deg);
  & > * {
    transform: rotate(27.85deg);
  }
`;
export const ImageContainerPlaceholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .left {
    transform: rotate(23.43deg);
    & > * {
      transform: rotate(-23.43deg);
    }
    & > svg {
      position: absolute;
      left: 30px;
      bottom: 50px;
    }
  }
  .right {
    transform: rotate(-27.85deg);
    & > * {
      transform: rotate(27.85deg);
    }
  }
`;

export const HeaderText = styled.p`
  font-family: 'Gmarket Sans';
  font-weight: 700;
  font-size: 42px;
  margin-bottom: 36px;
  color: ${(props) => props.theme.palette.defaultBlackFont};
`;

export const InfoText = styled.p`
  font-family: 'Noto Sans KR';
  font-weight: 400;
  margin-bottom: 16px;
  color: ${(props) => props.theme.palette.secondaryBlackFont};
`;
