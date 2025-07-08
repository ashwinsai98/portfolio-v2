import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const MyResumeButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <button onClick={handleDownload()}>My Resume</button>
  );
};


const Hero = () => {
  return (
    <div id = 'home' className='hero'>
        <img src={profile_img} alt="" className='image-container'/>
        <h1>
            <span>I'm Ashwin Prakash,</span> Data engineer based in India.
        </h1>
        <p>Innovative and passionate Data Engineer with 3 + years of experience in the Information Technology industry has designed, developed and maintained multiple scalable and efficient ETL pipelines.</p>
        <hr />
        <div className="hero-action">
            <div className="hero-connect"><a className='anchor-link' offset={50} href='#contact'>Connect with me</a></div>
            <div className="hero-resume" onClick={MyResumeButton}>Download CV</div>
        </div>
    </div>
  )
}

export default Hero