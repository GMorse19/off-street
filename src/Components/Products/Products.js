import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import ProductDescription from './ProductDescription/ProductDescription'

import { flag } from '../../helpers/images/Flags/flagsArray'
import { item } from '../../helpers/images/Items/itemsArray'
import LogoFloat from '../LogoFloat/LogoFloat'
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

              <LogoFloat
                left='90'
                right='-100'
              />
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

            <LogoFloat
              left='-90'
              right='100'
            />
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

            <LogoFloat
              left='90'
              right='-100'
            />
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

            <LogoFloat
              left='-90'
              right='100'
            />
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  </div>
)

export default Products
