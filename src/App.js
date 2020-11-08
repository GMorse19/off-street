import React from 'react';
import { Route } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax';

import './App.scss';

import Header from './Components/Header/Header'
import AboutPage from './Pages/AboutPage/AboutPage'
import HomePage from './Pages/HomePage/HomePage'
import GalleryPage from './Pages/GalleryPage/GalleryPage'
import ContactPage from './Pages/ContactPage/ContactPage'
import ShopPage from './Pages/ShopPage/ShopPage'
import Donations from './Pages/Donations/Donations'
import ProductDescription from './Pages/ProductDescription/ProductDescription'
import ItemShop from './Pages/ItemShop/ItemShop'
import HowTo from './Pages/HowTo/HowTo'

class App extends React.Component{
  state = {
    background: 'img1 App'
  }

  listenScrollEvent = e => {
    if (window.scrollY > 1000 && window.scrollY <= 3000 && window.screen.width > 500) {
      this.setState({background: 'img2 App'})
    } else if (window.scrollY > 3000) {
      this.setState({background: 'img3 App'})
    } else {
      this.setState({background: 'img1 App'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {
  return (
      <ParallaxProvider>
        <div className={this.state.background}>
          <Header />
            <div>
                <Route exact path='/'  render={() => (
                  <HomePage />
                )} />
                <Route path='/about'  render={() => (
                  <AboutPage />
                )} />
                <Route path='/gallery'  render={() => (
                  <GalleryPage />
                )} />
                <Route path='/contact'  render={() => (
                  <ContactPage />
                )} />
                <Route path='/shop'  render={() => (
                  <ShopPage />
                )} />
                <Route path='/donations'  render={() => (
                  <Donations />
                )} />
                <Route path='/description/:id'  render={(props) => (
                  <ProductDescription
                    props={props}
                  />
                )} />
                <Route path='/item-shop/:id'  render={(props) => (
                  <ItemShop
                    props={props}
                  />
                )} />
                <Route path='/how-to'  render={() => (
                  <HowTo />
                )} />
            </div>
        </div>
      </ParallaxProvider>
  )
}
}

export default App;
