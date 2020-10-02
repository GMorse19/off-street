import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import ProductDescription from '../ProductDescription/ProductDescription'
import LogoFloat from '../../LogoFloat/LogoFloat'

import './ProductContainer.scss'

const ProductContainer = (props) => (
  <Row className='rows'>
    <Col xs={{ span: 6, offset: 3 }} md={{ span: 6, offset: 4 }} lg={{ span: 6, offset: 4 }}>
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
    </Col>
  </Row>
)

export default ProductContainer
