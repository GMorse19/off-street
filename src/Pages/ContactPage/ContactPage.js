import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { icon } from '../../helpers/images/Icons/iconsArray'

import './ContactPage.scss'

const ContactPage = () => (
  <div className='contact-page'>
    <Container fluid>
      <Row>
        <Col className='heading-contact-div'>
            <h1 className='heading-contact'>Contact Off Street</h1>
        </Col>
      </Row>
      <Row className='contact-page-info'>
        <Col>
          <h4>CUSTOMER SERVICE</h4>
            <a className='contact-page-link' href='#/'>Email Customer Service</a>
            <h6>Monday - Friday</h6>
            <h6> 9am - 5pm ET</h6>
            <h6>Phone#
             <a className='contact-page-link' href='/'> (617)-555-5555</a>
            </h6>
        </Col>
        <Col>
          <h4>OFFICE</h4>
          <h6>4567 West Belcherton St.</h6>
          <h6>Boston, MA 014560</h6>
        </Col>
        <Col>
          <h4>CONNECT WITH US</h4>
          <a className='contact-page-link' href='/'>
            <img src={icon.media.facebook} alt='facebook' width='30px'/>
          </a><br />
          <a className='contact-page-link' href='/'>
            <img src={icon.media.twitter} alt='twitter' width='30px'/>
          </a><br />
          <a className='contact-page-link' href='/'>
            <img src={icon.media.pinterest} alt='pinterest' width='30px'/>
          </a><br />
        </Col>
      </Row>
    </Container>
  </div>
)

export default ContactPage
