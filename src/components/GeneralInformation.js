import React, { Component } from 'react'
import Modal from './Modal'
import './input.css'
import Submit from './Submit'

class GeneralInformation extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        general: false,
      }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.firstName)
        console.log(this.state.lastName)
        console.log(this.state.email)
        console.log(this.state.phone)
        console.log("submit from general information")
        this.setState({
            general: true,
        })
    }

    firstNameChange = (event) => {
        this.setState({
            firstName: event.target.value,
        })
    }

    lastNameChange = (event) => {
        this.setState({
            lastName: event.target.value,
        })
    }

    emailChange = (event) => {
        this.setState({
            email: event.target.value,
        })
    }

    phoneChange = (event) => {
        this.setState({
            phone: event.target.value,
        })
    }

  render() {
    const { firstName, lastName, email, phone } = this.state

    return (
        <div className="">
        <form onSubmit={this.handleSubmit}>
            <div className='stack'>
                <h1 className='heading'>InstaResume.io</h1>
                <h2 className='generalInfo'>General Information</h2>
                <input 
                className='formInput'
                type="text" 
                value={firstName} 
                placeholder='First Name'
                onChange={this.firstNameChange}
                />

                <input 
                className='formInput'
                type="text" 
                value={lastName} 
                placeholder='Last Name'
                onChange={this.lastNameChange}
                />

                <input
                className='formInput'
                type="email"
                value={email}
                placeholder='Email'
                onChange={this.emailChange}
                />

                <input
                className='formInput'
                type="number"
                value={phone}
                placeholder='Phone'
                onChange={this.phoneChange}
                />

                <button className='submitButton' type='submit'>Done</button>
            </div>
            
            <div className='stack'>
                <Modal 
                name='Name:'
                first={firstName}
                last={lastName}
                email='Email:'
                emailInfo={email}
                phone='Phone:'
                phoneInfo={phone}
                general={this.state.general}
                />
            </div>
        </form>
    </div>
     
    )
  }
}

export default GeneralInformation