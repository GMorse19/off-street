import React from 'react'
import { Button } from 'react-bootstrap'
import { Parallax } from 'react-scroll-parallax'

import './InfoRow.scss'

class InfoRow extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      props: props,
      image: props.backgroundUrl,
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
    const { props, image, parallax } = this.state

    return (
      <div className='inforow-wrapper'>
        <Parallax className="custom-class" y={parallax ? props.y : props.x} tagOuter="figure">
          <div
            className='inforow-div parallax'
            style={{ padding: props.padding, color: props.sectionColor, backgroundImage: `url(${image})` }}
          >
            <h1 style={{ color: props.headerColor }}>{props.header}</h1>
            <p style={{ color: props.contentColor }}>{props.content}</p>
            <Button href={props.href}>{props.buttonContent}</Button>
          </div>
        </Parallax>
      </div>
    )
  }
}

export default InfoRow
