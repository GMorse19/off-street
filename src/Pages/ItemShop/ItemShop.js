import React from 'react'

import ProductInfo from '../../Components/Products/ProductInfo/ProductInfo'

import './ItemShop.scss'

import { itemGallery } from '../../helpers/images/Items/itemGallery'

class ItemShop extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      type: props.props.match.params.id
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render () {
    const { type } = this.state

    const itemList = itemGallery.filter( product => product.type === type )

    const itemJsx = itemList.map(item => (
        <div key={item.id} className='itemshop'>
          {
            <div className='itemshop-jsx'>
              <p className='itemshop-title'>{item.name}</p>
              <a className='itemshop-image' href={`#/description/${item.id}`}>
                <img width={300} src={item.src} alt={item.name} />
              </a>
              {item.description}
            </div>
          }
        </div>
      ))

    return (
      <div>
        <ProductInfo
          props={itemJsx}
          header={type}
        />
      </div>
    )
  }
}

export default ItemShop
