import React from 'react'
import { Row, Col, Well, FormGroup, ControlLabel } from 'react-bootstrap'

export default class EducationInformation extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    return (
      <Well>
        <h3>Education Information</h3>
        <Row>
          <Col md={12} lg={6}>
          <FormGroup>
            <ControlLabel>High School</ControlLabel>
            <input
              className='form-control'
              type='text'
              name='highschool' />
          </FormGroup>
          <FormGroup>
            <ControlLabel>College</ControlLabel>
            <input
              className='form-control'
              type='text'
              name='college' />
          </FormGroup>
          </Col>
        </Row>
      </Well>
    )
  }
}
