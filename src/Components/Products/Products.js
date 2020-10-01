import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import { Container, Row, Col } from 'react-bootstrap'

import ProductDescription from './ProductDescription/ProductDescription'

import { flag } from '../../helpers/images/Flags/flagsArray'
import { item } from '../../helpers/images/Items/itemsArray'
import { logo } from '../../helpers/images/Logos/logosArray'
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
              <img className='flag-image' src={flag.standard.cutout} alt='American Flag' />
            </div>

            <ProductDescription
              title={content.one.title}
              description={content.one.description}
            />

              <Parallax className="custom-class" y={[-90, 100]} tagOuter="figure">
                <img className='home-logo-gallery' alt='logo' src={logo[1]}/>
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
              <img className='flag-image' src={flag.random.oldBoards} alt='Boards under American Flag' />
            </div>

            <ProductDescription
              title={content.two.title}
              description={content.two.description}
            />

          <Parallax className="custom-class" y={[-90, 100]} tagOuter="figure">
            <img className='home-logo-gallery' alt='logo' src={logo[1]}/>
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
              <img className='flag-image' src={item.chalkBoard.cutout} alt='Chalk Board' />
            </div>

            <ProductDescription
              title={content.three.title}
              description={content.three.description}
            />

          <Parallax className="custom-class" y={[-90, 100]} tagOuter="figure">
            <img className='home-logo-gallery' alt='logo' src={logo[1]}/>
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
              <img className='flag-image' src={item.birdHouse.front} alt='Bird House' />
            </div>

            <ProductDescription
              title={content.four.title}
              description={content.four.description}
            />

          <Parallax className="custom-class" y={[-90, 100]} tagOuter="figure">
            <img className='home-logo-gallery' alt='logo' src={logo[1]}/>
          </Parallax>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  </div>
)

export default Products
