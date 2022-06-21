import React from 'react';
import SingleTeam from '../../../components/SingleTeam/SingleTeam';

import teamData from '../../../data/teamData';
const DirectorArea = () => {

    const SingleTeamData = () =>{
        return teamData.length ? teamData.map(team =>{

            if(team.id < 8){
                return  <SingleTeam image={team.id} name={team.name} title={team.position} id={team.id}/>
            }
        }): <div><span>No Records found</span></div>
    }
   return (
      <>
         <section className="team__area pt-115 pb-110">
            <div className="container">
               <div className="row align-items-center mb-55">
                  <div className="col-xl-6 col-lg-8 col-md-8 col-sm-8">
                     <div className="section__title section__title-3 mb-30">
                        <span>Our Directors</span>
                        <h2>We help to create a better retirement plan for you.</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                   <SingleTeamData />
               </div >
            </div >
         </section >
      </>
   );
};

export default DirectorArea;