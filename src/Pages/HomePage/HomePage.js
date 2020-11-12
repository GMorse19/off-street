import React from 'react'

import Connect from '../../Components/Connect/Connect'
import Footer from '../../Components/Footer/Footer'
import Title from '../../Components/Title/Title'
import InfoRow from '../../Components/InfoRow/InfoRow'
import InfoColumn from '../../Components/InfoColumn/InfoColumn'

import { stock } from '../../helpers/images/Stock/stockArray'

import './HomePage.scss'

class HomePage extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render () {

    return (
      <div className='home-page-div'>
        <Title
          tagline='"Carpentry with a repurpose"'
        />

        <InfoRow
        header='Rescue, Repurpose, Reinvent'
        sectionColor='#e3e1e1'
        headerFont='5vh'
        contentColor='#DBC2A0'
        contentFont='25px'
        content="Our mission at Off Street is to rescue the forgotten scraps and cutoffs from construction projects and save them from their inevitable trip to the depths of a dumpster. We then re-purpose and re-invent these forlorn timbers to return a quality hand crafted item with it's own unique history."
        buttonColor='#111'
        buttonContent='ABOUT'
        href='#about'
        padding='2%'
        backgroundColor='#555'
                />

        <InfoRow
          y={[-10,10]}
          header='Unique, hand crafted items.'
          sectionColor='#000'
          headerFont='5vh'
          content='Visit our shop and browse through our one of a kind items, listed weekly.'
          buttonContent='SHOP'
          href='#item-shop/all'
          padding='7%'
          backgroundUrl={stock.stock.birdHouse}
        />

        <InfoColumn
          header='Become a donor.'
          sectionColor='#000'
          headerFont='5vh'
          content='Have extra, unwanted material? Maybe you would like to contribute by becoming an authenticated Off Street builder. There are many ways to contribute, please contact Off Street to see how you can help.'
          contentFont='25px'
          buttonColor='#000'
          buttonContent='DONATE'
          href='#shop'
          padding='6%'
          backgroundColor='#e3e1e1'
          backgroundUrl2={stock.stock.jobSite}
        />

        <Connect />
        <Footer />
      </div>
    )
  }
}

export default HomePage
