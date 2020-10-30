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
          buttonBackground='#e3e1e1'
          buttonColor='#000'
        />

        <InfoColumn
          name=''
          name2='Bottle Opener'
          backgroundColor='#e3e1e1'
          backgroundColor2='#000'
          backgroundImage=''
          backgroundImage2=''
          buttonBackground='#f3edbe'
          buttonBackground2=''
          buttonColor='#000'
          buttonColor2=''
          buttonContent='SHOP'
          buttonContent2=''
          buttonLink='#item-shop/item'
          buttonLink2=''
          content=<span>One of a kind bottle opener and hook set. Perfect for
          any she shed or man cave.</span>
          content2=''
          fontSize='4vh'
          fontSize2=''
          image=''
          image2={stock.stock.bottleOpener}
          x={[0,0]}
          y={[0,0]}
          width='300'
        />

        <InfoColumn
          name='Bird House'
          name2=''
          backgroundColor='#000'
          backgroundColor2='#f3edbe'
          backgroundImage=''
          backgroundImage2=''
          buttonBackground=''
          buttonBackground2='#e3e1e1'
          buttonColor=''
          buttonColor2='#000'
          buttonContent=''
          buttonContent2='SHOP'
          buttonLink=''
          buttonLink2='#item-shop/item'
          color=''
          color2='#000'
          content=''
          content2=<span>The Secret Byrd Houses make great gifts for the holidays.</span>
          fontSize=''
          fontSize2='4vh'
          image={stock.stock.birdHouse}
          image2=''
          x={[0,0]}
          y={[0,0]}
          width='300'
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
