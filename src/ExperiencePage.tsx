import React from 'react'
import ExperienceTree from './ExperienceTree'
import Resume from './assets/Resume.pdf';
import Modal from 'react-modal';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import './css/experiencePage.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();


function ExperiencePage() {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      // width: '80vw',
      height: '85vh',
      transform: 'translate(-50%, -50%)',
    },
    margin: '5%'
  }

  function openModal() {
    setIsOpen(true);
  }
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className='experience-main-container fullscreen' id='experience-main-container'>
      <ExperienceTree />
      <div className='view-resume-button-container'>
        <div>
          <button onClick={openModal} className='view-resume-button'>View Resume</button>
        </div>

      </div>
    <div>
      <p style={{textAlign:'center'}}>For updated/latest resume kindly check my linkedIn or contact me.</p>
    </div>
      <Modal
        isOpen={modalIsOpen}

        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Resume"
      >
        <Document file={Resume} >
          <Page pageNumber={1} />
        </Document>
      </Modal>
    </div>

  )
}

export default ExperiencePage