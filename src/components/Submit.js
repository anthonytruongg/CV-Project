import { useState } from 'react'
import React from 'react'

function Submit(props) {
    const [isHover, setIsHover] = useState(false);
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

   

  return (
    <div className='stack'>
        <h2 
        style={highlight} 
        onMouseEnter={highlightModalOn}
        onMouseLeave={highlightModalOff}
        onClick={props.handleSubmit}
        >
            
            Done
            
        </h2>
    </div>
  )
}

export default Submit