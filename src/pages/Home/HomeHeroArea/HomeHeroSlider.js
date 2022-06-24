import React from "react";
import Slider from "react-slick";
import VideoPopup from "../../../components/VideoPopup/VideoPopup";
import useGlobalContext from "../../../hooks/useGlobalContext";
import { FiPlay } from "react-icons/fi";
import { Link } from "react-router-dom";

const HomeHeroArea = () => {
  
<<<<<<< HEAD
  const { setIsVideoOpen } = useGlobalContext();
  // slider data
  const homeSliderData = [
    {
      id: 1,
      bgImg: "home_slider_1",
    },
    {
      id: 2,
      bgImg: "home_slider_2",
    },
  ];
  // slick setting
  const settings = {
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 500,
    infinite: true,
    dots: false,
    fade: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
=======
   const { setIsVideoOpen} = useGlobalContext();
   // slider data
   const homeSliderData = [
      {
         id:1,
         bgImg:'home_slider_1',
      },
      {
         id: 2,
         bgImg:'home_slider_2',
      },
      {
         id: 3,
         bgImg:'home_slider_3',
      },
      {
         id: 4,
         bgImg:'home_slider_4',
      },
      {
         id: 5,
         bgImg:'home_slider_5',
      },
   ]
   // slick setting
   const settings = {
      autoplay: true,
      autoplaySpeed: 8000,
      speed: 500,
      infinite: true,
      dots: false,
      fade: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
   };
>>>>>>> 655912a8d1d903983801f9afe74f6cf4da97e5d4

  return (
    <>
      <VideoPopup videoId="yJg-Y5byMMw" />

      <section className="slider__area">
        <Slider className="slider-active" {...settings}>
          {homeSliderData.map((slider, index) => {
            return (
              <div
                key={index}
                className={`single-slider slider__height d-flex align-items-center ${slider.bgImg}`}
              >
                <div className="slider__shape">
                  <img
                    className="shape triangle"
                    src="assets/img/icon/slider/triangle.png"
                    alt="triangle"
                  />
                  <img
                    className="shape dotted-square"
                    src="assets/img/icon/slider/dotted-square.png"
                    alt="dotted-square"
                  />
                  <img
                    className="shape solid-square"
                    src="assets/img/icon/slider/solid-square.png"
                    alt="solid-square"
                  />
                  <img
                    className="shape circle"
                    src="assets/img/icon/slider/circle.png"
                    alt="circle"
                  />
                </div>
                <div className="container h1_slider_wrapper">
                  <div className="row">
                    <div className="col-xl-9 col-lg-9 col-md-10 col-sm-10">
                      <div className="slider__content">
                        <span>Your Smile is our Concerned</span>
                        <h1>
                          Get all the essentials <br /> in a lightweight package
                        </h1>
                        <div className="slider__btn">
                          <Link
                            to="/contact"
                            className="z-btn z-btn-transparent"
                          >
                            Get Started
                          </Link>
                        </div>
<<<<<<< HEAD
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-2 col-sm-2">
                      <div className="slider__play">
                        <button
                          onClick={() => setIsVideoOpen(true)}
                          className="slider__play-btn"
                        >
                          <i>
                            {" "}
                            <FiPlay />{" "}
                          </i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </section>
    </>
  );
=======
                        <div className="container h1_slider_wrapper">
                           <div className="row">
                              <div className="col-xl-9 col-lg-9 col-md-10 col-sm-10">
                                 <div className="slider__content">
                                    <span></span>
                                    <h1></h1>
                                    <div className="slider__btn position-relative" style={{bottom:"-50px"}}>
                                       <Link to="/contact" className="z-btn">Get Started</Link>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-3 col-lg-3 col-md-2 col-sm-2">
                                 <div className="slider__play">
                                    <button onClick={() => setIsVideoOpen(true)} className="slider__play-btn">
                                       <i> <FiPlay/> </i></button>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  })
                }
               </Slider>
         </section>
      </>
   );
>>>>>>> 655912a8d1d903983801f9afe74f6cf4da97e5d4
};

export default HomeHeroArea;
