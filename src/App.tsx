import React, { useRef, useState } from 'react';
import './App.css';
import {StaticHeader} from './StaticHeader';
import LandingPage from './LandingPage';
import ExperiencePage from './ExperiencePage';
import HamMenu from './HamMenu';
import ContactFormInModal from './ContactFormModal';

function App() {
  const landingRef = useRef<HTMLElement | null>(null);
  const expRef = useRef<HTMLElement | null>(null);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="app-container">
      <StaticHeader modalIsOpen={modalIsOpen} openModal={openModal} closeModal={closeModal}/>
      <HamMenu modalIsOpen={modalIsOpen} openModal={openModal} closeModal={closeModal} />
      <LandingPage />
      <ExperiencePage />
      <ContactFormInModal modalIsOpen={modalIsOpen} openModal={openModal} closeModal={closeModal} />

    </div>
  );
}

export default App;
