import React from 'react'

import Products from '../../Components/Products/Products'
import Connect from '../../Components/Connect/Connect'
import Footer from '../../Components/Footer/Footer'
import Title from '../../Components/Title/Title'

import './HomePage.scss'

class HomePage extends React.Component {
  
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      <div className='home-page-div'>
        <Title />
        <Products />
        <Connect />
        <Footer />
      </div>
    )
  }
}

export default HomePage
