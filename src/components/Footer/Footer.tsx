import React from 'react';
import { useTranslation } from 'react-i18next';
import FooterLogo from 'assets/footer/FooterLogo.svg';
import * as S from 'components/Footer/Footer.style';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <FooterLogo />
      <S.Link href={'mailto:vintzscompany@gmail.com'}>
        vintzscompany@gmail.com
      </S.Link>
      <p>{t('footer.copyright')}</p>
    </S.Container>
  );
};

export default Footer;
