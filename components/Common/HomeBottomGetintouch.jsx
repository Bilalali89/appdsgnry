import React from 'react'
import Link from 'next/link'

const HomeBottomGetintouch = () => {
  return (
    <div>
        <div className="container-fluid getintouch">
            <div className="row">
                <div className="col-lg-5 col-12">
                    <img src="/images/tablet.png" alt="tablet" />
                </div>
                <div className="col-lg-7 col-12 d-flex">
                    <div className='getcontent'>
                       <div className="getheading">
                        Let's develop something awesome <span className='color'>together</span>.
                       </div>
                       <div className='gettext'>
                               We help you build beautifully and scale successfully.
                       </div>
                       <div className="getbutton">
                         <span>
                            <Link href="/contact">
                                <a> <img src="/images/Send.svg" alt="send" className='paperplane'/>&nbsp;&nbsp;Get in Touch</a>                   
                            </Link>
                            
                        </span>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeBottomGetintouch