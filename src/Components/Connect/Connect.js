import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import SignUp from './ConnectForm'
import { stock } from '../../helpers/images/Stock/stockArray'

import './Connect.scss'

const Connect = () => (
  <div id='contact' className='contact-div'>
    <Container fluid className='contact-container'>
      <Row className='row'>
        <Col className='cream' xs={12} md={6}>
          <div className='display'>
            <img className='carpenter' src={stock.stock.workShop} alt='carpenter' />
            <img className='carpenter' src={stock.stock.workShop} alt='carpenter' />
          </div>
        </Col>
        <Col className='black' xs={12} md={6}>
          <div className='black-div'>
          <p className='connect-header'>CONNECT</p>
            <p className='black-para'>
            Join our news letter and stay informed
            of new products and sales.
            </p>
            <SignUp />
          </div>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Connect
