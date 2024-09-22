import React, { useState } from 'react';
import Modal from 'react-modal';
import './css/contactFormModal.css'

// You can set the app element for accessibility
Modal.setAppElement('#root');

interface ModalProps {
    modalIsOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

const MyModalComponent: React.FC<ModalProps> = ({ modalIsOpen, openModal, closeModal }) => {
    const [result, setResult] = React.useState("");


    const onSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target as HTMLFormElement);
        const form = event.target as HTMLFormElement;
        formData.append("access_key", "4a068772-4016-4148-bf97-00ad2e45bde6");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Message sent! I will reply back soon.");
            form.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        height: '75vh',
                        transform: 'translate(-50%, -50%)',
                    },
                    margin: '5%'
                }}
            >
                <div>
                    <form onSubmit={onSubmit} className='contact-form-container'>
                        <div>
                            <label htmlFor="name" className='form-label'>Hi, your name ?</label>
                            <input type="text" name="name" required className='form-input' />
                        </div>
                        <div>
                            <label htmlFor="email" className='form-label'>Your Mail:</label>
                            <input type="email" name="email" required className='form-input' />
                        </div>
                        <div>
                            <label htmlFor="message" className='form-label'>Tell me what you want to talk about?</label>
                            <textarea name="message" required className='form-input' style={{ minHeight: '15vh' }}></textarea>
                        </div>


                        <button type="submit" className='form-submit-btn'>Submit Form</button>

                    </form>
                    <span className='form-result-feedback'>{result}</span>

                </div>
                <div className='close-icon-container'>
                <svg className="close-form-button" onClick={closeModal} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
                </div>

            </Modal>
        </div>
    );
};

export default MyModalComponent;
