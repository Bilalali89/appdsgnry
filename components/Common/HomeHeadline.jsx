import React, {useEffect} from 'react';
import Link from 'next/link';
import AOS from 'aos';

const HomeHeadline = () => {
  
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='container-fluid homeheadline'>
        <div className="container">
            <div className='hh' data-aos="fade-right" data-aos-duration="600" data-aos-delay="500">
                We are a team of specialised <span className='box1'>product design</span> experts, trusted by enterprise organisations, to design and build exquisite <span className='box2'>custom-applications</span>.
            </div>
            <div className='dflex text-center mt-50'>
                <span className='lgs' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
                   <Link href="/pricing">
                    <a>Let's get started. <img src="/images/Right Arrow.svg" alt="arrow" /></a> 
                   </Link>
                   
                </span>
            </div>
        </div>
    </div>
  )
}

export default HomeHeadline