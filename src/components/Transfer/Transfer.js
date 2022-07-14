import React, { useRef, useState, useEffect}from 'react';
import moment from 'moment';


const Transfer = () => {


     const   surname = useRef();
     const   firstName = useRef();
     const   rsaPin = useRef();
     const   phone = useRef();
     const   email = useRef();
     const   houseAddress = useRef();
     const   employerName = useRef();
     const   currentPFA = useRef();

    const handleSubmit = (e) =>{
        e.preventDefault();

  
    }
    
        return (
            <>
                <section className="calculator__area">
                    <div className="shadow p-3 mb-5 bg-body rounded">
                        <p className="my-2 pb-4">
                            RSA Holders Intending To Transfer To IEI Anchor Pension Managers from another PFA
                        </p>
                        <form className="calculator__form" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="mb-3">
                                        <label htmlFor="surname" className="form-label">Surname</label>
                                        <input type="text" ref={surname} className="form-control form-control-sm" id="surname" placeholder="" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="mb-3">
                                        <label htmlFor="firstName" className="form-label">First Name</label>
                                        <input type="text" ref={firstName} className="form-control form-control-sm" id="firstName" placeholder="" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="mb-3">
                                        <label htmlFor="rsaPin" className="form-label">RSA PIN</label>
                                        <input type="text" ref={rsaPin} className="form-control form-control-sm" id="rsaPin" placeholder="" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label">Mobile Number</label>
                                        <input type="text" ref={phone} className="form-control form-control-sm" id="phone" placeholder="" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email Address</label>
                                        <input type="text" ref={email} className="form-control form-control-sm" id="email" placeholder="" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="mb-3">
                                        <label htmlFor="houseAddress" className="form-label">House Address</label>
                                        <input type="text" ref={houseAddress} className="form-control form-control-sm" id="houseAddress" placeholder="" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="mb-3">
                                        <label htmlFor="employerName" className="form-label">Employer Name</label>
                                        <input type="text" ref={employerName} className="form-control form-control-sm" id="employerName" placeholder="" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="mb-3">
                                        <label htmlFor="houseAddress" className="form-label">Current PFA</label>
                                        <select className="form-select form-select-sm" ref={currentPFA}>
                                            <option selected>--select--</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="d-grid gap-2 my-2">
                                <button type="submit" className="btn btn-warning">Submit Now</button>
                            </div>
                        </form>
                    </div>
                </section>
            </>
        )
}
export default Transfer;