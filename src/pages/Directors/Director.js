import React from 'react';
import CommonCtaArea from '../../components/CommonCtaArea/CommonCtaArea';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeOneHeader from '../Home/HomeOneHeader/HomeOneHeader';
import DirectorArea from './DirectorArea/DirectorArea';


const Director = () => {
   return (
      <>
         <PageHelmet pageTitle="Team Page" />

         <HomeOneHeader/>
         <CommonPageHeader title="Our Directors" subtitle="Directors" />
         <DirectorArea/>
         <CommonCtaArea/>
         <Footer/>
      </>
   );
};

export default Director;