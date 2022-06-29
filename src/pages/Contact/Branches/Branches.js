import React from 'react';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../../components/shared/Footer';
import PageHelmet from '../../../components/shared/PageHelmet';
import HomeOneHeader from '../../Home/HomeOneHeader/HomeOneHeader';
import FAQArea from './BranchesArea/BranchArea';

const Branch = () => {
   return (
      <>
         <PageHelmet pageTitle="Branches" />
         <HomeOneHeader/>
         <CommonPageHeader title="Our Branches" subtitle="Brnaches" />
         <FAQArea />
         <Footer/>
      </>
   );
};

export default Branch;