import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './ProductInfo.scss'

const ProductInfo = (props) => (
  <div className='product-info'>
    <Container>
      <Row>
        <Col lg={12}>
          <h1>{props.header} Shop</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='itemshop-link'>
            <a className='product-shop-link' href='#item-shop/all' name='all' onClick={props.handleClick}>Shop All</a>
            <a className='product-shop-link' href='#item-shop/Flag' name='Flag' onClick={props.handleClick}>Flags</a>
            <a className='product-shop-link' href='#item-shop/Item' name='Item' onClick={props.handleClick}>Other</a>
          </div>
        </Col>
      </Row>
      <hr />
      <Row>
          {props.props}
      </Row>
    </Container>
  </div>
)

export default ProductInfo
