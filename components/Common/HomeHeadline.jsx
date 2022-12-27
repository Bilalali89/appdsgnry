import React from 'react';
import Link from 'next/link';

const HomeHeadline = () => {

    
  return (
    <div className='container-fluid homeheadline'>
        <div className="container">
            <div className='hh'>
                We are a team of specialised <span className='box1'>product design</span> experts, trusted by enterprise organisations, to design and build exquisite <span className='box2'>custom-applications</span>.
            </div>
            <div className='dflex text-center mt-50'>
                <span className='lgs'>
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