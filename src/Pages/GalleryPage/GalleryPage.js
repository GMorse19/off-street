import React from 'react'

import { itemGallery } from '../../helpers/images/Items/itemGallery'

import './GalleryPage.scss'

const flagJsx = itemGallery.map(flag => (
    <div key={flag.id} className='box'>
      {
        <div>
        <h1>{flag.class}</h1>
          <img className={flag.class} src={flag.src} alt={flag.name} />
        </div>
      }
    </div>
  ))

const GalleryPage = () => (
  <div id="container">
    <div id="container2">

        {flagJsx}

    </div>
  </div>
)
export default GalleryPage
