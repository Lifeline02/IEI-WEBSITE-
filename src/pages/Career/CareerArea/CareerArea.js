import { CgArrowLongRight } from 'react-icons/cg';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CareerArea = () => {
   return (
      <>
         <section className="about__area pb-200 pt-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 pr-0 col-lg-6">
                     <div className="about__thumb m-img">
                        <img src="assets/img/about/about-1.jpg" alt=""/>
                           <div className="about__shape">
                              <img src="assets/img/about/red-shape.png" alt=""/>
                           </div>
                     </div>
                  </div>
                  <div className="col-xl-5 offset-xl-1 col-lg-5 offset-lg-1">
                     <div className="about__content">
                        <div className="section__title mb-25">
                           <span>Who we are</span>
                           <h2>We inspire and help our customers</h2>
                        </div>
                        <p className="text-muted small">IEI - ANCHOR PENSION MANAGERS LIMITED is your trusted partner that works with you to secure the future of your hopes. With more than a decade of experience, we provide credible pension administration and management services that would ensure the profitability of your pension savings.</p>
                        <p className="text-muted small">Anchor Pension Managers Limited was incorporated in November 2004 with RC No. 610587 and was licensed by PENCOM as a PFA. With the approval of PENCOM, International Energy Insurance Plc (IEI) acquired seventy percent equity of the company and birthed IEI-Anchor Pension Managers Limited in December 2008. With the recent recapitalization of Licensed Pension Fund Administrators, IEI-ANCHOR has an authorized and fully paid-up share capital of Two Billion Naira, Two Hundred and Twenty-two Million Naira (N2, 222,000,000:00).</p>
                        <div className="about__list">
                        </div>
                        <Link to="/contact" className="z-btn " >Get Started<i > <CgArrowLongRight /> </i></Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default CareerArea;