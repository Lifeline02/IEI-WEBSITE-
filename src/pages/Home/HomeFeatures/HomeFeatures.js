import React from 'react';
import HomeSingleFeature from '../../../components/HomeSingleFeature/HomeSingleFeature';
import { FiBook} from 'react-icons/fi';

const HomeFeatures = () => {
   return (
      <>
         <section className="features__area pb-100 mt--100 wow fadeInUp" data-wow-delay=".5s">
            <div className="container">
               <div className="features__inner fix">
                  <div className="row g-0 ">

                     <HomeSingleFeature icon={<FiBook />} title="RSA Fund I: 1.500"  description="Only on request but NOT accessible to Retirees and active contributors of 50 years and above."/>
                     <HomeSingleFeature icon={<FiBook />} title="RSA Fund II: 1.500" description="Default fund for RSA holders of 49 years and below."/>
                     <HomeSingleFeature icon={<FiBook />} title="RSA Fund III: 1.300" description="Default fund for RSA holders of 50 years and above."/>
                     <HomeSingleFeature icon={<FiBook />} title="RSA Fund IV: 1.200" description="Only for Retirees" />
                     <HomeSingleFeature icon={<FiBook />} title="RSA Fund V: 1.100" description="Only for Micro Pension Fund"/>
                     <HomeSingleFeature icon={<FiBook />} title="RSA Fund VI: 1.100"description="Non-Interest fund" />

                  </div>
               </div>
            </div>
         </section>

      </>
   );
};

export default HomeFeatures;