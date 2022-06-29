import React from "react";

const FAQArea = () => {
  return (
    <>
      <section className="faq__area pb-200 pt-75">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-5">
              <div className="faq__content">
                <div className="section-title mb-45">
                  <h3>
                    Do you have <br /> Any question
                  </h3>
                  <p>
                    We help you weather today's uncertainty through our best
                    team.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-7 offset-xl-2 offset-lg-1">
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

          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="faq__accordion p-relative">
                <div>
                  <h3>About My Retirement (10)</h3>
                </div>
                <div className="accordion" id="accordionExample2">
                  <div className="card accordion-item">
                    <div className="card-header accordion-header" id="acc_11">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_11"
                          aria-expanded="false"
                          aria-controls="collapse_11"
                        >
                          What RSA balance will qualify a retiree for Lump Sum?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_11"
                      className="collapse"
                      aria-labelledby="acc_11"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="card-body accordion-body">
                        <p>A minimum RSA Balance of NGN550,000</p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="acc_212">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_212"
                          aria-expanded="true"
                          aria-controls="collapse_212"
                        >
                          What is the relationship between Monthly Pension and
                          Lump Sum?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_212"
                      className="collapse"
                      aria-labelledby="acc_212"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Monthly Pension & Lump Sum have an Inverse
                          relationship. This means that the higher the monthly
                          Pension, the lower the Lump Sum and vice-visa.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="acc_31">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_31"
                          aria-expanded="true"
                          aria-controls="collapse_31"
                        >
                          My colleague at the same grade/level has a higher
                          lumpsum?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_31"
                      className="collapse"
                      aria-labelledby="acc_31"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          This is a possibility because Lump Sum & Programmed
                          Withdrawal amount are determined by four (4)
                          variables: Age at Retirement, RSA balance at
                          Retirement, Gender and Annual Total Emolument (ATE).
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="acc_41">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_41"
                          aria-expanded="true"
                          aria-controls="collapse_41"
                        >
                          Do I need to use the checklist in documenting an
                          intending retiree?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_41"
                      className="collapse"
                      aria-labelledby="acc_41"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="card-body accordion-body">
                        <p>Yes</p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_51">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_51"
                          aria-expanded="true"
                          aria-controls="collapse_51"
                        >
                          Do I need to verify my Letter of Administration with
                          the issuing Court before presenting it for processing?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_51"
                      className="collapse"
                      aria-labelledby="acc_51"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="card-body accordion-body">
                        <p>Yes</p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_61">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_61"
                          aria-expanded="true"
                          aria-controls="collapse_61"
                        >
                          Can I withdraw from my RSA before retiring.
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_61"
                      className="collapse"
                      aria-labelledby="acc_61"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Yes. You can withdraw a maximum of 25% of your RSA
                          Balance before retirement.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_71">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_71"
                          aria-expanded="true"
                          aria-controls="collapse_71"
                        >
                          Can I withdraw 25% payment more than once?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_71"
                      className="collapse"
                      aria-labelledby="acc_71"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          No. 25% payment can only be withdrawn once. The
                          remaining RSA balance shall be accessed at the
                          retirement.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_81">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_81"
                          aria-expanded="true"
                          aria-controls="collapse_81"
                        >
                          What is annuity?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_81"
                      className="collapse"
                      aria-labelledby="acc_81"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          It is a string of payments made by Insurance company
                          to its annuitants.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_91">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_91"
                          aria-expanded="true"
                          aria-controls="collapse_91"
                        >
                          Can I run simultaneously Programmed Withdrawal (PW)
                          and Annuity as a retiree?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_91"
                      className="collapse"
                      aria-labelledby="acc_91"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Yes. A retiree on PW may choose to use his lump-sum
                          payment as premium for the purchase of annuity.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_101">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_101"
                          aria-expanded="true"
                          aria-controls="collapse_101"
                        >
                          Is there any fixed percentage for lumpsum?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_101"
                      className="collapse"
                      aria-labelledby="acc_101"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Lumpsum is residual. There is no fixed percentage.
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
                  <h3>Multi Funds (11)</h3>
                </di>
                <div className="accordion" id="accordionExample3">
                  <div className="card accordion-item">
                    <div className="card-header accordion-header" id="acc_12">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_12"
                          aria-expanded="true"
                          aria-controls="collapse_12"
                        >
                          What is the multi-fund structure?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_1"
                      className="collapse"
                      aria-labelledby="acc_12"
                      data-bs-parent="#accordionExample3"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          The Multi-Fund structure is a framework that aims to
                          align the age and risk profile of RSA holders by
                          splitting the RSA Fund into four (4) distinct Funds.
                          The current RSA Fund will be sub-divided into three
                          separate Funds, while the RSA Retirees Fund would be
                          the 4th Fund.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="acc_32">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_22"
                          aria-expanded="true"
                          aria-controls="collapse_22"
                        >
                          Can I decide which fund to be assigned to?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_22"
                      className="collapse"
                      aria-labelledby="acc_22"
                      data-bs-parent="#accordionExample3"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          On the commencement date, the default mechanism will
                          apply. All active members that are 49 years and below
                          will be placed in Fund II and active contributors
                          above 50 years would be placed in Fund III. However,
                          active contributors may apply to switch between funds.
                          An active contributor can switch from Fund II to Fund
                          I while an active contributor in Fund III can switch
                          to Fund II. All active contributors above 50 years
                          cannot switch to Fund I and retirees cannot move to
                          any other fund types.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="acc_32">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_32"
                          aria-expanded="true"
                          aria-controls="collapse_32"
                        >
                          When I am in Fund I and then clock 50 years, will I be
                          asked to move to Fund II by choice or Fund III by
                          reason of age?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_32"
                      className="collapse"
                      aria-labelledby="acc_32"
                      data-bs-parent="#accordionExample3"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          No, you will be moved by default of age limit to fund
                          III, but you have the option to move to fund II
                          thereafter and you can opt out within every twelve
                          (12) months.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="acc_42">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_42"
                          aria-expanded="true"
                          aria-controls="collapse_42"
                        >
                          As a retiree, can I move to other funds?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_42"
                      className="collapse"
                      aria-labelledby="acc_42"
                      data-bs-parent="#accordionExample3"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          No, as a retiree you are not allowed to move out of
                          Fund IV as it has limited risk attached to it.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_52">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_52"
                          aria-expanded="true"
                          aria-controls="collapse_52"
                        >
                          Is there any restriction/charge to my movement between
                          funds?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_52"
                      className="collapse"
                      aria-labelledby="acc_52"
                      data-bs-parent="#accordionExample3"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          You can move once in a year without any charge but an
                          additional movement in the same year shall attract a
                          fee to be determined by PENCOM.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_62">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_62"
                          aria-expanded="true"
                          aria-controls="collapse_62"
                        >
                          Do I have the option of selecting the instruments my
                          funds can be invested in?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_62"
                      className="collapse"
                      aria-labelledby="acc_62"
                      data-bs-parent="#accordionExample3"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          No. PFAs are the Fund managers and have the
                          responsibility of investing your funds in secured
                          investments so as to ensure good yields on your
                          funds..
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_72">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_72"
                          aria-expanded="true"
                          aria-controls="collapse_72"
                        >
                          Can I split my current savings to 2 different funds?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_72"
                      className="collapse"
                      aria-labelledby="acc_72"
                      data-bs-parent="#accordionExample3"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          No, this is not possible because you are only
                          identified with one PIN and cannot be allowed to have
                          contributions in more than one fund structure at the
                          same time.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_82">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_82"
                          aria-expanded="true"
                          aria-controls="collapse_82"
                        >
                          If my date of birth is wrongly captured, under which
                          Fund Type will I be profiled?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_82"
                      className="collapse"
                      aria-labelledby="acc_82"
                      data-bs-parent="#accordionExample3"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Your fund will be profiled using your provided date of
                          birth. However, you can still check and update your
                          records with your PFA before the commencement of the
                          transition.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_92">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_92"
                          aria-expanded="true"
                          aria-controls="collapse_92"
                        >
                          What is the relationship between the transfer window
                          and the Multi-Fund structure?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_92"
                      className="collapse"
                      aria-labelledby="acc_92"
                      data-bs-parent="#accordionExample3"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          There is no relationship between the transfer window
                          and the multi-fund structure. The transfer window
                          allows the customer the choice of moving his/her RSA
                          from one PFA to another while the multi fund allows a
                          customer the choice of moving from one fund type to
                          another within the same PFA.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_102">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_102"
                          aria-expanded="true"
                          aria-controls="collapse_102"
                        >
                          Will the movement of Funds affect my account balance?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_102"
                      className="collapse"
                      aria-labelledby="acc_102"
                      data-bs-parent="#accordionExample3"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          No. The balance in your account will not be affected.
                          However, your unit price will change depending on the
                          fund type.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_112">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_112"
                          aria-expanded="true"
                          aria-controls="collapse_112"
                        >
                          What is the effect of movement to a new fund on my
                          Voluntary Contribution?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_112"
                      className="collapse"
                      aria-labelledby="acc_112"
                      data-bs-parent="#accordionExample3"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Your RSA PIN accommodates both your Pension
                          contribution and your voluntary contribution, so both
                          will be transferred to your preferred choice of fund
                          and managed in line with the provisions of the
                          circular for voluntary contribution.
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
                  <h3>Micro Pension Funds (8)</h3>
                </di>
                <div className="accordion" id="accordionExample4">
                  <div className="card accordion-item">
                    <div className="card-header accordion-header" id="acc_3">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_13"
                          aria-expanded="true"
                          aria-controls="collapse_13"
                        >
                          What is Micro Pension Funds?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_13"
                      className="collapse"
                      aria-labelledby="acc_13"
                      data-bs-parent="#accordionExample4"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Micro Pension refers to an arrangement for the
                          provision of pension to the self-employed, and persons
                          operating in the informal sector (fashion designers,
                          mechanics, market sellers, lawyers, taxi drivers,
                          etc.) through the Contributory Pension Scheme. The
                          primary objective of the Micro Pension Plan (MPP) is
                          to provide retirement benefits to the Micro Pension
                          contributors.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="acc_23">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_23"
                          aria-expanded="true"
                          aria-controls="collapse_23"
                        >
                          How old must I be to start Micro pensions?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_23"
                      className="collapse"
                      aria-labelledby="acc_23"
                      data-bs-parent="#accordionExample4"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Anyone from ages 18 years can open a Micro Pension
                          account. However, those below the stated age can still
                          open an account with the consent of their parents or
                          guardian.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="acc_33">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_33"
                          aria-expanded="true"
                          aria-controls="collapse_33"
                        >
                          What is the difference between Micro Pension and
                          co-operative society?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_33"
                      className="collapse"
                      aria-labelledby="acc_33"
                      data-bs-parent="#accordionExample4"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Unlike the co-operative society, Micro Pension’s
                          primary aim is to help you plan for your retirement.
                          Funds are invested securely till the time of
                          retirement. With the Micro Pension, you still have
                          access to 25% of your contribution at any time before
                          retirement.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="acc_43">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_43"
                          aria-expanded="true"
                          aria-controls="collapse_43"
                        >
                          What is the difference between Micro Pensions and
                          Voluntary Contributions?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_43"
                      className="collapse"
                      aria-labelledby="acc_43"
                      data-bs-parent="#accordionExample4"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Voluntary Contribution can only be made through an
                          employer while Micro Pensions can be made individually
                          with no maximum limit of contribution.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_53">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_53"
                          aria-expanded="true"
                          aria-controls="collapse_53"
                        >
                          Can I have access to my savings before retirement?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_53"
                      className="collapse"
                      aria-labelledby="acc_53"
                      data-bs-parent="#accordionExample4"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Yes you can access up to 25% of your contributions to
                          the Micro Pensions Scheme at any time for contingency.
                          The remaining 75% will be invested on prevalent
                          compound interest rates until the age of retirement
                          when you can have access to lumpsum or programmed
                          withdrawal.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_63">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_63"
                          aria-expanded="true"
                          aria-controls="collapse_63"
                        >
                          Do I need my employer to make remittance for me?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_63"
                      className="collapse"
                      aria-labelledby="acc_63"
                      data-bs-parent="#accordionExample4"
                    >
                      <div className="card-body accordion-body">
                        <p>No.</p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_73">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_73"
                          aria-expanded="true"
                          aria-controls="collapse_73"
                        >
                          How can I monitor my money with the Micro Pension?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_73"
                      className="collapse"
                      aria-labelledby="acc_73"
                      data-bs-parent="#accordionExample4"
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
                    <div className="card-header" id="acc_83">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_83"
                          aria-expanded="true"
                          aria-controls="collapse_83"
                        >
                          How often do I get to make remittance to my Micro
                          Pension account?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_83"
                      className="collapse"
                      aria-labelledby="acc_83"
                      data-bs-parent="#accordionExample4"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          You can schedule your remittance based on your
                          preferences either daily, weekly or monthly.
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
                  <h3>Corvid 19 - Impact On Investment Returns (10)</h3>
                </di>
                <div className="accordion" id="accordionExample5">
                  <div className="card accordion-item">
                    <div className="card-header accordion-header" id="acc_14">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_14"
                          aria-expanded="true"
                          aria-controls="collapse_14"
                        >
                          There has been reduction in my RSA account why?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_14"
                      className="collapse"
                      aria-labelledby="acc_4"
                      data-bs-parent="#accordionExample5"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          All Pension funds are pooled together and invested in
                          2 broad classes of investment:
                          <br></br>
                          1. Fixed Income Investments: These are types of
                          financial Instruments where the returns (i.e.
                          Interest) are determined from the first day of the
                          investments. These includes Bonds, Treasury Bills etc.
                          they are used to preserve capital.
                          <br></br>
                          2. Variable Income Instruments: These are types of
                          financial Instruments where the returns (i.e.
                          Interest) are not defined from the first day of the
                          investments. These includes Stocks, Infrastructure
                          Funds etc. They are used to enhance return, where it
                          is possible to make returns in excess of 20% but also
                          possible to lose value.
                          <br></br>
                          This second category of investment obtain their value
                          from daily prices that are derived from trading
                          carried out on the Securities Exchanges. Therefore, on
                          days when lower prices are posted by Securities
                          Exchanges, values of the investments in our funds will
                          be lower for such days.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="acc_24">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_24"
                          aria-expanded="true"
                          aria-controls="collapse_24"
                        >
                          The balance I received in December 2019 is higher than
                          what I received in Mar 2020
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_24"
                      className="collapse"
                      aria-labelledby="acc_24"
                      data-bs-parent="#accordionExample5"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          The global economy is currently being rattled by the
                          COVID-19 health pandemic which has infected over
                          3million people and killed over 200,000 globally. This
                          pandemic which has disrupted all economic activities
                          globally has also affected the Nigerian Financial
                          Markets and prices of Financial Assets have suffered
                          as a result. The erosion of some value of your RSA
                          Balance is therefore as a result of these depressed
                          Asset Prices. We are however taking active measures to
                          ensure minimum effect on our Customer’s RSA balances
                          while we are very positive on a reversal of lost value
                          post Covid-19.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="acc_34">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_34"
                          aria-expanded="true"
                          aria-controls="collapse_34"
                        >
                          Does it mean that there hasn’t been contribution on my
                          account since this year?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_34"
                      className="collapse"
                      aria-labelledby="acc_34"
                      data-bs-parent="#accordionExample5"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          There have been contributions into your account,
                          however the impact of the erosion of the previously
                          earned Income on your accounts may have been more than
                          the amount of contribution posted over this period.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="acc_44">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_44"
                          aria-expanded="true"
                          aria-controls="collapse_44"
                        >
                          If it is because of the Pandemic should it not be
                          affecting my ROI and not my current balance?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_44"
                      className="collapse"
                      aria-labelledby="acc_44"
                      data-bs-parent="#accordionExample5"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Only the portion of the Returns earned on your RSA
                          balance is being affected.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_54">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_54"
                          aria-expanded="true"
                          aria-controls="collapse_54"
                        >
                          Is the dip in investment ROI affecting all the funds?
                          Can I move back to Fund2?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_54"
                      className="collapse"
                      aria-labelledby="acc_54"
                      data-bs-parent="#accordionExample5"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          All Funds have a combination of both Fixed Income and
                          Variable Income Instruments and are all being affected
                          by the current market depression.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_64">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_64"
                          aria-expanded="true"
                          aria-controls="collapse_64"
                        >
                          Can investments in my RSA be paused completely or
                          partially to avert losses in my portfolio until the
                          crisis is over?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_64"
                      className="collapse"
                      aria-labelledby="acc_64"
                      data-bs-parent="#accordionExample5"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Because each contributor’s funds are pooled together
                          with others and invested in various asset classes, it
                          would be impossible to suspend any one beneficiary’s
                          portion of an entire investment.
                          <br></br>
                          Also, PenCom regulation does not allow for PFAs to
                          leave funds being managed uninvested except in the
                          event of a complete shutdown of all financial markets.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_74">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_74"
                          aria-expanded="true"
                          aria-controls="collapse_74"
                        >
                          How long does IEI-Anchor think this situation will
                          linger and what measures is being taken to protect our
                          funds?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_74"
                      className="collapse"
                      aria-labelledby="acc_74"
                      data-bs-parent="#accordionExample5"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          A more realistic expectation of when global economic
                          activities will fully resume will be when a
                          cure/vaccine for the rapidly spreading pandemic is
                          discovered and ready for administration. This could
                          take a while based on evidence of things at the
                          moment.
                          <br></br>
                          We have rejigged our strategy to factor in the
                          realities of the Covid-19 situation with a view to
                          preserving the main objective of the Pension Fund
                          Management which is Capital preservation while also
                          seeking to maximize returns within acceptable level of
                          risk-reward trade off.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_84">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_84"
                          aria-expanded="true"
                          aria-controls="collapse_84"
                        >
                          I recently moved to Fund I but my RSA balance keeps
                          dropping since I moved. Can I move back to Fund II
                          without losing more money?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_84"
                      className="collapse"
                      aria-labelledby="acc_84"
                      data-bs-parent="#accordionExample5"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          While you are free to move from one fund to another,
                          the profile of Fund I fits with a young person or
                          someone who still has a lot of years to work before
                          retiring. Since you would not be retiring soon, Fund 1
                          would be most suitable for you.
                          <br></br>
                          Given that markets move in cycles, opportunities to
                          recover whatever declines you may have witnessed will
                          present themselves and whenever this window
                          opportunities opens, the Fund I is better positioned
                          to benefit more from it due to its higher risk-reward
                          trade off.
                          <br></br>
                          We always advise that you take a long-term view of
                          your pension funds and be confident that our long-term
                          investment strategy for your fund will deliver you
                          good value in due course. What is currently being
                          witnessed is short term market fluctuations.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_94">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_94"
                          aria-expanded="true"
                          aria-controls="collapse_94"
                        >
                          Can I move back to Fund 1 after the pandemic is over?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_94"
                      className="collapse"
                      aria-labelledby="acc_94"
                      data-bs-parent="#accordionExample5"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          YES, however, movement from one fund to another is
                          once in a year as stipulated by the Commission.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_104">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_104"
                          aria-expanded="true"
                          aria-controls="collapse_104"
                        >
                          Will the current situation inflation affect the value
                          of my Programmed Withdrawal payment.
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_104"
                      className="collapse"
                      aria-labelledby="acc_104"
                      data-bs-parent="#accordionExample5"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          The current market decline will not affect Programmed
                          Withdrawal (PW) payments. The current portfolio
                          structure for the Fund IV is such that the fund is
                          hedged against significant short-term market
                          fluctuations.
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
                  <h3>My Retirement Savings Account (11)</h3>
                </di>
                <div className="accordion" id="accordionExample6">
                  <div className="card accordion-item">
                    <div className="card-header accordion-header" id="acc_15">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_15"
                          aria-expanded="true"
                          aria-controls="collapse_15"
                        >
                          Do I need to check through the employer payment
                          schedule to confirm my Personal Identification Number
                          (PIN) and the total amount on the schedule before
                          forwarding same to Operations for confirmation?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_15"
                      className="collapse"
                      aria-labelledby="acc_15"
                      data-bs-parent="#accordionExample6"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Yes. This will reduce the processing time of your
                          request.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="acc_25">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_25"
                          aria-expanded="true"
                          aria-controls="collapse_25"
                        >
                          Can I make payments into our RSA Account without first
                          generating PINs for the clients?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_25"
                      className="collapse"
                      aria-labelledby="acc_25"
                      data-bs-parent="#accordionExample6"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          No. This practice is not in compliance with standard
                          operational procedure.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="acc_35">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_35"
                          aria-expanded="true"
                          aria-controls="collapse_35"
                        >
                          Do I need to forward a soft copy version of schedules
                          to Operations?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_35"
                      className="collapse"
                      aria-labelledby="acc_35"
                      data-bs-parent="#accordionExample6"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Yes. This will reduce the time for credit processing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="acc_45">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_45"
                          aria-expanded="true"
                          aria-controls="collapse_4"
                        >
                          Do I need to specify Surname, First name and Middle
                          name on the RSA form?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_45"
                      className="collapse"
                      aria-labelledby="acc_45"
                      data-bs-parent="#accordionExample6"
                    >
                      <div className="card-body accordion-body">
                        <p>Yes. It is required to identify the RSA Holder.</p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_55">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_55"
                          aria-expanded="true"
                          aria-controls="collapse_55"
                        >
                          Must I provide my mobile number on the RSA form?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_55"
                      className="collapse"
                      aria-labelledby="acc_55"
                      data-bs-parent="#accordionExample6"
                    >
                      <div className="card-body accordion-body">
                        <p>Yes. It is required for seamless communication</p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_65">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_65"
                          aria-expanded="true"
                          aria-controls="collapse_65"
                        >
                          Why do I need to include my Agent Code on the RSA
                          form?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_65"
                      className="collapse"
                      aria-labelledby="acc_65"
                      data-bs-parent="#accordionExample6"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          It is to aid the smooth processing of your request.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_75">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_75"
                          aria-expanded="true"
                          aria-controls="collapse_75"
                        >
                          Can I update my records in the database after
                          signing-on?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_75"
                      className="collapse"
                      aria-labelledby="acc_75"
                      data-bs-parent="#accordionExample6"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Yes. All information pertaining to a RSA holder can be
                          updated in the database. Upon meeting documentation
                          requirements, you can update your Date of Birth.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_85">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_85"
                          aria-expanded="true"
                          aria-controls="collapse_85"
                        >
                          Can I make Voluntary Contribution while my employer is
                          not making the mandatory contribution?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_85"
                      className="collapse"
                      aria-labelledby="acc_85"
                      data-bs-parent="#accordionExample6"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Yes. You can make voluntary contribution to your RSA
                          account even while your employer is not paying the
                          mandatory pension contribution portion.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_95">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_95"
                          aria-expanded="true"
                          aria-controls="collapse_95"
                        >
                          How do I download spreadsheet for payment schedule?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_95"
                      className="collapse"
                      aria-labelledby="acc_95"
                      data-bs-parent="#accordionExample6"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          You can call any of the phone numbers on our website
                          for the required assistance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_105">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_105"
                          aria-expanded="true"
                          aria-controls="collapse_105"
                        >
                          Can I make withdrawals before my retirement?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_105"
                      className="collapse"
                      aria-labelledby="acc_105"
                      data-bs-parent="#accordionExample6"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Yes you can. Below are the criteria that you have to
                          meet for you to be able to withdraw before retirement:
                          <br></br>
                          1. If you are below 50 years old, you must be off an
                          employment for a minimum of four months.
                          <br></br>
                          2. You can withdraw additional voluntary contribution
                          after two years of contribution.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_115">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_115"
                          aria-expanded="true"
                          aria-controls="collapse_115"
                        >
                          How can I retrieve my IEI Anchor Pension number?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_115"
                      className="collapse"
                      aria-labelledby="acc_115"
                      data-bs-parent="#accordionExample6"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          You can call any of the phone numbers on our website,
                          and we will respond to you accordingly.
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
                  <h3>RSA FUND VI (NON-INTEREST FUND) (16)</h3>
                </di>
                <div className="accordion" id="accordionExample7">
                  <div className="card accordion-item">
                    <div className="card-header accordion-header" id="acc_16">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_16"
                          aria-expanded="true"
                          aria-controls="collapse_16"
                        >
                          Since the fund is called NON-INTEREST, does it mean
                          there will be no ‘growth’ on my contribution?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_16"
                      className="collapse"
                      aria-labelledby="acc_16"
                      data-bs-parent="#accordionExample7"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Despite the Fund being called “Non-Interest Fund”,
                          this does not mean there would not be Returns on
                          Investment (ROI) on your RSA Account. Sharia’
                          compliant investment adopts other investment
                          structures including the risk sharing structure
                          between parties to the transaction. Other Shari’ah
                          compliant investment structures include the cost plus
                          selling, leasing, profit sharing, joint venture
                          arrangement and insurance structures. Allowable Fixed
                          Income Instruments for the RSA Fund VI include FGN
                          Sukuk, Corporate Sukuk, Euro Sukuk, Infrastructure
                          Sukuk, Shari’ah compliant money market instruments.
                          Also, in the Variable Income Space, there are Shari’ah
                          compliant listed companies on the Nigeria Stock
                          Exchange and mutual funds with opportunities for
                          capital gains and dividends.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="acc_26">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_26"
                          aria-expanded="true"
                          aria-controls="collapse_26"
                        >
                          Are there existing Shari’ah compliant Non-Interest
                          Investment in Nigeria?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_26"
                      className="collapse"
                      aria-labelledby="acc_26"
                      data-bs-parent="#accordionExample7"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Yes, there are. Although the market for Non-interest
                          Shari’ah compliant investment is quite novel, the
                          first Non Interest bond issuance (Sukuk) in Nigeria
                          was issued by the Osun State Government (a
                          sub-national government) in 2013 with proceeds used
                          for the construction of 26 schools using the Ijarah
                          Sukuk structure. Also, in 2017, for the first time in
                          history, the Federal Government of Nigeria (FGN)
                          issued a N100 billion Non-Interest (Sukuk) bond with
                          proceeds used to help fund road projects.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="acc_36">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_36"
                          aria-expanded="true"
                          aria-controls="collapse_36"
                        >
                          To support the Fund VI ecosystem for effective
                          implementation, are there existing Shari’ah compliant
                          financial institution(s) in Nigeria?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_36"
                      className="collapse"
                      aria-labelledby="acc_36"
                      data-bs-parent="#accordionExample7"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          • Jaiz Bank Plc (A full-fledged Islamic lender
                          operating since 2012) • Taj Bank Limited (A
                          full-fledged Islamic lender operating since 2019) •
                          Stanbic IBTC Bank Plc (Provides Islamic Finance
                          services) • Sterling Bank Plc (Approval in principle
                          to launch an Islamic finance arm). • Lotus Capital: A
                          halal investment management company specialized in
                          Shari’ah compliant asset management, private wealth
                          management and financial advisory services
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="acc_46">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_46"
                          aria-expanded="true"
                          aria-controls="collapse_46"
                        >
                          Are there opportunities for growth in Non Interest
                          Shari’ah compliant fund in Nigeria?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_46"
                      className="collapse"
                      aria-labelledby="acc_46"
                      data-bs-parent="#accordionExample7"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Yes. Firstly, Nigeria has over 100 Muslim citizens and
                          is home to the largest population of Muslims in
                          Sub-Sahara Africa. Secondly, the implementation of the
                          Non-Interest Fund for the Nigeria Pension Industry is
                          poised to promote increasing activities and further
                          drive pension inclusion in Nigeria. Furthermore, with
                          the PFA’s being able to invest in Non-Interest
                          Shari’ah compliant fund, there would be increased
                          issuance Non-interest instrument which would be
                          over-subscribed.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_56">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_56"
                          aria-expanded="true"
                          aria-controls="collapse_56"
                        >
                          What are Non-Interest Compliant Instrument?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_56"
                      className="collapse"
                      aria-labelledby="acc_56"
                      data-bs-parent="#accordionExample7"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          The Regulation on Investment of Pension Fund Assets
                          (Investment Regulation) defined “Non-interest
                          compliant instrument” as: Financial securities and
                          specialist investment funds that comply with the
                          provisions of Islamic Commercial Jurisprudence
                          (Shari’ah) and any other established non-interest
                          principles, as approved by the Financial Regulation
                          Advisory Council of Experts (FRACE), or any other
                          body, constituted by the Central Bank of Nigeria (CBN)
                          and/or the Securities and Exchange Commission (SEC).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_66">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_66"
                          aria-expanded="true"
                          aria-controls="collapse_66"
                        >
                          What investment instrument is Fund VI eligible to
                          invest in?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_66"
                      className="collapse"
                      aria-labelledby="acc_66"
                      data-bs-parent="#accordionExample7"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          i. Government Sukuk, (Including Islamic Treasury Bills
                          and Euro Sukuk) issued by FGN or FGN Agencies and
                          Infrastructure Sukuk, backed by FGN/CBN guarantee ii.
                          Corporate Sukuk (including Sharia’ah complaint ABS,
                          MBS, GDV, Euro Sukuk and Infrastructures Sukuk) iii.
                          Supranational Sukuk iv. Shari’ah compliant Money
                          Market Instrument v. Sharia’ah compliant ordinary
                          shares (including GDRs) vi. Sharia’ah complaint
                          infrastructure funds vii. Shari’ah compliant Private
                          Equity Funds viii. Shari’ah compliant
                          Open/Closed/Hybrid Funds ix. Shari’ah compliant Real
                          Estate Funds It is also important to note that Fund VI
                          assets are also allowed to be invested in conventional
                          assets where a PFA is unable to find approved
                          Non-Interest instruments. The conventional assets are
                          to be phased out as more approved Non-Interest
                          instruments become available.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_76">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_76"
                          aria-expanded="true"
                          aria-controls="collapse_76"
                        >
                          Can non-compliant assets be included in Fund VI?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_76"
                      className="collapse"
                      aria-labelledby="acc_76"
                      data-bs-parent="#accordionExample7"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          PenCom allows Fund VI assets to be invested in
                          conventional assets where a PFA is unable to find
                          approved non-interest instruments. Overtime, the
                          conventional assets would be phased out as more
                          approved non-interest instrument become available. The
                          conventional securities to augment Sharia-compliant
                          assets could be interest bearing but should not be in
                          sectors/business whose underlying assets/products do
                          not meet the basic ethical principles. Examples
                          include companies into alcoholic beverages,
                          pornography, weaponry, gambling/betting, speculation
                          etc.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_86">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_86"
                          aria-expanded="true"
                          aria-controls="collapse_86"
                        >
                          Who is eligible to transfer to RSA Fund VI?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_86"
                      className="collapse"
                      aria-labelledby="acc_86"
                      data-bs-parent="#accordionExample7"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          RSA Holders in Fund I, Fund II and Fund III are
                          eligible to move their RSA contributors to Fund VI
                          (Active Fund VI) Also, Retirees in Fund IV are
                          eligible to move their RSA contributions to Fund VI
                          (Retiree Fund VI) It is also important to note that
                          Fund VI shall be separated into two funds. They
                          Include: i. Active Non Interest Fund (Active Fund VI):
                          Contributors in Fund I, II and III that have elected
                          to move their contributions to Fund VI ii. Retiree Non
                          Interest Fund (Retiree Fund VI): For Retirees in Fund
                          IV that move their contributions to retiree Fund VI
                          Note: RSA contributors in Fund II can move their
                          contributions directly to Retiree Fund VI at the time
                          of retirement
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_96">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_96"
                          aria-expanded="true"
                          aria-controls="collapse_96"
                        >
                          Is RSA Fund VI open to non-Muslims?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_96"
                      className="collapse"
                      aria-labelledby="acc_96"
                      data-bs-parent="#accordionExample7"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Yes. The RSA Fund VI is open to Muslims and
                          non-Muslims. The Non-Interest fund offers to RSA
                          Holders who are interested in having their retirement
                          savings managed in an ethically conscious way which
                          would benefit the people, economy and are of social
                          good.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_106">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_106"
                          aria-expanded="true"
                          aria-controls="collapse_106"
                        >
                          What are the key benefits in implementing the RSA Fund
                          VI
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_106"
                      className="collapse"
                      aria-labelledby="acc_106"
                      data-bs-parent="#accordionExample7"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          The implementation of the Non-Interest Fund (Fund VI)
                          by the pension Fund Administrators would lead to
                          increased issuance of Shari’ah complaint instrument.
                          Deepen the Nigeria capital market Financial inclusion
                          of RSA Holders to invest in ethical and
                          environmentally friendly instrument
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_116">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_116"
                          aria-expanded="true"
                          aria-controls="collapse_116"
                        >
                          How can I transfer to Fund VI?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_116"
                      className="collapse"
                      aria-labelledby="acc_116"
                      data-bs-parent="#accordionExample7"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          Eligible RSA holders seeking to move to Fund VI can do
                          so in accordance with the existing regulation dealing
                          with active choices which would involve hand written
                          request to transfer. You can always reach out to us on
                          your choice of moving to the RSA Fund VI.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="acc_126">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse_126"
                          aria-expanded="true"
                          aria-controls="collapse_126"
                        >
                          Are there restrictions for the investment of the RSA
                          Fund VI?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse_126"
                      className="collapse"
                      aria-labelledby="acc_126"
                      data-bs-parent="#accordionExample7"
                    >
                      <div className="card-body accordion-body">
                        <p>
                          The Non-Interest Fund (Fund VI) shall not be invested
                          in the production or trading of alcohol, pornography,
                          weaponry, gambling/betting, speculation, interest
                          earning ventures and other ventures
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
