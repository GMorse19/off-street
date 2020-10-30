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
  fontSize(2) -- Font Size of the content
  width(2) -- width of image
  image(2) -- url of image
  name(2) -- name is proveided for alt of image
  content(2) -- Text provided for column
  color(2) -- Font color for content
  x or y -- Takes integer for parallax(If not provided, no parallax effect Will
  be present.)
  buttonContent(2) -- Text for button
  buttonLink(2) -- Href path for button
*/

import './InfoColumn.scss'

class InfoColumn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      props: props,
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
    const { props, parallax } = this.state
    const image = props.backgroundUrl
    const image2 = props.backgroundUrl2
    return (
    <div>
      <Container fluid className='infocol-container'>
        <Row>
          <Col
            style={{
              backgroundColor: props.backgroundColor,
              backgroundImage: `url(${image})`
            }}
            className='infocol-col'
          >
            <Parallax
              className="custom-class"
              y={parallax ? props.y : props.x}
              tagOuter="figure"
            >

              <img
                className='about-image'
                width={props.width}
                src={props.image}
                alt={props.name}
              />

              <p
                style={{
                  color: props.color,
                  fontSize: props.fontSize,
                  padding: '2%'
                }}>

                {props.content}

              </p>

              {props.buttonLink && <Button href={props.buttonLink}>{props.buttonContent}</Button>}

            </Parallax>
          </Col>
          <Col
            style={{
              backgroundColor: props.backgroundColor2,
              backgroundImage: `url(${image2})`
            }}
            className='infocol-col'
          >
          <Parallax
            className="custom-class"
            y={parallax ? props.y2 : props.x2}
            tagOuter="figure"
          >

            <img
              className='about-image'
              width={props.width2}
              src={props.image2}
              alt={props.name2}
            />

            <p
              style={{
                color: props.color2,
                fontSize: props.fontSize2,
                padding: '2%'
              }}
            >

            {props.content2}

            </p>

            {props.buttonLink2 && <Button href={props.buttonLink2}>{props.buttonContent2}</Button>}

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
