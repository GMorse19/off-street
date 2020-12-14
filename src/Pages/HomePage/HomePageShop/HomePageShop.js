import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'

import { stock } from '../../../helpers/images/Stock/stockArray'

import './HomePageShop.scss'

const HomePageShop = () => (
  <Container fluid className='home-page-shop'>
    <Row className='home-page-shop-row'>
      <Col lg={{ span: 3, offset: 1 }}>
        <p className='home-page-shop-unique'>
          Unique & Handcrafted Items
        </p>
        <Button href='#shop' className='home-page-shop-button'>Shop</Button>
      </Col>
      <Col lg={8} className='image-stack'>
        <Col><img className='home-page-shop-image1' src={stock.stock.foldingTable} alt='Folding Table' /></Col>
        <Col><img className='home-page-shop-image2' src={stock.stock.birdHouse} alt='Bird House' /></Col>
        <Col><img className='home-page-shop-image3' src={stock.stock.chalkBoard} alt='Chalk Board' /></Col>
      </Col>
    </Row>
  </Container>
)

export default HomePageShop
