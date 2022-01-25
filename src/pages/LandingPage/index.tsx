import React from 'react';
import { useTranslation } from 'react-i18next';
import HaksikImage from 'assets/landing/HaksikImage.svg';
import MeetingImage from 'assets/landing/MeetingImage.svg';
import PetpalImage from 'assets/landing/PetpalImage.svg';
import AppInfo from 'components/LandingPage/AppInfo';
import Banner from 'components/LandingPage/Banner';
import * as S from 'pages/LandingPage/Page.style';

const LandingPage = () => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <Banner />
      <AppInfo
        SVGComponent={<PetpalImage />}
        type="left"
        appTitle={t('petpalInfo.title')}
        appInfo={[
          t('petpalInfo.info.0'),
          t('petpalInfo.info.1'),
          t('petpalInfo.info.2'),
        ]}
      />
      <AppInfo
        SVGComponent={<MeetingImage />}
        type="right"
        appTitle={t('meetingInfo.title')}
        appInfo={[
          t('meetingInfo.info.0'),
          t('meetingInfo.info.1'),
          t('meetingInfo.info.2'),
        ]}
      />
      <AppInfo
        SVGComponent={<HaksikImage />}
        type="left"
        appTitle={t('haksikInfo.title')}
        appInfo={[
          t('haksikInfo.info.0'),
          t('haksikInfo.info.1'),
          t('haksikInfo.info.2'),
        ]}
      />
    </S.Container>
  );
};

export default LandingPage;
