import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    responsiveClass: true,
    items:1,
    responsive:{
        0: {

        },
       
        576:{
            items:1
        },
        768:{
            items:3
        }
    },
    navText: [
        "<i class='pe-7s-angle-left'></i>",
        "<i class='pe-7s-angle-right'></i>"
    ],
}

class HomeTestimonialSlider extends Component {

    _isMounted = false;
    state = {
        display:false
    }
    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <section className="ptb-50">
                <div className="container">
                    <div className="testimonialslide">
                
                        {this.state.display ? <OwlCarousel 
                        className="feedback-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="feedback">
                                <div className='head'>
                                “Work with AppDsgnry was the favorite part of the week!” 
                                </div>
                                <div className="text">
                                We do hear that a lot. And we can’t wait to make you feel the same way.
                                </div>
                            </div>

                            <div className="feedback">
                            <div className='head'>
                            4.3 <i className="icofont-star"></i> That’s what we call a stellar reputation
                                </div>
                                <div className="text">
                                With 100+ projects under our belt, we’ve worked with incredible teams and built long-lasting relationships.
                                </div>
                            </div>

                            <div className="feedback">
                            <div className='head'>
                            Committed to provide best experience across Industries
                                </div>
                                <div className="text">
                                We put our all into projects because knowing we’ve made a positive impact is the best feeling with clients.
                                </div>
                              
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>

              
             
            </section>
        );
    }
}

export default HomeTestimonialSlider;