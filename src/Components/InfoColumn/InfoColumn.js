import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import { Parallax } from 'react-scroll-parallax'

/*
  There are two columns provided with this component. Each with the same props.
  Column one is on the right side and Column two is to the left. Add '2' to any
  prop and it will apply to the column on the right.

  InfoColumn component will receive the following props:

  backgroundUrl(2) -- background for column
  backgroundColor(2) -- background Color for column if no image
  width(2) -- width of image
  image(2) -- url of image
  name(2) -- name is proveided for alt of image
  content(2) -- Text provided for column
  color(2) -- Font color for content
  x or y -- Takes integer for parallax(If not provided, no parallax effect Will
  be present.)
  buttonContent(2) -- Text for button
  buttonLink(2) -- Href path for button
  buttonBackground(2) -- Button background color
  buttonColor(2) -- Button Font Color
*/

import './InfoColumn.scss'

import handleWindowSize from '../../helpers/handleWindowSize'

class InfoColumn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      props: props,
      windowSize: window.innerWidth >= 1000 ? true : false
    }
  }

  handleParallax = () => {
    this.setState(handleWindowSize)
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    window.addEventListener('resize', this.handleParallax)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleParallax)
  }

  render () {
    const { props, windowSize } = this.state
    const image = props.backgroundUrl
    const image2 = props.backgroundUrl2
    return (
    <div>
      <Container fluid className='infocol-container'>
        <Row>
          <Col
            xs={12} lg={6}
            style={{
              backgroundColor: props.backgroundColor,
              backgroundImage: `url(${image})`
            }}
            className='infocol-col'
          >
            <Parallax
              className="custom-class"
              y={windowSize ? props.y : props.x}
              tagOuter="figure"
            >

              <img
                className='infocol-image'
                width={props.width}
                src={props.image}
                alt={props.name}
              />
              <p style={{ color: props.color, fontFamily: 'Special Elite', fontSize: props.headerFont }}>{props.header}</p>
              <p
                style={{
                  color: props.color,
                  fontSize: props.fontSize,
                  padding: '2%'
                }}>
                {props.content}

              </p>

              {props.buttonLink &&
                <Button
                  href={props.buttonLink}
                  style={{ backgroundColor: props.buttonBackground,
                           borderColor: props.buttonBackground,
                           color: props.buttonColor }}
                >
                  {props.buttonContent}
                </Button>}

            </Parallax>
          </Col>

          <Col
            xs={12} lg={6}
            style={{
              backgroundColor: props.backgroundColor2,
              backgroundImage: `url(${image2})`
            }}
            className='infocol-col'
          >
          <Parallax
            className="custom-class"
            y={windowSize ? props.y2 : props.x2}
            tagOuter="figure"
          >

            <img
              className='infocol-image'
              width={props.width2}
              src={props.image2}
              alt={props.name2}
            />
            <p style={{ color: props.color, fontFamily: 'Special Elite', fontSize: props.headerFont2 }}>{props.header2}</p>
            <p
              style={{
                color: props.color2,
                fontSize: props.fontSize2,
                padding: '2%'
              }}
            >

            {props.content2}

            </p>

            {props.buttonLink2 &&
              <Button
                href={props.buttonLink2}
                style={{ backgroundColor: props.buttonBackground2,
                         borderColor: props.buttonBackground2,
                         color: props.buttonColor2 }}
              >
                {props.buttonContent2}
              </Button>}

            </Parallax>
          </Col>
          {props.col3 && <Col>
            <div></div>
          </Col>}
        </Row>
      </Container>
    </div>
  )
}
}

export default InfoColumn
