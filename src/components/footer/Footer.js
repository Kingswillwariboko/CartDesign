import React from 'react'
import { IoIosCall } from 'react-icons/io';
import { AiTwotoneMail } from 'react-icons/ai';

import "./footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
        <hr />

        <div>
            <h3>Shopbiema</h3>
            <p><AiTwotoneMail/> shopbiema@gmail.com</p> 
           <p><IoIosCall/>  +234123456</p> 
        </div>
    </div>
  )
}

export default Footer