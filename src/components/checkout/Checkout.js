import React, { useEffect, useState } from 'react'
import { createClient } from "contentful"
import log from "../../assets/logo-transparent.svg";
import "./checkout.scss"
import { Link } from 'react-router-dom';
import { PaystackButton } from 'react-paystack';
import { PaystackConsumer } from 'react-paystack';



const Checkout = () => {
    const[amount, setAmount] = useState(13)
    const[number, setNumber]= useState('')
    const[email, setEmail]= useState('')

    const config = {
      reference: (new Date()).getTime().toString(),
      email,
      amount: amount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
      publicKey: 'pk_live_bff6985b4456f2475dd230d27bcc7b61fd3fd38a',
    };
    
    // you can call this function anything
    const handleSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    };
    
    // you can call this function anything
    const handleClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
    }
  
  
    const componentProps = {
      ...config,
      text: 'Pay with Paystack',
      onSuccess: (reference) => handleSuccess(reference),
      onClose: handleClose
  };

  return (

    <div>
          <div className="header__onee">
                <img src={log} alt="shopbiema" />
            </div>
        <form>
            <p>Kindly fill up to pay </p>
            <div className='inp'>
                <label>Email*</label> 
                <input
                        value={email}
                        placeholder="Enter phone number"
                        onChange={(e)=> setEmail(e.target.value)}
                        required
                    />
            </div>

            <div className='inp'>
                <label>Phone number*</label> 
                <input
                        
                        value={number}
                        placeholder="Enter phone number"
                        onChange={(e)=> setNumber(e.target.value)}
                        required
                    />
            </div>

            <div className=''>
               <p>Ammount: {amount} Naira</p>
            </div>
       
         

        <PaystackConsumer  {...componentProps} >
          {({initializePayment}) => <button className="paystack" onClick={() => initializePayment(handleSuccess, handleClose)}>Pay with Paystack</button>}
        </PaystackConsumer>
          </form>  
    </div>
  )
}

export default Checkout;