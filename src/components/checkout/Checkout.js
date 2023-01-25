import React, { useEffect, useRef, useState } from 'react'
import { createClient } from "contentful"
import log from "../../assets/logo-transparent.svg";
import "./checkout.scss"
import { Link } from 'react-router-dom';
import { PaystackButton } from 'react-paystack'
import { PaystackConsumer } from 'react-paystack';
import master from "../../assets/icons8-mastercard-logo.svg";
import visa from "../../assets/icons8-visa.svg"
import verve from "../../assets/verve.svg"
import {db} from "../../firebase";


const Checkout = () => {
    const[amount, setAmount] = useState()
    const[number, setNumber]= useState('')
    const[email, setEmail]= useState('')
    const[name, setName]= useState('')
    const[address, setAddress]= useState('')
    const[zip, setZip]= useState('')
    const dataRef = useRef()

  const client = createClient({ space: "audrfmrh2x7a", accessToken: "Ol36WYE4bG73TURBza9PYrYYdx2hg4u2sjiBwC9X46g"})

    useEffect(() => {
      const getAllEntries = async () => {
        try {
          await client.getEntry('6Jg48bibzbu3SdNVBv5Ruq').then((entry) => {
            setAmount(entry.fields.prices)
          })
        } catch (error) {
          console.log(`Error fetching authors ${error}`);
        }
      };
      getAllEntries()
    }, [amount, client])


    const handleSubmit = (e) => {
      e.preventDefault();
      // setLoading(true)
    
      db.collection("contacts")
     .add({
        email,
        name,
        address,
        zip,
        number,
     }).then(()=>{
         console.log('success')
        //  setTimeout(() => {
        //    setShowMessage(false)
        //    }, 5000); 
           setEmail("")
           setName('')
           setAddress('')
           setNumber('')
           setNumber('')
          //  setLoading(false)
     }).catch((error)=>{
        console.log(error.message)
     })
    }
   

    const config = {
      number,
      email,
      amount: amount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
      publicKey: 'pk_live_bff6985b4456f2475dd230d27bcc7b61fd3fd38a',
    };
    
    // you can call this function anything
    const handleSuccess = (reference) => {

      dataRef.current.click();
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
              <Link to="/">
                  <img src={log} alt="shopbiema" />
              </Link>
            </div>
            
        <form onSubmit={handleSubmit}>
            <p>Kindly fill up to pay to complete purchase</p>
            <div className='inp'>
                <label>Full Name*</label> 
                <input
                        value={name}
                        placeholder="Enter full name"
                        onChange={(e)=> setName(e.target.value)}
                        required
                    />
            </div>
            <div className='inp'>
                <label>Email*</label> 
                <input
                        value={email}
                        placeholder="Enter your email"
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

            <div className='inp'>
                <label>Address*</label> 
                <input
                        value={address}
                        placeholder="Enter Address"
                        onChange={(e)=> setAddress(e.target.value)}
                        required
                    />
            </div>

            <div className='inp'>
                <label>Zip code*</label> 
                <input
                        value={zip}
                        placeholder="Zip code"
                        onChange={(e)=> setName(e.target.value)}
                        required
                  />
            </div>

            <div className=''>
               <p>Amount: {amount} Naira</p>
            </div>

           <button ref={dataRef} type="submit"></button>
          </form>  

          <div className='btn-cover'>
            <PaystackConsumer  {...componentProps} >
            {({initializePayment}) => <button className="paystack" onClick={() => initializePayment(handleSuccess, handleClose)}>Pay with Paystack</button>}
          </PaystackConsumer>

            <div className="cards">
               <img className='verve' src={verve} alt=""/>
                <img className='img' src={master} alt=""/>
                <img className='img' src={visa} alt=""/>
            </div>
          </div>   
    </div>
  )
}

export default Checkout;