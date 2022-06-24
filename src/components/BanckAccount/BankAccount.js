import React from 'react';

const BankAccount = () => {
  return (
    <>
    <section className="capabilities__area p-relative pt-10 pb-10 fix">
       <div className="container">
            <div className="section__title section__title-3 wow fadeInUp">
                <h4 className="" style={{color: '#4636ff'}}>Our Custodians </h4>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="shadow p-3 mb-5 bg-body rounded">
                        <h3 className="my-2">Fund: RSA Funds  l, ll, lll, IV AND VI </h3>
                        <p style={{fontSize:'18px', fontWeight:'bold'}}>Bank: <span style={{fontSize:'14px', fontWeight:'300'}}>U.B.A</span></p>
                        <p style={{fontSize:'18px', fontWeight:'bold'}}>Account Name: <span style={{fontSize:'14px', fontWeight:'300'}}>UPCL/IEI-ANCHOR PENSIONS RSA CONTRIBUTION A/C</span></p>
                        <p style={{fontSize:'18px', fontWeight:'bold'}}>Account Number: <span style={{fontSize:'14px', fontWeight:'300'}}>1006236132</span></p>
                        <p style={{fontSize:'18px', fontWeight:'bold'}}>ADMIN FEE: <span style={{fontSize:'14px', fontWeight:'300'}}>₦100.00</span></p>
                        <span>CALL: 081 6572 2731, 097 000 800</span>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="shadow p-3 mb-5 bg-body rounded">
                    <h3 className="my-2">Fund: Micro Pension FUND V  </h3>
                        <p style={{fontSize:'18px', fontWeight:'bold'}}>Bank: <span style={{fontSize:'14px', fontWeight:'300'}}>Access PFC</span></p>
                        <p style={{fontSize:'18px', fontWeight:'bold'}}>Account Name: <span style={{fontSize:'14px', fontWeight:'300'}}>APFC IEI ANC PENS MPP CONTR COL AC</span></p>
                        <p style={{fontSize:'18px', fontWeight:'bold'}}>Account Number: <span style={{fontSize:'14px', fontWeight:'300'}}>0110761724</span></p>
                        <p style={{fontSize:'18px', fontWeight:'bold'}}>ADMIN FEE: <span style={{fontSize:'14px', fontWeight:'300'}}>₦100.00</span></p>  
                        <span>CALL: 081 6572 2731, 097 000 800</span>
                    </div>
                </div>
            </div>
       </div>
    </section>
    </>
  )
}

export default BankAccount;