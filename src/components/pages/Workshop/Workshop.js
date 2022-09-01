import React from 'react'
import Navbar from '../../Navbar'
import './workshop.css'
import workBg from '../../landing_page/workshop3.jpeg'
import coming_soon from '../../landing_page/COMING_SOON.jpeg'


const Workshop = () => {
  return (
    <div className='workshop'>
        <Navbar />
        <h1 className='textStyle4'>Workshop</h1>
        <img className="workImg" src={workBg} alt="workshop" />
        <img className="coming_soon" src={coming_soon} alt="coming_soon" />

    </div>
  )
}

export default Workshop