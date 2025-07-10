import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header.jsx'
import './App.css'
import Navbar from './assets/Navbar/Navbar.jsx'
import Main from './assets/Main/Main.jsx'
import AboutMe from './assets/About/About.jsx'
import Skills from './assets/Skills/Skills.jsx'
import Footer from './assets/Footer/Footer.jsx'
import myPhoto from "./assets/Images/yousse (1).jpeg";

function App() {

  return (
    <>
  <Navbar/>
  <Main imgPath={myPhoto} />
  <div id="about">
  <AboutMe />
  </div >
  <div id="skills">
  <Skills />
  </div>
  <div id="contacts">
<Footer/>
  </div>
    </>
  )
}

export default App
