import React from 'react'
import Navbar from '../../Navbar'
import './tedtalks.css'
import tedtalkBg from '../../landing_page/tedtalk2.jpg'
import coming_soon from '../../landing_page/COMING_SOON.jpeg'


const TedTalks = () => {
  return (
    <div className="tedtalk">
        <Navbar />
        <h1 className='textStyle5'>Ted Talks</h1>
        <img className="tedtalkImg" src={tedtalkBg} alt="tedtalk" />
        <img className="coming_soon" src={coming_soon} alt="coming_soon" />
    </div>
  )
}

export default TedTalks