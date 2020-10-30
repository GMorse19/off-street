import React from 'react'
import { Carousel } from 'react-bootstrap'

import './BestSellers.scss'

// import ProductContainer from '../Products/ProductContainer/ProductContainer'
import { flag } from '../../helpers/images/Flags/flagsArray'
// import content from '../Products/ProductDescription/Content'

const BestSellers = () => (
  <div className='carousel-div'>
  <h1>Best Sellers</h1>
  <Carousel className='carousel-container'>

    <Carousel.Item>
      <img className='carousel-image' src={flag.standard.cutout} alt='American Flag' />
      <img className='carousel-image' src={flag.standard.flat} alt='American Flag' />
      <img className='carousel-image' src={flag.standard.sawdust} alt='American Flag' />
    </Carousel.Item>
    <Carousel.Item>
    <img className='carousel-image' src={flag.standard.cutout} alt='American Flag' />
    <img className='carousel-image' src={flag.standard.flat} alt='American Flag' />
    <img className='carousel-image' src={flag.standard.sawdust} alt='American Flag' />
    </Carousel.Item>
    <Carousel.Item>
    <img className='carousel-image' src={flag.standard.cutout} alt='American Flag' />
    <img className='carousel-image' src={flag.standard.flat} alt='American Flag' />
    <img className='carousel-image' src={flag.standard.sawdust} alt='American Flag' />
    </Carousel.Item>
  </Carousel>
  </div>
)

export default BestSellers
