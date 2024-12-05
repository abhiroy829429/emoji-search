import React from 'react'
import { IconContext } from "react-icons"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs"
import { SiGmail } from "react-icons/si"
import './Footer.css'


function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
      <IconContext.Provider value={{color:"#5642a8", size:"1.5em"}}>
    <div className="Footer">
      <div className="container">
      
      <h5>Contact Developer</h5>
      <ol className='social'>
      <li><a href="https://www.instagram.com/abhiroy70611/" target="_blank" rel="noopener noreferrer"><BsInstagram /></a></li>
<li><a href="https://www.linkedin.com/in/abhimanyu-kumar-6a9154292/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></li>
<li><a href="https://github.com/abhiroy829429" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
<li><a href="mailto:abhiroy829429@gmail.com" target="_blank" rel="noopener noreferrer"><SiGmail /></a></li>

      </ol>

        <p className="copyright">
        &copy; Copyright {getCurrentYear()} Abhimanyu Kumar | All Rights Reserved. 
        </p>
      </div>
    </div>
    </IconContext.Provider>
  )
}

export default Footer
