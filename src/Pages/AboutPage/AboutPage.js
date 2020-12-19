import React from 'react'

import AboutContent from './AboutContent/AboutContent'
import Footer from '../../Components/Footer/Footer'
import AboutPageHeader from './AboutPageHeader/AboutPageHeader'

import './AboutPage.scss'

class AboutPage extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render () {
    return (

      <div className=''>

        <AboutPageHeader />

        <AboutContent />

        <Footer />
      </div>
    )
  }
}

export default AboutPage
