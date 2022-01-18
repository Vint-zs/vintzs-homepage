import React from 'react';
import { useTranslation } from 'react-i18next';
import { SContainer, STextContainer } from './style';
import NotFoundCat from 'assets/notFound/NotFoundCat.svg';

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <SContainer>
      <NotFoundCat />
      <STextContainer>
        <h3>{t('not_found_page.title')}</h3>
        <p>{t('not_found_page.info.0')}</p>
        <p>{t('not_found_page.info.1')}</p>
      </STextContainer>
    </SContainer>
  );
};

export default NotFoundPage;
