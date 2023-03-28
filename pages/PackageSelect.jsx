import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import Footer from "../components/Layouts/Footer";
import PageBanner from "../components/Common/PageBanner";
import ProjectBrief from "../components/PackageSelect/ProjectBrief";
import { WebdData } from "../components/Pricing/WebdData";

const packageSelect = () => {
  return (
    <div>
      <NavbarTwo />
      <PageBanner
        pageDescription={`Your Project Brief`}
        pageTitle="Requirements"
        BGImage="bg-three"
        DNONE="none"
      />

      <ProjectBrief />
      
      <Footer />
    </div>
  );
};

export default packageSelect;
