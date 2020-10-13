import React from 'react'

import { itemGallery } from '../../helpers/images/Items/itemGallery'

import './GalleryPage.scss'

const flagJsx = itemGallery.map(flag => (
    <div key={flag.id} className='box'>
      {
        <div>
          <img className={flag.class} src={flag.src} alt={flag.name} />
        </div>
      }
    </div>
  ))

const GalleryPage = () => (
  <div className='gallery-background'>
  <div className='gallery-words'><p>Gallery</p></div>
    <div id="container">
      <div id="container2">
          {flagJsx}
      </div>
    </div>
  </div>

)
export default GalleryPage
