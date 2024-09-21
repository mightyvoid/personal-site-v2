import React, { useState } from 'react'
import { slide as Menu } from 'react-burger-menu';
import './css/staticHeader.css'
import { scrollIntoView } from './utils';

interface HamMenuProps {
  modalIsOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const HamMenu :React.FC<HamMenuProps> = ({ modalIsOpen, openModal, closeModal }) =>{

  const [isOpen, setIsOpen] = useState(false);

  const handleStateChange = (state: { isOpen: boolean }) => {
    setIsOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
        <Menu right 
         isOpen={isOpen} 
         onStateChange={handleStateChange}
        >
        <a id="home" className="ham-menu-item" onClick={()=>{
          scrollIntoView('landing-page-container')
          closeMenu()
          }} >Home</a>
        <a id="about" className="ham-menu-item" onClick={()=>{
        scrollIntoView('experience-main-container')
        closeMenu()}
        }>About</a>
        <a id="contact" className="ham-menu-item" onClick={()=>{
          openModal()
          closeMenu()
          }}>Contact</a>
            
        </Menu>
    </div>
  )
}

export default HamMenu