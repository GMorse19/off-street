import React from 'react'
import { Button } from 'react-bootstrap'

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
  <div>
    <div className='inforow-div' style={{ color: props.headerColor, backgroundImage: `url(${image})` }}>
      <h1 style={{ fontSize: props.headerFont }}>{props.header}</h1>
      <p>{props.content}</p>
      <Button href={props.href}>{props.buttonContent}</Button>
    </div>
  </div>
)
}
}

export default InfoRow
