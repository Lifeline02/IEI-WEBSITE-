import React from "react";
import CommonCtaArea from "../../components/CommonCtaArea/CommonCtaArea";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import Footer from "../../components/shared/Footer";
import PageHelmet from "../../components/shared/PageHelmet";
import HomeOneHeader from "../Home/HomeOneHeader/HomeOneHeader";
import HomeTwoAchievement from "../HomeTwo/HomeTwoAchievement/HomeTwoAchievement";
import HomeTwoBlogs from "../HomeTwo/HomeTwoBlogs/HomeTwoBlogs";
import HomeTwoExpertArea from "../HomeTwo/HomeTwoExpertArea/HomeTwoExpertArea";
import HomeTwoFaq from "../HomeTwo/HomeTwoFaq/HomeTwoFaq";
import HomeTwoTestimonial from "../HomeTwo/HomeTwoTestimonial/HomeTwoTestimonial";
import Fund from "./MultiFund/Fund";

const MultiFundHome = () => {
  return (
    <>
      <PageHelmet pageTitle="Multi Fund " />

      <HomeOneHeader />
      <CommonPageHeader title="Multi-Fund Structure" subtitle="Funds" />
      <Fund />
      <HomeTwoFaq />
      <HomeTwoAchievement />
      <HomeTwoExpertArea />
      <HomeTwoTestimonial />
      <HomeTwoBlogs />
      <CommonCtaArea />
      <Footer />
    </>
  );
};

export default MultiFundHome;
