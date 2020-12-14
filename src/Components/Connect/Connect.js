import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import SignUp from './ConnectForm'

import './Connect.scss'

const Connect2 = () => (
  <Container fluid className='connect'>
    <Row>
      <Col>
        <p className='connect-title'>Let's Connect</p>
        <p className='connect-content'>Join our newsletter and stay informed about new products and special
           sales</p>
      </Col>
    </Row>
    <Row><Col><SignUp /></Col></Row>
  </Container>
)

export default Connect2
