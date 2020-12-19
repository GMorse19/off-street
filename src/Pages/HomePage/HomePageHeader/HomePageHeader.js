import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import { stock } from '../../../helpers/images/Stock/stockArray'

import './HomePageHeader.scss'

const HomePageHeader = () => (
  <Container fluid className='home-title-div'>
    <Row className='justify-content-center'>
      <Col xs={{ span: 7 }} md={{ span: 8, offset: 1 }}>
        <div>
          <img className='home-title-image' src={stock.stock.logo2} alt='debris' />
        </div>
      </Col>
      <Col xs={4} md={2}>
          <div className='home-title-header'>
            <p>Carpentry With A Repurpose</p>
          </div>
      </Col>
    </Row>
  </Container>
)

export default HomePageHeader
