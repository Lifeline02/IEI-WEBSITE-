import React from 'react';

const HomeCapabilities = () => {
   return (
      <>
         <section className="capabilities__area p-relative black-bg-2 pt-180 pb-155 fix">
            <div className="capabilities__thumb p-absolute" style={{ background:`url(assets/img/capabilities/capabilities-img3.jpg)`
               , backgroundPosition: 'center', backgroundSize:'cover'}}></div>
            <div className="capabilities__shape p-absolute wow fadeInLeft" >
               <img src="assets/img/capabilities/capabilities-shape.png" alt="shape"/>
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-xl-4 col-lg-5">
                     <div className="capabilities__content wow fadeInUp" data-wow-delay=".4s">
                        <div className="section__title section__title-2 mb-60">
                           <span className="white-color">Mobile</span>
                           <h2 className="white-color">Get Our Mobile App Now</h2>
                        </div>
                        <div className="capabilities__list">
                           <ol>
                              <li >Analysis & Idea</li>
                              <li >Design & Development</li>
                              <li >Testing & Launch</li>
                           </ol>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeCapabilities;