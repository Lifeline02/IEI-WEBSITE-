import React from 'react';

import {useParams } from 'react-router-dom';

import teamData from '../../../data/teamData';

const TeamDetailsArea = () => {

   const {teamId}  = useParams();

   console.log("hello", teamId);

   const SingleTeam = () => {
       const team  = teamData.find(team => {
          return team.id ===  parseInt(teamId)
       })

       return team ? (
               <div className="container">
               <div className="team__details-inner p-relative white-bg">
                  <div className="team__details-shape p-absolute">
                     <img src="/assets/img/icon/team/shape-1.png" alt=""/>
                  </div>
                  <div className="row">
                     <div className="col-xl-6 col-lg-6">
                        <div className="team__details-img w-img mr-70">
                           <img src={`/${team.img}`} alt={team.name} />
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-6">
                        <div className="team__details-content pt-105">
                           <span>{team.position}</span>
                           <h3>{team.name}</h3>
                           <div className="team__details-contact mb-45">
                              <ul>
                                 <li>
                                    <div className="text pe-4">
                                       <span> {team.detail} </span>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xl-10 offset-xl-1">
                  </div>
               </div>
            </div>
       ):
       (
         <div className="text-center">
             <span>TEAM MEMBER NOT FOUND</span>
         </div>
       )
   }
   return (
      <>
         <section className="team__details pt-120 pb-160">
            {
               teamId ? <SingleTeam /> :<div className="text-center"><span>TEAM MEMBER NOT FOUND</span></div>
            }
         </section>
      </>
   );
};

export default TeamDetailsArea;