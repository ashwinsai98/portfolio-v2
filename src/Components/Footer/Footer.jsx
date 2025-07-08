import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo_footer.png'
import envelope from '../../assets/envelope.svg'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import instagram from '../../assets/instagram.svg'

function copyEmail() {
  navigator.clipboard.writeText('ashwin.prak1998@gmail.com').then(() => {
      alert('Email copied to clipboard!');
  }).catch(err => {
      console.error('Error copying email:', err);
  });
}

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <hr />
                <div className="footer-bottom-left">© 2025 Ashwin Prakash. All rights reserved.</div>
            </div>
        </div>
        <hr />
        <div className="footer-click">
                            <a href="https://www.linkedin.com/in/ashwin-prakash1998" id="linkedin" title="Go to LinkedIn" target="_blank">
                            <img src={linkedin} alt="" height='50' width='50'/>
                            </a>
                            <a href="https://github.com/ashwinsai98" id="github" title="Go to GitHub" target="_blank">
                            <img src={github} alt="" height='50' width='50'/>
                            </a>
                            <a href="https://www.instagram.com/ashwinprakash23" id="instagram" title="Go to Instagram" target="_blank">
                            <img src={instagram} alt="" height='50' width='50'/>
                            </a>
                            <a id="email" title="Copy Email to Clipboard" onClick={copyEmail} >
                            <img src={envelope} alt="" height='50' width='50'/>
                            </a>
                            </div>
    </div>
  )
}

export default Footer