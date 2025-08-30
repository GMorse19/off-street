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
                <h1 className='heading-contact'>Connect with Off Street</h1>
            </Col>
          </Row>

          <Row className='contact-page-info'>
           

            <Col>
              <Container>
                <Row className="justify-content-md-center">
                  <Col className="d-flex align-items-center gap-3 flex-wrap">
                    <a
                      className='contact-page-link'
                      href='https://www.facebook.com/Off-Street-Carpentry-100202445271783/'
                    >
                      <img
                        src={icon.media.facebook}
                        alt='facebook'
                        width='60px'
                      />
                    </a>
</Col>
               
<Col className="d-flex align-items-center gap-3 flex-wrap">
                    <a
                      className='contact-page-link'
                      href='https://twitter.com/offstreetbuild'
                    >
                      <img
                        src={icon.media.twitter}
                        alt='twitter'
                        width='60px'
                      />
                    </a>

             </Col>
<Col className="d-flex align-items-center gap-3 flex-wrap">
                    <a
                      className='contact-page-link'
                      href='https://www.youtube.com/channel/UCHLzxuKSKxElBsdP6c8Kwvw'
                    >
                      <img
                        src={icon.media.youtube}
                        alt='pinterest'
                        width='60px'
                      />
                    </a>

                   

                </Col>
                <Col className="d-flex align-items-center gap-3 flex-wrap">
                    <a
                      className='contact-page-link'
                      href='https://www.pinterest.com/offstreetcarp'
                    >
                      <img
                        src={icon.media.pinterest}
                        alt='Pinterest'
                        width='60px'
                      />
                    </a>

                    </Col>
                    <Col className="d-flex align-items-center gap-3 flex-wrap">

                    <a
                      className='contact-page-link'
                      href='https://www.instagram.com/offstreetcarpentry/'
                    >
                      <img
                        src={icon.media.instagram}
                        alt='instagram'
                        width='60px'
                      />
                    </a>

                  

                  </Col>
                      <Col className="d-flex align-items-center gap-3 flex-wrap">

                    <a
                      className='contact-page-link'
                      href='https://www.etsy.com/shop/OffStreetCarpentry'
                    >
                      <img
                        src={icon.media.etsy}
                        alt='etsy'
                        width='60px'
                      />
                    </a>

                  

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
