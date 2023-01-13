import React from 'react'
import InputBilling from '../Pricing/InputBilling';
import { useRouter } from 'next/router'

import Link from 'next/link';
import RadioSelectPayment from '../Pricing/RadioSelectPayment';

const BillingInfo = () => {
    const router = useRouter()

  return (
    <div>
        <div className="projectbrief">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-10 order-lg-1 order-2">
            <div className="heading">Personal Information</div>
            <div className="subheading">
            Fill out the personal information it’s help us to get in touch with you if we need.
            </div>
          </div>
          <div className="col-md-12 col-lg-2 order-lg-2 order-1">
            <img src="/images/securepayment.png" alt="secure" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <InputBilling title="Your Name" hint="E.g. Ibrahim" type="text" />
          </div>
          <div className="col-md-12 col-lg-6">
            <InputBilling
              title="Email Id"
              hint="We’ll hold your data according to our Privacy Policy."
              type="email"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <InputBilling title="Phone Number" hint="We’ll hold your data according to our Privacy Policy." type="number" />
          </div>
          <div className="col-md-12 col-lg-6">
            <InputBilling
              title="Message"
              hint="Tip: Leave blank if you don’t want one incorporated."
              type="text"
            />
          </div>
        </div>
    
        <br/>
        <br/>
        <div className="row">
          <div className="col-lg-9">
            <div className="heading">Choose Payment Method</div>
           
          </div>
          <div className="col-lg-3">
          <img src="/images/moneybackguarantee.png" alt="img" />
          </div>
        </div>
        <div className="row">
            <RadioSelectPayment/>
        </div>
     
        <br/>

        <div className="row">
         
          <div className="col-lg-9 justify-content-end d-flex align-items-center">
            <div>
              <button className="btn btn-back" onClick={() => router.back()}>BACK</button>
             
              
               <Link href="/PaymentSelect"><button className="btn btn-proceed">CONFIRM</button></Link> 
                
            </div>
           
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default BillingInfo