import React, { Component } from 'react';
import Link from 'next/link';

class Partner extends Component {
    render() {
        return (
            <section className="partner-area pt-100 pb-60" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                <div className="container">
                    {/* <div className="section-title">
                        <h2>Trusted By</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div> */}

                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-2 col-4 col-sm-4 mobnone">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner1.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-4 col-sm-4 mobnone">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner2.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-4 col-sm-4">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner3.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-4 col-sm-4">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner4.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-4 col-sm-4 mobnone">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner5.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-4 col-sm-4 mobnone">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner6.png" alt="image" />
                                </a>
                            </div>
                        </div>
                        
                        <div className="col-lg-2 col-offset-lg-1 col-4 col-sm-4">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner7.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-4 col-sm-4">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner8.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-4 col-sm-4">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner9.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-4 col-sm-4 mobnone">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner10.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-4 col-sm-4">
                            <div className="single-partner">
                                <a href="#" target="_blank">
                                    <img src="/images/partners/partner11.png" alt="image" />
                                </a>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </section>
        );
    }
}

export default Partner;