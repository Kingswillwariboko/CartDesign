import React from 'react'
import { IoIosCall } from 'react-icons/io';
import { AiTwotoneMail } from 'react-icons/ai';
import log from "../../assets/logo-transparent.svg";

import "./footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
        <hr />

        <div className='flex'>
            <img src={log} alt=""/>
            <p>All Rights Reserved © 2023</p>
        </div>
    </div>
  )
}

export default Footer