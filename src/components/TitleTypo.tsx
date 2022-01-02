import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

interface ITitleType {
  title: string;
}

const STitleTypo = styled.div`
  font-size: 42px;
  font-weight: 700;
  line-height: 48.3px;
  text-align: center;
`;

const TitleTypo = ({ title }: ITitleType) => {
  const { t } = useTranslation();

  return <STitleTypo>{t(`${title}`)}</STitleTypo>;
};

export default TitleTypo;
