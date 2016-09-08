import React from 'react'
import { Row, Col, Well, FormGroup, ControlLabel } from 'react-bootstrap'

export default class PersonalInformation extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    return (
      <Well>
        <h3>Personal Information</h3>
        <Row>
          <Col md={12} lg={6}>
          <FormGroup>
            <input
              className='form-control'
              type='text'
              name='firstname'
              placeholder='First Name'
              required />
          </FormGroup>
          <FormGroup>
            <input
              className='form-control'
              type='text'
              name='lastname'
              placeholder='Last Name'
              required />
          </FormGroup>
          <FormGroup>
            <input
              className='form-control'
              type='text'
              name='middleinitial'
              placeholder='Middle Initial'
              maxLength={1} />
          </FormGroup>
          </Col>
          <div className='hidden-lg'>
            <hr />
          </div>
          <Col md={12} lg={6}>
          <FormGroup>
            <input
              className='form-control'
              type='text'
              name='address'
              placeholder='Address'
              required />
          </FormGroup>
          <FormGroup>
            <input
              className='form-control'
              type='text'
              name='city'
              placeholder='City'
              required />
          </FormGroup>
          <FormGroup>
            <input
              className='form-control'
              type='text'
              name='state'
              placeholder='State'
              required
              maxLength={2} />
          </FormGroup>
          <FormGroup>
            <input
              className='form-control'
              type='text'
              name='zip'
              placeholder='Zip'
              required
              maxLength={5} />
          </FormGroup>
          </Col>
        </Row>
        <Row>
          <div className='hidden-lg'>
            <hr />
          </div>
        </Row>
        <Row>
          <Col md={12} lg={6}>
          <FormGroup>
            <input
              className='form-control'
              type='tel'
              name='phone'
              placeholder='Phone'
              data-format='(999) 999-9999'
              required />
          </FormGroup>
          <FormGroup>
            <input
              className='form-control'
              type='tel'
              name='alternate'
              placeholder='Alternate Phone'
              data-format='(999) 999-9999' />
          </FormGroup>
          <FormGroup>
            <input
              className='form-control'
              type='email'
              name='email'
              placeholder='Email Address'
              required />
          </FormGroup>
          </Col>
          <Col md={12} lg={6}>
          <FormGroup>
            <FormGroup>
              <ControlLabel>Date of Birth</ControlLabel>
              <input
                type='date'
                className='form-control'
                name='dob'
                required />
            </FormGroup>
            <FormGroup>
              <input
                type='text'
                className='form-control'
                name='social'
                placeholder='Social Security #'
                required />
            </FormGroup>
          </FormGroup>
          </Col>
        </Row>
      </Well>
    )
  }
}
