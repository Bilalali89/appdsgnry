import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';
import Newsletter from '../components/Common/Newsletter';
import Footer from '../components/Layouts/Footer';
import ContactHeadline from '../components/Contact/ContactHeadline';

class Contact extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner 
                    pageTitle="Talk to us!" 
                    pageDescription = "Let's Discuss"
                    BGImage="bg-five"
                    DNONE="none"
                />  

                <ContactHeadline />

                <ContactForm />

                <ContactInfo />
                
                <Footer/>
            </>
        );
    }
}

export default Contact;