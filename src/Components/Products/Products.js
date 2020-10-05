import React from 'react'
import Container from 'react-bootstrap/Container'

import { flag } from '../../helpers/images/Flags/flagsArray'
import { item } from '../../helpers/images/Items/itemsArray'
import ProductContainer from './ProductContainer/ProductContainer'
import content from './ProductDescription/Content'

import './Products.scss'

const Products = () => (
  <div className='info-section'>
    <Container className='shop-container'>

      <ProductContainer
        image={flag.standard.cutout}
        title={content.one.title}
        description={content.one.description}
        alt='American Flag'
        left='90'
        right='-100'
      />

      <ProductContainer
        image={flag.random.oldBoards}
        title={content.two.title}
        description={content.two.description}
        alt='Boards under American Flag'
        left='-90'
        right='100'
      />

      <ProductContainer
        image={item.chalkBoard.cutout}
        title={content.three.title}
        description={content.three.description}
        alt='Chalk Board'
        left='90'
        right='-100'
      />

      <ProductContainer
        image={item.birdHouse.front}
        title={content.four.title}
        description={content.four.description}
        alt='Bird House'
        left='-90'
        right='100'
      />

    </Container>
  </div>
)

export default Products
