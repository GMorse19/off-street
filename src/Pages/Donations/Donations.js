import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './Donations.scss'

const Donations = () => (
  <div id='donations'>
  <div className='donation-header'>
    <p>Acceptable Donations -- What Does Off Street Take?</p>
    <div></div>
  </div>
  <div className='donation-content'>
    <Container>
      <Row>
        <Col lg={6} sm={6} xs={12}>
          <h1>Wood</h1>
          <ul>
            <li>Dimensional lumber no shorter thsn two feet</li>
            <li>2x4 through 2x12</li>
            <li>Plywood no smaller than 2'x2'</li>
          </ul>
        </Col>
        <Col lg={6} sm={6} xs={12}>
        <h1>Hardware</h1>
        <p>Are you removing old doors and windows? Random pieces of old furniture?
        Any old or worn out hardware items that no longer function as they were
        originally intended, Off Street is interested in re-purposing them.
        </p>
        <p>Below are some examples of what we like to work with.</p>
        <ul>
          <li>Hinges/ hinge pins</li>
          <li>Door knobs</li>
          <li>Strike plates</li>
          <li>Latches, hooks</li>
          <li>Anything that looks cool or unique</li>
        </ul>
        </Col>
        <Col lg={6} sm={6} xs={12}>
        <h1>Tools</h1>
        <p>Do you have any old tools laying around collecting dust? Maybe you
        have come across some in a remodeling project? Off Street is interested
        in them. Rusty, broken, or seemingly useless tools need a home and we
        can often times match them up with rescue wood and create something of
        value. </p>
        <ul>
          <li>Old, broken, and seemingly useless hand tools are welcome.</li>
          <li></li>
          <li></li>
        </ul>
        </Col>
      </Row>
    </Container>
  </div>
  </div>
)

export default Donations
