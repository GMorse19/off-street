import React from 'react'

import { fallDown as Menu } from 'react-burger-menu'
import { Row, Col, Container } from 'react-bootstrap'

import { icon } from '../../helpers/images/Icons/iconsArray'
import LogoFloat from '../LogoFloat/LogoFloat'

import './Header.scss'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleChange = (state) => {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu = () => {
    this.setState({ menuOpen: false })
  }

  toggleMenu = () => {
    this.setState(state => ({ menuOpen: !state.menuOpen }))
  }

  render () {

    const { menuOpen } = this.state

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
            </Col>
            <Col lg={6} xs={6} className='page-menu'>
            <button
              onClick={this.closeMenu}
              className='close-button'
            >
            X
            </button>
              <div className={menuOpen ? 'menu-link-open' : 'menu-link'}>
                <a onClick={() => this.closeMenu()} href='#/'>Home</a>
                <a onClick={() => this.closeMenu()} href='#about'>About</a>
                <a onClick={() => this.closeMenu()} href='#shop'>Shop</a>
                <a onClick={() => this.closeMenu()} href='#contact'>Contact</a>
                <a onClick={() => this.closeMenu()} href='#gallery'>Gallery</a>
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
