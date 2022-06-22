import React from 'react';
import HomeOneHeader from './HomeOneHeader/HomeOneHeader';
import HomeHeroSlider from './HomeHeroArea/HomeHeroSlider';
import HomeFeatures from './HomeFeatures/HomeFeatures';
import HomeCapabilities from './HomeCapabilities/HomeCapabilities';
import HomeServices from './HomeServices/HomeServices';
import HomeCounterArea from './HomeCounterArea/HomeCounterArea';
import HomeTeams from './HomeTeams/HomeTeams';
import HomePricing from './HomePricing/HomePricing';
import HomeBrands from './HomeBrands/HomeBrands';
import HomeContact from './HomeContact/HomeContact';
import Footer from '../../components/shared/Footer';
import CommonCtaArea from '../../components/CommonCtaArea/CommonCtaArea';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeCalculator from './PenCalculator/PenCalculator';
import BankAccount from '../../components/BanckAccount/BankAccount';


const Home = () => {
    return (
        <>
            <PageHelmet pageTitle="Home Page" />

            <HomeOneHeader/>
            <HomeHeroSlider/>
            <HomeFeatures/>
            <BankAccount />
            <HomeCalculator/>
            <HomeCounterArea/>
            <HomeTeams/>
            <HomeCapabilities/>
            <HomeBrands/>
            <HomeContact/>
            <Footer/>
        </>
    );
};

export default Home;