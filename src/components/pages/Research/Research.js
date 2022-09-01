import React from 'react'
import Navbar from '../../Navbar'
import './research.css'
import researchBg from '../../landing_page/research1.jpeg'
import coming_soon from '../../landing_page/COMING_SOON.jpeg'

const Research = () => {
  return (
    <div>
        <Navbar />
        <h1 className='textStyle2'>Research & Projects</h1>
        <img className="projectImg" src={researchBg} alt="research" />
        <img className="coming_soon" src={coming_soon} alt="coming_soon" />
    </div>
  )
}

export default Research