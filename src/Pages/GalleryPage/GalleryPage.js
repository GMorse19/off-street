import React from 'react'

import { flag } from '../../helpers/images/Flags/flagsArray'
import { item } from '../../helpers/images/Items/itemsArray'


import './GalleryPage.scss'

const GalleryPage = () => (
  <div id="container">
    <div id="container2">
        <div className="box">
        <div>
          <div className='one'>
              <img className='flag-image2' src={flag.standard.cutout} alt='American Flag' />
          </div>
          <div className='two'>
              <img className='flag-image2' src={flag.blackAndWhite.angle} alt='Black and White American Flag' />
          </div>
          <div className='three'>
              <img className='flag-image2' src={item.chalkBoard.cutout} alt='Thin Red Line American Flag' />
          </div>
        </div>
        </div>
        <div className="box">
        <div>
          <div className='one'>
              <img className='flag-image2' src={flag.standard.flat} alt='Stars and Stripes' />
          </div>
          <div className='two'>
              <img className='flag-image2' src={item.birdHouse.front} alt='Bird House' />

              <img className='flag-image2 padding' src={flag.blackAndWhite.back} alt='Back of Flag' />
          </div>
        </div>
        </div>
        <div className="box">
        <div>
          <div className='one'>
              <img className='flag-image2' src={flag.standard.front} alt='American Flag' />
          </div>
          <div className='two'>
              <img className='flag-image2' src={flag.blackAndWhite.front} alt='Black and White American Flag' />
          </div>
          <div className='three'>
              <img className='flag-image2' src={flag.fire.front} alt='Thin Red Line American Flag' />
          </div>
        </div>
        </div>
        <div className="box">
        <div>
          <div className='one'>
              <img className='flag-image2' src={flag.standard.sawdust} alt='American Flag' />
          </div>
          <div className='two'>
              <img className='flag-image2' src={flag.blackAndWhite.angle} alt='Black and White Flag' />
          </div>
          <div className='three'>
              <img className='flag-image2' src={flag.fire.front} alt='Thin Red Line American Flag' />
          </div>
        </div>
        </div>
    </div>
  </div>
)
export default GalleryPage
