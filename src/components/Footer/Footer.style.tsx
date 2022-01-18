import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 1200px;
  padding: 16px calc(50% - 600px);
  background-color: ${({ theme }) => theme.palette.defaultBackground};
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.palette.defaultBlackFont};
  font-weight: 400;
  font-size: 14px;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 4px;
`;
