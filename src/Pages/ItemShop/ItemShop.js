import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

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
    let tipo = ''
    let itemList = []

    if (type === 'all') {
      tipo = ''
    } else {
      tipo = type
    }

    if (type === 'all') {
      itemList = (itemGallery.filter(product => product.type === 'Item' || product.type === 'Flag'))
    } else {
      itemList = (itemGallery.filter(product => product.type === type))
    }

    const itemJsx = itemList.map(item => (

          <Col xs={12} md={12} lg={4}>
            <div key={item.id} className='itemshop'>
              {
                <div className='itemshop-jsx'>
                  <p className='itemshop-title'>{item.name}</p>
                  <a href={`#/description/${item.id}`}>
                    <img className='itemshop-image' src={item.src} alt={item.name} />
                  </a>
                  <span className='itemshop-description'>{item.description}</span>
                  <p><Button href={`#/description/${item.id}`} className='itemshop-button'>Purchase</Button></p>
                </div>
              }
            </div>
          </Col>

      ))

    return (
      <div>
        <ProductInfo
          props={itemJsx}
          header={tipo}
        />
      </div>
    )
  }
}

export default ItemShop
