import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'

import { stock } from '../../../helpers/images/Stock/stockArray'

import './HomePageIntro.scss'

const HomePageIntro = () => (
  <Container fluid className='home-page-intro'>
    <Row className='justify-content-center'>

      <Col className='home-page-mission' lg={{ span: 4, offset: 2 }} xs={6}>
        <p><img width={40} src={stock.stock.logo2} alt='offstreet logo'/>Rescue</p>
        <p><img width={40} src={stock.stock.logo2} alt='offstreet logo'/>Repurpose</p>
        <p><img width={40} src={stock.stock.logo2} alt='offstreet logo'/>Reinvent</p>
      </Col>

      <Col lg={6}>
        <p className='home-page-blurb'><span style={{ fontSize: '24px' }}>
          Our mission at Off Street </span>
          is to rescue the forgotten scraps and
          cutoffs from construction projects and save them from their inevitable
          trip to the depths of a dumpster. We then re-purpose and re-invent these
          forlorn timbers to return a quality hand crafted item with it's own
          unique history.
        </p>
        <Button className='home-page-intro-button'>About Us</Button>
      </Col>

    </Row>
  </Container>
)

export default HomePageIntro
