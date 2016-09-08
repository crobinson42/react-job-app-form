import React from 'react'
import { Row, Col, Well, FormGroup, ControlLabel, Button } from 'react-bootstrap'

export default class EmploymentInformation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      terminated: false
    }
    this.getCheckBoxButtonStyle = this.getCheckBoxButtonStyle.bind(this)
  }

  getCheckBoxButtonStyle (n) {
    return (this.state[n]) ? 'success' : 'default'
  }

  renderButtonCheckboxText (x) {
    return x ? 'Y' : (<span className='text-muted'>N</span>)
  }

  renderFired () {
    if (this.state.terminated) {
      return (
        <div>
          <FormGroup>
            <ControlLabel>
              What was the reason?
            </ControlLabel>
            <textarea className='form-control' name='terminatedreason' />
          </FormGroup>
        </div>
      )
    }
  }

  render () {
    return (
      <Well>
        <h3>Employment Information</h3>
        <Row>
          <Col md={12} lg={6}>
          <div className='form-group'>
            <input type='hidden' name='terminated' value={this.state.terminated} />
            <Button onClick={() => {
                               this.setState({ terminated: !this.state.terminated })}} bsStyle={this.getCheckBoxButtonStyle('terminated')}>
              {this.renderButtonCheckboxText(this.state.terminated)}
            </Button>
            {' '} Have you ever been fired or asked to resign from a job?
          </div>
          {this.renderFired()}
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={6}>
          <FormGroup>
            <ControlLabel>
              Previous Employer #1
            </ControlLabel>
            <input
              className='form-control'
              type='text'
              name='previousemployer1'
              required />
          </FormGroup>
          <FormGroup>
            <ControlLabel>
              Job Title/Position
            </ControlLabel>
            <input
              className='form-control'
              type='text'
              name='previousemployerposition1'
              required />
          </FormGroup>
          <FormGroup>
            <ControlLabel>
              Reason for Leaving
            </ControlLabel>
            <input
              className='form-control'
              type='text'
              name='previousemployerreason1'
              required />
          </FormGroup>
          <FormGroup>
            <ControlLabel>
              Dates Employed (from/to)
            </ControlLabel>
            <input
              className='form-control'
              type='date'
              name='previousemployerfrom1'
              required />
            <input
              className='form-control'
              type='date'
              name='previousemployerto1'
              required />
          </FormGroup>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={12} lg={6}>
          <FormGroup>
            <ControlLabel>
              Previous Employer #2
            </ControlLabel>
            <input
              className='form-control'
              type='text'
              name='previousemployer2'
              required />
          </FormGroup>
          <FormGroup>
            <ControlLabel>
              Job Title/Position
            </ControlLabel>
            <input
              className='form-control'
              type='text'
              name='previousemployerposition2'
              required />
          </FormGroup>
          <FormGroup>
            <ControlLabel>
              Reason for Leaving
            </ControlLabel>
            <input
              className='form-control'
              type='text'
              name='previousemployerreason2'
              required />
          </FormGroup>
          <FormGroup>
            <ControlLabel>
              Dates Employed (from/to)
            </ControlLabel>
            <input
              className='form-control'
              type='date'
              name='previousemployerfrom2'
              required />
            <input
              className='form-control'
              type='date'
              name='previousemployerto2'
              required />
          </FormGroup>
          </Col>
        </Row>
      </Well>
    )
  }
}
