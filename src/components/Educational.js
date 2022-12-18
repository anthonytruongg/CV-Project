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
        console.log(this.state.school)
        console.log(this.state.degree)
        console.log(this.state.fieldOfStudy)
        console.log(this.state.startYear)
        console.log(this.state.endYear)
        console.log("submit from educational")
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
                <div className="stack">
                    <h2 className="generalInfo">Education</h2>
                    <input 
                    className='formInput'
                    type="text" 
                    value={school} 
                    placeholder='School'
                    onChange={this.schoolChange}
                    />

                    <input 
                    className='formInput'
                    type="text" 
                    value={degree} 
                    placeholder='Degree'
                    onChange={this.degreeChange}
                    />

                    <input
                    className='formInput'
                    type="text"
                    value={fieldOfStudy}
                    placeholder='Field of Study'
                    onChange={this.fieldOfStudyChange}
                    />

                    <label style={label}>Start Date</label>
                    <input
                    className='formInput'
                    type="date"
                    value={startYear}
                    placeholder='Start Date'
                    onChange={this.startYearChange}
                    />

                    <label style={label}>End Date</label>
                    <input
                    className='formInput'
                    type="date"
                    value={endYear}
                    placeholder='Graduation Date'
                    onChange={this.endYearChange}
                    />

                    <button className='submitButton' type='submit'>Done</button>

                    
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