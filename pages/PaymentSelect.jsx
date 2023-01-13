import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import Footer from "../components/Layouts/Footer";
import PageBanner from "../components/Common/PageBanner";
import BillingInfo from "../components/BillingInfo/BillingInfo";

const PaymentSelect = () => {
  return (
    <div>
      <NavbarTwo />
      <PageBanner
        pageDescription={`Secure Payment`}
        pageTitle="Billing Info"
        BGImage="bg-three"
        DNONE="none"
      />

      <BillingInfo />
      
      <Footer />
    </div>
  );
};

export default PaymentSelect;
