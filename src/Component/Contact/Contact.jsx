import React from 'react'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

import './Contact.css'
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "85ed6583-5e52-4162-b8e8-ef6e78165f4f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get In Touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Lets Talk</h1>
            <p>I'm currently available to take next project</p>
        <div className="contact-details">
            <div className="contact-detail">
<img src={mail_icon}alt="" />deak@gmail.com <p></p>
            </div>
            <div className="contact-detail">
            <img src={call_icon }alt="" /> <p>+251944047814</p>
            </div>
            <div className="contact-detail">
            <img src={location_icon} alt="" /> <p>location</p>
            </div>
        </div>
        </div>
        <form onSubmit={onSubmit}
         className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name="name"/>
            <label htmlFor="">Your Email</label>
            <input type="text" placeholder='enter your email' name="email"/>
            <label htmlFor="">Write Your Message Here</label>
            <textarea name="message" rows="8" placeholder='enter your message'></textarea>
<button id='con' className='contact-submit' type='submit'>Submit</button>
         </form>
      </div>
    </div>
  )
}

export default Contact
