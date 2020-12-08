import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import { icon } from '../../helpers/images/Icons/iconsArray'

import './Footer.scss'

const Footer = () => (
    <div className='footer'>
    <Container fluid className='footer-container'>
    <div>
      <Row>
        <Col xs={8} sm={5} lg={5} className='footer-col-contact'>
          <div>
            <p>Monday - Friday</p>
            <p>9am - 5pm EST</p>
            <p>T: (617)-555-5555</p>
            <p>E: offstreetcarpentry@notreal.com</p>
            <br />
            <p>1436 West Belchertown</p>
            <p>Boston MA 01110</p>
          </div>
        </Col>
        <Col xs={4} sm={2} lg={2} className='footer-col-links'>
          <div className='footer-link-div'>
            <p><a className='spacing a-link-menu' href='#shop'>Shop</a></p>
            <p><a className='spacing a-link-menu' href='#gallery'>Gallery</a></p>
            <p><a className='spacing a-link-menu' href='#donations'>Donations</a></p>
            <p><a className='spacing a-link-menu' href='#contact'>Contact</a></p>
            <p><a className='spacing a-link-menu' href='#how-to'>Media</a></p>
            <p><a className='spacing a-link-menu' href='#about'>About</a></p>
          </div>
        </Col>
        <Col sm={5} lg={5} className='footer-col-media'>
        <p>Off Street</p>
          <div>
          <a
            className='contact-page-link'
            href='https://www.facebook.com/Off-Street-Carpentry-100202445271783/'
          >
            <img
              src={icon.media.facebook}
              alt='facebook'
              width='30px'
            />
          </a>

          <a
            className='contact-page-link'
            href='https://twitter.com/offstreetbuild'
          >
            <img
              src={icon.media.twitter}
              alt='twitter'
              width='30px'
            />
          </a>

          <a
            className='contact-page-link'
            href='https://www.youtube.com/channel/UCHLzxuKSKxElBsdP6c8Kwvw'
          >
            <img
              src={icon.media.youtube}
              alt='pinterest'
              width='30px'
            />
          </a>

          <a
            className='contact-page-link'
            href='https://pin.it/5PPEqFm'
          >
            <img
              src={icon.media.pinterest}
              alt='You Tube'
              width='30px'
            />
          </a>
          <a
            className='contact-page-link'
            href='https://www.instagram.com/offstreetcarpentry/'
          >
            <img
              src={icon.media.instagram}
              alt='instagram'
              width='30px'
            />
          </a>
          </div>
        </Col>
      </Row>
      </div>
    </Container>
    </div>
)

export default Footer;
