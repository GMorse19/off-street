import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { icon } from '../../helpers/images/Icons/iconsArray'

import './ContactPage.scss'

class ContactPage extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      <div className='contact-page'>
        <Container fluid>
          <Row>
            <Col className='heading-contact-div'>
                <h1 className='heading-contact'>Contact Off Street</h1>
            </Col>
          </Row>

          <Row className='contact-page-info'>
            <Col>
              <h4 className='contact-link-header'>CUSTOMER SERVICE</h4>
                <a
                  className='contact-page-link'
                  href='#/'
                >
                  Email Customer Service
                </a>
                <h6>Monday - Friday</h6>
                <h6> 9am - 5pm ET</h6>
                <h6>Phone#
                 <a
                  className='contact-page-link'
                  href='/'
                 >
                   (617)-555-5555
                 </a>
                </h6>
                <h6>Donate</h6>
            </Col>

            <Col>
              <h4 className='contact-link-header'>OFFICE</h4>
              <h6>4567 West Belcherton St.</h6>
              <h6>Boston, MA 014560</h6>
            </Col>

            <Col>
              <h4 className='contact-link-header'>CONNECT WITH US</h4>
              <Container>
                <Row className="justify-content-md-center">
                  <Col lg={2}>
                    <a
                      className='contact-page-link'
                      href='https://www.facebook.com/Off-Street-Carpentry-100202445271783/'
                    >
                      <img
                        src={icon.media.facebook}
                        alt='facebook'
                        width='30px'
                      />
                    </a>

                    <br />

                    <a
                      className='contact-page-link'
                      href='https://twitter.com/offstreetbuild'
                    >
                      <img
                        src={icon.media.twitter}
                        alt='twitter'
                        width='30px'
                      />
                    </a>

                    <br />

                    <a
                      className='contact-page-link'
                      href='https://www.youtube.com/channel/UCHLzxuKSKxElBsdP6c8Kwvw'
                    >
                      <img
                        src={icon.media.youtube}
                        alt='pinterest'
                        width='30px'
                      />
                    </a>

                    <br />

                  </Col>
                  <Col lg={2}>
                    <a
                      className='contact-page-link'
                      href='https://pin.it/5PPEqFm'
                    >
                      <img
                        src={icon.media.pinterest}
                        alt='You Tube'
                        width='30px'
                      />
                    </a>

                    <br />

                    <a
                      className='contact-page-link'
                      href='https://www.instagram.com/offstreetcarpentry/'
                    >
                      <img
                        src={icon.media.instagram}
                        alt='instagram'
                        width='30px'
                      />
                    </a>

                    <br />

                  </Col>
                </Row>
              </Container>
            </Col>

          </Row>
        </Container>
      </div>
    )
  }
}

export default ContactPage
