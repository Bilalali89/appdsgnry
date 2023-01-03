import React from "react";

const PortfolioAppContentOne = () => {
  return (
    <div>
      <div className="appcontentone">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <img src="/images/portfoliopage/Furniture app.png" alt="img" />
            </div>
            <div className="col-md-6">
              <div className="heading">
                Apps That Makes <br />
                Your <span>Business Grow</span>
              </div>
              <div className="text">
                To anticipate various interactions, designing navigation was a
                necessary step. Analyzing a huge amount of information led us to
                create a set of key factors that defined the application user
                experience for customers that actually works.
              </div>
              <div className="row">
                <div className="col-3 col-md-2 col-xl-1">
                  <img
                    src="/images/portfoliopage/On brand.svg"
                    height="63"
                    width="auto"
                    alt="icon"
                  />
                </div>
                <div className="col-9 col-md-10 col-xl-3 icotext">
                  On-brand <br />
                  App Design
                </div>
                <div className="col-3 col-md-2 col-xl-1">
                  <img
                    src="/images/portfoliopage/Engaging user.svg"
                    height="70"
                    width="auto"
                    alt="icon"
                  />
                </div>
                <div className="col-9 col-md-10 col-xl-3 icotext">
                  Engaging User
                  <br />
                  Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioAppContentOne;
