import React, { Component } from 'react'
import AccountFields from'./AccountFields'
import Confirmation from './Confirmation'
import Success from './Success'
import SurveyFields from './SurveyFields'
import assign from 'object-assign'

// Idealy, these form values would be saved in another
// sort of persistence, like a Store via Flux pattern
let fieldValues = {
  name     : null,
  email    : null,
  password : null,
  appName  : null,
  appDesc  : null,
  mainAppImg : null,
  wireFrameImgUrl  : null,
  wireFrameText : null,
  wireFrameImgUrl2  : null,
  wireFrameText2 : null,
  wireFrameImgUrl3  : null,
  wireFrameText3 : null

}

class Registration extends Component{
constructor(props){
  super(props)
  this.state= {
    step : 1
  }
}



  saveValues(fields) {
    return function() {
      fieldValues = assign({}, fieldValues, fields)
    }.bind(this)()
  }

  nextStep() {
    this.setState({
      step : this.state.step + 1
    }).bind(this)()
  }

  previousStep() {
    this.setState({
      step : this.state.step - 1
    })
  }

  submitRegistration() {
    // Handle via ajax submitting the user data, upon
    // success return this.nextStop(). If it fails,
    // show the user the error but don't advance

    this.nextStep()
  }

  showStep() {
    switch (this.state.step) {
      case 1:
        return <AccountFields fieldValues={fieldValues}
                              nextStep={this.nextStep}
                              previousStep={this.previousStep}
                              saveValues={this.saveValues} />
      case 2:
        return <SurveyFields fieldValues={fieldValues}
                             nextStep={this.nextStep}
                             previousStep={this.previousStep}
                             saveValues={this.saveValues} />
      case 3:
        return <Confirmation fieldValues={fieldValues}
                             previousStep={this.previousStep}
                             submitRegistration={this.submitRegistration} />
      case 4:
        return <Success fieldValues={fieldValues} />
    }
  }

  render() {
    var style = {
      width : (this.state.step / 4 * 100) + '%'
    }

    return (
      <main>
        <span className="progress-step-f">Step {this.state.step}</span>
        <progress className="progress-f" style={style}></progress>
        {this.showStep()}
      </main>
    )
  }
}

export default Registration
