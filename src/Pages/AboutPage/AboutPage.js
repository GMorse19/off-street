import React from 'react'

import Title from '../../Components/Title/Title'
import InfoRow from '../../Components/InfoRow/InfoRow'
import InfoColumn from '../../Components/InfoColumn/InfoColumn'
// import Intro from '../../Components/Intro/Intro'
import Connect from '../../Components/Connect/Connect'
import Footer from '../../Components/Footer/Footer'

import { stock } from '../../helpers/images/Stock/stockArray'

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

        <InfoRow
          href=''
          backgroundColor='#e7eeed'
          backgroundUrl={stock.stock.woodBg}
          header=<span>Craftsmen, creators and conservationists.</span>
          sectionColor='#e7eeed'
          headerFont='7vh'
          content=<span>Building a cleaner, brighter world one board at a time.</span>
          buttonContent=''
          padding='7%'
        />

        <InfoColumn
          name='junk yard'
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
          header=<span>Good old fashioned American entrepreneurship sparked the
          first product off the line, Ole' Glory herself. The stars and stripes
          began the journey, but the possibilities are endless and Off Street's
          mission is to find a use for all wood.</span>
          sectionColor='#FFF'
          headerFont='4vh'
          content=''
          buttonContent='Flags'
          href=''
          padding='7%'
          backgroundUrl={stock.stock.standardFlag}
        />

        <Connect />

        <Footer />
      </div>
    )
  }
}

export default AboutPage
