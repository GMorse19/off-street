import React from 'react'

import ProductDescription from '../ProductDescription/ProductDescription'
import LogoFloat from '../../LogoFloat/LogoFloat'

import './ProductContainer.scss'

const ProductContainer = (props) => (
  <div className='image-wrapper'>

    <div className='image-div'>
      <img className='flag-image' src={props.image} alt={props.alt} />
    </div>

    <ProductDescription
      title={props.title}
      description={props.description}
    />

    <LogoFloat
      left={props.left}
      right={props.right}
    />
  </div>
)

export default ProductContainer
