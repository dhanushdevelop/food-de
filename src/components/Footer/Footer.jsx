// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
          <div className="fotter-content-left">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nulla possimus ducimus quos rerum cumque vero unde laudantium quaerat fugit. Labore fuga laudantium, eaque nisi ad natus eveniet dolore consectetur.</p>
          <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
              </div>
          </div>
          <div  className="fotter-content-center">
          <h1>COMPANY</h1>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
          </div>
           <div  className="fotter-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 9677477043</li>
                    <li>dummy@gmailcom</li>
                </ul>
           </div>
        </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 @ Dhanush - All rights recived</p>
    </div>
  )
}

export default Footer
