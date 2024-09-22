import React from 'react';
import Typewriter from 'typewriter-effect';
import './css/landingPage.css'
import myAvatar from './assets/avatar-me.png'; // Import the image

function LandingPage() {
  return (
    <div className='landing-page-container' id='landing-page-container'>
    <div className='left-part'>
      <div className='left-inner-container'>
          <div className='first-text'>
                <h1 id='hello-intro'>Hello, I'm</h1>
                </div>
          <div>
          <div className='second-text'>
              <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                        .typeString('Navin Ravindran')
                        .pauseFor(2000)
                        .changeDelay(20)
                        .deleteAll()
                        .typeString("a Software Developer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("DIY tinkerer!")
                        .pauseFor(1000)
                        .deleteAll()
                        .start();
                    }}

                    options={{
                        autoStart: true,
                        loop: true,
                    }}
                    />
          </div>
      </div>
    </div>

    </div>
    <div className='right-part'>
    <img src={myAvatar} alt="avatar-pic" className='avatar-pic'/>
    </div>

  </div>
  )
}

export default LandingPage