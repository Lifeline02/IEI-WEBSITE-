import React from 'react';
import PenCalculator from '../../components/PenCalculator/PenCalculator';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeBrands from '../Home/HomeBrands/HomeBrands';
import HomeContact from '../Home/HomeContact/HomeContact';
import HomeOneHeader from '../Home/HomeOneHeader/HomeOneHeader';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';


const Calculator = () => {
    return (
        <>
            <PageHelmet pageTitle="Pension calculator" />
            <HomeOneHeader/>
            <CommonPageHeader title="Pension Calculator" subtitle="penCalculator" />
            <PenCalculator />
            <HomeBrands/>
            <HomeContact/>
            <Footer/>
        </>
    );
}
export default Calculator;