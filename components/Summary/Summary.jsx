import React from "react";
import { useRouter } from "next/router";

const Summary = () => {
  const router = useRouter();
  return (
    <div>
      <div className="summarysection">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading">Summary</div>
            </div>
          </div>
          <div className="row">
            {/* First column */}
            <div className="col-lg-7">
              <div className="summarybox">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="sheading">Project Brief</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5">
                    <div className="title">Your Business Name</div>
                  </div>
                  <div className="col-lg-7">
                    <p>Lorem ipsum</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5">
                    <div className="title">Industry</div>
                  </div>
                  <div className="col-lg-7">
                    <p>Lorem ipsum</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5">
                    <div className="title">Application Type</div>
                  </div>
                  <div className="col-lg-7">
                    <p>Lorem ipsum</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5">
                    <div className="title">Time Duration</div>
                  </div>
                  <div className="col-lg-7">
                    <p>Lorem ipsum</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5">
                    <div className="title">Color Theme</div>
                  </div>
                  <div className="col-lg-7">
                    <p>Lorem ipsum</p>
                  </div>
                </div>
                <div className="dotted"></div>
                <br />
                <div className="row">
                  <div className="col-lg-12">
                    <div className="sheading">Personal Information</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5">
                    <div className="title">Name</div>
                  </div>
                  <div className="col-lg-7">
                    <p>Lorem ipsum</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5">
                    <div className="title">E-mail Address</div>
                  </div>
                  <div className="col-lg-7">
                    <p>Lorem ipsum</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5">
                    <div className="title">Phone No.</div>
                  </div>
                  <div className="col-lg-7">
                    <p>Lorem ipsum</p>
                  </div>
                </div>
                <div className="dotted"></div>
                <br />
                <div className="row">
                  <div className="col-lg-12">
                    <div className="sheading">Payment Method</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <p>Credit/Debit Card</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Second column */}
            <div className="col-lg-5">
              <div className="summarybox">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="sheading">Package Summary</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5">
                    <p>Service Type</p>
                  </div>
                  <div className="col-lg-7">
                    <div className="ttitle">Lorem ipsum</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5">
                    <p>Package Type</p>
                  </div>
                  <div className="col-lg-7">
                    <div className="ttitle">App</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5">
                    <p>Item Price</p>
                  </div>
                  <div className="col-lg-7">
                    <div className="ttitle">USD 150</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5">
                    <p>Duration</p>
                  </div>
                  <div className="col-lg-7">
                    <div className="ttitle">14 Day</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5">
                    <p>Tax Amount</p>
                  </div>
                  <div className="col-lg-7">
                    <div className="ttitle">0.8%</div>
                  </div>
                </div>
                <div className="dotted"></div>
                <br />
                <div className="row">
                  <div className="col-lg-5">
                    <div className="ttitle">Total Amount</div>
                  </div>
                  <div className="col-lg-7">
                    <div className="ttitle">USD 150</div>
                  </div>
                </div>
              </div>
              <br/>
              <br/>
             
              <div className="row">
                <div className="col-lg-12 d-flex paymentsec">
                
                    <button
                      className="btn btn-back"
                      onClick={() => router.back()}
                    >
                      BACK
                    </button>

                    <button type="submit" className="btn btn-proceed">
                      PAY NOW
                    </button>
                  
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12  text-center">
                    <img src="/images/guarantee.png" alt="guarantee" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
