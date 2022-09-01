import React from 'react'
import john from './landing_page/about.png'
import './About.css'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img className='image' src={john} alt='john' />
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <h4><p>The motive of the club is to bring about interest and awareness of the Quantum Computing Technology among the masses . Our shared interest is the curiosity to explore Quantum Computing applications and teach fellow members.</p>
                    </h4>
                    <button className='button' onClick={() => navigate('/aboutPage')}>Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default About
