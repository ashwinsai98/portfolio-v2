import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import underline from '../../assets/underline.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu-open.svg'
import menu_close from '../../assets/menu-close.svg'

const Navbar = () => {

  const [menu,setMenu] = useState("home")
  const menRef = useRef()

  const openMenu = () => {
    menRef.current.style.right="0";
  }
  const closeMenu = () => {
    menRef.current.style.right="-350px";
  }
  return (
    <div className='navbar'>
        <img src={logo} alt=""/>
        <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
        <ul ref= {menRef} className="nav-menu">
          <img src={menu_close} onClick = {closeMenu} alt="" className="nav-mob-close" />
            <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=> setMenu("home")}>Home</p></AnchorLink>{menu==="home"? <img src = {underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=> setMenu("about")}>About Me</p></AnchorLink>{menu==="about"? <img src = {underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#timeline'><p onClick={()=> setMenu("timeline")}>My Journey</p></AnchorLink>{menu==="timeline"? <img src = {underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=> setMenu("services")}>Services</p></AnchorLink>{menu==="services"? <img src = {underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#certifications'><p onClick={()=> setMenu("certifications")}>Certifications</p></AnchorLink>{menu==="certifications"? <img src = {underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=> setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"? <img src = {underline} alt=''/>:<></>}</li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
