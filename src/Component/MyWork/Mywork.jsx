import React from 'react'
import './Mywork.css'
import mywork_data from '../../assets/mywork_data'

const Mywork = () => {
  return (
    <div id='mywork' className='mywork'>
      <div className="mywork-title">
        <h1> My Latest Work</h1>
      </div>
      <div className="mywork-container">
     {mywork_data.map((work,index)=>{
      return <img  key={index} src={work.w_img} alt="" />
     })}
      </div>
        
      
    </div>
  )
}

export default Mywork
