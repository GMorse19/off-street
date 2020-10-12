import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './PromoBlurb.scss'
import { flag } from '../../helpers/images/Flags/flagsArray'

const PromoBlurb = () => (
  <div>
  <Container fluid>
        <Row className='row row-padding'>
          <Col xs={12} md={6}>

              <div className='image-div'>
                <img className='flag-image' src={flag.random.oldBoards} alt='old boards and flag' />
              </div>

          </Col>
          <Col xs={12} md={6}>

              <div className='image-div'>
                <img className='flag-image' src={flag.standard.cutout} alt='American Flag' />
              </div>

          </Col>
        </Row>
      </Container>
  </div>
)

export default PromoBlurb
