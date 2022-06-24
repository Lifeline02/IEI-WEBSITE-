import React from 'react';
import { FaEnvelope, FaFacebookF, FaPhoneAlt, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { BiMap } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Footer = () => {
   return (
      <>
         <footer>
            <div className="footer__area grey-bg pt-100">
               <div className="footer__top pb-45">
                  <div className="container">
                     <div className="row">
                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                           <div className="footer__widget mb-45">
                              <div className="footer__widget-title">
                                 <h4>About </h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__links">
                                    <ul>
                                       <li><a href="#">Directors</a></li>
                                       <li><a href="#">Management</a></li>
                                       <li><a href="#">Teams</a></li>
                                       <li><a href="#">Career</a></li>
                                       <li><a href="#">Data Protection</a></li>
                                       <li><a href="#">Privacy Policy</a></li>
                                       <li><a href="#">Cookie Policy</a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-2 offset-xl-1 col-lg-2 offset-lg-1 col-md-4 col-sm-6">
                           <div className="footer__widget mb-45 wow fadeInUp" data-wow-delay=".4s">
                              <div className="footer__widget-title">
                                 <h4>Useful Links</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__links">
                                    <ul>
                                       <li><a href="#">Benfit Application</a></li>
                                       <li><a href="#">Pension Calculator</a></li>
                                       <li><a href="#">Unit Price</a></li>
                                       <li><a href="#">Financial Statements</a></li>
                                       <li><a href="#">Online Statements</a></li>
                                       <li><a href="#">Onboarding</a></li>
                                       <li><a href="#">Downloads</a></li>
                                       <li><a href="#">Branches</a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-2 offset-xl-1 col-lg-2 offset-lg-1 col-md-4 col-sm-6">
                           <div className="footer__widget mb-45">
                              <div className="footer__widget-title">
                                 <h4>Media</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__links">
                                    <ul>
                                       <li><a href="#">FAQ</a></li>
                                       <li><a href="#">Blog</a></li>
                                       <li><a href="#">Newsletter</a></li>
                                       <li><a href="#">Portfolio</a></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 offset-xl-1 col-lg-3 offset-lg-1 col-md-4 col-sm-6">
                           <div className="footer__widget mb-45">
                              <div className="footer__widget-title">
                                 <h4>Contact Us</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__info">
                                    <ul>
                                       <li>
                                          <div className="icon">
                                             <i > <BiMap /> </i>
                                          </div>
                                          <div className="text">
                                             <span>22, Otukpo Street, Off Gimbiya Street, Area 11, Garki, Abuja, Nigeria</span>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="icon theme-color ">
                                             <i > <FaEnvelope/> </i>
                                          </div>
                                          <div className="text theme-color ">
                                             <span><a href="mailto:cservice@ieianchorpensions.com.ng">cservice@ieianchorpensions.com.ng</a></span>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="icon theme-color">
                                             <i ><FaPhoneAlt/> </i>
                                          </div>
                                          <div className="text theme-color">
                                             <span><a href="tel:+2348165722731">(234) 0816 5722 731</a></span>
                                          </div>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="mobile_app">
                        <a href="https://tinyurl.com/mthtpkzf" className='px-3'>
                           <img src="/assets/img/mobile/playstore.png" alt="Android"  width='240px' height="70px"/>
                        </a>

                        <a href="https://tinyurl.com/mr2mpcbu" className='px-3'>
                           <img src="/assets/img/mobile/apple.png" alt="Android" width='240px' height="70px"/>
                        </a>

                        <a href="#" className='px-3 d-inline-block'>
                           <img src="/assets/img/mobile/ndpr.png" alt="ndpr audit" width='240px' height="70px"/>
                        </a>
                          
                           
                     </div>
                  </div>
               </div>
               <div className="footer__copyright">
                  <div className="container">
                     <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                           <div className="footer__copyright-text">
                              <p>Copyright © {new Date().getFullYear()} All Rights Reserved by IEI Anchor Pensions.</p>
                           </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                           <div className="footer__social theme-social f-right">
                              <ul>
                                 <li>
                                    <a href="https://www.facebook.com/ieianchorpens" target="_blank">
                                       <i ><FaFacebookF/></i>
                                       <i ><FaFacebookF/></i>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="https://twitter.com/ieianchorpens" target="_blank">
                                       <i ><FaTwitter/> </i>
                                       <i ><FaTwitter/> </i>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="https://www.linkedin.com/company/iei-anchor-pension-managers-limited/" target="_blank">
                                       <i ><FaLinkedinIn/> </i>
                                       <i ><FaLinkedinIn/> </i>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="https://www.instagram.com/ieianchorpens/" target="_blank">
                                       <i ><FaInstagram/> </i>
                                       <i ><FaInstagram/> </i>
                                    </a>
                                 </li>
                              </ul>
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

export default Footer;