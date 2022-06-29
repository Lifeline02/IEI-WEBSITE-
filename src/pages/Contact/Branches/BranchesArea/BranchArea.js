import React from "react";

const FAQArea = () => {
  return (
    <>
      <section className="faq__area pb-200 pt-75">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="faq__accordion p-relative">
                <di>
                  <h3>North West</h3>
                </di>
                <div className="accordion" id="accordion">
                  <div className="card accordion-item">
                    <div className="card-header accordion-header" id="nortest1">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link"
                          data-bs-toggle="collapse"
                          data-bs-target="#nw_1"
                          aria-expanded="true"
                          aria-controls="nw_1"
                        >
                          KANO OFFICE
                        </button>
                      </h5>
                    </div>

                    <div
                      id="nw_1"
                      className="collapse"
                      aria-labelledby="nortest1"
                      data-bs-parent="#accordion"
                    >
                      <div className="card-body accordion-body">
                        <h4>Personnel: Abdullahi Abdurrahman Mohammed</h4>
                        <address>
                            No. 1 Iro Kurfi Plaza, 2nd Floor, Beside Yasara Filling Station,Ibrahim Taiwo Road, Kano state.
                        </address>
                        <p><strong>Phone:</strong><a href="tel:+2348095354072">(234) 08095354072</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="northwest_2">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#nw_2"
                          aria-expanded="true"
                          aria-controls="nw_2"
                        >
                          Is CPS backed by any Government Regulation?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="nw_2"
                      className="collapse"
                      aria-labelledby="northwest_2"
                      data-bs-parent="#accordion"
                    >
                   <div className="card-body accordion-body">
                        <h4>Personnel: Abdullahi Abdurrahman Mohammed</h4>
                        <address>
                            No. 1 Iro Kurfi Plaza, 2nd Floor, Beside Yasara Filling Station,Ibrahim Taiwo Road, Kano state.
                        </address>
                        <p><strong>Phone:</strong><a href="tel:+2348095354072">(234) 08095354072</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="acc_3">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_3"
                          aria-expanded="true"
                          aria-controls="collapse_3"
                        >
                          What regulatory body supervises this scheme?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_3"
                      className="collapse"
                      aria-labelledby="acc_3"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          The National Pension Commission regulates and
                          supervises the CPS. This body is also responsible for
                          licensing and regulating the activities of Pension
                          Fund Administrators (PFA) and Pension Fund Custodians
                          (PFC), as well as overseeing the all policies and
                          guidelines connected to Pension Matters.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_4">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_4"
                          aria-expanded="true"
                          aria-controls="collapse_4"
                        >
                          Is Contributory Pension Scheme (CPS) mandatory for
                          every worker?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_4"
                      className="collapse"
                      aria-labelledby="acc_4"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          The scheme is mandatory for employees of the Federal
                          Government, the FCT and Private sector employers with
                          more than three employees.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_5">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_5"
                          aria-expanded="true"
                          aria-controls="collapse_5"
                        >
                          How do I participate in the Scheme?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_5"
                      className="collapse"
                      aria-labelledby="acc_5"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          As an employee or contributor, you are required to
                          open a Retirement Savings Account (RSA) with any of
                          the Licensed Pension Fund Administrators (PFA) where
                          you remit your monthly contributions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_6">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_6"
                          aria-expanded="true"
                          aria-controls="collapse_6"
                        >
                          How do I participate in the Scheme?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_6"
                      className="collapse"
                      aria-labelledby="acc_6"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Once you have your RSA, you would contribute 8% of
                          your monthly emolument while your employer would make
                          an additional contribution of 10% into your RSA.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_7">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_7"
                          aria-expanded="true"
                          aria-controls="collapse_7"
                        >
                          Can I contribute more than the requested 8%?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_7"
                      className="collapse"
                      aria-labelledby="acc_7"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Yes you can. It is called Voluntary contributions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_8">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_8"
                          aria-expanded="true"
                          aria-controls="collapse_8"
                        >
                          What if my employer deducts my contribution of 8% but
                          fails to remit to my RSA?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_8"
                      className="collapse"
                      aria-labelledby="acc_8"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          The Pension Act demands that such employer would pay a
                          penalty of 2% for every month of default once the case
                          is reported to and verified by PENCOM.{" "}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_9">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_9"
                          aria-expanded="true"
                          aria-controls="collapse_9"
                        >
                          What does the PFA do with my contributions?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_9"
                      className="collapse"
                      aria-labelledby="acc_9"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          The PFA invests your contributions in accordance with
                          the guidelines of PENCOM. Proceeds from such
                          investments will be credited to your RSA.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_10">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_10"
                          aria-expanded="true"
                          aria-controls="collapse_10"
                        >
                          How do I contact my PFA?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_10"
                      className="collapse"
                      aria-labelledby="acc_10"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          You may contact us via any of our communication
                          channels. Call us on 08165722731, 097000800 or send us
                          an email at cservice@ieianchorpensions.com
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_11">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_11"
                          aria-expanded="true"
                          aria-controls="collapse_11"
                        >
                          How do I monitor my Savings?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_11"
                      className="collapse"
                      aria-labelledby="acc_11"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Besides receiving SMS alerts on remittances into your
                          account, Your PFA sends periodic statements to your
                          specified address. You may also obtain login details
                          from your PFA for online statements.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_12">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_12"
                          aria-expanded="true"
                          aria-controls="collapse_12"
                        >
                          Is it possible for me to change my PFA?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_12"
                      className="collapse"
                      aria-labelledby="acc_12"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Under the Pension Reform Act 2014, an employee or
                          contributor is allowed to move his RSA from one PFA to
                          another once in a year only without having to tender
                          reasons for the change. However, this window is
                          managed and will soon be opened by PENCOM.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_13">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_13"
                          aria-expanded="true"
                          aria-controls="collapse_13"
                        >
                          When can I start to withdraw money from my RSA
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_13"
                      className="collapse"
                      aria-labelledby="acc_13"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Withdrawals are permitted upon retirement. If you
                          retire at 50years old and above, or you had to retire
                          below 50years old due to physical and mental
                          incapacity, you would have access to withdrawals from
                          your RSA. However, if you are below 50years old and
                          you resign or are disengaged from your employment, you
                          would be allowed to withdraw from your RSA only after
                          4 months of being unable to secure an employment.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_14">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_14"
                          aria-expanded="true"
                          aria-controls="collapse_14"
                        >
                          What are the charges on my RSA?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_14"
                      className="collapse"
                      aria-labelledby="acc_14"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Under the current regulation, a maximum monthly charge
                          of NGN100 and N5 VAT for every monthly contribution.
                          Kindly note that PFA Charges for the services provided
                          on the RSA are determined by the guidelines as
                          provided by PENCOM per time.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_15">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_15"
                          aria-expanded="true"
                          aria-controls="collapse_15"
                        >
                          As an intending Client, is my biometrics required?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_15"
                      className="collapse"
                      aria-labelledby="acc_15"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Yes. The use of Fingerprint Identification System
                          (biometrics) for RSA holder’s identification by PENCOM
                          is soon to commence.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_16">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_16"
                          aria-expanded="true"
                          aria-controls="collapse_16"
                        >
                          Can a PIN be generated for an RSA holder without an
                          Employer Code?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_16"
                      className="collapse"
                      aria-labelledby="acc_16"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          No. The Employer code must be obtained before a PIN
                          can be generated.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_17">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_17"
                          aria-expanded="true"
                          aria-controls="collapse_17"
                        >
                          What are the requirements for generating Employer
                          Code?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_17"
                      className="collapse"
                      aria-labelledby="acc_17"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          The required documents include: Copy of CAC
                          certificates, Tax Identification Number (TIN),
                          Company's Business Address and Nature of Business
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_18">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_18"
                          aria-expanded="true"
                          aria-controls="collapse_18"
                        >
                          Can an employer choose to bear full responsibility of
                          the contributions to the scheme?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_18"
                      className="collapse"
                      aria-labelledby="acc_18"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Yes. Where an employer chooses to bear the full
                          responsibility of the Scheme, the employer
                          contribution shall not be less than 20 percent of the
                          monthly emolument of the employee. The required
                          documents include: Copy of CAC certificates, Tax
                          Identification Number (TIN), Company's Business
                          Address and Nature of Business
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_19">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_19"
                          aria-expanded="true"
                          aria-controls="collapse_19"
                        >
                          Are pension contributions taxable?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_19"
                      className="collapse"
                      aria-labelledby="acc_19"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          All interest, dividends, profits, investment and other
                          income accruable to pension fund and amount payable as
                          a retirement benefit shall not be taxed.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_20">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_20"
                          aria-expanded="true"
                          aria-controls="collapse_20"
                        >
                          In an event of death, how would my beneficiaries
                          access my savings and what documents are needed?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_20"
                      className="collapse"
                      aria-labelledby="acc_20"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <h3>
                          Below are the following documents that would be
                          needed:
                        </h3>
                        <p>
                          1. Letter of Administration issued from high
                          court/enrolment order/will admitted to probate stating
                          the legal beneficiary/beneficiaries.<br></br> 2.
                          Medical certificate of the cause of death issued by a
                          certified physician.<br></br>3. Certificate of death
                          registration obtained from National population
                          commission <br></br> 4. Letter of introduction from
                          deceased employer stating the date of death/birth ,it
                          should also introduce the next of kin
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_21">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_21"
                          aria-expanded="true"
                          aria-controls="collapse_21"
                        >
                          What are “Non-Interest Funds”?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_21"
                      className="collapse"
                      aria-labelledby="acc_21"
                      data-bs-parent="#accordions1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Non-Interest Funds are investment instrument that
                          complies with Sharia (Islamic law). They are also
                          known as “Ethical Investments”, “Islamic Financing” or
                          “Shari’ah Compliant Finance” as it has its own
                          product, services and contracts that differ from
                          conventional investment instrument. Non interest
                          finance is based on the principles of profit and risk
                          sharing, transparency in pricing, equitability,
                          fairness and a business model that prohibits
                          uncertainty. As ethical investments evolve in frontier
                          markets like Nigeria, retail and institutional
                          investors are showing increasing interest in
                          Shari’ah-compliant funds due to its ethical nature.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="faq__accordion p-relative">
                <di>
                  <h3>General FAQs (21)</h3>
                </di>
                <div className="accordion" id="accordion1">
                  <div className="card accordion-item">
                    <div className="card-header accordion-header" id="acc_1">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_1"
                          aria-expanded="true"
                          aria-controls="collapse_1"
                        >
                          What is the Contributory Pension Scheme (CPS)?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_1"
                      className="collapse"
                      aria-labelledby="acc_1"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          The Contributory Pension Scheme (CPS) which commenced
                          in 2004 is fully funded, privately managed, with third
                          party in custody of the funds and assets and is based
                          on individual accounts. It ensures that everyone who
                          has worked receives his/her retirement benefits as and
                          when due
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="acc_2">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_2"
                          aria-expanded="true"
                          aria-controls="collapse_2"
                        >
                          Is CPS backed by any Government Regulation?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_2"
                      className="collapse"
                      aria-labelledby="acc_2"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <p>The scheme is backed by the Pension Act 2004.</p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="acc_3">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_3"
                          aria-expanded="true"
                          aria-controls="collapse_3"
                        >
                          What regulatory body supervises this scheme?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_3"
                      className="collapse"
                      aria-labelledby="acc_3"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          The National Pension Commission regulates and
                          supervises the CPS. This body is also responsible for
                          licensing and regulating the activities of Pension
                          Fund Administrators (PFA) and Pension Fund Custodians
                          (PFC), as well as overseeing the all policies and
                          guidelines connected to Pension Matters.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_4">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_4"
                          aria-expanded="true"
                          aria-controls="collapse_4"
                        >
                          Is Contributory Pension Scheme (CPS) mandatory for
                          every worker?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_4"
                      className="collapse"
                      aria-labelledby="acc_4"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          The scheme is mandatory for employees of the Federal
                          Government, the FCT and Private sector employers with
                          more than three employees.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_5">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_5"
                          aria-expanded="true"
                          aria-controls="collapse_5"
                        >
                          How do I participate in the Scheme?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_5"
                      className="collapse"
                      aria-labelledby="acc_5"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          As an employee or contributor, you are required to
                          open a Retirement Savings Account (RSA) with any of
                          the Licensed Pension Fund Administrators (PFA) where
                          you remit your monthly contributions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_6">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_6"
                          aria-expanded="true"
                          aria-controls="collapse_6"
                        >
                          How do I participate in the Scheme?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_6"
                      className="collapse"
                      aria-labelledby="acc_6"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Once you have your RSA, you would contribute 8% of
                          your monthly emolument while your employer would make
                          an additional contribution of 10% into your RSA.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_7">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_7"
                          aria-expanded="true"
                          aria-controls="collapse_7"
                        >
                          Can I contribute more than the requested 8%?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_7"
                      className="collapse"
                      aria-labelledby="acc_7"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Yes you can. It is called Voluntary contributions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_8">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_8"
                          aria-expanded="true"
                          aria-controls="collapse_8"
                        >
                          What if my employer deducts my contribution of 8% but
                          fails to remit to my RSA?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_8"
                      className="collapse"
                      aria-labelledby="acc_8"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          The Pension Act demands that such employer would pay a
                          penalty of 2% for every month of default once the case
                          is reported to and verified by PENCOM.{" "}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_9">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_9"
                          aria-expanded="true"
                          aria-controls="collapse_9"
                        >
                          What does the PFA do with my contributions?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_9"
                      className="collapse"
                      aria-labelledby="acc_9"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          The PFA invests your contributions in accordance with
                          the guidelines of PENCOM. Proceeds from such
                          investments will be credited to your RSA.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_10">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_10"
                          aria-expanded="true"
                          aria-controls="collapse_10"
                        >
                          How do I contact my PFA?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_10"
                      className="collapse"
                      aria-labelledby="acc_10"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          You may contact us via any of our communication
                          channels. Call us on 08165722731, 097000800 or send us
                          an email at cservice@ieianchorpensions.com
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_11">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_11"
                          aria-expanded="true"
                          aria-controls="collapse_11"
                        >
                          How do I monitor my Savings?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_11"
                      className="collapse"
                      aria-labelledby="acc_11"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Besides receiving SMS alerts on remittances into your
                          account, Your PFA sends periodic statements to your
                          specified address. You may also obtain login details
                          from your PFA for online statements.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_12">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_12"
                          aria-expanded="true"
                          aria-controls="collapse_12"
                        >
                          Is it possible for me to change my PFA?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_12"
                      className="collapse"
                      aria-labelledby="acc_12"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Under the Pension Reform Act 2014, an employee or
                          contributor is allowed to move his RSA from one PFA to
                          another once in a year only without having to tender
                          reasons for the change. However, this window is
                          managed and will soon be opened by PENCOM.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_13">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_13"
                          aria-expanded="true"
                          aria-controls="collapse_13"
                        >
                          When can I start to withdraw money from my RSA
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_13"
                      className="collapse"
                      aria-labelledby="acc_13"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Withdrawals are permitted upon retirement. If you
                          retire at 50years old and above, or you had to retire
                          below 50years old due to physical and mental
                          incapacity, you would have access to withdrawals from
                          your RSA. However, if you are below 50years old and
                          you resign or are disengaged from your employment, you
                          would be allowed to withdraw from your RSA only after
                          4 months of being unable to secure an employment.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_14">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_14"
                          aria-expanded="true"
                          aria-controls="collapse_14"
                        >
                          What are the charges on my RSA?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_14"
                      className="collapse"
                      aria-labelledby="acc_14"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Under the current regulation, a maximum monthly charge
                          of NGN100 and N5 VAT for every monthly contribution.
                          Kindly note that PFA Charges for the services provided
                          on the RSA are determined by the guidelines as
                          provided by PENCOM per time.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_15">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_15"
                          aria-expanded="true"
                          aria-controls="collapse_15"
                        >
                          As an intending Client, is my biometrics required?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_15"
                      className="collapse"
                      aria-labelledby="acc_15"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Yes. The use of Fingerprint Identification System
                          (biometrics) for RSA holder’s identification by PENCOM
                          is soon to commence.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_16">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_16"
                          aria-expanded="true"
                          aria-controls="collapse_16"
                        >
                          Can a PIN be generated for an RSA holder without an
                          Employer Code?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_16"
                      className="collapse"
                      aria-labelledby="acc_16"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          No. The Employer code must be obtained before a PIN
                          can be generated.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_17">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_17"
                          aria-expanded="true"
                          aria-controls="collapse_17"
                        >
                          What are the requirements for generating Employer
                          Code?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_17"
                      className="collapse"
                      aria-labelledby="acc_17"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          The required documents include: Copy of CAC
                          certificates, Tax Identification Number (TIN),
                          Company's Business Address and Nature of Business
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_18">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_18"
                          aria-expanded="true"
                          aria-controls="collapse_18"
                        >
                          Can an employer choose to bear full responsibility of
                          the contributions to the scheme?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_18"
                      className="collapse"
                      aria-labelledby="acc_18"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Yes. Where an employer chooses to bear the full
                          responsibility of the Scheme, the employer
                          contribution shall not be less than 20 percent of the
                          monthly emolument of the employee. The required
                          documents include: Copy of CAC certificates, Tax
                          Identification Number (TIN), Company's Business
                          Address and Nature of Business
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_19">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_19"
                          aria-expanded="true"
                          aria-controls="collapse_19"
                        >
                          Are pension contributions taxable?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_19"
                      className="collapse"
                      aria-labelledby="acc_19"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          All interest, dividends, profits, investment and other
                          income accruable to pension fund and amount payable as
                          a retirement benefit shall not be taxed.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_20">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_20"
                          aria-expanded="true"
                          aria-controls="collapse_20"
                        >
                          In an event of death, how would my beneficiaries
                          access my savings and what documents are needed?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_20"
                      className="collapse"
                      aria-labelledby="acc_20"
                      data-bs-parent="#accordion1"
                    >
                      <div className="card-body accordion-body">
                        <h3>
                          Below are the following documents that would be
                          needed:
                        </h3>
                        <p>
                          1. Letter of Administration issued from high
                          court/enrolment order/will admitted to probate stating
                          the legal beneficiary/beneficiaries.<br></br> 2.
                          Medical certificate of the cause of death issued by a
                          certified physician.<br></br>3. Certificate of death
                          registration obtained from National population
                          commission <br></br> 4. Letter of introduction from
                          deceased employer stating the date of death/birth ,it
                          should also introduce the next of kin
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_21">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_21"
                          aria-expanded="true"
                          aria-controls="collapse_21"
                        >
                          What are “Non-Interest Funds”?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_21"
                      className="collapse"
                      aria-labelledby="acc_21"
                      data-bs-parent="#accordions1"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Non-Interest Funds are investment instrument that
                          complies with Sharia (Islamic law). They are also
                          known as “Ethical Investments”, “Islamic Financing” or
                          “Shari’ah Compliant Finance” as it has its own
                          product, services and contracts that differ from
                          conventional investment instrument. Non interest
                          finance is based on the principles of profit and risk
                          sharing, transparency in pricing, equitability,
                          fairness and a business model that prohibits
                          uncertainty. As ethical investments evolve in frontier
                          markets like Nigeria, retail and institutional
                          investors are showing increasing interest in
                          Shari’ah-compliant funds due to its ethical nature.
                        </p>
                      </div>
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

export default FAQArea;
