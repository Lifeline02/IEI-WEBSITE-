import React from "react";

const StrategyArea = () => {
  return (
    <>
      <section className="faq__area pb-200 pt-5">
        <div className="container">
          <div className="shadow-lg p-3 mb-5 bg-body rounded  m-5">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="faq__accordion p-relative">
                  <di>
                    <h3>Business Services</h3>
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
                          Retirement Advisory Service
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
                        <div className="privacy-policy">
                          <ul>
                            <li>
                              Additional income via Voluntary Contribution (AVC)
                            </li>
                            <li>Portfolio management advice</li>
                            <li> Investement advice</li>
                            <li>
                              Deepening the understanding of the Contributory
                              Pension Scheme Developing the Pension Market
                            </li>
                          </ul>
                        </div>
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
                          Voluntary Contribution Scheme
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
                        <div className="privacy-policy">
                          <ul>
                            <li>
                              We also provide advice to clients that require
                              information on the Voluntary contribution scheme.
                              This is applicable to existing account holders who
                              may want to contribute more than the statutory
                              contribution of 8% and 10% of relevant income per
                              employee and employers respectively.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <h3>Our investment strategy</h3>

              <p>
                In line with PENCOM guidelines, we have designed a robust
                investment strategy, which deploys both active and passive
                Investment approaches. The active investment strategy leverages
                current trends to achieve industry rate of returns while the
                passive strategy minimizes the inherent risk in investments
                through a buy and hold approach. The combination of these
                approaches and thorough assets classification ensure the
                security of your investment.
              </p>
              <hr></hr>

              <h3>Investment selection criteria</h3>

              <p>
                With an objective to ensure that investment performances are
                optimal, investment windows are selected based on thorough
                criteria that rests on safety (minimal risk), yield
                (profitability) and liquidity (marketability).
              </p>
              <hr></hr>

              <h3>Exit strategy</h3>

              <p>
                We understand that a credible investment strategy requires a
                comprehensive exit strategy. Employing an array of matrices, we
                are apt to identify the appropriate exit period for our
                investments to minimizes losses.
              </p>
              <hr></hr>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StrategyArea;
