import React from 'react';
import { useTranslation } from 'react-i18next';
import { SContainer, STextContainer } from './style';
import ContactCat from 'assets/contact/ContactCat.svg';

const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <SContainer>
      <ContactCat />
      <STextContainer>
        <h3>{t('contact_page.title')}</h3>
        <p>{t('contact_page.info')}</p>
        <button>{t('contact_page.join_button')}</button>
      </STextContainer>
    </SContainer>
  );
};

export default ContactPage;
