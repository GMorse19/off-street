import React from 'react'

import Title from '../../Components/Title/Title'
import AboutContent from '../../Components/Products/AboutContent'
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

        <AboutContent />

        <Footer />
      </div>
    )
  }
}

export default AboutPage
