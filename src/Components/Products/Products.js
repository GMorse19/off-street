import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import { Container, Row, Col } from 'react-bootstrap'

import ProductDescription from './ProductDescription/ProductDescription'
import content from './ProductDescription/Content'

import './Products.scss'

const Products = () => (
  <div className='info-section' id='shop'>
    <Container className='shop-container'>
      <Row className='rows'>
      <Col></Col>
        <Col>
          <div className='image-wrapper'>
            <div className='image-div'>
              <img className='flag-image' src='./Flags/RedWhite&Blue/FlagCutOut.png' alt='Stars and Stripes' />
            </div>

            <ProductDescription
              title={content.one.title}
              description={content.one.description}
            />

              <Parallax className="custom-class" y={[-90, 100]} tagOuter="figure">
                <img className='home-logo-gallery' alt='logo' src='./Logo/OSLogo.png'/>
              </Parallax>
          </div>
        </Col>
        <Col></Col>
      </Row>
      <Row className='rows'>
      <Col></Col>
        <Col>
          <div className='image-wrapper'>
            <div className='image-div'>
              <img className='flag-image' src='./old-boards.jpg' alt='Chalk Board' />
            </div>
            
            <ProductDescription
              title={content.two.title}
              description={content.two.description}
            />

          <Parallax className="custom-class" y={[-90, 100]} tagOuter="figure">
            <img className='home-logo-gallery' alt='logo' src='./Logo/OSLogo.png'/>
          </Parallax>
          </div>
        </Col>
        <Col></Col>
      </Row>
      <Row className='rows'>
      <Col></Col>
        <Col>
          <div className='image-wrapper'>
            <div className='image-div'>
              <img className='flag-image' src='./Chalk.png' alt='Chalk Board' />
            </div>

            <ProductDescription
              title={content.three.title}
              description={content.three.description}
            />

          <Parallax className="custom-class" y={[-90, 100]} tagOuter="figure">
            <img className='home-logo-gallery' alt='logo' src='./Logo/OSLogo.png'/>
          </Parallax>
          </div>
        </Col>
        <Col></Col>
      </Row>
      <Row className='rows'>
      <Col></Col>
        <Col>
          <div className='image-wrapper'>
            <div className='image-div'>
              <img className='flag-image' src='./birdHouse.jpg' alt='Bird House' />
            </div>

            <ProductDescription
              title={content.four.title}
              description={content.four.description}
            />

          <Parallax className="custom-class" y={[-90, 100]} tagOuter="figure">
            <img className='home-logo-gallery' alt='logo' src='./Logo/OSLogo.png'/>
          </Parallax>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  </div>
)

export default Products
