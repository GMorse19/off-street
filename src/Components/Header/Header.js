import React from 'react'

import { fallDown as Menu } from 'react-burger-menu'

import { icon } from '../../helpers/images/Icons/iconsArray'

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
          <a className='menu-link' onClick={() => this.closeMenu()} href='#/'>Home</a>
          <a className='menu-link' onClick={() => this.closeMenu()} href='#about'>About</a>
          <a className='menu-link' onClick={() => this.closeMenu()} href='#shop'>Shop</a>
          <a className='menu-link' onClick={() => this.closeMenu()} href='#contact'>Contact</a>
          <a className='menu-link' onClick={() => this.closeMenu()} href='#gallery'>Gallery</a>
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
