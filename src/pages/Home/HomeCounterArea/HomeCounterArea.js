import React from 'react';
import SingleCount from '../../../components/SingleCount/SingleCount';

const HomeCounterArea = () => {
   return (
      <>
         <section className="counter__area pb-100">
            <div className="container">
               <div className="counter__inner white-bg wow fadeInUp" data-wow-delay=".2s">
                  <div className="row">

                     <SingleCount counter={40} title="Total Branches" />
                     <SingleCount counter={120} title="Number of Employees" />
                     <SingleCount counter={1025} title="Clients" />
                     <SingleCount counter={9884} title="Success stories" />
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeCounterArea;