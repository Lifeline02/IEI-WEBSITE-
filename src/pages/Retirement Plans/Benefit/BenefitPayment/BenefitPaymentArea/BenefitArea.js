import React from 'react';
import { SiKnowledgebase } from 'react-icons/si';
import { BsTools, BsHeart, BsBag } from 'react-icons/bs';
import HomeThreeSecondSingleService from '../../../../../components/HomeThreeSecondSingleService/HomeThreeSecondSingleService';

const BenefitArea = () => {
   return (
      <>
         <section className="services__area-3 pt-115 pb-160">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6">
                     <div className="section-title section__title-3 mb-70">
                        <h2>We Help <br/> Clients Make Profit</h2>
                        <p>We help you weather today's uncertainty through our best team.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xl-12">
                     <div className="services__nav wow fadeInUp" data-wow-delay=".4s">
                        <ul className="nav nav-pills " id="services-tab" role="tablist">
                           <li className="nav-item mb-45">
                              <a className="nav-link active" id="share-tab" data-bs-toggle="pill" href="#share" role="tab" aria-controls="share" aria-selected="true">
                                 <i> <SiKnowledgebase/> </i>Fund I
                              </a>
                           </li>
                           <li className="nav-item mb-30">
                              <a className="nav-link" id="customer-tab" data-bs-toggle="pill" href="#customer" role="tab" aria-controls="customer" aria-selected="true">
                                 <i ><BsTools/></i> Fund II
                              </a>
                           </li>
                           <li className="nav-item mb-30">
                              <a className="nav-link" id="social-tab" data-bs-toggle="pill" href="#social" role="tab" aria-controls="social" aria-selected="true">
                                 <i ><BsHeart/></i> Fund III
                              </a>
                           </li>
                           <li className="nav-item mb-30">
                              <a className="nav-link" id="financial-tab" data-bs-toggle="pill" href="#financial" role="tab" aria-controls="financial" aria-selected="true">
                                 <i ><BsBag/></i> Fund IV
                              </a>
                           </li>
                           <li className="nav-item mb-30">
                              <a className="nav-link" id="financial-tab" data-bs-toggle="pill" href="#financial" role="tab" aria-controls="financial" aria-selected="true">
                                 <i ><BsBag/></i> Fund V
                              </a>
                           </li>
                           <li className="nav-item mb-30">
                              <a className="nav-link" id="financial-tab" data-bs-toggle="pill" href="#financial" role="tab" aria-controls="financial" aria-selected="true">
                                 <i ><BsBag/></i> Fund VI
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-xl-12">
                     <div className="services__tab grey-bg-18">
                        <div className="tab-content" id="services-content">
                           <div className="tab-pane fade show active" id="share" role="tabpanel" aria-labelledby="share-tab">
                              <HomeThreeSecondSingleService title="Share Knowledge" />
                           </div>
                           <div className="tab-pane fade" id="customer" role="tabpanel" aria-labelledby="customer-tab">
                              <HomeThreeSecondSingleService title="Customer Service" />
                           </div>
                           <div className="tab-pane fade" id="social" role="tabpanel" aria-labelledby="social-tab">
                              <HomeThreeSecondSingleService title="Social Media"  body="hlo"/>
                           </div>
                           <div className="tab-pane fade" id="financial" role="tabpanel" aria-labelledby="financial-tab">
                              <HomeThreeSecondSingleService title="Financial" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default BenefitArea;