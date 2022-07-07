import React from "react";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import Footer from "../../components/shared/Footer";
import PageHelmet from "../../components/shared/PageHelmet";
import HomeOneHeader from "../Home/HomeOneHeader/HomeOneHeader";
import StrategyArea from "./StrategyArea/StrategyArea";
import CommonCtaArea from "../../components/CommonCtaArea/CommonCtaArea";

const Strategy = () => {
  return (
    <>
      <PageHelmet pageTitle="Investment Strategy" />
      <HomeOneHeader />
      <CommonPageHeader title="Investment Strategy" subtitle=" Strategies" />
      <StrategyArea />
      <CommonCtaArea />
      <Footer />
    </>
  );
};
export default Strategy;
