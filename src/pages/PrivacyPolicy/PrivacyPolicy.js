import React from "react";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import Footer from "../../components/shared/Footer";
import PageHelmet from "../../components/shared/PageHelmet";
import HomeOneHeader from "../Home/HomeOneHeader/HomeOneHeader";
import PrivacyPolicyArea from "./PrivacyPolicyArea";

const PrivacyPolicy = () => {
  return (
    <>
      <PageHelmet pageTitle="Privacy Policies Page" />
      <HomeOneHeader />
      <CommonPageHeader title="Privacy Policies" subtitle="Privacy Policy" />
      <PrivacyPolicyArea />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
