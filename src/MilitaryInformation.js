import React from 'react'
import { Row, Col, Well, FormGroup, ControlLabel, Button } from 'react-bootstrap'

export default class MilitaryInformation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      military: false
    }

    this.getCheckBoxButtonStyle = this.getCheckBoxButtonStyle.bind(this)
  }

  getCheckBoxButtonStyle (n) {
    return (this.state[n]) ? 'success' : 'default'
  }

  renderButtonCheckboxText (x) {
    return x ? 'Y' : (<span className='text-muted'>N</span>)
  }

  renderMilitaryForms () {
    if (this.state.military) {
      return (
        <div>
          <FormGroup>
            <ControlLabel>Branch</ControlLabel>
            <input
              className='form-control'
              type='text'
              name='militarybranch' />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Rank/Pay Grade</ControlLabel>
            <input
              className='form-control'
              type='text'
              name='militaryrank' />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Job/MOS</ControlLabel>
            <input
              className='form-control'
              type='text'
              name='militarymos' />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Discharge Status</ControlLabel>
            <input
              className='form-control'
              type='text'
              name='militarybranch' />
          </FormGroup>
        </div>
      )
    }
  }

  render () {
    return (
      <Well>
        <h3>Uniformed Service Information</h3>
        <Row>
          <Col md={12} lg={6}>
          <div className='form-group'>
            <input type='hidden' name='military' value={this.state.military} />
            <Button onClick={() => {
                               this.setState({ military: !this.state.military })}} bsStyle={this.getCheckBoxButtonStyle('military')}>
              {this.renderButtonCheckboxText(this.state.military)}
            </Button>
            {' '} Served in the US Armed Forces
          </div>
          {this.renderMilitaryForms()}
          </Col>
        </Row>
      </Well>
    )
  }
}
