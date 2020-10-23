import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Parallax } from 'react-scroll-parallax'

// import { stock } from '../../helpers/images/Stock/stockArray'

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
          <Col style={{ backgroundColor: props.backgroundColor, backgroundImage: `url(${image})` }} className='infocol-col'>
            <Parallax className="custom-class" y={parallax ? props.y : props.x} tagOuter="figure">
              <img className='about-image' width={props.width} src={props.image} alt={props.name} />
              <p style={{ color: props.color, fontSize: props.fontSize }}>{props.content}</p>
            </Parallax>
          </Col>
          <Col style={{ backgroundColor: props.backgroundColor2, backgroundImage: `url(${image2})` }} className='infocol-col'>
          <Parallax className="custom-class" y={parallax ? props.y2 : props.x2} tagOuter="figure">
            <img className='about-image' width={props.width2} src={props.image2} alt={props.name2} />
            <p style={{ color: props.color2, fontSize: props.fontSize2 }}>{props.content2}</p>
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
