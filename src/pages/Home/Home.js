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
import Testimonial from '../Testimonials/Testimonial';


const Home = () => {
    return (
        <>
            <PageHelmet pageTitle="Home Page" />
            <EPCCOS />
            <HomeOneHeader/>
            <HomeHeroSlider/>
            <HomeFeatures/>
            <BankAccount />
            <HomeCalculator/>
            <HomeCounterArea/>
            <HomeTeams/>
            <HomeCapabilities/>
            <Testimonial/>
            <HomeBrands/>
            <HomeContact/>
            <Footer/>
        </>
    );
};


const style =  {
      p_style: {
          position: 'fixed',
          zIndex:'2000',
          width:'100px',
          height:'50px',
          right:'0px',
          top:'70px',
          textAlign:'center',
          backgroundColor: '#c59825',
          borderRadius:'25px 0 0 25px'
      },
      a_style: {
          textAlign:'center',
          textDecoration: 'none',
          width:'100%',
          height:'100%',
          lineHeight:'3',
          color:'#fff'
      }

}

const EPCCOS = () =>{
    return (
        <p style={style.p_style}><a href="https://apps.nibss-plc.com.ng/EPCCOS/login;jsessionid=26AB9979142CA84F38202ACA6726646F" style={style.a_style} target="_blank">EPCCOS</a></p>
    )
}

export default Home;