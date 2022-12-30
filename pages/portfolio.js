import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import WorksStyleOne from '../components/Portfolio/WorksStyleOne';
import WorksStyleTwo from '../components/Portfolio/WorksStyleTwo';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';
import HomeBottomContact from '../components/Common/HomeBottomContact';

class Portfolio extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Our Portfolio" 
                    pageDescription = "What We've Built"
                    BGImage="bg-three"
                    DNONE="none"
                />  

                {/* <WorksStyleOne /> */}

                {/* <WorksStyleTwo /> */}
{/* 
                <CtaAreaTwo /> */}
                 <HomeBottomContact />
                
                <Footer />
            </>
        );
    }
}

export default Portfolio;