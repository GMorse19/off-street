import React from 'react'
import { Container } from 'react-bootstrap'

import { flag } from '../../../helpers/images/Flags/flagsArray'
import { item } from '../../../helpers/images/Items/itemsArray'
import ProductContainer from '../../../Components/Products/ProductContainer/ProductContainer'
import content from '../../../Components/Products/ProductDescription/Content'

import { logo } from '../../../helpers/images/Logos/logosArray'

import './AboutContent.scss'
import '../../../Components/Products/Products.scss'

const AboutContent = () => (
  <div className='info-section'>
    <Container className='about-content-container'>

      <ProductContainer
        image={flag.standard.cutout}
        title={content.five.title}
        description={content.five.description}
        alt='American Flag'
        left='90'
        right='-100'
      />

      <ProductContainer
        image={flag.random.oldBoards}
        title={content.six.title}
        description={content.six.description}
        alt='Boards under American Flag'
        left='-90'
        right='100'
        logo={logo[3]}
      />

      <ProductContainer
        image={item.chalkBoard.cutout}
        title={content.seven.title}
        description={content.seven.description}
        alt='Chalk Board'
        left='90'
        right='-100'
      />

      <ProductContainer
        image={flag.standard.cutout}
        title={content.eight.title}
        description={content.eight.description}
        alt='Bird House'
        left='-90'
        right='100'
        logo={logo[3]}
      />

      <ProductContainer
        image={item.chalkBoard.cutout}
        title={content.two.title}
        description={content.two.description}
        alt='Bird House'
        left='-90'
        right='100'
      />

    </Container>
  </div>
)

export default AboutContent
