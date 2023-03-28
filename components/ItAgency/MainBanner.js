import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});


const MainBanner = () => {
  return (
    <>
    <div className="hero-banner it-banner overly hero-bg4">
        <div className="d-table">
            <div className="d-table-cell">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div className="main-banner-content">
                                <p className='firstline' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">Experience Driven Applications</p>
                                <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">Design For People by People</h1>
                                    
                                <p className='descrption' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="700">As global leaders in technology, and business solutions, we partner with clients to simplify, strengthen, and transform their businesses.</p>
                            
                                <Link href="/portfolio">
                                    <a className="btn btn-primary" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="900">Our Work</a>
                                </Link>

                                <Link href="/pricing">
                                    <a
                                        // onClick={e => {e.preventDefault(); this.openModal()}}
                                        className="btn btn-secondary" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="900"
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
    {/* <ModalVideo 
        channel='youtube' 
        isOpen={this.state.isOpen} 
        videoId='_ysd-zHamjk' 
        onClose={() => this.setState({isOpen: false})} 
    /> */}
</>
  )
}

export default MainBanner
