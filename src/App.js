import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax';

import './App.scss';

import Header from './Components/Header/Header'
import AboutPage from './Pages/AboutPage/AboutPage'
import HomePage from './Pages/HomePage/HomePage'
import GalleryPage from './Pages/GalleryPage/GalleryPage'
import ContactPage from './Pages/ContactPage/ContactPage'
import ShopPage from './Pages/ShopPage/ShopPage'

class App extends React.Component{
  state = {
    background: 'img1 App'
  }

  listenScrollEvent = e => {
    if (window.scrollY > 2000 && window.scrollY <= 3800) {
      this.setState({background: 'img2 App'})
    } else if (window.scrollY > 3800) {
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
    <BrowserRouter>
      <ParallaxProvider>
        <div className={this.state.background}>
          <Header />
            <div>
                <Route exact path='/' render={() => (
                  <HomePage />
                )} />
                <Route path='/about' render={() => (
                  <AboutPage />
                )} />
                <Route path='/gallery' render={() => (
                  <GalleryPage />
                )} />
                <Route path='/contact' render={() => (
                  <ContactPage />
                )} />
                <Route path='/shop' render={() => (
                  <ShopPage />
                )} />
            </div>
        </div>
      </ParallaxProvider>
    </BrowserRouter>
  )
}
}

export default App;
