import React from 'react'
import { Button, Container, Col, Row } from 'react-bootstrap'
import { Parallax } from 'react-scroll-parallax'

import './InfoRow.scss'

/*
InfoRow component will receive the following props:
  backgroundUrl -- for background image of component
  backgroundColor -- background color if no image is presented
  padding -- overall padding of the content inside InfoRow
  sectionColor -- color of all text inside InfoRow

Parallax props(If none are given, there will be no parallax effect):
  y -- receives an integer for y axis parallax movement
  x -- receives an integer for x axis parallax movement

Header props:
  header -- content of header
  headerColor -- color of text for header
  headerFont -- font size for header

Content props(The main message inside of InfoRow):
  content -- Text for main content
  contentColor -- color of text for main content

Button props(Will not be present if no href is given):
  href -- Link for new path
  buttonColor -- backgroundColor for Button
  buttonContent -- Text inside Button

Image props(If an image is desired):
  image -- image to be displayed
  imageName -- name given for alt

 */

class InfoRow extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      props: props,
      backgroundImage: props.backgroundUrl,
      parallax: window.innerWidth >= 800 ? true : false
    }
  }

  handleParallax = e => {
    const windowSize = window.innerWidth
    const parallaxBool = windowSize >= 800 ? true : false
    this.setState({ parallax: parallaxBool })
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleParallax)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleParallax)
  }

  render () {
    const { props, backgroundImage, parallax } = this.state

    return (
      <div className='inforow-wrapper'>
        <Parallax className="custom-class" y={parallax ? props.y : props.x} tagOuter="figure">
        <Container fluid>

          <Row
            className='inforow-div parallax'
            style={{ padding: props.padding, color: props.sectionColor, backgroundImage: `url(${backgroundImage})`, backgroundColor: props.backgroundColor }}
          >
            <Col lg={12}>
              <h1 style={{ color: props.headerColor }}>{props.header}</h1>

              <p className='inforow-content' style={{ color: props.contentColor }}>{props.content}</p>

              {props.image && <img width={300} src={props.image} alt={props.imageName}/>}

              {props.href && <p><Button className='inforow-button' style={{ backgroundColor: props.buttonColor }} href={props.href}>{props.buttonContent}</Button></p>}
            </Col>

          </Row>
          </Container>
        </Parallax>
      </div>
    )
  }
}

export default InfoRow
