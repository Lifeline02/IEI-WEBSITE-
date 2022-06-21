import React, { useState }from 'react';



const calData = {
    result:0.0
}

const PenCalculator = () => {

    const [data, setData] = useState(calData)


    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    
        return (
            <>
                <section className="calculator__area">
                    <div className="shadow p-3 mb-5 bg-body rounded">
                        <h3 className="my-2 pb-4">Retirement Benefit Calculator</h3>
                        <h4 className="my-2">TOTAL RETURNS</h4>
                        <h2 className="mb-4">₦{data.result.toLocaleString('en-US')}</h2>

                        <form className="calculator__form" onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label for="balance" className="form-label">Current RSA Balance</label>
                                <input type="number" className="form-control form-control-sm" id="balance" placeholder="0" />
                            </div>
                            <div class="mb-3">
                                <label for="totalMContribution" className="form-label">Total Monthly Contribution (in Naira)*</label>
                                <input type="number" className="form-control form-control-sm" id="totalMContribution" />
                            </div>
                            <div class="mb-3">
                                <label for="totalVContribution" className="form-label">Monthly Voluntary Contribution (in Naira)</label>
                                <input type="number" className="form-control form-control-sm" id="totalVContribution" />
                            </div>
                            <div class="mb-3">
                                <label for="expectedRDate" className="form-label">Expected Retirement Date*</label>
                                <input type="date" className="form-control form-control-sm" id="expectedRDate" />
                            </div>
                            <div className="d-grid gap-2 my-2">
                                <button type="submit" className="btn btn-warning">Calculate</button>
                            </div>
                        </form>
                        <p>You will have ₦{data.result.toLocaleString('en-US')} at the time of retirement. Use our retirement planner to help you plan and achieve this goal</p>
                    </div>
                </section>
            </>
        )
}
export default PenCalculator;