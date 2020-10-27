import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

import './Donations.scss'

const Donations = () => (
  <div id='donations'>
  <div className='donation-header'>
    <p>Acceptable Donations -- What Does Off Street Take?</p>
  </div>
  <div className='donation-sub-header'>

    <p>
    Off Street is constantly searching for new ways to re-purpose unwanted
    materials. Our list of acceptable items will always be changing. Please
    contact us with any questions about what we do and do not accept.
    </p>

    <Button variant='secondary' href='#contact'>Contact</Button>

  </div>
  <div className='donation-content'>
    <Container>
      <Row>
        <Col lg={6} sm={6} xs={12}>
          <div className='donation-col'>

            <h1>Wood</h1>

            <p>
              If you're running a construction project and have any excess materials
              that were destined for the landfill, please contact us. We are interested
              in any cutoffs and scraps as long as they're at least two feet in length
              and any older pieces of scrap lumber from demolition. No need to remove Nails
              and screws. We can take care of that part. We just want to save the wood.
            </p>

            <p>
              Below, you can find examples of what Off Street is interested in. This is by no
              means a complete list, so don't hesitate to contact us if you have any questions.
            </p>

            <ul>
              <li>Dimensional lumber no shorter than two feet</li>
              <li>2x4 -- 2x12</li>
              <li>4X4 -- 6x6</li>
              <li>Plywood no smaller than 2'x2'</li>
              <li>Strapping</li>
              <li>ledger board</li>
            </ul>

          </div>
        </Col>
        <Col lg={6} sm={6} xs={12}>
          <div className='donation-col'>

            <h1>Hardware</h1>

            <p>
            Are you removing old doors and windows? Random pieces of old furniture?
            Any old or worn out hardware items that no longer function as they were
            originally intended, Off Street is interested in re-purposing them.
            </p>

            <p>Below are some examples of what we like to work with.</p>

            <ul>
              <li>Hinges/ hinge pins</li>
              <li>Door knobs</li>
              <li>Strike plates</li>
              <li>Latches, hooks</li>
              <li>Bolts, Screws, Nails</li>
              <li>Anything that looks cool or unique</li>
            </ul>

          </div>
        </Col>
        <Col lg={6} sm={6} xs={12}>
          <div className='donation-col'>

            <h1>Tools</h1>

            <p>
            Do you have any old tools laying around collecting dust? Maybe you
            have come across some in a remodeling project? Off Street is interested
            in them. Rusty, broken, or seemingly useless tools need a home and we
            can often times match them up with rescue wood and create something of
            value.
            </p>

            <p>Example list, below. Please contact us if you have any questions.</p>

            <ul>
              <li>Wrenches</li>
              <li>Hammers</li>
              <li>Screw Drivers</li>
              <li>Hand Saws</li>
              <li>Chisels</li>
              <li>Putty Knives/ Trowels</li>
              <li></li>
            </ul>

          </div>
        </Col>
      </Row>
    </Container>
  </div>
  </div>
)

export default Donations
