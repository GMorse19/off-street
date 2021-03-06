import React from 'react'

import { fallDown as Menu } from 'react-burger-menu'
import { Row, Col, Container } from 'react-bootstrap'

import { stock} from '../../helpers/images/Stock/stockArray'
import { logo } from '../../helpers/images/Logos/logosArray'
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

   images = {
     home: stock.stock.standardFlag,
     about: stock.stock.workShop,
     shop: stock.stock.birdHouse,
     contact: stock.stock.chalkBoard,
     gallery: stock.stock.oldBoards,
     donations: stock.stock.workShop,
     howto: stock.stock.workShop
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
                  logo={logo[2]}
                />
              </div>
              <div>
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
              <ul>
                <li>
                  <a
                     name='home'
                     className='a-link-menu'
                     onMouseOver={() => this.hoverButton('home')}
                     onClick={() => this.closeMenu()}
                     href='#/'
                  >
                     Home
                  </a>
                </li>
                <li>
                  <a
                    name='about'
                    className='a-link-menu'
                    onMouseOver={() => this.hoverButton('about')}
                    onClick={() => this.closeMenu()}
                    href='#about'
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    name='shop'
                    className='a-link-menu'
                    onMouseOver={() => this.hoverButton('shop')}
                    onClick={() => this.closeMenu()}
                    href='#item-shop/all'
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    name='contact'
                    className='a-link-menu'
                    onMouseOver={() => this.hoverButton('contact')}
                    onClick={() => this.closeMenu()}
                    href='#contact'
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    name='gallery'
                    className='a-link-menu'
                    onMouseOver={() => this.hoverButton('gallery')}
                    onClick={() => this.closeMenu()}
                    href='#gallery'
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    name='donations'
                    className='a-link-menu'
                    onMouseOver={() => this.hoverButton('donations')}
                    onClick={() => this.closeMenu()}
                    href='#donations'
                  >
                    Donations
                  </a>
                </li>
                <li>
                  <a
                    name='how-to'
                    className='a-link-menu'
                    onMouseOver={() => this.hoverButton('howto')}
                    onClick={() => this.closeMenu()}
                    href='#how-to'
                  >
                    How To
                  </a>
                </li>
                </ul>
              </div>
            </Col>
          </Row>
          </Container>
        </Menu>
        <Container>
            <Row>
              <Col>
                <div className='header-logo'>
                  <span style={{ fontSize: '40px', paddingBottom: '0px' }}>Off Street</span>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className='header-link'>
                <a href='#/'>Home</a>
              </Col>
              <Col className='header-link'>
                <a href='#about'>About</a>
              </Col>
              <Col className='header-link'>
                <a href='#item-shop/all'>Shop</a>
              </Col>
              <Col className='header-link'>
                <a href='#donations'>Donate</a>
              </Col>
              <Col className='header-link'>
                <a href='#gallery'>Gallery</a>
              </Col>
              <Col className='header-link'>
                <a href='#contact'>Contact</a>
              </Col>
            </Row>
        </Container>
    </div>
  )
}
}

export default Header;
