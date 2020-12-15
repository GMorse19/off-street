import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './AboutPageHeader.scss'

const AboutPageHeader = () => (
    <Container fluid className='about-page-header'>
      <Row className='justify-content-center'>
        <Col>
          <p className='about-page-header-title'>Crafstmen. Creators. Conservationists.</p>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col lg={6}>
          <div className='about-page-header-content'>
              <p>Off Street carpentry was born from over twenty five years of witnessing
              continuous waste amongst the building trades.</p>
          </div>
        </Col>
      </Row>
    </Container>
)

export default AboutPageHeader
