import React from 'react'
import { Button } from 'react-bootstrap'
import { Parallax } from 'react-scroll-parallax'

import './InfoRow.scss'

class InfoRow extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      props: props,
      image: props.backgroundUrl
    }
  }

  render () {
    const { props } = this.state
    const image = this.state.image
    return (
  <div className='wrapper'>
    <Parallax className="custom-class" y={[-15, 10]} tagOuter="figure">
      <div className='inforow-div parallax' style={{ color: props.headerColor, backgroundImage: `url(${image})` }}>
        <h1 style={{ fontSize: props.headerFont }}>{props.header}</h1>
        <p>{props.content}</p>
        <Button href={props.href}>{props.buttonContent}</Button>
      </div>
    </Parallax>
  </div>
)
}
}

export default InfoRow
