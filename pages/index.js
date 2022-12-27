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

class Index extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <MainBanner />

                <Partner />

                <HomeHeadline />

                <HomeServices />

                <HomeStatsCounter />
                
                <HomeBottomGetintouch />

                {/* <Services /> */}

                {/* <About /> */}

                {/* <OurWorks /> */}

                {/* <WorkProcess /> */}

                {/* <Feedback /> */}

                {/* <Team /> */}

                {/* <FunFacts /> */}

                {/* <LatestNewsSlider /> */}

                {/* <CtaArea /> */}

               
                
                <Footer />
            </>
        );
    }
}

export default Index;