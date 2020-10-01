import React from 'react'

import { slide as Menu } from 'react-burger-menu'

import './Header.scss'

const handleScroll = (id) => {
    console.log('scroll')
}

const Header = () => (
    <div className='header'>
        <button className='burger-menu'><img
          src='burger.png'
          alt='logo'
          className='logo'
        />
        </button>
        <Menu className='menu'>
          <a onClick={handleScroll} href='/'>Home</a>
          <a href='/about'>About</a>
          <a href='/shop'>Shop</a>
          <a href='/contact'>Contact</a>
          <a href='/gallery'>Gallery</a>
        </Menu>
    </div>
)

export default Header;
