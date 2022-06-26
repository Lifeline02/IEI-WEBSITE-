import React from "react";
import { Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Collapsible from "react-collapsible";
import { BiMap } from "react-icons/bi";
import { FaEnvelope, FaPhoneAlt, FaSearch } from "react-icons/fa";

const Sidebar = ({ show, handleClose }) => {
  return (
    <>
      <div>
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="end"
          className="side__bar"
        >
          <Offcanvas.Header closeButton>
            <div className="logo">
              <a href="index.html">
                <img src="assets/img/logo/logo.png" alt="logo" />
              </a>
            </div>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <section>
              <div className="p-0">
                <div className="sidebar__tab">
                  <ul className="nav nav-tabs" id="sidebar-tab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="menu-tab"
                        data-bs-toggle="tab"
                        href="#menu"
                        role="tab"
                        aria-controls="menu"
                        aria-selected="true"
                      >
                        menu
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="info-tab"
                        data-bs-toggle="tab"
                        href="#info"
                        role="tab"
                        aria-controls="info"
                        aria-selected="false"
                      >
                        info
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="sidebar__content">
                  <div className="tab-content" id="sidebar-tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="menu"
                      role="tabpanel"
                      aria-labelledby="menu-tab"
                    >
                      <div className="side_navBar">
                        <Collapsible
                          trigger={<NavLink to="/home">Home</NavLink>}
                          triggerTagName="div"
                          triggerOpenedClassName="icon_close"
                          triggerClassName="iconAdd"
                          open={false}
                        ></Collapsible>

                        <div className="about iconAdd">
                          <NavLink to="/about">About Us </NavLink>
                        </div>

                        <Collapsible
                          trigger={
                            <NavLink to="/services">Retirement Plans</NavLink>
                          }
                          triggerTagName="div"
                          triggerOpenedClassName="icon_close"
                          triggerClassName="iconAdd"
                          open={false}
                        >
                          <ul className="sidebar_sub_menu submenu text-white">
                            <li>
                              <NavLink to="/servicesDetails">
                                Benfit Administrations
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/servicesDetails">
                                Pension Calculator
                              </NavLink>
                            </li>

                            <li>
                              <NavLink to="/servicesDetails">
                                Open Account
                              </NavLink>
                            </li>

                            <li>
                              <NavLink to="/servicesDetails">
                                Data Recapture
                              </NavLink>
                            </li>
                          </ul>
                        </Collapsible>

                        <Collapsible
                          trigger={
                            <NavLink to="/portfolio">Fund Management</NavLink>
                          }
                          triggerTagName="div"
                          triggerOpenedClassName="icon_close"
                          triggerClassName="iconAdd"
                          open={false}
                        >
                          <ul className="sidebar_sub_menu submenu text-white text-capitalize">
                            <li>
                              <NavLink to="/portfolio">Strategy</NavLink>
                            </li>
                            <li>
                              <NavLink to="/portfolioDetails">
                                Investment Portfolio
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/team">team</NavLink>
                            </li>
                            <li>
                              <NavLink to="/teamDetails">Scheme</NavLink>
                            </li>
                          </ul>
                        </Collapsible>

                        <Collapsible
                          trigger={<NavLink to="/blogs">Resources</NavLink>}
                          triggerTagName="div"
                          triggerOpenedClassName="icon_close"
                          triggerClassName="iconAdd"
                          open={false}
                        >
                          <ul className="sidebar_sub_menu submenu text-white">
                            {" "}
                            <li>
                              <NavLink to="/services">FAQs</NavLink>
                            </li>
                            <li>
                              <NavLink to="/blogs">Rate Of Return</NavLink>
                            </li>
                            <li>
                              <NavLink to="/blogDetails">Transfer Now</NavLink>
                            </li>
                            <li>
                              <NavLink to="/blogDetails">Download</NavLink>
                            </li>
                            <li>
                              <NavLink to="/blogDetails">
                                Data Protection
                              </NavLink>
                            </li>
                          </ul>
                        </Collapsible>

                        <div className="about iconAdd border-0">
                          <NavLink to="/contact">Contact Us </NavLink>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="info"
                      role="tabpanel"
                      aria-labelledby="info-tab"
                    >
                      <div className="sidebar__info">
                        <div className="logo mb-40"></div>
                        <p>
                          A global financial institution, providing excellent
                          pension solutions to our customers. <br></br> "To be a
                          dependable partner, helping our clients to protect and
                          grow their pension assets and creating superior value
                          for all stakeholders".
                        </p>
                        <a href="/contact" className="z-btn z-btn-white">
                          contact us
                        </a>
                        <div className="sidebar__search">
                          <form action="#">
                            <input type="text" placeholder="Search.." />
                            <button type="submit">
                              <i>
                                {" "}
                                <FaSearch />{" "}
                              </i>
                            </button>
                          </form>
                        </div>
                        <div className="sidebar__contact mt-30">
                          <ul>
                            <li>
                              <div className="icon">
                                <i>
                                  {" "}
                                  <BiMap />{" "}
                                </i>
                              </div>
                              <div className="text">
                                22, Otukpo Street, Off Gimbiya Street, Area 11,
                                Garki, Abuja, Nigeria
                                <span></span>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <i>
                                  {" "}
                                  <FaEnvelope />{" "}
                                </i>
                              </div>
                              <div className="text ">
                                <span>
                                  <a href="mailto:cservice@ieianchorpensions.com.ng">
                                    cservice@ieianchorpensions.com.ng
                                  </a>
                                </span>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <i>
                                  <FaPhoneAlt />{" "}
                                </i>
                              </div>
                              <div className="text">
                                <span>
                                  <a href="tel:+2348165722731">
                                    (+234) 0816 5722 731
                                  </a>
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default Sidebar;
