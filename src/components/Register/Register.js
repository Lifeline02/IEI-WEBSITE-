import React, { useRef, useState, useEffect}from 'react';
import moment from 'moment';



const Register = () => {

        const   surname = useRef();
        const   firstName = useRef();
        const   otherName = useRef();
        const   state = useRef();
        const   dob = useRef();
        const   nin = useRef();
        const   rsaPin = useRef();
        const   phone = useRef();
        const   email = useRef();
        const   passport = useRef();
        const   employerName = useRef();
        const   employerAddress = useRef();
        const   howDidYouHearAboutUs = useRef();


    const handleSubmit = (e) =>{
        e.preventDefault();

    }
    
        return (
            <>
                <section className="calculator__area">
                    <div className="shadow p-3 mb-5 bg-body rounded">

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
                                        <label htmlFor="otherName" className="form-label">Other Name</label>
                                        <input type="text" ref={otherName} className="form-control form-control-sm" id="otherName" placeholder="" />
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
                                        <label htmlFor="nin" className="form-label">National Identity Number (NIN)</label>
                                        <input type="text" ref={nin} className="form-control form-control-sm" id="nin" placeholder="" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="mb-3">
                                        <label htmlFor="state" className="form-label">State of Residence</label>
                                        <select className="form-select form-select-sm" ref={state}>
                                            <option selected>--select--</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="mb-3">
                                        <label htmlFor="dob" className="form-label">Date of Birth</label>
                                        <input type="date" ref={dob} className="form-control form-control-sm" id="dob" placeholder="" />
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
                                        <label htmlFor="employerAddress" className="form-label">Employer Address</label>
                                        <textarea className="form-control" ref={employerAddress} id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="mb-3">
                                        <label htmlFor="passport" className="form-label">Upload Passport</label>
                                        <input type="file" ref={passport} class="form-control form-control-sm"  id="formFile" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="mb-3">
                                        <label htmlFor="nin" className="form-label">How Did You Find Out About IEI Anchor Pensions</label>
                                        <select className="form-select form-select-sm" ref={howDidYouHearAboutUs}>
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
export default Register;


