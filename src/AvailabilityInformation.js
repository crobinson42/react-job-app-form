import React from 'react'
import { Row, Col, Well, FormGroup, ControlLabel, Button } from 'react-bootstrap'
import ReactAvailabilityForm from 'react-availability-form'

export default class AvailabilityInformation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      inputFullTime: false,
      inputPartTime: false,
      inputOverTime: false,
      availability: {}
    }

    // bind methods
    this.clickAllShifts = this.clickAllShifts.bind(this)
  }

  clickAllShifts () {
    this.refs.availability.clickAllShifts()
  }

  getCheckBoxButtonStyle (n) {
    return (this.state[n]) ? 'success' : 'default'
  }

  renderButtonCheckboxText (x) {
    return x ? 'Y' : (<span className='text-muted'>N</span>)
  }

  render () {
    return (
      <Well>
        <h3>Availability Information</h3>
        <Row>
          <Col md={12} lg={6}>
          <div className='form-group'>
            <input type='hidden' name='available-fulltime' value={this.state.inputFullTime} />
            <Button onClick={() => {
                               this.setState({ inputFullTime: !this.state.inputFullTime })}} bsStyle={this.getCheckBoxButtonStyle('inputFullTime')}>
              {this.renderButtonCheckboxText(this.state.inputFullTime)}
            </Button>
            {' '} Available Full Time (28 or more hrs per week)
          </div>
          <div className='form-group'>
            <input type='hidden' name='available-parttime' value={this.state.inputPartTime} />
            <Button onClick={() => {
                               this.setState({ inputPartTime: !this.state.inputPartTime })}} bsStyle={this.getCheckBoxButtonStyle('inputPartTime')}>
              {this.renderButtonCheckboxText(this.state.inputPartTime)}
            </Button>
            {' '} Available Part Time (less than 28 hrs per week)
          </div>
          <div className='form-group'>
            <input type='hidden' name='available-overttime' value={this.state.inputOverTime} />
            <Button onClick={() => {
                               this.setState({ inputOverTime: !this.state.inputOverTime })}} bsStyle={this.getCheckBoxButtonStyle('inputOverTime')}>
              {this.renderButtonCheckboxText(this.state.inputOverTime)}
            </Button>
            {' '} Available for Overtime (40+ hours per week)
          </div>
          </Col>
        </Row>
        <div style={{ width: '400px' }}>
          <h5>How many days after hire date can you start working?</h5>
          <FormGroup>
            <input
              type='number'
              className='form-control'
              name='availablestart'
              required />
          </FormGroup>
        </div>
        <div className='text-primary'>
          <h4>What Shifts Are You Available To Work?</h4>
        </div>
        <ReactAvailabilityForm ref='availability' onChange={(a) => {
                                                              this.setState({ availability: a})}} />
        <input type='hidden' name='availability' value={JSON.stringify(this.state.availability)} />


        <Row>
          <Col md={12} lg={6}>
            <FormGroup>
              <ControlLabel>
                Please tell us any other scheduling or availability considerations, ie: school, children, etc.
              </ControlLabel>
              <textarea className='form-control' name='schedulenotes' placeholder='Other Scheduling/Availability Information' />
            </FormGroup>
          </Col>
        </Row>
      </Well>
    )
  }
}
