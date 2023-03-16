import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import MainBanner from '../components/ItAgency/MainBanner';
import Partner from '../components/Common/Partner';
import Footer from '../components/Layouts/Footer';
import HomeHeadline from '../components/Common/HomeHeadline';
import HomeServices from '../components/Common/HomeServices';
import HomeStatsCounter from '../components/Common/HomeStatsCounter';
import HomeBottomGetintouch from '../components/Common/HomeBottomGetintouch';
import HomeWeDesign from '../components/Common/HomeWeDesign';
import HomeTestimonial from '../components/Common/HomeTestimonial';
import HomePortfolio from '../components/Common/HomePortfolio';
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
                cardsToDisplay="3"
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