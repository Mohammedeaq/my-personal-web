import React from 'react'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            {/* <img src={footer_logo} alt="" /> */}
            <h2>MAH</h2>
            <p> Profetional mernStack developer</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email"  placeholder='enter your email'/>
            </div>
          <div className="footer-subscribe">subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-buttom">
        <p className="footer-buttom-left">mohamad abdi. All rights reserved</p>
     <div className="footer-buttom-right">
        <p>Term of  service </p>
        <p>privacy policy</p>
        <p>contact with me</p>
     </div>
      </div>
    </div>
  )
}

export default Footer
