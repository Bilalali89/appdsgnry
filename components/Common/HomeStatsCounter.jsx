import React from "react";

const HomeStatsCounter = () => {
  return (
    <div>
      <div className="container-fluid statsbg">
        <div className="container">
        <div className="statsheading">
        We Connect <span className="bold">Businesses</span> with <span className="bold">Customers</span>
        </div>
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-12 col-md-6">
              <div className="countbox">
                <div className="icon">
                  <img src="/images/counter1.png" alt="icon" />
                </div>
                <div className="value">400+</div>
                <div className="text">Worlwide Clients</div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-12 col-md-6">
              <div className="countbox">
                <div className="icon">
                  <img src="/images/counter2.png" alt="icon" />
                </div>
                <div className="value">$215k</div>
                <div className="text">Sales Transaction</div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-12 col-md-6">
              <div className="countbox">
                <div className="icon">
                  <img src="/images/counter3.png" alt="icon" />
                </div>
                <div className="value">$654k</div>
                <div className="text">E-com Transactions</div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-12 col-md-6">
              <div className="countbox">
                <div className="icon">
                  <img src="/images/counter4.png" alt="icon" />
                </div>
                <div className="value">543k</div>
                <div className="text">Qualified Calls Generated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeStatsCounter;
