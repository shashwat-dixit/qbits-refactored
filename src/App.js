import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
/*import Events from './components/Events' */
import Team from './components/Team'
import Contact from './components/Contact'
/*
import AboutPage from './components/pages/AboutPage/AboutPage';
import Hackathon from './components/pages/Hackathon/Hackathon';
import Research from './components/pages/Research/Research';
import Workshop from './components/pages/Workshop/Workshop';
import TedTalks from './components/pages/TedTalks/TedTalks';
*/

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={
            <>
              <Navbar />
              <Hero />
              <About />
              {/*<Events />*/}
              <Team />
              <Contact />
            </>
          }>
          </Route>
          {/*
          <Route path="/aboutPage" element={<AboutPage />} />
          <Route path="/hackathon" element={<Hackathon />} />
          <Route path="/research" element={<Research />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/tedtalks" element={<TedTalks />} />
        */}
          </Routes>
      </Router>

    </div>
  );
}

export default App;
