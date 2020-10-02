import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import { logo } from '../../helpers/images/Logos/logosArray'

import './LogoFloat.scss'

const LogoFloat = (props) => (
  <div>
    <Parallax className="custom-class" y={[props.left, props.right]} tagOuter="figure">
      <img className='home-logo-gallery' alt='logo' src={logo[1]}/>
    </Parallax>
  </div>
)

export default LogoFloat
