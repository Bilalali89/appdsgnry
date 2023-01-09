import React from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer';
import HomeBottomContact from '../components/Common/HomeBottomContact';
import PortfolioOne from '../components/Portfolio/PortfolioOne';
import PortfolioTwo from '../components/Portfolio/PortfolioTwo';
import PortfolioThree from '../components/Portfolio/PortfolioThree';
import PortfolioTitle from '../components/Portfolio/PortfolioTitle';
import PortfolioAppContentOne from '../components/Portfolio/PortfolioAppContentOne';
import PortfolioAppContentTwo from '../components/Portfolio/PortfolioAppContentTwo';
import PortfolioSpecial from '../components/Portfolio/PortfolioSpecial';
import PortfolioIntroSection from '../components/Portfolio/PortfolioIntroSection';

const portfolio = () => {
  return (
    <>
    <NavbarTwo />

    <PageBanner 
        pageTitle="Our Portfolio" 
        pageDescription = "What We've Built"
        BGImage="bg-three"
        DNONE="none"
    />  

    <PortfolioIntroSection />
    <PortfolioThree />

    <PortfolioAppContentOne/>

    <PortfolioAppContentTwo />

    <PortfolioTitle />
    <PortfolioSpecial />
    <PortfolioOne />

    <PortfolioTwo />

     <HomeBottomContact />
    
    <Footer />
</>
  )
}

export default portfolio

