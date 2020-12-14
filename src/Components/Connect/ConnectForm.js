import React, { Component } from 'react'

import { Form, Button, Col } from 'react-bootstrap'

import './ConnectForm.scss'

class SignUp extends Component {
  constructor () {
    super()

    this.state = {
      email : ''
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    alert('Sorry, this feature is not yet available.')
  }

  render () {
    const { value } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Row className='justify-content-center'>
          <Col lg={{ span: 4 }}>
              <Form.Group>
              <Form.Control
                  autoComplete='off'
                  className='connect-form'
                  type='email'
                  name='email'
                  placeholder='email'
                  value={value}
                  onChange={this.handleChange}
                />
            </Form.Group>
            </Col>
            <Col lg={{ span: 2 }}>
            <Button
              className='connect-button'
              type='submit'
            >
              Join Now
            </Button>
          </Col>
        </Form.Row>
      </Form>
    )
  }
}

export default SignUp
