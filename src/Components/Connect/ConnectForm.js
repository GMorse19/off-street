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
    alert('Something went wrong, try again another time.')
  }

  render () {
    const { value } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Row>
          <Col md={{ span: 5, offset: 2 }}>
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
            <Col md={{ span: 3 }}>
            <Button
              className='connect-button'
              type='submit'
            >
              Submit
            </Button>
          </Col>
        </Form.Row>
      </Form>
    )
  }
}

export default SignUp
