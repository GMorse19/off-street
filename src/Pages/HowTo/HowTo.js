import React from 'react'

import './HowTo.scss'

import Video from '../../Components/Video/Video'

class HowTo extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      <div className='how-to'>
        <Video
          url='https://youtu.be/3PkN5NJ7Aco'
          header='American Flag Build'
          description='A quick video showing the details behind building an Off Street flag'
        />
      </div>
    )
  }
}

export default HowTo
