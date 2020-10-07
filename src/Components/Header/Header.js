import React from 'react'

import { fallDown as Menu } from 'react-burger-menu'
import { Row, Col, Container } from 'react-bootstrap'

import { icon } from '../../helpers/images/Icons/iconsArray'
import { stock} from '../../helpers/images/Stock/stockArray'
import LogoFloat from '../LogoFloat/LogoFloat'

import './Header.scss'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false,
      image: ''
    }
  }

  handleChange = (state) => {
    this.setState({ menuOpen: state.isOpen })
  }

  hoverButton = (event) => {
    this.setState({ image: event })
  }

  closeMenu = () => {
    this.setState({ menuOpen: false, image: '' })
  }

  toggleMenu = () => {
    this.setState(state => ({ menuOpen: !state.menuOpen }))
  }

  imageSelector = (event) => {
    return event
  }

   images = {
     home: stock.stock.standardFlag,
     about: stock.stock.workShop,
     shop: stock.stock.birdHouse,
     contact: stock.stock.chalkBoard,
     gallery: stock.stock.oldBoards
   }

  render () {

    const { menuOpen, image } = this.state
    
    return(
    <div className='header'>
        <Menu
          className='menu'
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleChange(state)}
          width={ '100vw' }
        >
        <Container fluid>
          <Row>
            <Col lg={6} xs={6} className={menuOpen ? 'logo-menu-down' : 'logo-menu'}>
              <div className='logofloat-padding'>
                <LogoFloat
                  left={-30}
                  right={30}
                />
              </div>
              <div className=''>
                <img
                  key={image}
                  className={menuOpen ? 'image-menu fade-in' : 'image-menu-closed fade-in'}
                  src={this.images[`${image}`]}
                  alt={image}
                />
              </div>
            </Col>
            <Col lg={6} xs={6} className='page-menu'>
            <button
              onClick={this.closeMenu}
              className='close-button'
            >
            X
            </button>
              <div className={menuOpen ? 'menu-link-open' : 'menu-link'}>
                <a
                   name='home'
                   onMouseOver={() => this.hoverButton('home')}
                   onClick={() => this.closeMenu()}
                   href='#/'
                >
                   Home
                </a>
                <a name='about' onMouseOver={() => this.hoverButton('about')} onClick={() => this.closeMenu()} href='#about'>About</a>
                <a name='shop' onMouseOver={() => this.hoverButton('shop')} onClick={() => this.closeMenu()} href='#shop'>Shop</a>
                <a name='contact' onMouseOver={() => this.hoverButton('contact')} onClick={() => this.closeMenu()} href='#contact'>Contact</a>
                <a name='gallery' onMouseOver={() => this.hoverButton('gallery')} onClick={() => this.closeMenu()} href='#gallery'>Gallery</a>
              </div>
            </Col>
          </Row>
          </Container>
        </Menu>
        <button
          className='burger-menu'
        >
          <img
            src={icon.button.burger}
            alt='logo'
            className='logo'
          />
        </button>
    </div>
  )
}
}

export default Header;
