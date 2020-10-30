import React from 'react'

import Connect from '../../Components/Connect/Connect'
import Footer from '../../Components/Footer/Footer'
import Title from '../../Components/Title/Title'
import InfoRow from '../../Components/InfoRow/InfoRow'
import InfoColumn from '../../Components/InfoColumn/InfoColumn'

import { stock } from '../../helpers/images/Stock/stockArray'

import './ShopPage.scss'

class ShopPage extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render () {
    return(
      <div className=''>
        <Title
          heading='Shop'
        />

        <InfoRow
          backgroundColor='#e7eeed'
          backgroundUrl={stock.stock.woodBg}
          header=<span>Craftsmen, creators and conservationists.</span>
          sectionColor='#e7eeed'
          headerFont='7vh'
          content=<span>Building a cleaner, brighter world one board at a time.</span>
          buttonContent='Shop'
          href='#item-shop/item'
          padding='7%'
        />

        <InfoColumn
          name='American Flag'
          backgroundColor='#000'
          backgroundColor2='#f3edbe'
          image={stock.stock.standardFlag}
          fontSize2='4vh'
          y={[-20,20]}
          width='300'
          content2=<span>Check out our list of Hand crafted flags</span>
          buttonContent='SHOP'
          buttonLink='#item-shop/flag'
        />

        <InfoColumn
          name2='Bottle Opener'
          backgroundColor2='#000'
          backgroundColor='#e3e1e1'
          buttonContent='SHOP'
          buttonLink='#item-shop/item'
          fontSize='4vh'
          width='300'
          image2={stock.stock.bottleOpener}
          content=<span>One of a kind bottle opener and hook set. Perfect for
          any she shed or man cave.</span>
        />

        <InfoColumn
          name='Bird House'
          backgroundColor='#000'
          backgroundColor2='#f3edbe'
          buttonContent2='SHOP'
          color2='#000'
          buttonLink2='#item-shop/item'
          fontSize2='4vh'
          width='300'
          image={stock.stock.birdHouse}
          content2=<span>The Secret Byrd Houses make great gifts for the holidays.</span>
        />

        <InfoRow
          sectionColor='#FFF'
          padding='7%'
          backgroundUrl={stock.stock.contactBanner}
        />

        <Connect />
        <Footer />
      </div>
    )
  }
}

export default ShopPage
