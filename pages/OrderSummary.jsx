import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import Footer from "../components/Layouts/Footer";
import PageBanner from "../components/Common/PageBanner";
import Summary from "../components/Summary/Summary";

const PaymentSelect = () => {
  return (
    <div>
      <NavbarTwo />
      <PageBanner
        pageDescription={`Overview`}
        pageTitle="Order Summary"
        BGImage="bg-three"
        DNONE="none"
      />

      <Summary />
      
      <Footer />
    </div>
  );
};

export default PaymentSelect;
