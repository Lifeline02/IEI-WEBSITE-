import React from "react";
import { Link } from "react-router-dom";

const CommonCtaArea = () => {
  return (
    <>
      <section
        className="cta__area pt-180 pb-155"
        style={{
          background: `url(assets/img/cta/cta-bg.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container p-relative">
          <div className="row">
            <div className="col-xl-10 offset-xl-1">
              <div className="cta__content text-center">
                <span>Your Smile is Always our Concern</span>
                <h1>Do you have anything in mind? Feel free to Ask us</h1>
                <div className="cta__btn">
                  <Link to="/FAQ" className="z-btn z-btn-white mb-30">
                    Contact Us
                  </Link>
                  <Link to="/contact" className="z-btn z-btn-transparent mb-30">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonCtaArea;
