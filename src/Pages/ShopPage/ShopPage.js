import React from 'react'

import Products from '../../Components/Products/Products'
import Connect from '../../Components/Connect/Connect'
import Footer from '../../Components/Footer/Footer'
import Title from '../../Components/Title/Title'

import './ShopPage.scss'

const ShopPage = () => (
  <div className=''>
    <Title />
    <Products />
    <Connect />
    <Footer />
  </div>
)

export default ShopPage
