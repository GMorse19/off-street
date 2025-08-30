import React from 'react'

import Footer from '../../Components/Footer/Footer'
import InfoRow from '../../Components/InfoRow/InfoRow'
import HomePageHeader from './HomePageHeader/HomePageHeader'
import HomePageShop from './HomePageShop/HomePageShop'
import HomePageIntro from './HomePageIntro/HomePageIntro'

import './HomePage.scss'

class HomePage extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render () {

    return (
      <div className='home-page-div'>

        <HomePageHeader />

        <HomePageIntro />

        <HomePageShop />



        <Footer />
      </div>
    )
  }
}

export default HomePage
