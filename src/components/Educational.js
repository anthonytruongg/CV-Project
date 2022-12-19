import React, { Component } from 'react'
import Modal from './Modal'
import './input.css'

const label = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'black',
    marginBottom: '10px',
}

class Educational extends Component {
    constructor(props) {
        super(props)

        this.state = {
            school: '',
            degree: '',
            fieldOfStudy: '',
            startYear: '',
            endYear: '',
            educational: false,
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            educational: true,
        })
    }

    schoolChange = (event) => {
        this.setState({
            school: event.target.value,
        })
    }

    degreeChange = (event) => {
        this.setState({
            degree: event.target.value,
        })
    }

    fieldOfStudyChange = (event) => {
        this.setState({
            fieldOfStudy: event.target.value,
        })
    }

    startYearChange = (event) => {
        this.setState({
            startYear: event.target.value,
        })
    }

    endYearChange = (event) => {
        this.setState({
            endYear: event.target.value,
        })
    }


  render() {
    const { school, degree, fieldOfStudy, startYear, endYear } = this.state
    return (
        <div className="">
            <form onSubmit={this.handleSubmit}>
            <div className='flex flex-col'>
                    <h2 className="text-5xl font-semibold text-fuchsia-300 my-5">Education</h2>

                <div className='flex flex-col justify-self-center items-center'>

                    <input 
                    className='p-2 my-4 rounded-lg border-2 w-80 hover:border-purple-500/50'
                    type="text" 
                    value={school} 
                    placeholder='School'
                    onChange={this.schoolChange}
                    />

                    <input 
                    className='p-2 my-4 rounded-lg border-2 w-80 hover:border-purple-500/50'
                    type="text" 
                    value={degree} 
                    placeholder='Degree'
                    onChange={this.degreeChange}
                    />

                    <input
                    className='p-2 my-4 rounded-lg border-2 w-80 hover:border-purple-500/50'
                    type="text"
                    value={fieldOfStudy}
                    placeholder='Field of Study'
                    onChange={this.fieldOfStudyChange}
                    />

                    <label className='text-2xl font-semibold text-fuchsia-300 my-5'>Start Date</label>
                    <input
                    className='p-2 my-4 rounded-lg border-2 hover:border-purple-500/50'
                    type="date"
                    value={startYear}
                    placeholder='Start Date'
                    onChange={this.startYearChange}
                    />

                    <label className='text-2xl font-semibold text-fuchsia-300 my-5'>End Date</label>
                    <input
                    className='p-2 my-4 rounded-lg border-2 hover:border-purple-500/50'
                    type="date"
                    value={endYear}
                    placeholder='Graduation Date'
                    onChange={this.endYearChange}
                    />

                    <button 
                    className='p-2.5 my-4 rounded-full border-2 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 
                    focus:outline-none focus:ring focus:ring-violet-300 text-white
                    transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'
                    type='submit'>Save Changes</button>               
                 </div>

                    
            </div>

                <div className="stack">
                <Modal
                    school='School:'
                    schoolInfo={school}
                    degree='Degree:'
                    degreeInfo={degree}
                    fieldOfStudy='Field of Study:'
                    fieldOfStudyInfo={fieldOfStudy}
                    startYear='Start Date:'
                    startYearInfo={startYear}
                    endYear='End Date:'
                    endYearInfo={endYear}
                    educational={this.state.educational}
                    />
                </div>
            </form>
        </div>
    )
  }
}

export default Educational