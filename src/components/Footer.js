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
        <li><a href='https://www.facebook.com/prahlad.kumar.545402/'><BsFacebook /></a></li>
        <li><a href='https://www.instagram.com/prahladgupta_/'><BsInstagram /></a></li>
        <li><a href='https://www.linkedin.com/in/theprahladkumar/'><FaLinkedinIn  /></a></li>
        <li><a href='https://github.com/Prahladk09'><FaGithub /></a></li>
        <li><a href='https://twitter.com/Prahladk09'><BsTwitter /></a></li>
        <li><a href='mailto: prahladk09@gmail.com'><SiGmail /></a></li>
      </ol>

        <p className="copyright">
        &copy; Copyright {getCurrentYear()} Prahlad Kumar | All Rights Reserved. 
        </p>
      </div>
    </div>
    </IconContext.Provider>
  )
}

export default Footer
