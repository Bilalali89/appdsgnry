import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class MainBanner extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <>
                <div className="hero-banner it-banner overly hero-bg4">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-8">
                                        <div className="main-banner-content">
                                            <p className='firstline'>Experience Driven Applications</p>
                                            <h1>Design For People by People</h1>
                                                
                                            <p className='descrption'>As global leaders in technology, and business solutions, we partner with clients to simplify, strengthen, and transform their businesses.</p>
                                        
                                            <Link href="/contact">
                                                <a className="btn btn-primary">Our Work</a>
                                            </Link>

                                            <Link href="/">
                                                <a
                                                    // onClick={e => {e.preventDefault(); this.openModal()}}
                                                    className="btn btn-secondary"
                                                > 
                                                     Get Started
                                                </a>
                                            </Link>
                                        </div> 
                                    </div>

                                    {/* <div className="col-lg-6">
                                        <div className="animate-banner-image">
                                            <img src="/images/animate-banner-img1.jpg" alt="Animate image" />
                                        </div>
                                    </div> */}
                                </div>        
                            </div>
                        </div>
                    </div>
                </div>

                {/* If you want to change the video need to update below videoID */}
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='_ysd-zHamjk' 
                    onClose={() => this.setState({isOpen: false})} 
                />
            </>
        );
    }
}

export default MainBanner;