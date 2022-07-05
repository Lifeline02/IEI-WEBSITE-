import React from 'react';



const Scheme = () => {
    return (
        <>
            <PageHelmet pageTitle="Pension calculator" />
            <HomeOneHeader/>
            <CommonPageHeader title="Pension Calculator" subtitle="penCalculator" />
            <div className="container">
                <div className="shadow-lg p-3 mb-5 bg-body rounded  m-5">
                 <SchemeArea />
                </div>
            </div>  
            <HomeBrands/>
            <HomeContact/>
            <Footer/>
        </>
    );
}
export default Scheme;