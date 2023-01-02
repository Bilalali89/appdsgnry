import React from "react";

const AboutHeaderSection = () => {
  return (
    <div>
      <div className="aboutheader">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
                <div className="illustration"> <img src="/images/aboutus/Illustration.svg" alt="illustration" /></div>
             
            </div>
            <div className="col-md-6">
              <div className="heading">
                We are a team of specialised <span className="primary">product design</span> experts, trusted by
                enterprise organisations, to design and build exquisite 
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
