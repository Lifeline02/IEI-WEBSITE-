import React from 'react';
import CommonCtaArea from '../../../../components/CommonCtaArea/CommonCtaArea';
import CommonPageHeader from '../../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../../../components/shared/Footer';
import PageHelmet from '../../../../components/shared/PageHelmet';
import HomeOneHeader from '../../../Home/HomeOneHeader/HomeOneHeader';
import HomeTwoAchievement from '../../../HomeTwo/HomeTwoAchievement/HomeTwoAchievement';
import HomeTwoBlogs from '../../../HomeTwo/HomeTwoBlogs/HomeTwoBlogs';
import HomeTwoCaseArea from '../../../HomeTwo/HomeTwoCaseArea/HomeTwoCaseArea';
import HomeTwoCounter from '../../../HomeTwo/HomeTwoCounter/HomeTwoCounter';
import HomeTwoExpertArea from '../../../HomeTwo/HomeTwoExpertArea/HomeTwoExpertArea';
import HomeTwoFaq from '../../../HomeTwo/HomeTwoFaq/HomeTwoFaq';
import HomeTwoTestimonial from '../../../HomeTwo/HomeTwoTestimonial/HomeTwoTestimonial';
import BenefitArea from './BenefitPaymentArea/BenefitArea';




const BenefitPayment = () => {
   return (
      <>
         <PageHelmet pageTitle="Benefit Payment" />

         <HomeOneHeader/>
         <CommonPageHeader title="Benefit Payment" subtitle="Benefit" />
         <BenefitArea />
         <HomeTwoFaq/>
         <HomeTwoAchievement/>
         <HomeTwoExpertArea/>
         <HomeTwoCounter/>
         <HomeTwoTestimonial/>
         <HomeTwoCaseArea/>
         <HomeTwoBlogs/>
         <CommonCtaArea/>
         <Footer />
      </>
   );
};

export default BenefitPayment;