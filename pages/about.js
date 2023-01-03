import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layouts/Footer';
import HomeBottomContact from '../components/Common/HomeBottomContact';
import AboutHeaderSection from '../components/About/AboutHeaderSection';
import AboutPhilosophy from '../components/About/AboutPhilosophy';
import AboutClientLogos from '../components/About/AboutClientLogos';
import AboutQuoteSection from '../components/About/AboutQuoteSection';

class Aabout extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    
                    pageDescription = {`Your Growth \nPartner`}
                    pageTitle="About Us"
                    BGImage="bg-one"
                    DNONE="none"
                />  

                <AboutHeaderSection />

                <AboutPhilosophy />

                <AboutClientLogos />

                <AboutQuoteSection />

                <HomeBottomContact />
                
                <Footer/>
            </>
        );
    }
}

export default Aabout;