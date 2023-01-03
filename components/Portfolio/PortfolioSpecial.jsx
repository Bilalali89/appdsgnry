import React from "react";

const PortfolioSpecial = () => {
  return (
    <div>
      <div className="portfoliospecial">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 col-12" style={{ padding: "0" }}>
              <div className="section-one">
                <div className="slogan">FEATURED</div>
                <div className="heading">
                  Redesigning e-commerce for a product focussed experience
                </div>
                <div className="text-center">
                  <img src="/images/portfoliopage/dashboard.png" alt="img" />
                </div>
                <div className="row">
                  <div className="col-lg-6 offset-lg-6">
                    <div className="h">
                      <div className="h1">Product Specialists</div>
                      <div className="h2">
                        We are 100% product focused. Our process marries
                        business strategy with user feedback for the best
                        possible outcome.
                      </div>
                      <div className="h3">Let’s get started.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-12" style={{ padding: "0" }}>
              <div className="section-two">
                <div className="heading">
                  We’ve developed an approach that works, getting the best from
                  your team and ours.
                </div>
                <div className="extension">
                  <div className="head">AN EXTENSION TO YOUR TEAM</div>
                  <div className="text">
                    We thrive on collaboration and work best when we’re
                    integrated with ambitious product teams.
                  </div>
                </div>
                <div className="arrw">
                    <img src="/images/arrow-black.png" alt="arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSpecial;
