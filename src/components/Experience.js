// This component utilizes useState hooks to store user
// work experience information. The user can enter
// information about their work experience and the
// information will be displayed in the modal component.

import React from 'react'
import Modal from './Modal'
import {useState, useEffect} from 'react'

const Experience = () => {

    const [workExperience, setWorkExperience] = useState({
        company: '',
        position: '',
        description: '',
        startDate: '',
        endDate: '',
        experience: false,
    });

    const handleCompanyChange = (e) => {
        setWorkExperience({ ...workExperience, company: e.target.value,  })
    }

    const handlePositionChange = (e) => {
        setWorkExperience({ ...workExperience, position: e.target.value,  })
    }

    const handleDescriptionChange = (e) => {
        setWorkExperience({ ...workExperience, description: e.target.value,  })
    }

    const handleStartDateChange = (e) => {
        setWorkExperience({ ...workExperience, startDate: e.target.value,  })
    }

    const handleEndDateChange = (e) => {
        setWorkExperience({ ...workExperience, endDate: e.target.value,  })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(workExperience);
        setWorkExperience({
            company: workExperience.company,
            position: workExperience.position,
            description: workExperience.description,
            startDate: workExperience.startDate,
            endDate: workExperience.endDate,
            experience: true,
        })
    }   

  return (
   <div className="">
            <form onSubmit={handleSubmit}>
            <div className='flex flex-col'>
                    <h2 className="text-5xl font-semibold text-fuchsia-300 my-5">Work Experience</h2>

                <div className='flex flex-col justify-self-center items-center'>

                    <input 
                    className='p-2 my-4 rounded-lg border-2 w-80 hover:border-purple-500/50'
                    type="text" 
                    value={workExperience.company}
                    placeholder='Company'
                    onChange={handleCompanyChange}
                    />

                    <input 
                    className='p-2 my-4 rounded-lg border-2 w-80 hover:border-purple-500/50'
                    type="text" 
                    value={workExperience.position} 
                    placeholder='Position'
                    onChange={handlePositionChange}
                    />

                    <input
                    className='p-2 my-4 rounded-lg border-2 w-80 hover:border-purple-500/50'
                    type="text"
                    value={workExperience.description}
                    placeholder='Description'
                    onChange={handleDescriptionChange}
                    />

                    <label className='text-2xl font-semibold text-fuchsia-300 my-5'>Start Date</label>
                    <input
                    className='p-2 my-4 rounded-lg border-2 hover:border-purple-500/50'
                    type="date"
                    value={workExperience.startDate}
                    placeholder='Start Date'
                    onChange={handleStartDateChange}
                    />

                    <label className='text-2xl font-semibold text-fuchsia-300 my-5'>End Date</label>
                    <input
                    className='p-2 my-4 rounded-lg border-2 hover:border-purple-500/50'
                    type="date"
                    value={workExperience.endDate}
                    placeholder='End Date'
                    onChange={handleEndDateChange}
                    />
                    <button 
                    className='p-2.5 my-4 rounded-full border-2 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 
                    focus:outline-none focus:ring focus:ring-violet-300 text-white
                    transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'
                    type='submit'
                    onSubmit={handleSubmit}
                    >Save Changes</button>               
                 </div>

                    
            </div>

                <div className="stack">
                <Modal
                    company='Company:'
                    companyInfo={workExperience.company}
                    position='Position:'
                    positionInfo={workExperience.position}
                    description='Description'
                    descriptionInfo={workExperience.description}
                    startDate='Start Date:'
                    startDateInfo={workExperience.startDate}
                    endDate='End Date:'
                    endDateInfo={workExperience.endDate}
                    experience={workExperience.experience}
                    />
                </div>
            </form>
        </div>
  )
}

export default Experience