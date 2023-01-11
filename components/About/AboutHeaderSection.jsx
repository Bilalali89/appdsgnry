import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";

const AboutHeaderSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="aboutheader">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="illustration" data-aos="fade-right" data-aos-duration="600" data-aos-delay="500">
                <img
                  src="/images/aboutus/Illustration.svg"
                  alt="illustration"
                />
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="heading" data-aos="fade-right" data-aos-duration="600" data-aos-delay="800">
                We are a team of specialised{" "}
                <span className="primary">product design</span> experts, trusted
                by enterprise organisations, to design and build exquisite
                <span className="secondary"> custom-application</span> design.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeaderSection;
