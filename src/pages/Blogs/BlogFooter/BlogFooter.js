import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogFooter = () => {
  return (
    <>
      <footer>
        <div className="footer__area black-bg pt-100">
          <div className="footer__top pb-45">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                  <div
                    className="footer__widget mb-45 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="footer__widget-title mb-30">
                      <div className="logo">
                        <Link to="/home">
                          <img src="assets/img/logo/logo.png" alt="" />
                        </Link>
                      </div>
                    </div>
                    <div className="footer__widget-content footer__widget-content-2">
                      <p className="mb-30">
                        Copyright © 2022 All Rights Reserved passion by IEI
                        Anchor Pension
                      </p>
                      <div className="footer__social footer__social-2 theme-social mb-30">
                        <ul>
                          <li>
                            <a href="https://www.facebook.com/ieianchorpensionltd ">
                              <i>
                                <FaFacebookF />
                              </i>
                              <i>
                                <FaFacebookF />
                              </i>
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/ieianchorpens ">
                              <i>
                                <FaTwitter />{" "}
                              </i>
                              <i>
                                <FaTwitter />{" "}
                              </i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/ieianchorpens/">
                              <i>
                                <FaInstagram />{" "}
                              </i>
                              <i>
                                <FaInstagram />{" "}
                              </i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.linkedin.com/company/ieianchorpens">
                              <i>
                                <FaLinkedin />{" "}
                              </i>
                              <i>
                                <FaLinkedin />{" "}
                              </i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 offset-xl-1 ">
                  <div
                    className="footer__widget mb-45 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <div className="footer__widget-title text-white">
                      <h4>Company</h4>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__links footer__links-2">
                        <ul>
                          <li>
                            <a href="https://www.pencom.gov.ng/">PenCom</a>
                          </li>
                          <li>
                            <a href="https://norrenberger.com/">
                              Masters in Wealth Creation
                            </a>
                          </li>
                          <li>
                            <a href="career">career</a>
                          </li>
                          <li>
                            <a href="about">About us</a>
                          </li>

                          <li>
                            <a href="directors">Board of Directors</a>
                          </li>
                          <li>
                            <a href="management">Management Team</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 offset-xl-1 ">
                  <div
                    className="footer__widget mb-45 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="footer__widget-title text-white">
                      <h4>Resources</h4>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__links footer__links-2">
                        <ul>
                          <li>
                            <a href="dataProtection">Data Protection</a>
                          </li>
                          <li>
                            <a href="privacyPolicy">Privacy Policy</a>
                          </li>

                          <li>
                            <a href="fanancialStatement">
                              Financial Statements
                            </a>
                          </li>
                          <li>
                            <a href="https://ffpro.ieianchorpensions.com.ng/pfaweb/#/login">
                              Online Statements
                            </a>
                          </li>
                          <li>
                            <a href="download">Download</a>
                          </li>
                          <li>
                            <a href="https://ffpro.ieianchorpensions.com.ng/pfaweb/#/login">
                              Self Service
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 offset-xl-1 ">
                  <div
                    className="footer__widget mb-45 wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <div className="footer__widget-title text-white">
                      <h4>Useful Links</h4>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__links footer__links-2">
                        <ul>
                          <li>
                            <a href="penCalculator">Pension Calculator</a>
                          </li>
                          <li>
                            <a href="openAccount">Open Account</a>
                          </li>
                          <li>
                            <a href="https://datarecapture.ieianchorpensions.com.ng/">
                              Data Recapture
                            </a>
                          </li>
                          <li>
                            <a href="transferNow">Transfer Now</a>
                          </li>

                          <li>
                            <a href="branches">Branches</a>
                          </li>
                          <li>
                            <a href="strategy">strategy</a>
                          </li>
                          <li>
                            <a href="scheme">strategy</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__copyright footer__copyright-2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-12 text-center">
                  <div className="footer__copyright-text footer__copyright-text-2">
                    <p>
                      Copyright © 2022 All Rights Reserved passion by{" "}
                      <Link to="/home">IEI Anchor Pension</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default BlogFooter;
