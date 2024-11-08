import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1> <span>I`m Muhamad Abdi</span> , Front-end web developer</h1>
      <p>Passionate front-end developer with expertise in crafting responsive, visually engaging, and user-centered web interfaces using the latest HTML, CSS, and JavaScript frameworks</p>
    <div className="hero-action">
        <div className="hero-connect">Connect with me </div>
    <div className="hero-resume">My resume</div>
    </div>
    </div>
  )
}

export default Hero
