import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ServicesStyleOne from '../components/Services/ServicesStyleOne';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class Services extends Component {
    render() {
        return (
            <>
                <NavbarTwo />
                
                <PageBanner 
                    pageTitle="Our Expertise" 
                    pageDescription = "What We Do"
                    BGImage="bg-two"
                />  

                {/* <ServicesStyleOne /> */}

                {/* <CtaAreaTwo /> */}

                <Footer />
            </>
        );
    }
}

export default Services;