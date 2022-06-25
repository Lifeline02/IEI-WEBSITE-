import React from 'react';

const ContactArea = () => {
   return (
      <>
         <section className="contact__area">
            <div className="container-fluid p-0">
               <div className="row g-0">
                  <div className="col-xl-12">
                     <div className="contact__map">
                        <iframe title='contact' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15760.998735726998!2d7.49613466977539!3d9.040973899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0bec9cfbf413%3A0xda8bcf31d010bf68!2s22%20Otukpo%20Street%2C%20Garki%20900103%2C%20Abuja!5e0!3m2!1sen!2sng!4v1655726197661!5m2!1sen!2sng"></iframe>
                        <div className="contact__wrapper d-md-flex justify-content-between wow fadeInUp" data-wow-delay=".3s">
                           <div className="contact__info mr-100">
                              <h3>Get in touch</h3>
                              <ul>
                                 <li>
                                    <h4>Address</h4>
                                    <p>22, Otukpo Street, Off Gimbiya Street, <br /> Area 11, Garki, Abuja, Nigeria</p>
                                 </li>
                                 <li>
                                    <h4>call us</h4>
                                    <p><a href="tel:+2348165722731">(234) 0816 5722 731</a></p>
                                    <p><a href="tel:097000800">097 000 800</a></p>
                                 </li>
                                 <li>
                                    <h4>Email Address</h4>
                                    <p><a href="mailto:cservice@ieianchorpensions.com.ng">cservice@ieianchorpensions.com.ng</a></p>
                                 </li>
                              </ul>
                           </div>
                           <div className="contact__form">
                              <form >
                                 <input type="text" required placeholder="Your Name" />
                                 <input type="email" required placeholder="Your Email" />
                                 <textarea required placeholder="Your Message"></textarea>
                                 <button type="submit" className="z-btn">Send Message</button>
                              </form>
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

export default ContactArea;