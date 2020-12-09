import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import { icon } from '../../helpers/images/Icons/iconsArray'

import Connect from '../Connect/Connect'

import './Footer.scss'

const Footer = () => (
    <div className='footer'>

    <Container fluid className='footer-container'>
    <div>
    <Connect />
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
            <p><a href='#shop'>Shop</a></p>
            <p><a href='#gallery'>Gallery</a></p>
            <p><a href='#donations'>Donations</a></p>
            <p><a href='#contact'>Contact</a></p>
            <p><a href='#how-to'>Media</a></p>
            <p><a href='#about'>About</a></p>
          </div>
        </Col>
        <Col sm={5} lg={5} className='footer-col-media'>
        <p>Off Street</p>
          <div>
          <a
            href='https://www.facebook.com/Off-Street-Carpentry-100202445271783/'
          >
            <img
              src={icon.media.facebookBW}
              alt='facebook'
            />
          </a>

          <a
            href='https://twitter.com/offstreetbuild'
          >
            <img
              src={icon.media.twitterBW}
              alt='twitter'
            />
          </a>

          <a
            href='https://www.youtube.com/channel/UCHLzxuKSKxElBsdP6c8Kwvw'
          >
            <img
              src={icon.media.youtubeBW}
              alt='pinterest'
            />
          </a>

          <a
            href='https://pin.it/5PPEqFm'
          >
            <img
              src={icon.media.pinterestBW}
              alt='You Tube'
            />
          </a>
          <a
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
