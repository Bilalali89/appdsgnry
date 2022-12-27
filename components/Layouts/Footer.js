import React, { Component } from "react";
import Link from "next/link";

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();

    return (
      <>
        <footer className="footer-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <div className="single-footer-widget">
                  <div className="logo">
                    <Link href="/">
                      <a>
                        <img src="/images/Logo@2x.png" height="120" width="auto" alt="image" />
                      </a>
                    </Link>
                  </div>

                  <p>
                    The professionals of APPDSGNRY are recognised as one of the
                    most experienced and skilled creatives, around the world.
                    Our professionals have high commands over experience design
                    apps.
                  </p>
                  <div className="worktogether1">
                    <span className="letswork">
                         LET'S WORK TOGETHER
                    </span>
                   
                  </div>
                  <div className="payment-logos">
                    <div className="d-flex justify-content-between">
                    <span>
                         <img src="/images/visa.png" alt="logo" />
                    </span>
                    <span>
                         <img src="/images/Master card.png" alt="logo" />
                    </span>
                    <span>
                         <img src="/images/american express.png" alt="logo" />
                    </span>
                    <span>
                         <img src="/images/discover.png" alt="logo" />
                    </span>
                   
                    </div>
                    <div className="d-flex justify-content-between pt-20">
                    <span>
                         <img src="/images/cirus.png" alt="logo" />
                    </span>
                    <span>
                         <img src="/images/paypal.png" alt="logo" />
                    </span>
                    <span>
                         <img src="/images/AME.png" alt="logo" />
                    </span>
                   
                   
                    </div>
                    
                   
                  </div>

                 
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-footer-widget ml-4 pl-5">
                      <h3>Useful Links</h3>

                      <ul className="list">
                        <li>
                          <Link href="/">
                            <a>Our Work</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <a>Our Approach</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <a>Our Clients</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <a>What we do</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <a>Refund Policy</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <a>Partners</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                    <div className="single-footer-widget ml-4">
                      <h3>Pricing</h3>

                      <ul className="list">
                        <li>
                          <Link href="/">
                            <a>Logo Design</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <a>Web Design</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <a>Brand Identity</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <a>App Design</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <a>Stationary</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <a>Print Design</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                    <div className="single-footer-widget">
                      <h3>Services</h3>

                      <ul className="list">
                        <li>
                          <Link href="/">
                            <a>Custom App Development</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <a>Mobile/Web App Development</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <a>UX/UI Design</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <a>UX Research</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/">
                            <a>Product Strategy Consulting</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="worktogether2">
                    <div className="text">We would love to hear from you</div>
                    <span className="letswork">
                         LET'S WORK TOGETHER
                    </span>
                   
                  </div>
                <div className="row mt-50">
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-footer-widget footer_contact">
                      <h3>Contact our Team</h3>
                      <div className="mb-30"><img src="/images/call-icon-blue.png" alt="img" />  +1 618 458 65441</div>
                      <div><img src="/images/email-icons-blue.png" alt="img" />  info@appdsgnry.com</div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div className="single-footer-social">
                      <h3>Stay In Touch</h3>
                      <ul className="social-links">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <img src="/images/facebook.svg" alt="facebook" />
                        
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/" target="_blank">
                         <img src="/images/instagram.svg" alt="instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="https://pinterest.com/" target="_blank">
                      <img src="/images/Pintreset.svg" alt="pinterest" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                      <img src="/images/twitter.svg" alt="twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                      <img src="/images/linkedin.svg" alt="linkedin" />
                      </a>
                    </li>
                  </ul>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 justify-content-start">
                  <p>
                    © Copyright {currentYear} APP DSGNRY. All Rights Reserved.
                  </p>
                </div>
                <div className="col-lg-6 justify-content-end">
                  <span className="terms">
                    <Link href="/terms-conditions">
                      <a>Terms of Use</a>
                    </Link>
                  </span>
                  <span style={{padding: '0px 20px'}}>|</span>
                  <span className="privacy">
                    {" "}
                    <Link href="/privacy-policy">
                      <a>Privacy Policy</a>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
