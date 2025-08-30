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
          Every board has a story. </span>
         At Off Street, we salvage overlooked scraps and cut-offs from construction projects and re-invent them into handcrafted pieces with character. Each item reflects not only the wood’s past but also the care and creativity that bring it back to life.
        </p>
        <Button href='#about' className='home-page-intro-button'>About Us</Button>
      </Col>

    </Row>
  </Container>
)

export default HomePageIntro
