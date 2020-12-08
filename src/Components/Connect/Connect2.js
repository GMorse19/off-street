import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import SignUp from './ConnectForm'
// import { stock } from '../../helpers/images/Stock/stockArray'

import './Connect2.scss'

const Connect2 = () => (
  <Container>
    <Row>
      <Col>
        <p>Let's Connect</p>
        <p>Join our newsletter and stay informed about new products and special
           sales</p>
      </Col>
    </Row>
    <Row><Col><SignUp /></Col></Row>
  </Container>
)

export default Connect2
