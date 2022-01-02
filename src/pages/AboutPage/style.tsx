import styled from 'styled-components';
import { color } from 'GlobalStyle';

const SContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SCompanyIntroduceTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-top: 12px;
`;

export const SCompanyIntroduceContent = styled.div`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  margin-top: 12px;
  color: ${color.secondaryTextColor};
`;
export default SContainer;
