import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './ProductInfo.scss'

const ProductInfo = (props) => (
  <div className='product-info'>
    <Container>
      <Row>
      <Col lg={12}><h1>{props.header}</h1></Col>
        <Col>
          <h1>{props.props}</h1>
        </Col>
      </Row>
    </Container>
  </div>
)

export default ProductInfo
