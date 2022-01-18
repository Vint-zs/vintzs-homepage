import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactCat from 'assets/contact/ContactCat.svg';
import * as S from 'pages/ContactPage/Page.style';

const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <S.Container>
      <ContactCat />
      <S.TextContainer>
        <h3>{t('contact_page.title')}</h3>
        <p>{t('contact_page.info')}</p>
        <button>{t('contact_page.join_button')}</button>
      </S.TextContainer>
    </S.Container>
  );
};

export default ContactPage;
