import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { flag } from '../../helpers/images/Flags/flagsArray'
import { item } from '../../helpers/images/Items/itemsArray'
import ProductContainer from './ProductContainer/ProductContainer'
import content from './ProductDescription/Content'

import './Products.scss'

const Products = () => (
  <div className='info-section' id='shop'>
    <Container className='shop-container'>
      <Row className='rows'>

          <Col xs={{ span: 6, offset: 3 }} md={{ span: 6, offset: 4 }} lg={{ span: 6, offset: 4 }}>

            <ProductContainer
              image={flag.standard.cutout}
              title={content.one.title}
              description={content.one.description}
              alt='American Flag'
              left='90'
              right='-100'
            />

          </Col>

      </Row>
      <Row className='rows'>

          <Col xs={{ span: 6, offset: 3 }} md={{ span: 6, offset: 4 }} lg={{ span: 6, offset: 4 }}>

            <ProductContainer
              image={flag.random.oldBoards}
              title={content.two.title}
              description={content.two.description}
              alt='Boards under American Flag'
              left='-90'
              right='100'
            />

          </Col>

      </Row>
      <Row className='rows'>

          <Col xs={{ span: 6, offset: 3 }} md={{ span: 6, offset: 4 }} lg={{ span: 6, offset: 4 }}>

            <ProductContainer
              image={item.chalkBoard.cutout}
              title={content.three.title}
              description={content.three.description}
              alt='Chalk Board'
              left='90'
              right='-100'
            />

          </Col>

      </Row>
      <Row className='rows'>

          <Col xs={{ span: 6, offset: 3 }} md={{ span: 6, offset: 4 }} lg={{ span: 6, offset: 4 }}>

            <ProductContainer
              image={item.birdHouse.front}
              title={content.four.title}
              description={content.four.description}
              alt='Bird House'
              left='-90'
              right='100'
            />

          </Col>

      </Row>
    </Container>
  </div>
)

export default Products
