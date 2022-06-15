import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP, FaPhoneAlt, FaEnvelope, FaSearch, FaLinkedinIn } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar/Sidebar';
import useGlobalContext from '../../../hooks/useGlobalContext';

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
                                 <li><a href="https://www.facebook.com/ieianchorpens"><i ><FaFacebookF/></i> </a></li>
                                 <li><a href="#"><i ><FaTwitter/> </i></a> </li>
                                 <li><a href="https://www.linkedin.com/company/iei-anchor-pension-managers-limited/"><i ><FaLinkedinIn/></i></a></li>
                              </ul>
                           </div>
                        </div>
                        <div className="col-xl-7 col-lg-8 col-md-9">
                           <div className="header__info f-right">
                              <ul>
                                 <li>
                                    <a href="tel:+2348165722731">
                                       <i > <FaPhoneAlt/> </i>
                                       (+234) 0816 5722 731
                                    </a>
                                 </li>
                                 <li>
                                    <a href="mailto:cservice@ieianchorpensions.com.ng">
                                       <i > <FaEnvelope/> </i>
                                       cservice@ieianchorpensions.com.ng
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#" className="search-toggle">
                                       <i > <FaSearch/> </i>
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div id="header__sticky" className={stickyMenu ? "sticky header__bottom" : "header__bottom"}>
                  <div className="container">
                     <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                           <div className="logo">
                              <NavLink to="/">
                                 <img src="assets/img/logo/logo.png" alt="logo"/>
                              </NavLink>
                           </div>
                           <div className="logo-gradient">
                              <NavLink to="/">
                                 <img src="assets/img/logo/logo-gradient.png" alt="logo"/>
                              </NavLink>
                           </div>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                           <div className="header__bottom-right d-flex justify-content-end align-items-center">
                             <div className="main-menu menu_wrapper_one">
                                 <nav id="mobile-menu">
                                    <ul>
                                       <li>
                                          <NavLink  to="/home">Home</NavLink>
                                          <ul className="submenu">
                                             <li><NavLink to="/home">Home Style 1</NavLink></li>
                                             <li>
                                                <NavLink to="/homeTwo">Home Style 2</NavLink>
                                                <ul className="submenu">
                                                   <li><NavLink to="/home">Home Style 1</NavLink></li>
                                                   <li><NavLink to="/homeTwo">Home Style 2</NavLink></li>
                                                   <li><NavLink to="/homeThree">Home Style 3</NavLink></li>
                                                </ul>
                                             </li>
                                             <li>
                                                <NavLink to="/homeThree">Home Style 3</NavLink>
                                                <ul className="submenu">
                                                   <li><NavLink to="/headerStyleFour">Header Syle 4</NavLink></li>
                                                   <li><NavLink to="/headerStyleFive">Header Syle 5</NavLink></li>
                                                   <li><NavLink to="/headerStyleSix">Header Syle 6</NavLink></li>
                                                   <li><NavLink to="/headerStyleSeven">Header Syle 7</NavLink></li>
                                                </ul>
                                             </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <NavLink to="/about">About</NavLink>
                                          <ul className="submenu">
                                             <li><NavLink to="/directors">Directors</NavLink></li>
                                             <li><NavLink to="/management">Management</NavLink></li>
                                             <li><NavLink to="/teams">Teams</NavLink></li>
                                             <li><NavLink to="/career">Career</NavLink></li>
                                          </ul>
                                       </li>
                                       <li>
                                          <NavLink to="/services">Pension Management</NavLink>
                                          <ul className="submenu">
                                             <li><NavLink to="/services">Benfit Application</NavLink></li>
                                             <li><NavLink to="/servicesDetails">Pension Calculator</NavLink></li>
                                             <li><NavLink to="/servicesDetails">Micropension</NavLink></li>
                                             <li><NavLink to="/servicesDetails">Voluntary Contributions</NavLink></li>
                                             <li><NavLink to="/servicesDetails">Data Recapture</NavLink></li>
                                             <li><NavLink to="/servicesDetails">Open Account</NavLink></li>
                                             <li><NavLink to="/servicesDetails">Transfer Now</NavLink></li>
                                          </ul>
                                       </li>
                                       <li>
                                          <NavLink to="/portfolio">Funds Management</NavLink>
                                          <ul className="submenu">
                                             <li><NavLink to="/portfolio">Multi fund Structure</NavLink></li>
                                             <li><NavLink to="/portfolioDetails">Strategy</NavLink></li>
                                             <li><NavLink to="/team">Portfolio</NavLink></li>
                                             <li><NavLink to="/teamDetails">Scheme</NavLink></li>
                                             <li><NavLink to="/teamDetails">Rate of Return Table</NavLink></li>
                                          </ul>
                                       </li>
                                       <li>
                                          <NavLink to="/contact">Contact</NavLink>
                                          <ul className="submenu">
                                             <li><NavLink to="/contact">Contact us</NavLink></li>
                                             <li><NavLink to="/blogDetails">Branches</NavLink></li>
                                             <li><NavLink to="/blogDetails">Self Service</NavLink></li>
                                             <li><NavLink to="/blogDetails">Feedback</NavLink></li>
                                          </ul>
                                       </li>
                                       <li>
                                          <NavLink to="/contact">Resources</NavLink>
                                          <ul className="submenu">
                                             <li><NavLink to="/contact">Download</NavLink></li>
                                             <li><NavLink to="/blogDetails">Financial Statements</NavLink></li>
                                             <li><NavLink to="/blogDetails">Online Statements</NavLink></li>
                                             <li><NavLink to="/blogDetails">Blog</NavLink></li>
                                             <li><NavLink to="/blogDetails">Newsletter</NavLink></li>
                                          </ul>
                                       </li>
                                    </ul>
                                 </nav>
                              </div>
                              {/*!-- removed d-sm-block d-lg-none d-xl-block here -- */}
                              <div className="header__btn d-none  ml-50">
                                 <Link to="/contact" className="z-btn z-btn-white">Get a Quote</Link>
                              </div>
                              <div onClick={handleShow} className="sidebar__menu d-lg-none">
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
                        <div className="col-xl-12">
                           <form action="#">
                              <input type="text" placeholder="Your Keywords" />
                              <button type="button"><i > <FaSearch/> </i></button>
                           </form>
                        </div>
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