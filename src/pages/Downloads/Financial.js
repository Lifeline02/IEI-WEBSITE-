import React from "react";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import Footer from "../../components/shared/Footer";
import PageHelmet from "../../components/shared/PageHelmet";
import HomeOneHeader from "../Home/HomeOneHeader/HomeOneHeader";
import DownloadArea from "./DownloadArea/DownloadArea";

const Financial = () => {
  return (
    <>
      <PageHelmet pageTitle="Financial Statements" />
      <HomeOneHeader />
      <CommonPageHeader
        title="Financial Statements"
        subtitle="Financial Statements"
      />
      <DownloadArea />
      <Footer />
    </>
  );
};

export default Financial;
