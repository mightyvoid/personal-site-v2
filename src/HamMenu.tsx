import React from 'react'
import { slide as Menu } from 'react-burger-menu';
import './css/staticHeader.css'
import { scrollIntoView } from './utils';

function HamMenu() {

  return (
    <div>
        <Menu right >
        <a id="home" className="ham-menu-item" onClick={()=>scrollIntoView('landing-page-container')} >Home</a>
        <a id="about" className="ham-menu-item" onClick={()=>scrollIntoView('experience-main-container')}>About</a>
        <a id="contact" className="ham-menu-item" href="/contact">Contact</a>
            
        </Menu>
    </div>
  )
}

export default HamMenu