import React from 'react'
import Navbar from './Navbar'
import './Team.css'
import samanvitha from './landing_page/samanvita.jpeg'
import shruti from './landing_page/shruti.jpeg'
import vasuda from './landing_page/vasuda.jpeg'
import karthiganesh from './landing_page/karthiganesh.png'
import sudhakar from './landing_page/sudhakar_n1.png'
import sowmya from './landing_page/sowmya.png'
import premila from './landing_page/premila.jpeg'
import uttkarsh from './landing_page/uttkarsh.jpeg'
import shashwat from './landing_page/shashwat.jpeg'
import thaseel from './landing_page/thaseel.png'
import nihal from './landing_page/nihal.jpeg'
import vidyashree from './landing_page/vidyashree.jpeg'
import anjali from './landing_page/anjali.jpg'
import aishwarya from './landing_page/aishwarya.jpeg'
import vismaya from './landing_page/vismaya.png'
import akruti from './landing_page/akruti.png'
import EmailIcon from "./landing_page/email.png";
import linkedInIcon from "./landing_page/linkedin.png";


const Team = () => {
  const facultyData = [
    { imageName: vasuda, name: 'Dr. Vasudha Hedge', post: 'HOD, EEE Dept.', link: 'mailto:vasudha.hegde@nmit.ac.in' },
    { imageName: premila, name: 'Dr. Premila Manohae', post: 'Professor, EEE Dept.', link: 'mailto:premila.manohar@nmit.ac.in' },
    { imageName: samanvitha, name: 'Dr. N. Samanvita', post: 'Prof. & Head of ICAP center', link: 'mailto:samanvitha.n@nmit.ac.in' },
    { imageName: shruti, name: 'Mrs. Shruti Gatade', post: 'Assistant Professor, EEE Dept', link: 'mailto:shruti.gatade@nmit.ac.in' },
    { imageName: sowmya, name: 'Mrs.Sowmya Raman', post: 'Assistant Professor, EEE Dept', link: 'mailto:sowmya.raman@nmit.ac.in' },
  ]
  return (
    <div className="team" id='team'>
      <Navbar />
      <h1 className='textStyle10'>Our Team</h1>
      <h3 className='teamName'>Faculty</h3>
      <div className='cardsBo'>
        {facultyData.map((item) => {
          return (
            <div className='cardTeam'>
              <div><img src={item.imageName} alt="events icon" /></div>
              <h4>{item.name}</h4>
              <h5>{item.post}</h5>
              <a className="link__style1" href={item.link}>
                <img className="icon__style1" src={EmailIcon} alt="EmailIcon" />
              </a>
            </div>)
        })}

      </div>

      <h3 className='teamName'>Industry Expert</h3>
      <div className='cardsBo'>


        <div className='cardTeam' >
          <div><img src={karthiganesh} alt="events icon" /></div>
          <h4>Mr. Karthiganesh</h4>
          <h5>Co-founder, MyQuantum Technology Pvt Ltd</h5>
          <a className="link__style1" href="mailto:dkarthiganesh@gmail.com">
            <img className="icon__style1" src={EmailIcon} alt="EmailIcon"/>
          </a>
        </div>
      </div>

      <h3 className='teamName'>Heads</h3>
      <div className='cardsBo'>


        <div className='cardTeam' >
          <div><img src={sudhakar} alt="events icon" /></div>
          <h4>N.M. Sudhakar</h4>
          <h5>President</h5>
          <a className="link__style1" href="https://www.linkedin.com/in/sudhakar-nm-b646161a9">
            <img className="icon__style1" src={linkedInIcon} alt="linkedInIcon"/>
          </a>

        </div>
        <div className='cardTeam' >
          <div><img src={uttkarsh} alt="events icon" /></div>
          <h4>Uttkarsh Sharma</h4>
          <h5>Vice President</h5>
          <a className="link__style1" href="mailto:1nt19ee105.uttkarsh@nmit.ac.in">
            <img className="icon__style1" src={EmailIcon} alt="EmailIcon"/>
          </a>
        </div>
      </div>
      <h3 className='teamName'>Senior Heads</h3>
      <div className='cardsBo'>


        <div className='cardTeam' >
          <div><img src={nihal} alt="events icon" /></div>
          <h4>Nihal K.P</h4>
          <h5>Blogs & Newsletters</h5>
          <a className="link__style1" href="mailto:kpnihal006@gmail.com">
            <img className="icon__style1" src={EmailIcon} alt="EmailIcon"/>
          </a>


        </div>
        <div className='cardTeam' >
          <div><img src={thaseel} alt="events icon" /></div>
          <h4>Thaseel</h4>
          <h5>TED Talks and Workshops</h5>
          <a className="link__style1" href="mailto:thaseelahmed555@gmail.com">
            <img className="icon__style1" src={EmailIcon} alt="EmailIcon"/>
          </a>


        </div>
        <div className='cardTeam' >
          <div><img src={vidyashree} alt="events icon" /></div>
          <h4>Vidyashree</h4>
          <h5>Projects & Research</h5>
          <a className="link__style1" href="mailto:vidyashree.s.755@gmail.com">
            <img className="icon__style1" src={EmailIcon} alt="EmailIcon"/>
          </a>

        </div>
        <div className='cardTeam' >
          <div><img src={aishwarya} alt="events icon" /></div>
          <h4>Aishwarya</h4>
          <h5>Website</h5>

          <a className="link__style1" href="mailto:ekhellikaraishwarya@gmail.com">
            <img className="icon__style1" src={EmailIcon} alt="EmailIcon"/>
          </a>
        </div>
        <div className='cardTeam' >
          <div><img src={anjali} alt="events icon" /></div>
          <h4>Anjali Patil</h4>
          <h5>Public Relation</h5>

          <a className="link__style1" href="mailto:anjaliipatil2001@gmail.com">
            <img className="icon__style1" src={EmailIcon} alt="EmailIcon"/>
          </a>
        </div>
        <div className='cardTeam' >
          <div className='backcard'></div>

          <div><img src={shashwat} alt="events icon" /></div>
          <h4>Shashwat</h4>
          <h5>Organizer</h5>
          <a className="link__style1" href="mailto:shashwatmain@gmail.com">
            <img className="icon__style1" src={EmailIcon} alt="EmailIcon"/>
          </a>
        </div>
      </div>
      <h3 className='teamName'>Junior Heads</h3>
      <div className='cardsBo'>


        <div className='cardTeam' >
          <div><img src={akruti} alt="events icon" /></div>
          <h4>Akruti Sarangi</h4>
          <h5>Website</h5>
          <a className="link__style1" href="mailto:aviternal20@gmail.com">
            <img className="icon__style1" src={EmailIcon} alt="EmailIcon"/>
          </a>
          <a className="link__style1" href="https://www.linkedin.com/in/akruti-sarangi-04377b22a">
            <img className="icon__style1" src={linkedInIcon} alt="linkedInIcon"/>
          </a>


        </div>
        <div className='cardTeam' >
          <div><img src={vismaya} alt="events icon" /></div>
          <h4>Vismaya</h4>
          <h5>Newspaper & Magazine</h5>
          <a className="link__style1" href="mailto:vismayad1234@gmail.com">
            <img className="icon__style1" src={EmailIcon} alt="EmailIcon"/>
          </a>
          <a className="link__style1" href="https://www.linkedin.com/in/vismaya-devashya-a538a9246">
            <img className="icon__style1" src={linkedInIcon} alt="linkedInIcon"/>
          </a>

        </div>


      </div>

    </div>
  )
}

export default Team