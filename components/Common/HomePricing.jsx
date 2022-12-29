import React, { Component } from 'react';
import Link from 'next/link';

class HomePricing extends Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <>
                <section className="pricing-area pt-100 pb-70 bg-f9f6f6">
                    <div className="container">
                        <div className="section-title">
                            <div className='title'>Our Pricing</div>
                            <p>Now Presenting Priceless Digital Solutions At Less And Affordable Price.</p>
                        </div>

                        <div className="tab pricing-list-tab">
                            {/* Pricing Tab List */}
                            <ul className="tabs">
                                <li
                                    className="current"
                                    onClick={(e) => this.openTabSection(e, 'tab1')}
                                >
                                    App Design
                                </li>

                                <li
                                    onClick={(e) => this.openTabSection(e, 'tab2')}
                                >
                                    Web Design
                                </li>
                                
                            </ul>

                            <div className="tab_content">
                                <div id="tab1" className="tabs_item">
                                    <div className="row">
                                        {/* Single pricing table */}
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="single-pricing-table">
                                                <div className="pricing-header">
                                                   BASIC
                                                </div>

                                                <div className="price">
                                                    <sup>$</sup>49 
                                                </div>

                                                <ul className="pricing-features">
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        2 Logo Concepts
                                                    </li>
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        By 1 Designer 
                                                    </li>
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        3 rounds of Revision
                                                    </li>
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        Online Purpose Files (JPG, PNG)
                                                    </li>
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        No Master Ai File of Logo
                                                    </li>
                                                   
                                                   
                                                    
                
                                                </ul>

                                                <div className="btn-box">
                                                    <Link href="#">
                                                        <a className="btn btn-primary blue">
                                                            <i className="bx bxs-hot"></i> 
                                                            Order Now   
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Single pricing table */}
                                        <div className="col-lg-4 col-sm-6">
                                        <div className="single-pricing-table">
                                                <div className="pricing-header">
                                                  PROFESSIONAL
                                                </div>

                                                <div className="price">
                                                    <sup>$</sup>149 
                                                </div>

                                                <ul className="pricing-features">
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        6 Logo Concepts
                                                    </li>
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        By 4 Designers
                                                    </li>
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        Unlimited Revisions 
                                                    </li>
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        Online Purpose Files (JPG, PNG) 
                                                    </li>
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        Both Large and Small Size 
                                                    </li>
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        Printing Files (PDF, EPS) 
                                                    </li>
                                                    <li>
                                                        <i className="icofont-check-circled"></i>100% Ownership
                                                    </li>
                                                   
                                                </ul>

                                                <div className="btn-box">
                                                    <Link href="#">
                                                        <a className="btn btn-primary blue">
                                                            <i className="bx bxs-hot"></i> 
                                                            Order Now   
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Single pricing table */}
                                        <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                                        <div className="single-pricing-table premium">
                                                <div className='plabel'>
                                                    <img src="/images/plabel.png" alt="label" />
                                                </div>
                                                <div className="pricing-header">
                                                   PREMIUM
                                                </div>

                                                <div className="price">
                                                    <sup>$</sup>199 
                                                </div>

                                                <ul className="pricing-features">
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        Unlimited Logo Concepts 
                                                    </li>
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        By Team Of Designers  
                                                    </li>
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        Unlimited Revisions
                                                    </li>
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        Online Purpose Files (JPG, PNG) 
                                                    </li>
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        Both Large and Small Size
                                                    </li>
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        Printing Files (PDF, EPS)
                                                    </li>
                                                 
                                                </ul>

                                                <div className="btn-box">
                                                    <Link href="#">
                                                        <a className="btn btn-primary green">
                                                            <i className="bx bxs-hot"></i> 
                                                            Order Now   
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="tab2" className="tabs_item">
                                    <div className="row">
                                        {/* Single pricing table */}
                                        <div className="col-lg-4 col-sm-6">
                                            <div className="single-pricing-table">
                                                <div className="pricing-header">
                                                   BASIC
                                                </div>

                                                <div className="price">
                                                    <sup>$</sup>149 
                                                </div>

                                                <ul className="pricing-features">
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        2 Website Designs
                                                    </li>
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        By 1 Designer 
                                                    </li>
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        3 rounds of Revision
                                                    </li>
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        Online Purpose Files (JPG, PNG)
                                                    </li>
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        No Master Ai File of Logo
                                                    </li>
                                                   
                                                   
                                                    
                
                                                </ul>

                                                <div className="btn-box">
                                                    <Link href="#">
                                                        <a className="btn btn-primary blue">
                                                            <i className="bx bxs-hot"></i> 
                                                            Order Now   
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Single pricing table */}
                                        <div className="col-lg-4 col-sm-6">
                                        <div className="single-pricing-table">
                                                <div className="pricing-header">
                                                  PROFESSIONAL
                                                </div>

                                                <div className="price">
                                                    <sup>$</sup>259 
                                                </div>

                                                <ul className="pricing-features">
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        6 Website Designs
                                                    </li>
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        By 4 Designers
                                                    </li>
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        Unlimited Revisions 
                                                    </li>
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        Online Purpose Files (JPG, PNG) 
                                                    </li>
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        Both Large and Small Size 
                                                    </li>
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        Printing Files (PDF, EPS) 
                                                    </li>
                                                    <li>
                                                        <i className="icofont-check-circled"></i>100% Ownership
                                                    </li>
                                                   
                                                </ul>

                                                <div className="btn-box">
                                                    <Link href="#">
                                                        <a className="btn btn-primary blue">
                                                            <i className="bx bxs-hot"></i> 
                                                            Order Now   
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Single pricing table */}
                                        <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                                        <div className="single-pricing-table premium">
                                                <div className='plabel'>
                                                    <img src="/images/plabel.png" alt="label" />
                                                </div>
                                                <div className="pricing-header">
                                                   PREMIUM
                                                </div>

                                                <div className="price">
                                                    <sup>$</sup>499 
                                                </div>

                                                <ul className="pricing-features">
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        Unlimited Website Designs
                                                    </li>
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        By Team Of Designers  
                                                    </li>
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        Unlimited Revisions
                                                    </li>
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        Online Purpose Files (JPG, PNG) 
                                                    </li>
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        Both Large and Small Size
                                                    </li>
                                                    <li>
                                                        <i className="icofont-check-circled"></i>
                                                        Printing Files (PDF, EPS)
                                                    </li>
                                                 
                                                </ul>

                                                <div className="btn-box">
                                                    <Link href="#">
                                                        <a className="btn btn-primary green">
                                                            <i className="bx bxs-hot"></i> 
                                                            Order Now   
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
          <div className="d-flex viewbutton">
                    <div className="viewmore btn">
                      <Link href="/pricing">
                        <a>VIEW ALL PACKAGES</a>
                      </Link>
                    </div>
                  </div>
          </div>
                </section>
               
            </>
        );
    }
}

export default HomePricing;