import React from 'react'

import { itemGallery } from '../../helpers/images/Items/itemGallery'

import './GalleryPage.scss'

const galleryList = itemGallery.sort( () => Math.random() - 0.5)

const flagJsx = galleryList.map(flag => (
    <div key={flag.id} className='box'>
      {
        <div>
          <a href={`#/description/${flag.id}`}>
            <img className={flag.class} src={flag.src} alt={flag.name} />
          </a>
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
