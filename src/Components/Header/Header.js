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
    return(
    <div className='header'>
        <Menu
          className='menu'
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleChange(state)}
          width={ '100vw' }
        >
        <Container>
          <Row style={{ paddingTop: '5vh' }}>
            <Col lg={6}>
              <LogoFloat
                left={-30}
                right={30}
              />
            </Col>
            <Col lg={2}>
              <a className='menu-link' onClick={() => this.closeMenu()} href='#/'>Home</a>
              <a className='menu-link' onClick={() => this.closeMenu()} href='#about'>About</a>
              <a className='menu-link' onClick={() => this.closeMenu()} href='#shop'>Shop</a>
              <a className='menu-link' onClick={() => this.closeMenu()} href='#contact'>Contact</a>
              <a className='menu-link' onClick={() => this.closeMenu()} href='#gallery'>Gallery</a>
            </Col>
          </Row>
          </Container>
        </Menu>
        <button className='burger-menu'><img
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
