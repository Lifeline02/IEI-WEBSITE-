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

                     <HomeSingleFeature icon={<FiBook />} title="RSA Fund I: 1.500" />
                     <HomeSingleFeature icon={<FiBook />} title="RSA Fund II: 1.500" />
                     <HomeSingleFeature icon={<FiBook />} title="RSA Fund III: 1.300" />
                     <HomeSingleFeature icon={<FiBook />} title="RSA Fund IV: 1.200" />
                     <HomeSingleFeature icon={<FiBook />} title="RSA Fund V: 1.100" />
                     <HomeSingleFeature icon={<FiBook />} title="RSA Fund VI: 1.100" />

                  </div>
               </div>
            </div>
         </section>

      </>
   );
};

export default HomeFeatures;