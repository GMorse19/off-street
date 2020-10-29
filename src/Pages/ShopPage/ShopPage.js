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
          name=''
          backgroundColor='#000'
          backgroundColor2='#f3edbe'
          backgroundUrl={stock.stock.junkyard}
          fontSize2='5vh'
          y={[-20,20]}
          width='300'

          content2=<span>Off Street Carpentry was born from over twenty five
          years of witnessing continuous waste amongst the building trades.</span>
        />

        <InfoColumn
          name='craft'
          backgroundColor2='#e3e1e1'
          backgroundColor='#e3e1e1'
          fontSize2='4vh'
          width='300'
          image={stock.stock.jobSite}
          content2=<span>Often times on job sites, shorter pieces of wood will
          be disposed of. They clutter up the work area and are generally moved
          around so much that they become a nuisance. It's just simply easier
          to throw them in the dumpster.</span>
        />

        <InfoColumn
          name2='craft'
          backgroundColor2='#f3edbe'
          backgroundColor='#f3edbe'
          fontSize='4vh'
          width2='300'
          image2={stock.stock.jobSite}
          content=<span>Knowing that there could be a better, creative way to
          make use of this waste, Off Street's founder set out to find
          different ways to rescue these forlorn timbers.</span>
        />

        <InfoRow
          header=<span>Hand made, individually burned and painted wooden flags.</span>
          sectionColor='#FFF'
          headerFont='4vh'
          content=''
          image={stock.stock.standardFlag}
          imageName='American Flag'
          href='#item-shop/flag'
          buttonContent='Shop'
          padding='7%'
          backgroundUrl={stock.stock.oldBoards}
        />

        <Connect />
        <Footer />
      </div>
    )
  }
}

export default ShopPage
