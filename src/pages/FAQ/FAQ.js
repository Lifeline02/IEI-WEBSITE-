import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeOneHeader from '../Home/HomeOneHeader/HomeOneHeader';

import FAQArea from './FQAArea/FQAArea';

const FAQ = () => {
   return (
      <>
         <PageHelmet pageTitle="About Page" />
         <HomeOneHeader/>
         <CommonPageHeader title="Fequently Asked Questions" subtitle="FAQs" />
         <FAQArea />
         <Footer/>
      </>
   );
};

export default FAQ;