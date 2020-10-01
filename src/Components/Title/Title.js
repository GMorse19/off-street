import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Parallax } from 'react-scroll-parallax'

import './Title.scss'

const Title = () => (
  <div>
  <Container className='logo-container'>
    <Row>
      <Col>
        <Parallax className="custom-class logo-div" y={[-80, 80]} tagOuter="figure">
          <img className='home-logo' width='300px' src='./Logo/OSlogo.png' alt='rustic'/>
        </Parallax>
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
