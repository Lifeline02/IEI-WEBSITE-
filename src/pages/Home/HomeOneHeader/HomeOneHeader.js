import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaUserAlt,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Sidebar from "../../../components/Sidebar/Sidebar";
import useGlobalContext from "../../../hooks/useGlobalContext";

const HomeOneHeader = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { stickyMenu } = useGlobalContext();

  return (
    <>
      <header>
        <div className="header__area p-relative header__transparent">
          <div className="header__top d-none d-md-block">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-5 col-lg-4 col-md-3">
                  <div className="header__social">
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/ieianchorpens"
                          target="_blank"
                        >
                          <i>
                            <FaFacebookF />
                          </i>{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/ieianchorpens"
                          target="_blank"
                        >
                          <i>
                            <FaTwitter />{" "}
                          </i>
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/iei-anchor-pension-managers-limited/"
                          target="_blank"
                        >
                          <i>
                            <FaLinkedinIn />
                          </i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/ieianchorpens/"
                          target="_blank"
                        >
                          <i>
                            <FaInstagram />
                          </i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-8 col-md-9">
                  <div className="header__info f-right">
                    <ul>
                      <li>
                        <a href="tel:+2348165722731">
                          <i>
                            {" "}
                            <FaPhoneAlt />{" "}
                          </i>
                          (+234) 0816 5722 731
                        </a>
                      </li>
                      <li>
                        <a href="mailto:cservice@ieianchorpensions.com.ng">
                          <i>
                            {" "}
                            <FaEnvelope />{" "}
                          </i>
                          cservice@ieianchorpensions.com.ng
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://ffpro.ieianchorpensions.com.ng/pfaweb/#/login"
                          target="_blank"
                          className=" "
                        >
                          <i>
                            {" "}
                            <FaUserAlt />{" "}
                          </i>
                          Login
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="header__sticky"
            className={stickyMenu ? "sticky header__bottom" : "header__bottom"}
          >
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                  <div className="logo">
                    <NavLink to="/">
                      <img src="/assets/img/logo/logo2 (2).png" alt="logo" />
                    </NavLink>
                  </div>
                  <div className="logo-gradient">
                    <NavLink to="/">
                      <img src="/assets/img/logo/logo2 (2).png" alt="logo" />
                    </NavLink>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                  <div className="header__bottom-right d-flex justify-content-end align-items-center">
                    <div className="main-menu menu_wrapper_one">
                      <nav id="mobile-menu">
                        <ul>
                          <li>
                            <NavLink to="/home">Home</NavLink>
                          </li>
                          <li>
                            <NavLink to="/about">About</NavLink>
                            <ul className="submenu">
                              <li>
                                <NavLink to="/directors">Directors</NavLink>
                              </li>
                              <li>
                                <NavLink to="/management">
                                  Management Team
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/career">Career</NavLink>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <NavLink to="/services">Retirement Plans</NavLink>
                            <ul className="submenu">
                              <li>
                                <NavLink to="#">Benfit Administrations</NavLink>
                                <ul className="submenu">
                                  <li>
                                <NavLink to="#">Benfit Administrations</NavLink>
                                    <NavLink to="#">
                                      Micropension
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink to="#">
                                      Voluntary Contributions
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink to="/benefitPayment">
                                      Benefit Payment
                                    </NavLink>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <NavLink to="/penCalculator">
                                  Pension Calculator
                                </NavLink>
                              </li>
                              <li>
                                <a
                                  href="https://datarecapture.ieianchorpensions.com.ng"
                                  target="_blank"
                                >
                                  Data Recapture
                                </a>
                              </li>

                              <li>
                                <NavLink to="/servicesDetails">
                                  Open Account
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/transferNow">
                                  Transfer Now
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="#">
                                  Onboarding
                                </NavLink>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <NavLink to="Fundmanagement">
                              Fund Management
                            </NavLink>
                            <ul className="submenu">
                              <li>
                                <NavLink to="/multifund">
                                  Multi fund Structure
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/Strategy">Strategy</NavLink>
                              </li>
                              <li>
                                <NavLink to="/portfolio">Portfolio</NavLink>
                              </li>
                              <li>
                                <NavLink to="/scheme">Scheme</NavLink>
                              </li>
                              <li>
                                <NavLink to="#">
                                  Rate of Return
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="#">Unit Price</NavLink>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <NavLink to="/contact">Contact</NavLink>
                            <ul className="submenu">
                              <li>
                                <NavLink to="/contact">Contact us</NavLink>
                              </li>
                              <li>
                                <NavLink to="/branches">Branches</NavLink>
                              </li>
                              <li>
                                <a
                                  href="https://ffpro.ieianchorpensions.com.ng/pfaweb"
                                  target="_blank"
                                >
                                  Self Service
                                </a>
                              </li>
                              <li>
                                <NavLink to="/contact">Feedback</NavLink>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <NavLink to="/resources">Resources</NavLink>
                            <ul className="submenu">
                              <li>
                                <NavLink to="/faq">FAQ</NavLink>
                              </li>
                              <li>
                                <NavLink to="/Download">Download</NavLink>
                              </li>
                              <li>
                                <NavLink to="/financialStatement">
                                  Financial Statements
                                </NavLink>
                              </li>

                              <li>
                                <a
                                  href="https://ffpro.ieianchorpensions.com.ng/pfaweb"
                                  target="_blank"
                                >
                                  Online Statements
                                </a>
                              </li>
                              <li>
                                <NavLink to="#">Blog</NavLink>
                              </li>
                              <li>
                                <NavLink to="#">Newsletter</NavLink>
                              </li>
                              <li>
                                <NavLink to="#">
                                  Data Protection
                                </NavLink>
                              </li>

                              <li>
                                <NavLink to="/PrivacyPolicy">
                                  Privacy Policy
                                </NavLink>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    {/*!-- removed d-sm-block d-lg-none d-xl-block here -- */}
                    <div className="header__btn myspecial   ml-100"></div>
                    <div
                      onClick={handleShow}
                      className="sidebar__menu d-lg-none"
                    >
                      <div className="sidebar-toggle-btn" id="sidebar-toggle">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header__search-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-xl-12"></div>
              </div>
            </div>
          </div>
          <div className="body-overlay-2"></div>
        </div>
      </header>

      <Sidebar show={show} handleClose={handleClose} />
    </>
  );
};

export default HomeOneHeader;
