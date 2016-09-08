import React from 'react'
import ReactDOM from 'react-dom'

import { Button } from 'react-bootstrap'

import PersonalInformation from './PersonalInformation'
import AvailabilityInformation from './AvailabilityInformation'
import EducationInformation from './EducationInformation'
import MilitaryInformation from './MilitaryInformation'
import PersonalReferences from './PersonalReferences'
import EmploymentInformation from './EmploymentInformation'

import MaskedInput from './utils/MaskedInput'
require('bootstrap-validator')
const serialize = require('form-serialize')


export default class Component extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      formValidated: false
    }

    // bind methods
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    const self = this
    $(ReactDOM.findDOMNode(this.refs.form)).validator().on('submit', function (e) {
      let validated

      if (e.isDefaultPrevented()) {
        validated = this.state.formValidated ? validated : false
      } else { validated = true }

      if (validated) {
        self.setState({
          formValidated: validated
        })
      }
    })
  }

  handleSubmit (e) {
    e.preventDefault()

    if (!this.state.formValidated) { return null }

    const form = ReactDOM.findDOMNode(this.refs.form)
    // var inputs = form.getElementsByTagName('input')
    // var formData = {}
    // for (var i = 0; i < inputs.length; i++) {
    //   formData[inputs[i].name] = inputs[i].value
    // }

    const formData = serialize(form, {hash: true})

    if (this.props.onSubmit) {
      this.props.onSubmit(formData)
    }
  }

  render () {
    let title = this.props.title || 'Job Application'

    return (
      <div>
        <h2>{title}</h2>

        <MaskedInput />

        <form data-toggle='validator' onSubmit={this.handleSubmit} ref='form'>

          <PersonalInformation />
          <AvailabilityInformation />
          <EducationInformation />
          <MilitaryInformation />
          <PersonalReferences />
          <EmploymentInformation />

          <p>
            <Button type='submit'>
              Submit
            </Button>
          </p>
        </form>
      </div>
    )
  }
}
