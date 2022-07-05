import React, { useRef, useState, useEffect}from 'react';
import moment from 'moment';

const calData = {
    result:0.0
}

const PenCalculator = () => {

     const [result, setResult] =  useState(0);
     const   balance = useRef();
     const   mContribution = useRef();
     const   vContribution = useRef();
     const   retirementDate = useRef();

    const handleSubmit = (e) =>{
        e.preventDefault();

        let vcom = 0;

        if(balance.current.value === ""){ 
            alert("Please enter your current balance")
        }

        if(isNaN(balance.current.value)){
            alert("Please enter a valid value for current balance");       
        }
        if(mContribution.current.value === "") {
            alert("Please enter your monthly contribution")
            return;
        }
        if(isNaN(mContribution.current.value)){
            alert("Please enter a valid value for monthly");       
        }

        if(vContribution.current.value !== "") {
          
            if(!isNaN(vContribution.current.value)){
                const tempResult = parseInt(vContribution.current.value, 10); 
                vcom = tempResult;
                console.log(vcom)
            }else{
                alert("Enter a valid voluntary contribution value")
                return;
            }              
        }

        if(retirementDate.current.value === ""){
            alert("Please enter your expected retirement date")
            return;
        }
      
        const cbalance =  parseInt(balance.current.value, 10);
        const cmonth   =  parseInt(mContribution.current.value, 10);
        const rdate    =    moment(retirementDate.current.value)
        const cdate    =    moment();
        const totalMonths = Math.floor(rdate.diff(cdate, 'months',true));

        const interestRate = 0.12;
        const actualValue = (cbalance + (cmonth * totalMonths) + (vcom * totalMonths))

        const cResult = actualValue + actualValue * interestRate;
     
        setResult(cResult)
        balance.current.value=""
        mContribution.current.value=""
        vContribution.current.value=""
        retirementDate.current.value=""
    }
    
        return (
            <>
                <section className="calculator__area">
                    <div className="shadow p-3 mb-5 bg-body rounded">
                        <h3 className="my-2 pb-4">Retirement Benefit Calculator</h3>
                        <h4 className="my-2">TOTAL RETURNS</h4>
                        <h2 className="mb-4">₦{result.toLocaleString('en-US')}</h2>

                        <form className="calculator__form" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="balance" className="form-label">Current RSA Balance</label>
                                <input type="number" ref={balance} className="form-control form-control-sm" id="balance" placeholder="0" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="totalMContribution" className="form-label">Total Monthly Contribution (in Naira)*</label>
                                <input type="number" ref={mContribution} className="form-control form-control-sm" id="totalMContribution" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="totalVContribution" className="form-label">Monthly Voluntary Contribution (in Naira)</label>
                                <input type="number" ref={vContribution} className="form-control form-control-sm" id="totalVContribution" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="expectedRDate" className="form-label">Expected Retirement Date*</label>
                                <input type="date" ref={retirementDate} className="form-control form-control-sm" id="expectedRDate" />
                            </div>
                            <div className="d-grid gap-2 my-2">
                                <button type="submit" className="btn btn-warning">Calculate</button>
                            </div>
                        </form>
                        <p>You will have ₦{result.toLocaleString('en-US')} at the time of retirement. Use our retirement planner to help you plan and achieve this goal</p>
                    </div>
                </section>
            </>
        )
}
export default PenCalculator;