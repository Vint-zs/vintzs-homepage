import React from 'react';
import { useTranslation } from 'react-i18next';
import NotFoundCat from 'assets/notFound/NotFoundCat.svg';
import * as S from 'pages/NotFoundPage/Page.style';

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <S.Container>
      <NotFoundCat />
      <S.TextContainer>
        <h3>{t('not_found_page.title')}</h3>
        <p>{t('not_found_page.info.0')}</p>
        <p>{t('not_found_page.info.1')}</p>
      </S.TextContainer>
    </S.Container>
  );
};

export default NotFoundPage;
