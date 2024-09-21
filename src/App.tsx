import React, { useRef } from 'react';
import './App.css';
import {StaticHeader} from './StaticHeader';
import LandingPage from './LandingPage';
import MailForm from './MailForm';
import ExperiencePage from './ExperiencePage';
import HamMenu from './HamMenu';

function App() {
  const landingRef = useRef<HTMLElement | null>(null);
  const expRef = useRef<HTMLElement | null>(null);


  return (
    <div className="app-container">
      <StaticHeader />
      <HamMenu />
      <LandingPage />
      <ExperiencePage />
      <MailForm/>
    </div>
  );
}

export default App;
