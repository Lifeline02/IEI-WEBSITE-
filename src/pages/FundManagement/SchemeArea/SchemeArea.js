import React from "react";

const SchemeArea = () => {
  return (
    <>
      <section className="faq__area pb-200 pt-75">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="faq__accordion p-relative">
                <di>
                  <h3>North Central</h3>
                </di>

                <div className="card">
                  <div className="card-header" id="northcentral_1">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#nc_1"
                        aria-expanded="true"
                        aria-controls="nc_1"
                      >
                        HEADQUARTERS (ABUJA)
                      </button>
                    </h5>
                  </div>

                  <div
                    id="nc_1"
                    className="collapse"
                    aria-labelledby="northcentral_1"
                    data-bs-parent="#accordion"
                  >
                    <div className="card-body accordion-body">
                      <h4>Personnel: JOLAADE ODUNTAN</h4>
                      <address>
                        22, Otukpo Street,Off Gimbiya Street,Area 11, Garki,
                        Abuja, Nigeria
                      </address>
                      <p>
                        <strong>Phone:</strong>
                        <a href="tel:+2348165722731"> (234) 0816 5722 731</a>
                      </p>
                      <p>
                        <strong>Phone:</strong>
                        <a href="tel:+2348078450652"> (234) 0807 8450 652</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" id="northcentral_2">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#nc_2"
                        aria-expanded="true"
                        aria-controls="nc_2"
                      >
                        BENUE OFFICE
                      </button>
                    </h5>
                  </div>

                  <div
                    id="nc_2"
                    className="collapse"
                    aria-labelledby="northcentral_2"
                    data-bs-parent="#accordion"
                  >
                    <div className="card-body accordion-body">
                      <h4>Personnel: VITALIS HWANDE</h4>
                      <address>
                        No. 67 Old Otukpo Road High Level Makurdi,Benue State
                      </address>
                      <p>
                        <strong>Phone:</strong>
                        <a href="tel:+2349087450920"> (234) 0908 7450 920</a>
                      </p>
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

export default SchemeArea;
