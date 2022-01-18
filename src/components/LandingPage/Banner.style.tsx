import styled from 'styled-components';

interface TypeProps {
  weight: 'regular' | 'thin';
}

export const Typo = styled.p<TypeProps>`
  font-family: 'Gmarket Sans';
  font-size: 42px;
  color: white;
  font-weight: ${({ weight }) => {
    if (weight === 'regular') return '500';
    if (weight === 'thin') return '300';
    return 300;
  }};
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const TextContainer = styled.div`
  position: absolute;
  bottom: 50px;
  left: calc(50% - 330px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const Container = styled.div`
  width: 100%;
  position: relative;
`;
