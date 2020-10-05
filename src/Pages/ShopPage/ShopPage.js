import React from 'react'

import Products from '../../Components/Products/Products'
import Connect from '../../Components/Connect/Connect'
import Footer from '../../Components/Footer/Footer'
import Title from '../../Components/Title/Title'

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
        <Products />
        <Connect />
        <Footer />
      </div>
    )
  }
}

export default ShopPage
