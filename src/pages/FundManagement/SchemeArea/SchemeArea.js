import React from "react";

const SchemeArea = () => {
  return (
    <>
      <section className="faq__area pb-200 pt-5">
        <div className="container">
          <div className="shadow-lg p-3 mb-5 bg-body rounded  m-5">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="faq__accordion p-relative">
                  <di>
                    <h3>Retirement Advices</h3>
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
              <h3>Retirement planning service</h3>

              <p>
                Retirement Planning involves all activities from your first
                employment, up to and after your retirement geared towards
                ensuring that you and your needs are well provided for in the
                retirement phase of your life. In drawing up a retirement plan,
                it is critical to identify the following:
              </p>
              <hr></hr>

              <h3>When would you retire?</h3>

              <p>
                Depending on your outlook, and personal circumstances, people
                may choose to retire early, say before 50 years, while others
                will retire later, just at 60 years, or for however long their
                terms of employment permit. Many factors including your state of
                health, desire to pursue other activities, and very importantly
                the level of financial resources and responsibilities will
                affect the timing of your retirement. For some others, however,
                the timing of retirement is not entirely up to them. Sometimes
                accidents, ill-health, and employer-distress may lead to a
                pre-mature retirement.
              </p>
              <hr></hr>

              <h3>What your activities could be during your retirement</h3>

              <p>
                During retirement, some people choose to continue in active
                life, supporting their communities, participating in politics or
                even running a full time business. Others may choose to limit
                themselves to light activities as traveling, visiting children
                and grandchildren, etc. It is important to plan ahead for how
                you will like to spend your retirement, and prepare yourself
                mentally and financially for whichever choice you make.
              </p>
              <hr></hr>

              <h3>What kind of income will you need in retirement?</h3>

              <p>
                Planning adequately for your financial needs in retirement is
                very important. It is therefore necessary to ascertain ahead of
                time, how much income you will need in retirement. In planning
                towards this, one may envisage family responsibilities, state of
                health, and life expectancy. For example, having children of
                school age at retirement, your financial needs will outstrip
                those who do not. If you already live in your own house and will
                not be paying rent during your retirement, then your financial
                needs will differ from someone who does not own a home.
              </p>
              <hr></hr>

              <h3>What income to expect at retirement</h3>

              <p>
                Once you have ascertained your financial requirements at
                retirement, it is necessary to determine your income streams.
                For someone that has planned retirement early enough, income may
                come from investments such as dividends, capital appreciation,
                rental income as well as pension and other retirement benefits.
                Estimating your sources of income is important to enable you
                plan how to meet your needs at retirement.
              </p>
              <hr></hr>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SchemeArea;
