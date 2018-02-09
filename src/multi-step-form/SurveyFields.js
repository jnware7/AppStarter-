import React, { Component } from 'react'
import './msForm.css'

export default class SurveyFields extends Component{
  constructor(props) {
    super(props)
    this.state= {}
  }

  render() {
    return (
      <div>
        <h2>Survey Question</h2>
        <ul className="form-fields-f">
          <li>
            <label>App Name</label>
            <input type="text" ref="appName" defaultValue={this.props.fieldValues.appName} />
          </li>
          <li>
            <label>Brief App Description</label>
            <textarea rows="4" cols="50" ref="appDesc" defaultValue={this.props.fieldValues.appDesc}> </textarea>
          </li>
          <li>
            <label>Main App Image Url</label>
            <input type="text" ref="mainAppImg" defaultValue={this.props.fieldValues.mainAppImg} />
          </li>
          <li>
            <label>App Wireframe Image Url 1</label>
            <input type="text" ref="wireFrameImgUrl" defaultValue={this.props.fieldValues.wireFrameImgUrl} />
          </li>
          <li>
            <label>App Wireframe Description 1</label>
            <textarea rows="4" cols="50" ref="wireFrameText" defaultValue={this.props.fieldValues.wireFrameText}> </textarea>
          </li>
          <li>
            <label>App Wireframe Image Url 2</label>
            <input type="text" ref="wireFrameImgUrl2" defaultValue={this.props.fieldValues.wireFrameImgUrl2} />
          </li>
          <li>
            <label>App Wireframe Description 2</label>
            <textarea rows="4" cols="50" ref="wireFrameText2" defaultValue={this.props.fieldValues.wireFrameText2}> </textarea>
          </li>
          <li>
            <label>App Wireframe Image Url 3</label>
            <input type="text" ref="wireFrameImgUrl3" defaultValue={this.props.fieldValues.wireFrameImgUrl3} />
          </li>
          <li>
            <label>App Wireframe Description 3</label>
            <textarea rows="4" cols="50" ref="wireFrameText3" defaultValue={this.props.fieldValues.wireFrameText3}> </textarea>
          </li>


          <li className="form-footer-f">
            <button className="btn -default pull-left-f" onClick={this.props.previousStep}>Back</button>
            <button className="btn -primary pull-right-f" onClick={this.nextStep}>Save &amp; Continue</button>
          </li>
        </ul>
      </div>
    )
  }

  nextStep() {
    console.log('bob ====>', this)
    // Get values via querySelector
    var data = {
      appName :  this.refs.appName.getDOMNode().value,
      appDesc :  this.refs.appDesc.getDOMNode().value,
      mainAppImg :  this.refs.mainAppImg.getDOMNode().value,
      wireframeImgUrl : this.refs.wireFrameImgUrl.getDOMNode().value,
      wireframeText : this.refs.wireFrameText.getDOMNode().value,
      wireframeImgUrl2 : this.refs.wireFrameImgUrl2.getDOMNode().value,
      wireframeText2 : this.refs.wireFrameText2.getDOMNode().value,
      wireframeImgUrl3 : this.refs.wireFrameImgUrl3.getDOMNode().value,
      wireframeText3: this.refs.wireFrameText3.getDOMNode().value,
    }
    this.props.saveValues(data)
    this.props.nextStep()
  }
}
