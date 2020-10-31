import React from 'react'

import Title from '../../Components/Title/Title'
// import InfoRow from '../../Components/InfoRow/InfoRow'
// import InfoColumn from '../../Components/InfoColumn/InfoColumn'
import AboutContent from '../../Components/Products/AboutContent'
import Connect from '../../Components/Connect/Connect'
import Footer from '../../Components/Footer/Footer'

// import { stock } from '../../helpers/images/Stock/stockArray'

import './AboutPage.scss'

class AboutPage extends React.Component {
  constructor() {
    super()

    this.state = {

    }
  }

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

        <Connect />

        <Footer />
      </div>
    )
  }
}

export default AboutPage
