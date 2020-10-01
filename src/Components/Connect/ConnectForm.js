import React, { Component } from 'react'

import { Form, Button } from 'react-bootstrap'

import './Connect.scss'

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

  handleSubmit = () => {
    console.log('Submit!')
  }

  render () {
    const { value } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
        <Form.Control
            autoComplete='off'
            className='form-input'
            type='email'
            name='email'
            placeholder='email'
            value={value}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button type='submit' className='form-button'>Submit</Button>
      </Form>
    )
  }
}

export default SignUp
