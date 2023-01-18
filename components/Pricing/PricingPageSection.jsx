import React, { Component } from 'react';
import Link from 'next/link';
import PriceCardApp from './PriceCardApp';
import PriceCardWeb from './PriceCardWeb';


class PricingPageSection extends Component {

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
        let { display , btndisplay } = this.props

        return (
            <>
                <section className="pricing-area pt-100 pb-70 bg-f9f6f6">
                    <div className="container">
                        <div className="section-title">
                            <div className='title' data-aos="zoom-in" data-aos-duration="600" data-aos-delay="500">Our Pricing</div>
                            <p data-aos="zoom-in" data-aos-duration="600" data-aos-delay="500">Now Presenting Priceless Digital Solutions At Less And Affordable Price.</p>
                        </div>

                        <div className="tab pricing-list-tab">
                            {/* Pricing Tab List */}
                            <ul className="tabs" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
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

                            <div className="tab_content" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="700">
                                <div id="tab1" className="tabs_item">
                                    <div className="row">
                                        {/* Single pricing table */}
                                       
                                        <PriceCardApp n={6}
                                        />
                                        
                                    </div>
                                </div>

                                <div id="tab2" className="tabs_item">
                                    <div className="row">
                                        {/* Single pricing table */}
                                        <PriceCardWeb n={6}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container" style={{display:`${btndisplay}`}}>
            <div className="d-flex viewbutton">
              <div className="viewmore btn" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
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

export default PricingPageSection;