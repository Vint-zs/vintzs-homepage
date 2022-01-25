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

export const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 36px;
`;

export const HeaderButton = styled(Link)`
  width: 105px;

  &,
  &:visited {
    text-decoration: none;
  }
`;

export const Container = styled.div`
  position: sticky;
  z-index: 200;
  top: 0px;

  width: 1200px;
  height: 64px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 16px calc(50% - 600px);

  background-color: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(4px);
`;
