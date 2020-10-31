import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import { Parallax } from 'react-scroll-parallax'

import './Title.scss'

import { logo } from '../../helpers/images/Logos/logosArray'

const Title = (props) => (
  <div>
    <Container className='logo-container'>
      <Row>

        <Col>
        <Parallax className="custom-class" y={[-50, 50]} tagOuter="figure">
          <img className='home-logo' src={logo[1]} alt='rustic'/>
        </Parallax>
          <Parallax className="custom-class" y={[-50, 50]} tagOuter="figure">
            <div className='title-div'>
              <h1 className='title'>Off Street</h1>
              
            </div>
          </Parallax>
        </Col>
        <Col>
            <h1 className='tagline'>{props.tagline}</h1>
            <h1 className='page-heading'>{props.heading}</h1>
            {props.tagline && <Button
              className='splash-shop-button'
              href='#shop'
              >SHOP</Button>}
        </Col>
      </Row>
    </Container>
  </div>
)

export default Title
