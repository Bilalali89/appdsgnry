import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';

import HomeBottomContact from '../components/Common/HomeBottomContact';
import PricingPageSection from '../components/Pricing/PricingPageSection';
import Footer from '../components/Layouts/Footer';
import PricingMainSection from '../components/Pricing/PricingMainSection';

class Pricing extends Component {
    render() {
        return (
            <>
                <NavbarTwo />
                
                <PageBanner 
                    pageTitle="Digitally Optimized" 
                    pageDescription = "Our Pricing"
                    BGImage="bg-four"
                    // DNONE="none"
                />
                <PricingMainSection />  

                <PricingPageSection />
                <HomeBottomContact />
                <Footer />
            </>
        );
    }
}

export default Pricing;