import React,{ Component } from 'react'
import './msForm.css'

class AccountFields extends Component {
  constructor(props) {
    super(props)
  this.nextStep = this.nextStep.bind(this);
  }

  render() {
    return (
      <div>
        <h2>Account Details</h2>
        <ul className="form-fields-f">
          <li>
            <label>Name</label>
            <input type="text" ref="name" defaultValue={this.props.fieldValues.name} required/>
          </li>
          <li>
            <label>Password</label>
            <input type="password" ref="password" defaultValue={this.props.fieldValues.password} required/>
          </li>
          <li>
            <label>Email</label>
            <input type="email" ref="email" defaultValue={this.props.fieldValues.email} required/>
          </li>
          <li>
            <label>User Profile Pic</label>
            <input type="text" ref="userProfilePic" defaultValue={this.props.fieldValues.userProfilePic} required/>
          </li>
          <li className="form-footer">
            <button className="btn -primary pull-right" onClick={this.nextStep.bind(this)}>Save &amp; Continue</button>
          </li>
        </ul>
      </div>

    )
  }

 nextStep(e) {
    e.preventDefault()
    console.log(this);
    // Get values via this.refs
    var data = {
      name     : this.refs.name.value,
      password : this.refs.password.value,
      email    : this.refs.email.value,
      userProfilePic  : this.refs.userProfilePic.value,
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
}


export default AccountFields
