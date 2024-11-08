import React from 'react'
import './About.css'
import profile_img from '.././../assets/profile_img.jpg'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        {/* <img src={theme_pattern} alt="" /> */}
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I'm Mohamed, a Front-End Website developer based in Ethiopia. I really appreciate you for taking your time to visit my portfolio.</p>
                <p>I`ve passion for coding and i have TIC mindset</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:"70%"}} /> 90%</div>
                <div className="about-skill"><p>Javascript</p> <hr style={{width:"60%"}} /> 60%</div>
                <div className="about-skill"><p>React js</p> <hr style={{width:"55%"}} /> 75%</div>
                <div className="about-skill"><p>Java</p> <hr style={{width:"60%"}} /> 65%</div>
                <div className="about-skill"><p>Express Js</p> <hr style={{width:"70%"}} /> 60%</div>
                
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>1+</h1>
            <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>5+</h1>
            <p>PROJECT COMPLETED</p>
        </div>
        <hr />
   
      </div>
    </div>
  )
}
export default About
