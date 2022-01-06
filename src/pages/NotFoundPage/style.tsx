import styled from 'styled-components';

const SContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: inherit;
  gap: 32px;
`;

const STextContainer = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-family: 'Gmarket Sans';
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 9px;
  }
  p {
    font-family: 'Gmarket Sans';
    margin-bottom: 4px;
  }
`;

export { SContainer, STextContainer };
