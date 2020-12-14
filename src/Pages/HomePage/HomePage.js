import React from 'react'

import Footer from '../../Components/Footer/Footer'
// import Title from '../../Components/Title/Title'
import InfoRow from '../../Components/InfoRow/InfoRow'
// import InfoColumn from '../../Components/InfoColumn/InfoColumn'
import HomePageHeader from './HomePageHeader'
import HomePageShop from './HomePageShop/HomePageShop'
import HomePageIntro from './HomePageIntro/HomePageIntro'

import { stock } from '../../helpers/images/Stock/stockArray'

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

        <InfoRow
          header='Extra Material?'
          backgroundColor='#B7C590'
          headerColor='#5F3D26'
          headerFont='48px'
          content='Have extra, unwanted material? Maybe you would like to contribute by becoming an authenticated Off Street builder. There are many ways to contribute, please contact Off Street to see how you can help.'
          contentFont='18px'
          padding='10%'
        />

        <Footer />
      </div>
    )
  }
}

export default HomePage
