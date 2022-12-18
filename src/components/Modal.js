import { useState } from 'react'
import React from 'react'
import './modal.css'

function Modal(props) {

    const [modal, setModal] = useState(false);
    const [isHover, setIsHover] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

    const highlightModalOn = () => {
        setIsHover(true);
    }
    const highlightModalOff = () => {
        setIsHover(false);
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

    // when the user enters general information, 
    // the modal will display the information
    const general = props.general;
    if (general)
    {
        return (
            <div className="stack">
            <h2 
            style={highlight} 
            onClick={toggleModal} 
            onMouseEnter={highlightModalOn}
            onMouseLeave={highlightModalOff}
            >
                Preview
            </h2>
            <h3>{props.name}</h3>
            <h4 className='modalText'>{props.first} {props.last}</h4>
            <h3>{props.email}</h3>
            <h4 className='modalText'>{props.emailInfo}</h4>
            <h3>{props.phone}</h3>
            <h4 className='modalText'>{props.phoneInfo}</h4>
        </div>
        )
    }
    
    // when the user enters educational information,
    // the modal will display the information
    const educational = props.educational;
    if (educational)
    {
        return(
            <div className="stack">
            <h2 
            style={highlight} 
            onClick={toggleModal} 
            onMouseEnter={highlightModalOn}
            onMouseLeave={highlightModalOff}
            >
                
                Preview
                
            </h2>
            <h3>{props.school}</h3>
            <h4 className='modalText'>{props.schoolInfo}</h4>
            <h3>{props.degree}</h3>
            <h4 className='modalText'>{props.degreeInfo}</h4>
            <h3>{props.fieldOfStudy}</h3>
            <h4 className='modalText'>{props.fieldOfStudyInfo}</h4>
            <h3>{props.startYear}</h3>
            <h4 className='modalText'>{props.startYearInfo}</h4>
            <h3>{props.endYear}</h3>
            <h4 className='modalText'>{props.endYearInfo}</h4>
        </div>
        )
    }
  
}

export default Modal