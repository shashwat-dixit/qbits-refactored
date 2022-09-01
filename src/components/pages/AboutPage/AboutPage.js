import React from 'react'
import Navbar from '../../Navbar'
import './aboutPage.css'
import aboutBg from '../../landing_page/qteam.jpeg'
import aboutBg1 from '../../landing_page/qteam2.jpeg'
const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className='aboutPage'>
        <div className='content'>
          <h1 className='textStyle'>About</h1>
          <div className='division'>
            <p className="abouttext">
              Quantum Tech Club is a student club that aims to bring primary quantum computing resources.
              We provide resources for students who are just beginning to learn about quantum computing to those who are looking for internships and jobs in the quantum computing area.
              Throughout the year, the club will host events that expose students to new ideas in the field of quantum computing, including Ted talks, blog writing ,panel discussion,
              educational workshops, field trips, Hackathons, social events but not limited to.
            </p>
            <img className="aboutImg" src={aboutBg} alt="about" />
          </div>
          <div className="division">
            <img className="aboutImg" src={aboutBg1} alt="about" />
            <p className="abouttext">
              It is an excellent opportunity for students to gain knowledge of a new technology. Students can expand their knowledge and learn new things. Quantum technology is a new field of physics and engineering that encompasses technologies that rely on quantum mechanics' properties, particularly quantum entanglement, quantum superposition, and quantum tunnelling. Because quantum technology is the next generation's technology, it is advantageous to begin learning it now.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage