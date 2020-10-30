import React from 'react'

import './HowTo.scss'

import Video from '../../Components/Video/Video'

import video from '../../helpers/videos/OffStreet2.mp4'

class HowTo extends React.Component {
  constructor () {
    super()

    this.state = {

    }
  }

  render () {
    return (
      <div className='how-to'>
        <Video
          url={video}
          header='American Flag Build'
          description='A quick video showing the details behind building an Off Street flag'
        />
      </div>
    )
  }
}

export default HowTo
