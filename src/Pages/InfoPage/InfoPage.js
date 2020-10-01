import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import { Container, Row, Col } from 'react-bootstrap'


import './InfoPage.scss'

const InfoPage = () => (
  <div className='info-page'>
    <Container className=''>
      <Row>
        <Col>
          <Parallax className="custom-class" y={[40, -40]} tagOuter="figure">
            <div className='info1'>
              <img className='flag-image' src='./Flags/B&W/B&W-angle.jpg' alt='black and white flag'/>
            </div>
          </Parallax>
        </Col>
        <Col></Col>
        <Col>
          <Parallax className="custom-class" y={[-70, 70]} tagOuter="figure">
            <div className='para-div'>
            <h1>Rescue Wood</h1>
              <h6>All pieces are hand crafted from rescued wood that would normally be tossed
              aside on most construction sites. Whether it is demolition debris or scraps from new
              construction framing, Off Street's mission nis to leave no wood behind.</h6>
            </div>
          </Parallax>
        </Col>
        <Col></Col>
        </Row>
        <Row>
        <Col></Col>
        <Col>
          <Parallax className="custom-class" y={[-50, 50]} tagOuter="figure">
            <div className='image-div'>
              <img className='flag-image' src='./Flags/RedWhite&Blue/Flag-flat.jpg' alt='black and white flag'/>
            </div>
          </Parallax>
        </Col>
        <Col></Col>
        <Col>
          <Parallax className="custom-class" y={[90, -90]} tagOuter="figure">
            <div className='image-div'>
              <img className='flag-image' src='./Chalk.png' alt='black and white flag'/>
            </div>
          </Parallax>
        </Col>
      </Row>
    </Container>
  </div>
)

export default InfoPage
