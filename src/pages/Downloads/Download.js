import React from "react";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import Footer from "../../components/shared/Footer";
import PageHelmet from "../../components/shared/PageHelmet";
import HomeOneHeader from "../Home/HomeOneHeader/HomeOneHeader";
import DownloadArea from "./DownloadArea/DownloadArea";

const Download = () => {
  return (
    <>
      <PageHelmet pageTitle="Branches" />
      <HomeOneHeader />
      <CommonPageHeader
        title="Downloads"
        subtitle="Documents available for downloads"
      />
      <DownloadArea />
      <Footer />
    </>
  );
};

export default Download;
