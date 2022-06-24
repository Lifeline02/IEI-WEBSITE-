import React from 'react';
import SingleCount from '../../../components/SingleCount/SingleCount';

const HomeCounterArea = () => {
   return (
      <>
         <section className="counter__area pb-100">
            <div className="container">
               <div className="counter__inner white-bg wow fadeInUp" data-wow-delay=".2s">
                  <div className="row">

                     <SingleCount counter={40} title="Branches" link="/branches" color={'#C59825'} />
                     <SingleCount counter={5} title="Awards" link="/awards" />
                     <SingleCount counter={147776} title="RSA Registered"  link="/clients" color={'#4636ff'} />
                     <SingleCount counter={9884} title="Success Stories" link="/testimonies" color={'hsl(128, 65%, 42%)'} />
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeCounterArea;