import { useState } from 'react'
import React from 'react'
import './Modal.css'

function Modal(props) {

    const [modal, setModal] = useState(false);
    const [isHover, setIsHover] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

    const highlightModalOn = () => {
        setIsHover(true);
        console.log('on')
    }
    const highlightModalOff = () => {
        setIsHover(false);
        console.log('off')
    }

    const highlight = {
        fontSize: '50px',
        padding: '10px',
        borderRadius: '10px',
        boxshadow: '0 0 10px 0 rgba(0,0,0,0.5)',
        transition: 'all 0.3s ease-in-out',
        backgroundColor: isHover ? 'purple' : '',
        color: isHover ? 'white' : 'purple',
    }

  return (
    <div>
    <h2 
    style={highlight} 
    onClick={toggleModal} 
    onMouseEnter={highlightModalOn}
    onMouseLeave={highlightModalOff}
    >
        
        Preview
        
    </h2>
        {modal && (
        <div className="modal">
            <div className="overlay" onClick={toggleModal}>
                <div className="modal-content">
                    <h2>{props.name}</h2>
                    <h3>{props.first} {props.last}</h3>
                    <h2>{props.email}</h2>
                    <h3>{props.emailInfo}</h3>
                    <h2>{props.phone}</h2>
                    <h3>{props.phoneInfo}</h3>
                    <button className='close-modal' onClick={toggleModal}>X</button>
                </div>
            </div>
        </div>
        )}
    </div>

  )
}

export default Modal