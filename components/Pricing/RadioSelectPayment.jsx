import React, { useState } from 'react'

const RadioSelectPayment = () => {
    const [currentRadioValue, setCurrentRadioValue] = useState("");

  const handleRadioChange = (e) => {
    setCurrentRadioValue(e.target.value);
  };
  return (
    <div>
       
             <div className="row">
          <div className="col-12 col-lg-4">
          <div className='selectedpayment'>
            <div className='radiosection'>
                <input
              id="stripe"
              name="stripe"
              type="radio"
              value="radio-1"
              onChange={handleRadioChange}
              checked={currentRadioValue === "radio-1"}
            />
            <label htmlFor="stripe"><img src="/images/stripe.png" alt="stripe" /></label>
            </div>
            
          </div>
         
        </div>
        <div className="col-12 col-lg-4">
          <div className='selectedpayment'>
            <div className='radiosection'>
                <input
              id="credit"
              name="Credit/debit card"
              type="radio"
              value="radio-2"
              onChange={handleRadioChange}
              checked={currentRadioValue === "radio-2"}
            />
            <label htmlFor="credit"> <img src="/images/credit-card.png" alt="creditcard" /></label>
            </div>
            
          </div>
         
        </div>
        <div className="col-12 col-lg-4">
          <div className='selectedpayment'>
            <div className='radiosection'>
                <input
              id="paypal"
              name="paypal"
              type="radio"
              value="radio-3"
              onChange={handleRadioChange}
              checked={currentRadioValue === "radio-3"}
            />
           <label htmlFor="paypal"> <img src="/images/paypalpayment.png" alt="paypal" /></label>
            </div>
            
          </div>
         
        </div>
       
        </div>
        <br/>

   
       
    </div>
  )
}

export default RadioSelectPayment