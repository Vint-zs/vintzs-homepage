import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: inherit;
  gap: 24px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  h3 {
    font-family: 'Gmarket Sans';
    font-size: 32px;
    font-weight: 600;
  }
  p {
    font-family: 'Gmarket Sans';
  }
  button {
    background-color: #fc938e;
    width: 150px;
    height: 42px;
    border: none;
    border-radius: 5px;
    margin-top: 24px;

    font-size: 20px;
    font-family: 'Gmarket Sans';

    cursor: pointer;
    color: white;
    transition-duration: 0.3s;

    &:hover {
      background-color: #fb756f;
    }
  }
`;
