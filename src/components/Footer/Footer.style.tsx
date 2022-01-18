import styled from 'styled-components';

export const InnerContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.palette.defaultBlackFont};
  font-weight: 400;
  font-size: 14px;
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  padding: 16px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.defaultBackground};
`;
