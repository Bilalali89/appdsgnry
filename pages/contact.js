import React from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';
import Footer from '../components/Layouts/Footer';
import ContactHeadline from '../components/Contact/ContactHeadline';


const Contact = () => {
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
  )
}

export default Contact