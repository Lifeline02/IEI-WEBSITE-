import React from "react";
import Slider from "react-slick";

const Testimonial = () => {
  // slick setting
  const settings = {
    autoplay: false,
    autoplaySpeed: 10000,
    dots: true,
    fade: false,
    arrows: false,
  };
  const testimonialData = [
    {
      id: 1,
      name: "Aleeyu Giza",
      title: "Dedicated Client",
      message:
        "I want to thank and congratulate your personnel for their outstanding professionalism in dealing with customers. I was pleased with the service I received since the personnel was dedicated, accountable, hospitable, and always willing to offer Services. is a good one having you there.",
    },

    {
      id: 3,
      name: "Adeyanju opeyemi",
      title: "Trader",
      message:
        "My encounters with your team have been amazing and exemplary, reflecting the high standards you and your company uphold. As a consumer, I'm really happy.",
    },
    {
      id: 2,
      name: "Yusuf Ibrahim",
      title: "Developer",
      message:
        "To save with IEI is to save for the future. Omo I trow salute for Una...",
    },

    {
      id: 4,
      name: "Ezegwu David Solomon",
      title: "Engineer",
      message:
        "I want to express my gratitude to IEI Anchor Pension, who are the greatest. I've already received my 25% pension benefit. Thank you so much for your prompt response..",
    },
  ];

  return (
    <>
      <section className="testimoinal__area gradient-bg">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="testimonial__content pt-165 pb-175">
                <div className="section__title section__title-3 mb-30">
                  <span className="white-color">Testimonials</span>
                  <h2 className="white-color">Our Clients success stories</h2>
                </div>

                <Slider className="testimonial__slider pb-70" {...settings}>
                  {testimonialData.map((testimonial, index) => {
                    return (
                      <div key={index} className="testimonial__item">
                        <p className="white-color">{testimonial.message}</p>
                        <div className="testimonial__content d-flex align-items-center">
                          <div className="quote mr-20">
                            <img
                              src="assets/img/icon/testimonial/quote.png"
                              alt="quote"
                            />
                          </div>
                          <div className="testimonial__info">
                            <h4 className="white-color">{testimonial.name}</h4>
                            <span className="white-color">
                              {testimonial.title}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="testimonial__thumb m-img text-end pt-120 ">
                <img
                  src="assets/img/testimonial/testimonial-3.png"
                  alt="testimonbial"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
