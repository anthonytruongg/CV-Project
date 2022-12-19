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
            <div className='flex flex-col'>
                <h1 className='text-7xl text-purple-500 font-bold my-5'>InstaResume.io</h1>
                <h2 className='text-5xl font-semibold text-fuchsia-300 my-5'>General Information</h2>

                <div className='flex flex-col justify-self-center items-center'>
                    <input 
                    className='p-2 my-4 rounded-lg border-2 w-80 hover:border-purple-500/50'
                    type="text" 
                    value={firstName} 
                    placeholder='First Name'
                    onChange={this.firstNameChange}
                    />

                    <input 
                    className='p-2 my-4 rounded-lg border-2 w-80 hover:border-purple-500/50'
                    type="text" 
                    value={lastName} 
                    placeholder='Last Name'
                    onChange={this.lastNameChange}
                    />

                    <input
                    className='p-2 my-4 rounded-lg border-2 w-80 hover:border-purple-500/50'
                    type="email"
                    value={email}
                    placeholder='Email'
                    onChange={this.emailChange}
                    />

                    <input
                    className='p-2 my-4 rounded-lg border-2 hover:border-purple-500/50'
                    type="number"
                    value={phone}
                    placeholder='Phone'
                    onChange={this.phoneChange}
                    />

                    <button 
                    className='p-2.5 my-4 rounded-full border-2 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 
                    focus:outline-none focus:ring focus:ring-violet-300 text-white
                    transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'
                    type='submit'>Save Changes</button>
                </div>
              
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