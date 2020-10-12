import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import './SplashIntro.scss'

const SplashIntro = () => (
  <div className='splash-intro-container'>
    <div className='splash-intro-para'>
      <Container fluid>
        <Row>
          <Col>
            <p>Rescue, Repurpose, and Return.</p>
            <p>Our mission at Off Street is to <span style={{ color: 'red' }}>
            rescue</span> forgotten scraps and cutoffs
            from their inevitable trip to the depths of a dumpster. <span style={{ color: 'red' }}>
            Re-purpose</span> these forlorn timbers and <span style={{ color: 'red' }}>
            return</span> a unique hand crafted item with a history. A sort of retirement
            plan for well worn wood.</p>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
)

export default SplashIntro
