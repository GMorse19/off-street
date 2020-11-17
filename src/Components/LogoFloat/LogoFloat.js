import React from 'react'
import { Parallax } from 'react-scroll-parallax'

// import { logo } from '../../helpers/images/Logos/logosArray'

import './LogoFloat.scss'

const LogoFloat = (props) => (
  <div>
    <Parallax className="custom-class" y={[props.left, props.right]} tagOuter="figure">
      {props.logo && <img className='logo-float-size' alt='logo' src={props.logo}/>}
    </Parallax>
  </div>
)

export default LogoFloat
