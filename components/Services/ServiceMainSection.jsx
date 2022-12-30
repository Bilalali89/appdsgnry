import React from 'react';
import Link from 'next/link';

const ServiceMainSection = () => {
  return (
    <div>
        <div className="servicemainbg">
            <div className="container ptb-pricing">
                <div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className='servicehead'>
                        Elegant Solutions <br/> <span>Built <br/> on Proven Methodologies</span>
                        </div>
                        <div className='servicetext'>
                        We offer a wide range of design services under one roof: go-to-market strategies, UX, visual design, app design, development, implementation & more.
                    </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="serviceviewbutton">
                        <div className="viewmore btn">
                        <Link href="/pricing">
                            <a>VIEW ALL SERVICES</a>
                        </Link>
                        </div>
                    </div>
                        <div className='serviceimg'>
                        <img src="/images/services/Elegant@2x.png" alt="img" />
                        </div>
                      
                    </div>
                </div>
                </div>
                
            

            </div>
        </div>
    </div>
  )
}

export default ServiceMainSection