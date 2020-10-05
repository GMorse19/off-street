import React from 'react'

import Title from '../../Components/Title/Title'
import Intro from '../../Components/Intro/Intro'
import Connect from '../../Components/Connect/Connect'
import Footer from '../../Components/Footer/Footer'

import './AboutPage.scss'

class AboutPage extends React.Component {
  
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render () {
    return (

      <div className=''>
        <Title
          heading='About'
        />
        <Intro />
        <Connect />
        <Footer />
      </div>
    )
  }
}

export default AboutPage
