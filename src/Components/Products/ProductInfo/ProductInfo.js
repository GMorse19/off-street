import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './ProductInfo.scss'

const ProductInfo = (props) => (
  <div className='product-info'>
    <Container>
      <Row>
        <Col lg={12}><h1>{props.header} Shop</h1></Col>
      </Row>
        <Row>
            {props.props}
        </Row>
    </Container>
  </div>
)

export default ProductInfo
