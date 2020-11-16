import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import './Footer.scss'

const Footer = () => (
    <div className='footer'>
    <Container className='footer-container'>
    <div>
      <Row>
        <Col>
            <h4 className='link-header'>Quick Links</h4>
            <h6><a className='spacing a-link-menu' href='#shop'>Shop</a></h6>
            <h6><a className='spacing a-link-menu' href='#gallery'>Gallery</a></h6>
            <h6><a className='spacing a-link-menu' href='#donations'>Donations</a></h6>
        </Col>
        <Col>
        <div>
            <h4 className='link-header'>Who is Off Street</h4>
            <h6><a className='spacing a-link-menu' href='#contact'>Contact</a></h6>
            <h6><a className='spacing a-link-menu' href='#how-to'>Media</a></h6>
            <h6><a className='spacing a-link-menu' href='#about'>About</a></h6>
        </div>
        </Col>
      </Row>
      </div>
    </Container>
    </div>
)

export default Footer;
