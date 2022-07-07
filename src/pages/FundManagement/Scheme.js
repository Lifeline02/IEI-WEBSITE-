import React from "react";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import Footer from "../../components/shared/Footer";
import PageHelmet from "../../components/shared/PageHelmet";
import HomeOneHeader from "../Home/HomeOneHeader/HomeOneHeader";
import SchemeArea from "./SchemeArea/SchemeArea";
import CommonCtaArea from "../../components/CommonCtaArea/CommonCtaArea";

const Scheme = () => {
  return (
    <>
      <PageHelmet pageTitle="Pension Scheme" />
      <HomeOneHeader />
      <CommonPageHeader title="Pension Scheme" subtitle="Scheme" />
      <SchemeArea />
      <CommonCtaArea />
      <Footer />
    </>
  );
};
export default Scheme;
