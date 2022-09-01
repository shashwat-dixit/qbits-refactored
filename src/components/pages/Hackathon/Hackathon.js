import React from 'react'
import Navbar from '../../Navbar'
import './hackathon.css'
import hackBg from '../../landing_page/hack.mp4'

const Hackathon = () => {
  return (
    <div className='hack'>
    
    <video className='video' src={hackBg} autoPlay loop muted/>
        <Navbar/>

       
    </div>
  )
}

export default Hackathon