import React, { Component } from 'react'
import './msForm.css'

class Success extends Component{
  render() {
    return (
      <div>
        <h2>Successfully Registered!</h2>

        <p>Upon approval you will recieve an email with you account login info</p>
        <p>Thank you,</p>
        <p>App Trade</p>

      </div>
    )
  }
}

export default Success

  // <p>Please check your email <b>{this.props.fieldValues.email}</b> for a confirmation link to activate your account.</p>
