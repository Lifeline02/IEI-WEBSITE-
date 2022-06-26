import React from "react";
import HomeSingleFeature from "../../../components/HomeSingleFeature/HomeSingleFeature";
import { FiBook } from "react-icons/fi";

const HomeFeatures = () => {
  return (
    <>
      <section
        className="features__area pb-100 mt--100 wow fadeInUp"
        data-wow-delay=".5s"
      >
        <div className="container">
          <div className="features__inner fix">
            <div className="row g-0 ">
              <HomeSingleFeature
                icon={<FiBook />}
                title="RSA Fund I: 1.5708"
                description="Only on request but NOT accessible to Retirees and active contributors of 50 years and above."
              />
              <HomeSingleFeature
                icon={<FiBook />}
                title="RSA Fund II: 3.6416"
                description="Default fund for RSA holders of 49 years and below who are still serving."
              />
              <HomeSingleFeature
                icon={<FiBook />}
                title="RSA Fund III: 1.5070"
                description="Default fund for RSA holders of 50 years and above who are still serving."
              />
              <HomeSingleFeature
                icon={<FiBook />}
                title="RSA Fund IV: 4.1151"
                description="Only for Retirees who are done with their service"
              />
              <HomeSingleFeature
                icon={<FiBook />}
                title="RSA Fund V: 1.1320
                "
                description="Only for Micro Pension Fund, it is accessible whenever its needed"
              />
              <HomeSingleFeature
                icon={<FiBook />}
                title="RSA Fund VI: 1.0173"
                description="This refers to the Non-Interest RSA Fund (based on Islamic Shari’ ah Principles)"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeFeatures;
