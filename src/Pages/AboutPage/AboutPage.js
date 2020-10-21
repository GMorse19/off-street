import React from 'react'

import Title from '../../Components/Title/Title'
import InfoRow from '../../Components/InfoRow/InfoRow'
import Intro from '../../Components/Intro/Intro'
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
        <InfoRow

          header='Off Street Carpentry was born from over twenty five years of witnessing continuous waste amongst the building trades.'
          sectionColor='#FFF'
          headerFont='60px'
          content=''
          buttonContent='Flags'
          href=''
          padding='7%'
          backgroundUrl={stock.stock.workShop}
        />
        <Intro />
        <Connect />
        <Footer />
      </div>
    )
  }
}

export default AboutPage
