import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatibus odit rerum nesciunt provident eaque aliquid nemo asperiores sapiente cum nulla enim at quaerat quae, officiis nobis sint omnis labore?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" srcset="" />
                    <img src={assets.twitter_icon} alt="" srcset="" />
                    <img src={assets.linkedin_icon} alt="" srcset="" />
                </div>
            </div>
            
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul><li>9862667172</li>
                <li>Contact@tumato.com</li></ul>

            </div>

            
        </div>
        <p className="footer-copyright">
            CopyRight 2024 -All Rights Reserved
        </p>
      
    </div>
  )
}

export default Footer
