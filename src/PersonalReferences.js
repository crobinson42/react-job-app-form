import React from 'react'
import { Row, Col, Well, FormGroup, ControlLabel } from 'react-bootstrap'

export default class PersonalReferences extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Well>
        <h3>Personal References</h3>
        <p style={{ width: '400px' }} className='text-muted'>
          Providing references greatly increases your ability to be hired.
          References are used to verify information about an individual, their character,
          integrity, & professional relationships.
        </p>
        <Row>
          <Col md={12} lg={6}>
            <h4>Reference #1</h4>
            <FormGroup>
              <input
                className='form-control'
                type='text'
                name='referencename1'
                placeholder='Name' />
            </FormGroup>
            <FormGroup>
              <input
                className='form-control'
                type='text'
                name='referencephone1'
                placeholder='Phone' />
            </FormGroup>
            <FormGroup>
              <ControlLabel>
                Reference Notes
              </ControlLabel>
              <textarea className='form-control' name='referencenotes1' />
            </FormGroup>
          </Col>
          <Col md={12} lg={6}>
            <h4>Reference #2</h4>
            <FormGroup>
              <input
                className='form-control'
                type='text'
                name='referencename2'
                placeholder='Name' />
            </FormGroup>
            <FormGroup>
              <input
                className='form-control'
                type='text'
                name='referencephone2'
                placeholder='Phone' />
            </FormGroup>
            <FormGroup>
              <ControlLabel>
                Reference Notes
              </ControlLabel>
              <textarea className='form-control' name='referencenotes2' />
            </FormGroup>
          </Col>
        </Row>
      </Well>
    )
  }
}
