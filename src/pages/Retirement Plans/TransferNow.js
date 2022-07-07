import React from 'react';

import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeOneHeader from '../Home/HomeOneHeader/HomeOneHeader';
import Transfer from '../../components/Transfer/Transfer';
import HomeBrands from '../Home/HomeBrands/HomeBrands';
import HomeContact from '../Home/HomeContact/HomeContact';


const TransferNow = () => {
    return (
        <>
            <PageHelmet pageTitle="Transfer Now" />
            <HomeOneHeader/>
            <CommonPageHeader title="Transfer Now" subtitle="Transfer" />
            <div className="container">
                <div className="shadow-lg p-3 mb-5 bg-body rounded  m-5">
                 <Transfer />
                </div>
            </div>  
            <HomeBrands/>
            <HomeContact/>
            <Footer/>
        </>
    );
}
export default TransferNow;