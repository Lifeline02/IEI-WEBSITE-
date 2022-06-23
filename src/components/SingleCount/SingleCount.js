import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const SingleCount = ({counter,title,color, link}) => {
   const [viewCountUp,setViewCountUp] = useState(false);

   const onVisibilityChange = (isVisible) => {
      if (isVisible) {
         setViewCountUp(true );
      }
   }
   return (
      <>
         <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div className="counter__item text-center mb-30">
               <h2 className={`counter ${color && color}`}>
                  <VisibilitySensor onChange={onVisibilityChange} offset={{ top: 10 }} delayedCall>
                     <a href={`${link}`} style={{color: color}}>
                        <CountUp end={viewCountUp ? counter : 0} duration={8}/>
                     </a>     
                  </VisibilitySensor>
               </h2>
               <a href={`${link}`}>
                  <span>{title}</span>
               </a>
               
            </div>
         </div>
      </>
   );
};

export default SingleCount;