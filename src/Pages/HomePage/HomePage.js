import React from 'react'

// import SplashIntro from '../../Components/SplashIntro/SplashIntro'
import Connect from '../../Components/Connect/Connect'
import Footer from '../../Components/Footer/Footer'
import Title from '../../Components/Title/Title'
// import PromoBlurb from '../../Components/PromoBlurb/PromoBlurb'
import BestSellers from '../../Components/BestSellers/BestSellers'

import './HomePage.scss'

class HomePage extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      <div className='home-page-div'>
        <Title
          tagline='"Revive, Repurpose, and Reinvent."'
        />
        <BestSellers />
        <Connect />
        <Footer />
      </div>
    )
  }
}

export default HomePage
