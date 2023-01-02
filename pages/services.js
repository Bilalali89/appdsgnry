import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ServicesStyleOne from '../components/Services/ServicesStyleOne';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';
import HomeBottomContact from '../components/Common/HomeBottomContact';
import ServiceTabletSection from '../components/Services/ServiceTabletSection';
import ServiceMainSection from '../components/Services/ServiceMainSection';
import ServicesSlider from '../components/Services/ServicesSlider';
import ServiceTechnologies from '../components/Services/ServiceTechnologies';

class Services extends Component {
    render() {
        return (
            <>
                <NavbarTwo />
                
                <PageBanner 
                    pageTitle="Our Expertise" 
                    pageDescription = "What We Do"
                    BGImage="bg-two"
                    DNONE="none"
                /> 

                <ServiceMainSection />

                <ServicesSlider />

                <ServiceTechnologies />


                <ServiceTabletSection />

                <HomeBottomContact />

                <Footer />
            </>
        );
    }
}

export default Services;