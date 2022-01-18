import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface TypoProps {
  selected: boolean;
}

export const Typo = styled.p<TypoProps>`
  color: ${(props) => {
    if (props.selected) return props.theme.palette.selectedBlueFont;
    return props.theme.palette.disabledFont;
  }};

  &:hover {
    color: ${(props) => props.theme.palette.defaultBlackFont};
    font-weight: 500;
  }
`;

export const InnerContainer = styled.div`
  width: 1200px;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 36px;
`;

export const HeaderButton = styled(Link)`
  width: 105px;
  text-decoration: none;

  &:visited {
    text-decoration: none;
  }
`;

export const Container = styled.div`
  width: 100%;
  position: sticky;
  top: 0px;
  z-index: 200;
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(4px);
  padding: 16px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
