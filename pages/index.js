import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import MainBanner from '../components/ItAgency/MainBanner';
import Services from '../components/DefaultHome/Services';
import About from '../components/DefaultHome/About';
import OurWorks from '../components/DefaultHome/OurWorks';
import Feedback from '../components/Common/Feedback';
import Team from '../components/Common/Team';
import FunFacts from '../components/Common/FunFacts';
import LatestNewsSlider from '../components/Common/LatestNewsSlider';
import CtaArea from '../components/Common/CtaArea';
import Partner from '../components/Common/Partner';
import Footer from '../components/Layouts/Footer';
import HomeHeadline from '../components/Common/HomeHeadline';
import HomeServices from '../components/Common/HomeServices';
import WorkProcess from '../components/DefaultHome/WorkProcess';
import HomeStatsCounter from '../components/Common/HomeStatsCounter';
import HomeBottomGetintouch from '../components/Common/HomeBottomGetintouch';
import HomeWeDesign from '../components/Common/HomeWeDesign';
import HomeTestimonial from '../components/Common/HomeTestimonial';
import HomePortfolio from '../components/Common/HomePortfolio';
import HomePricing from '../components/Common/HomePricing';
import HomeBottomContact from '../components/Common/HomeBottomContact';
import PricingPageSection from '../components/Pricing/PricingPageSection';

class Index extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <MainBanner />

                <Partner />

                <HomeHeadline />

                <HomePortfolio />

                <HomeServices />

                <HomeStatsCounter />
                
                <HomeWeDesign />

                <PricingPageSection 
                    display="none"
                />

                <HomeTestimonial />

                
                <HomeBottomContact />

                <HomeBottomGetintouch />
               
                
                <Footer />
            </>
        );
    }
}

export default Index;