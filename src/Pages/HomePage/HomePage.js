import React from 'react'

// import SplashIntro from '../../Components/SplashIntro/SplashIntro'
import Connect from '../../Components/Connect/Connect'
import Footer from '../../Components/Footer/Footer'
import Title from '../../Components/Title/Title'
// import PromoBlurb from '../../Components/PromoBlurb/PromoBlurb'
// import BestSellers from '../../Components/BestSellers/BestSellers'
import InfoRow from '../../Components/InfoRow/InfoRow'

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
          tagline='"Revive, Repurpose, and Reinvent."'
        />

        <InfoRow
          header='Rescue, Repurpose, Reinvent'
          sectionColor='#FFF'
          headerFont='60px'
          contentColor='#000'
          contentFont='25px'
          content="Our mission at Off Street is to rescue the forgotten scraps and cutoffs from construction projects and save them from their inevitable trip to the depths of a dumpster. Re-purpose these forlorn timbers and return a quality hand crafted item with it's own unique history. We like to think of it as a sort of retirement plan for forgotten wood"
          buttonColor='#DBC2A0'
          buttonContent='SHOP'
          href='#shop'
          padding='2%'
          backgroundUrl={stock.stock.workShop}
        />

        <InfoRow
          y={[-15,10]}
          header='Handmade wood burned flags'
          sectionColor='#FFF'
          headerFont='60px'
          content='Browse through our extensive list of flags'
          buttonContent='Flags'
          href='#shop'
          padding='7%'
          backgroundUrl={stock.stock.standardFlag}
        />

        <InfoRow
          header='Submit your own designs.'
          sectionColor='#000'
          headerFont='60px'
          content='One of a kind items listed weekly in our items shop.'
          contentFont='25px'
          buttonColor='#DBD4A0'
          buttonContent='SHOP'
          href='#shop'
          padding='10%'
          backgroundUrl={stock.stock.birdHouse}
        />

        <Connect />
        <Footer />
      </div>
    )
  }
}

export default HomePage
