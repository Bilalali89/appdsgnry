import React from 'react'

const PortfolioAppContentTwo = () => {
  return (
    <div>
         <div className="appcontenttwo">
        <div className="container-fluid">
          <div className="row">     
            <div className="col-md-6">
                <div className="slogan">FEATURED</div>
              <div className="heading">
                Custom Application Development
              </div>
              <div className="text">
              We offer a wide range of design services under one roof: audits, go-to-market strategies, UX, visual design, app design & development, implementation & more. We bring your ambitious ideas to life.
              </div>
              <div className="row">
                <div className="col-3 col-md-2 col-xl-1">
                  <img
                    src="/images/portfoliopage/Andriod & IOS.svg"
                    height="63"
                    width="auto"
                    alt="icon"
                  />
                </div>
                <div className="col-9 col-md-10 col-xl-3 icotext">
                  Android & <br />
                  iOS Native
                </div>
                <div className="col-3 col-md-2 col-xl-1">
                  <img
                    src="/images/portfoliopage/App UI Style Guide.svg"
                    height="70"
                    width="auto"
                    alt="icon"
                  />
                </div>
                <div className="col-9 col-md-10 col-xl-3 icotext">
                  App UI
                  <br />
                 Style Guide
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src="/images/portfoliopage/Cutsom app.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioAppContentTwo