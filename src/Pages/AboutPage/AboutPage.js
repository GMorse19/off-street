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
          backgroundColor='#f3edbe'
          header="We're craftsmen, creators and conservationists."
          sectionColor='#000'
          headerFont='60px'
          content='Making the world cleaner and brighter, one board at a time.'
          buttonContent=''
          padding='7%'
        />
        <InfoColumn
          name='junk yard'
          backgroundColor='#000'
          backgroundColor2='#f3edbe'
          fontSize2='40px'
          y={[40,-40]}
          width='300'
          image={stock.stock.jobSite}
          content2='Off Street Carpentry was born from over twenty five years of witnessing continuous waste amongst the building trades.'
        />
        <InfoRow
          header="Often times on job sites, shorter pieces of wood will be disposed of. They clutter up the work area and are generally moved around so much that they become a nuisance. It's just simply easier to throw them in the dumpster."
          sectionColor='#FFF'
          headerFont='40px'
          content=''
          buttonContent='Flags'
          href=''
          padding='7%'
          backgroundUrl={stock.stock.junkyard}
        />
        <InfoColumn
          name2='craft'
          backgroundColor2='#f3edbe'
          backgroundColor='#f3edbe'
          fontSize='40px'
          width2='300'
          image2={stock.stock.jobSite}
          content="Knowing that there could be a better, creative way to make use of this waste, Off Street's founder set out to find different ways to rescue these forlorn timbers."
        />
        <InfoRow
          header="Good old fashioned American entrepreneurship sparked the first product off the line, Ole' Glory herself. The stars and stripes not only began the journey, but it also opened the door for many more creations to come."
          sectionColor='#FFF'
          headerFont='40px'
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
