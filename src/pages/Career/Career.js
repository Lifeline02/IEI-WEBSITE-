import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeOneHeader from '../Home/HomeOneHeader/HomeOneHeader';
import HomeTwoAchievement from '../HomeTwo/HomeTwoAchievement/HomeTwoAchievement';
import HomeTwoFaq from '../HomeTwo/HomeTwoFaq/HomeTwoFaq';
import CareerArea from './CareerArea/CareerArea';

const Career = () => {
   return (
      <>
         <PageHelmet pageTitle="Career Page" />

         <HomeOneHeader/>
         <CommonPageHeader title="Career" subtitle="Career" />
         <CareerArea/>
         <HomeTwoFaq/>
         <HomeTwoAchievement/>
         <Footer/>
      </>
   );
};

export default Career;