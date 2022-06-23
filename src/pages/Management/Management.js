import React from 'react';
import CommonCtaArea from '../../components/CommonCtaArea/CommonCtaArea';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeOneHeader from '../Home/HomeOneHeader/HomeOneHeader';
import ManagementArea from './ManagementArea/ManagementArea';


const Management = () => {
   return (
      <>
         <PageHelmet pageTitle="Team Page" />

         <HomeOneHeader/>
         <CommonPageHeader title="Our Management" subtitle="Management" />
         <ManagementArea/>
         <CommonCtaArea/>
         <Footer/>
      </>
   );
};

export default Management;