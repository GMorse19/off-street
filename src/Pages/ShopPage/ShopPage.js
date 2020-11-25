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
          href='#item-shop/all'
          padding='7%'
        />

        <InfoColumn
          color2='#e3e1e1'
          name='American Flag'
          backgroundColor='#000'
          backgroundColor2='#5f3d26'
          backgroundUrl2={stock.stock.standardFlag}
          image={stock.stock.standardFlag}
          fontSize2='4vh'
          y={[-20,20]}
          width='300'
          content2=<span>Check out our list of Hand crafted flags</span>
          buttonContent='FLAGS'
          buttonLink='#item-shop/Flag'
          buttonBackground='#e3e1e1'
          buttonColor='#000'
        />

        <InfoColumn
          color='#e3e1e1'
          name2='Bottle Opener'
          backgroundColor='#e3e1e1'
          backgroundUrl={stock.stock.woodBg}
          backgroundColor2='#000'
          buttonBackground='#e3e1e1'
          buttonBackground2=''
          buttonColor='#000'
          buttonContent='SHOP'
          buttonLink='#item-shop/Item'
          content=<span>One of a kind bottle opener and hook set. Perfect for
          any she-shed or man-cave.</span>
          fontSize='4vh'
          image2={stock.stock.bottleOpener}
          x={[0,0]}
          y={[0,0]}
          width='300'
        />

        <InfoColumn
          color2='#e3e1e1'
          name='Bird House'
          backgroundColor='#000'
          backgroundColor2='#f3edbe'
          backgroundUrl2={stock.stock.chalkBoard}
          buttonBackground2='#e3e1e1'
          buttonColor2='#000'
          buttonContent2='SHOP'
          buttonLink2='#item-shop/Item'
          content2=<span>Browse through a catalog of our unique hand made items.</span>
          fontSize2='4vh'
          image={stock.stock.birdHouse}
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
