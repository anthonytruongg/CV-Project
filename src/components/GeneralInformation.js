import React, { Component } from 'react'
import Modal from './Modal'
const stack = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
}
const generalInfo = {
    fontSize: '50px',
    color: 'purple'
}

const label = {
    fontSize: '40px',
    color: 'grey',
    fontWeight: 'bold',
    margin: '10px 0',
    padding: '5px'
}

const formInput = {
    width: '300px',
    height: '30px',
    margin: '10px 0',
    padding: '5px',
    borderRadius: '10px',
    border: '2px solid #ccc',
    backgroundColor: 'white',
}

const submitButton = {
    width: '100px',
    height: '40px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '20px',
    color: 'purple',
}

const card = {
    width: '300px',
    height: '300px',
    padding: '50px',
    borderRadius: '10px',
    backgroundColor: 'bisque',
}


class GeneralInformation extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        
      }
    }

    handleSubmit = (event) => {
       
        event.preventDefault()
        console.log(this.state.firstName)
        console.log(this.state.lastName)
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
        <form onSubmit={this.handleSubmit}>
            <div style={stack}>
                <h1 className='heading'>InstaResume.io</h1>
                <h2 style={generalInfo}>General Information</h2>
                <input 
                style={formInput} 
                type="text" 
                value={firstName} 
                placeholder='First Name'
                onChange={this.firstNameChange}
                />

                <input 
                style={formInput}
                type="text" 
                value={lastName} 
                placeholder='Last Name'
                onChange={this.lastNameChange}
                />

                <input
                style={formInput}
                type="email"
                value={email}
                placeholder='Email'
                onChange={this.emailChange}
                />

                <input
                style={formInput}
                type="number"
                value={phone}
                placeholder='Phone (xxx-xxx-xxxx)'
                onChange={this.phoneChange}
                />

                <button style={submitButton} type='submit'>Submit</button>
            </div>
            
            <div style={stack}>
                <Modal 
                name='Name:'
                first={firstName}
                last={lastName}
                email='Email:'
                emailInfo={email}
                phone='Phone:'
                phoneInfo={phone}
                />
            </div>

        </form>
     
    )
  }
}

export default GeneralInformation