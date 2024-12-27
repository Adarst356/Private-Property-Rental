import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div id='footer'>
     <div className='footertop'>
      <div className='box'>
     <span id='contact1'>Contact Us</span>
     <span>8175044032</span>
     <span>adarsht356@gmail.com</span>
     <span>Office:-C1/705a Jankipuram Lucknow /India</span>

      </div>
      <div className='box'>
      <span id='service'>Our Service</span>
        <span>Home</span>
        <span>Rent</span>
        <span>Add Listing</span>
      </div>
      <div className='box'>
      <span id='Quick'>Quick Link</span>
      <span>Knowledge Base</span>
      <span>FAQ</span>
      <span>Contact</span>

      </div>
      <div className='box'>
      <span id='logo'>
        Private Property Dealer
      </span>
      <Link to={"/Contact"}><button>Contact Us</button></Link>
      </div>
      
      </div> 
     <div className='footerbuttom'>
     <span>Privacy Policy ||</span>
     <span>Use of Terms</span>
     </div>
    </div>
  )
}

export default Footer
