import React from 'react'
import './Events.css'
import events from './landing_page/event.png'
import hackathon from './landing_page/hackathon.jpeg'
import research from './landing_page/research.jpeg'
import tedtalks from './landing_page/tedtalks.jpeg'
import workshop from './landing_page/workshop.jpeg'
import { useNavigate } from 'react-router-dom'

const Events = () => {
  const navigate = useNavigate();
  return (
    <div className='events' id='events'>
      <div className='container'>
        <img className='image' src={events} alt='events' />
        <div className='col-1'>
          <h2>Events</h2>
          <span className='line'></span>
          <div className='cardsBox'>
            <div className='card' onClick={() => navigate('/hackathon')}>
              <div><img src={hackathon} alt="events icon"/></div>
              <h4>Hackathons</h4>
        
            </div>

            <div className='card' onClick={() => navigate('/research')}>
              <div><img src={research} alt="events icon"/></div>
              <h4>Research</h4>
            </div>

            <div className='card' onClick={() => navigate('/tedtalks')}>
              <div><img src={tedtalks} alt="events icon"/></div>
              <h4>TedTalks</h4>
            </div>

            <div className='card' onClick={() => navigate('/workshop')}>
              <div><img src={workshop} alt="events icon"/></div>
              <h4>Workshop</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events
