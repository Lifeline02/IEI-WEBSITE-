import React from 'react';
import { BiMap } from 'react-icons/bi';
import { FaEnvelope, FaFacebookF, FaPhoneAlt, FaTwitter, FaVimeoV } from 'react-icons/fa';
import { Link,useParams } from 'react-router-dom';

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
                                    <div className="icon theme-color ">
                                       <i > <FaEnvelope/> </i>
                                    </div>
                                    <div className="text theme-color ">
                                       <span><a href="mailto:cservice@ieianchorpensions.com.ng">cservice@ieianchorpensions.com.ng</a></span>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="icon theme-color">
                                       <i ><FaPhoneAlt /> </i>
                                    </div>
                                    <div className="text theme-color">
                                       <span><a href="tel:+23408165722731">(234) 0816 5722 731</a></span>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="icon">
                                       <i > <BiMap /> </i>
                                    </div>
                                    <div className="text">
                                       <span>22, Otukpo Street, Off Gimbiya Street,<br /> Area 11, Garki, Abuja, Nigeria</span>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                           <div className="team__details-social theme-social" >
                              <ul>
                                 <li>
                                    <a href="#">
                                       <i ><FaFacebookF /></i>
                                       <i ><FaFacebookF /></i>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#">
                                       <i ><FaTwitter /> </i>
                                       <i ><FaTwitter /> </i>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#">
                                       <i ><FaVimeoV /> </i>
                                       <i ><FaVimeoV /> </i>
                                    </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xl-10 offset-xl-1">
                     <div className="team__details-info mt-60">
                        <h4 >Information</h4>
                        <p>
                           {team.detail}
                        </p>
                        <Link to="/contact" className="z-btn mt-10">Contact</Link>
                     </div>
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