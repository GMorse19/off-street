import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Parallax } from 'react-scroll-parallax'

import './Title.scss'

import { logo } from '../../helpers/images/Logos/logosArray'

const Title = (props) => (
  <div>
    <Container className='logo-container'>
      <Row>
        <Col>
          <Parallax className="custom-class logo-div" y={[-50, 50]} tagOuter="figure">
            <img className='home-logo' width='300px' src={logo[1]} alt='rustic'/>
          </Parallax>
          <h1 className='page-heading'>{props.heading}</h1>
        </Col>

        <Col>
          <Parallax className="custom-class" y={[-50, 50]} tagOuter="figure">
            <div className='title-div'>
              <h1 className='title'>Off Street</h1>
              <h5>Carpentry with a re-purpose</h5>
            </div>
          </Parallax>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Title
