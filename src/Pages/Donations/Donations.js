import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './Donations.scss'

import DonationBucket from './DonationBucket/DonationBucket'

import Footer from '../../Components/Footer/Footer'

class Donations extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      <div>
      <div id='donations'>
        <div>
          <p className='donation-header'>Acceptable Donations</p>
          <p>What does Off Street take?</p>
        </div>

        <DonationBucket
          title='Wood'
          content={<ul>
          <li>Dimensional lumber no shorter than two feet</li>
          <li>2x4 -- 2x12</li>
          <li>4X4 -- 6x6</li>
          <li>Plywood no smaller than 2&apos;x2&apos;</li>
          <li>Strapping</li>
          <li>ledger board</li>
        </ul>}
        />

        <DonationBucket
          title='Hardware'
          content={
            <ul>
              <li>Hinges/ hinge pins</li>
              <li>Door knobs</li>
              <li>Strike plates</li>
              <li>Latches, hooks</li>
              <li>Bolts, Screws, Nails</li>
              <li>Anything that looks cool or unique</li>
            </ul>
          }
        />

        <DonationBucket
          title='Tools'
          content={
            <ul>
              <li>Wrenches</li>
              <li>Hammers</li>
              <li>Screw Drivers</li>
              <li>Hand Saws</li>
              <li>Chisels</li>
              <li>Putty Knives/ Trowels</li>
            </ul>
          }
        />
        <Container className='donation-content'>
          <Row>
            <Col>
              <div>

                <p style={{ padding: '5%' }}>
                  Off Street is constantly searching for new ways to re-purpose unwanted
                  materials. Our list of acceptable items will change periodically and
                  there may be some items we have overlooked. Please
                  contact us with any questions about what we do and do not accept.
                </p>

              </div>
            </Col>
          </Row>
        </Container>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Donations
