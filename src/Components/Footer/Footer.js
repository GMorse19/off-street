import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import { icon } from '../../helpers/images/Icons/iconsArray'

import Connect2 from '../Connect/Connect2'

import './Footer.scss'

const Footer = () => (
    <div className='footer'>
    <Connect2 />
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
              src={icon.media.facebookBW}
              alt='facebook'
            />
          </a>

          <a
            className='contact-page-link'
            href='https://twitter.com/offstreetbuild'
          >
            <img
              src={icon.media.twitterBW}
              alt='twitter'
            />
          </a>

          <a
            className='contact-page-link'
            href='https://www.youtube.com/channel/UCHLzxuKSKxElBsdP6c8Kwvw'
          >
            <img
              src={icon.media.youtubeBW}
              alt='pinterest'
            />
          </a>

          <a
            className='contact-page-link'
            href='https://pin.it/5PPEqFm'
          >
            <img
              src={icon.media.pinterestBW}
              alt='You Tube'
            />
          </a>
          <a
            className='contact-page-link'
            href='https://www.instagram.com/offstreetcarpentry/'
          >
            <img
              src={icon.media.instagramBW}
              alt='instagram'
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
