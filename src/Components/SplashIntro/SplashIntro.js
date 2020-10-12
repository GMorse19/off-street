import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import './SplashIntro.scss'

const SplashIntro = () => (
  <div className='splash-intro-container'>
    <div className='splash-intro-para'>
      <Container fluid>
        <Row>
          <Col>
            <h1>Rescue, Repurpose, and Return.</h1>
            <br />
            <p>Our mission at Off Street is to <span style={{ color: 'blue' }}>
            rescue</span> the forgotten scraps and cutoffs from construction projects
            from their inevitable trip to the depths of a dumpster. <span style={{ color: 'blue' }}>
            Re-purpose</span> these forlorn timbers and <span style={{ color: 'blue' }}>
            return</span> a quality hand crafted item with it's own unique history. We like to
            think of it as a sort of retirement plan for forgotten wood.</p>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
)

export default SplashIntro
