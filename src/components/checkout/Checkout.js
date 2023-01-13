import React, {useState} from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


import "./checkout.scss"
import { Link } from 'react-router-dom';

const Checkout = () => {
    const[name, setName] = useState('')
    const[number, setNumber]= useState('')
    const[email, setEmail]= useState('')
  return (
    <div>
        <form>
            <p>Kindly fill up to pay </p>
            <div className='inp'>
                <label>Full Name*</label> 
                <input
                        value={name}
                        placeholder="Full Name"
                        onChange={(e)=> setName(e.target.value)}
                        required
                    />
            </div>
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

            
      <div className='button'>
      <PayPalScriptProvider>
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "13.99",
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            const details = await actions.order.capture();
            const name = details.payer.name.given_name;
            alert("Transaction completed by " + name);
          }}
        />
      </PayPalScriptProvider>
      </div>
          </form>
    </div>
  )
}

export default Checkout