import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaVimeoV,
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
                            <a href="#">
                              <i>
                                <FaFacebookF />
                              </i>
                              <i>
                                <FaFacebookF />
                              </i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i>
                                <FaTwitter />{" "}
                              </i>
                              <i>
                                <FaTwitter />{" "}
                              </i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i>
                                <FaInstagram />{" "}
                              </i>
                              <i>
                                <FaInstagram />{" "}
                              </i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
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
                            <a href="#">PenCom</a>
                          </li>
                          <li>
                            <a href="#">Politics</a>
                          </li>
                          <li>
                            <a href="#">Sport</a>
                          </li>
                          <li>
                            <a href="#">Finance</a>
                          </li>
                          <li>
                            <a href="#">Entertainment</a>
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
                            <a href="#">Data Protection</a>
                          </li>
                          <li>
                            <a href="#">Privacy Policy</a>
                          </li>
                          <li>
                            <a href="#">Blog</a>
                          </li>
                          <li>
                            <a href="#">Financial Statements</a>
                          </li>
                          <li>
                            <a href="#">Online Statements</a>
                          </li>
                          <li>
                            <a href="#">Download</a>
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
                            <a href="#">Pension Calculator</a>
                          </li>
                          <li>
                            <a href="#">Open Account</a>
                          </li>
                          <li>
                            <a href="#">Data Recapture</a>
                          </li>
                          <li>
                            <a href="#">Transfer Now</a>
                          </li>
                          <li>
                            <a href="#">Onboarding</a>
                          </li>
                          <li>
                            <a href="#">Branches</a>
                          </li>
                          <li>
                            <a href="#"></a>
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
