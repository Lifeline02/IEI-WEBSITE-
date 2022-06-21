import React from 'react';
import { Link } from 'react-router-dom';

const HomeTwoAchievement = () => {
   return (
      <>
         <section className="achievement__area pt-135 pb-40">
            <div className="container">
               <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                     <div className="achievement__content">
                        <div className="section__title section__title-3 mb-20">
                           <span>Corporate Principles</span>
                           <h2>Core Values</h2>
                        </div>
                        <div className="achievement__wrapper d-flex d-md-block d-lg-flex justify-content-between mb-35 wow fadeInUp" data-wow-delay=".8s">
                           <div className="achievement__item mb-30">
                              <img src="assets/img/icon/achievement/achievement-1.png" alt="achievement"/>
                                 <h3>PROFICIENCY</h3>
                                 <p>Having a culture of doing things right, the first time, and all the time.</p>
                           </div>
                           <div className="achievement__item mb-30">
                              <img src="assets/img/icon/achievement/achievement-1.png" alt="achievement"/>
                                 <h3>INNOVATION</h3>
                                 <p>Constant improvement in our ways of doing things.</p>
                           </div>
                           <div className="achievement__item mb-30">
                              <img src="assets/img/icon/achievement/achievement-1.png" alt="achievement"/>
                                 <h3>FRIENDLINESS</h3>
                                 <p>We shall exhibit a friendly disposition in all dealings with our clients and other stakeholders.</p>
                           </div>
                           <div className="achievement__item mb-30">
                              <img src="assets/img/icon/achievement/achievement-1.png" alt="achievement"/>
                                 <h3>INTEGRITY</h3>
                                 <p>Transparent honesty in all dealings with our stakeholders.</p>
                           </div>
                           <div className="achievement__item mb-30">
                              <img src="assets/img/icon/achievement/achievement-1.png" alt="achievement"/>
                                 <h3>DEPENDABILITY</h3>
                                 <p>We can be counted on, all the time</p>
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

export default HomeTwoAchievement;