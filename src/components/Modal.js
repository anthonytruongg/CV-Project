import { useState } from 'react'
import React from 'react'
import './Modal.css'

function Modal(props) {

    const [modal, setModal] = useState(false);


    // when the user enters general information, 
    // the modal will display the information
    const general = props.general;
    if (general)
    {
        return (
            <div className="flex flex-col justify-items-center items-center p-20">
            <h2 
            className='text-5xl font-semibold text-fuchsia-300' 
            >
                Preview
            </h2>
            
            <div className="text-left">
                <h3 className='text-2xl font-semibold text-fuchsia-300 my-5'>{props.name}</h3>
                <h4 className=''>{props.first} {props.last}</h4>
                <h3 className='text-2xl font-semibold text-fuchsia-300 my-5'>{props.email}</h3>
                <h4 className=''>{props.emailInfo}</h4>
                <h3 className='text-2xl font-semibold text-fuchsia-300 my-5'>{props.phone}</h3>
                <h4 className=''>{props.phoneInfo}</h4>
            </div>
           
        </div>
        )
    }
    
    // when the user enters educational information,
    // the modal will display the information
    const educational = props.educational;
    if (educational)
    {
        return(
            <div className="flex flex-col justify-items-center items-center p-20">
            <h2 
            className='text-5xl font-semibold text-fuchsia-300' 
            >
                
                Preview
                
            </h2>
            <h3 className='text-2xl font-semibold text-fuchsia-300 my-5'>{props.school}</h3>
            <h4 className=''>{props.schoolInfo}</h4>
            <h3 className='text-2xl font-semibold text-fuchsia-300 my-5'>{props.degree}</h3>
            <h4 className=''>{props.degreeInfo}</h4>
            <h3 className='text-2xl font-semibold text-fuchsia-300 my-5'>{props.fieldOfStudy}</h3>
            <h4 className=''>{props.fieldOfStudyInfo}</h4>
            <h3 className='text-2xl font-semibold text-fuchsia-300 my-5'>{props.startYear}</h3>
            <h4 className=''>{props.startYearInfo}</h4>
            <h3 className='text-2xl font-semibold text-fuchsia-300 my-5'>{props.endYear}</h3>
            <h4 className=''>{props.endYearInfo}</h4>
        </div>
        )
    }
  
}

export default Modal