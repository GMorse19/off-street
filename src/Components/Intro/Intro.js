import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Parallax } from 'react-scroll-parallax'

import './Intro.scss'

const Intro = () => (
  <div className='intro-container'>
    <div className='intro-para'>
      <Container fluid>

        <Row className='row row-padding'>
          <Col className='margin-top' xs={12} md={6}>
            <Parallax className="custom-class" y={[30, -20]} tagOuter="figure">
              <div className='image-div'>
                <img className='flag-image' src='./old-boards.jpg' alt='old boards and flag' />
              </div>
            </Parallax>
          </Col>
          <Col xs={12} md={6}>
            <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
              <p className='para-margin-left'>Off Street Carpentry was born from
              over twenty five years of witnessing continuous
              waste amongst the building trades.
              </p>
            </Parallax>
          </Col>
        </Row>

        <Row className='row-padding'>
          <Col xs={12} md={6}>
            <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
              <p className='para-margin-right'> Often times on job sites, shorter pieces of wood
              will be disposed of. They clutter up the work area and are generally moved around so
              much that they become a nuisance. It's just simply easier to throw them in the
              dumpster.
              </p>
            </Parallax>
          </Col>
          <Col className='margin-top' xs={12} md={6}>
            <Parallax className="custom-class" y={[-60, 60]} tagOuter="figure">
              <div className='image-div'>
                <img className='flag-image' src='./old-boards.jpg' alt='Chalk Board' />
              </div>
            </Parallax>
          </Col>
        </Row>

        <Row className='row row-padding full-width'>
          <Col>
            <p>
            Knowing that there could be a better, creative way
            to make use of this waste, a true visionary set out to
            find different ways to rescue these forlorn timbers.
            </p>
          </Col>
        </Row>

        <Row className='row-padding'>
          <Col xs={12} md={6}>
            <Parallax scrollAxis='horizontal' className="custom-class" x={[-50, 30]} tagOuter="figure">
              <div className='image-div-about'>
                <img className='flag-image' src='./old-boards.jpg' alt='Chalk Board' />
              </div>
            </Parallax>
          </Col>
        </Row>

        <Row className='row-padding'>
          <Col xs={12} md={6}>
            <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
              <p className='para-margin-right'>
              Good old fashioned American entrepreneurship sparked the first product off the line,
              Ole' Glory herself. The stars and stripes not only began the journey, but it also opened the
              door for many more creations to come.
              </p>
            </Parallax>
          </Col>
          <Col className='margin-top margin-bottom' xs={12} md={6}>
            <Parallax className="custom-class" y={[-90, 100]} tagOuter="figure">
              <div className='image-div'>
                <img className='flag-image2' src='./Flags/RedLine/FireFlagCutOut.jpg' alt='Stars and Stripes' />
              </div>
            </Parallax>
          </Col>
        </Row>



      </Container>
    </div>
  </div>
)

export default Intro
