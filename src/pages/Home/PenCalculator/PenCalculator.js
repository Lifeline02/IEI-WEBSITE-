import { CgArrowLongRight } from 'react-icons/cg';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PenCalculator from '../../../components/PenCalculator/PenCalculator';

const HomeCalculator = () => {
   return (
      <>
         <section className="about__area pb-200 pt-100">
            <div className="" style={{minHeight:'500px'}}>
                <div className="container">
                <div className="row">
                    <div className="col-xl-7 pr-0 col-lg-7">
                        <div className="about__thumb m-img h-100">
                            <img src="assets/img/about/about-1.jpg" alt="" className="h-100"/>
                            <div className="about__shape">
                                <img src="assets/img/about/red-shape.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                        <div className="about__content">
                            <div className="container">
                            <div className="shadow-lg p-3 mb-5 bg-body rounded">
                               <PenCalculator />
                            </div>
                            </div>  
                        </div>
                    </div>
                </div>
                </div>
            </div>
         </section>
      </>
   );
};

export default HomeCalculator;