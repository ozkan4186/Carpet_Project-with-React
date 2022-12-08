import React from 'react'
import visa from "../assets/visa.png"
import  mastercard from "../assets/mastercard.png"
import amex from "../assets/amex.png"
import troy1 from "../assets/troy1.png"
import bkm from "../assets/BkmExpress.png"
import troy from "../assets/troy.png"
import discover from "../assets/discover.png"
import diners from "../assets/diners.png"
import jcb from "../assets/jcb.png"
import unionpay from "../assets/unionpay.png"
import ssl from "../assets/ssl256.png"
import tree from "../assets/3d.png"
// import visa from "../assets/visa.png"


const Footer = () => {
  return (
    <div className='footer d-sm-block  ' >

        <img src={visa} alt="" />
        <img src={mastercard} alt="" />
        <img src={amex} alt="" />
        <img src={troy1} alt="" />
        <img src={bkm} alt="" />
        <img src={troy} alt="" />
        <img src={discover} alt="" />
        <img src={diners} alt="" />
        <img src={jcb} alt="" />
        <img src={unionpay} alt="" />
        <img src={ssl} alt="" />
        <img src={tree} alt="" />
        <hr />
        <h5>Netahsilat|<a target="_blank" href="http://www.netahsilat.com">E-Tahsilat Sistemi</a></h5>
    </div>
  )
}

export default Footer