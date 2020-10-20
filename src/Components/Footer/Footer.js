import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import './Footer.scss'

const Footer = () => (
    <div className='footer'>
    <Container className='footer-container'>
    <div className=''>
      <Row>
        <Col>
            <h4 className='link-header'>Quick Links</h4>
            <h6><a className='spacing a-link-menu' href='/'>Flags</a></h6>
            <h6><a className='spacing a-link-menu' href='/'>Byrd Houses</a></h6>
            <h6><a className='spacing a-link-menu' href='/'>Chalk Boards</a></h6>
        </Col>
        <Col>
        <div className=''>
            <h4 className='link-header'>Contact Us</h4>
            <h6><a className='spacing a-link-menu' href='/'>Email</a></h6>
            <h6><a className='spacing a-link-menu' href='/'>Phone</a></h6>
            <h6><a className='spacing a-link-menu' href='#/about'>AboutPage</a></h6>
        </div>
        </Col>
      </Row>
      </div>
    </Container>
    </div>
)

export default Footer;
