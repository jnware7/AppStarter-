import React, { Component } from'react'
import './msForm.css'

class Confirmation extends Component{
  render() {
    return (
      <div>
        <h2>Confirm Registration</h2>
        <ul>
          <li><b>Name:</b> {this.props.fieldValues.name}</li>
          <li><b>Email:</b> {this.props.fieldValues.email}</li>
          <li><b>User Profile Pic:</b>  {this.props.fieldValues.userProfilePic}</li>
          <li><b>Main App Img Url:</b>  {this.props.fieldValues.mainAppImg}</li>
<br/>
          <li><b>wireFrameImgUrl:</b>  {this.props.fieldValues.wireFrameImgUrl}</li>
          <li><b>wireFrameText:</b>  {this.props.fieldValues.wireFrameText}</li>
<br/>
          <li><b>wireFrameImgUrl2:</b>  {this.props.fieldValues.wireFrameImgUrl2}</li>
          <li><b>wireFrameText2:</b>  {this.props.fieldValues.wireFrameText2}</li>
<br/>
          <li><b>wireFrameImgUrl3:</b>  {this.props.fieldValues.wireFrameImgUrl3}</li>
          <li><b>wireFrameText3:</b>  {this.props.fieldValues.wireFrameText3}</li>

        </ul>
        <ul className="form-fields-f">
          <li className="form-footer-f">
            <button className="btn -default pull-left-f " onClick={this.props.previousStep}>Back</button>
            <button className="btn -primary pull-right-f" onClick={this.props.submitRegistration}>Submit Registration</button>
          </li>
        </ul>
      </div>
    )
  }
}

export default Confirmation
