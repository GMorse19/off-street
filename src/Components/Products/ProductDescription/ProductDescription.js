import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import './ProductDescription.scss'

const ProductDescription = (props) => (
  <div className='info-div'>
    <Parallax className="custom-class" y={[20, -20]} tagOuter="figure">
    <h2>{props.title}</h2>
      {props.description}
    </Parallax>
  </div>
)

export default ProductDescription
