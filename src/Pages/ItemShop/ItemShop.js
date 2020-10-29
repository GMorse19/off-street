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

    const itemList = itemGallery.filter( product => product.type === type )

    const itemJsx = itemList.map(item => (
        <Row className="justify-content-md-center">
        <Col lg={6}>
          <div key={item.id} className='itemshop'>
            {
              <div className='itemshop-jsx'>
                <p className='itemshop-title'>{item.name}</p>
                <a href={`#/description/${item.id}`}>
                  <img className='itemshop-image' src={item.src} alt={item.name} />
                </a>
                <span className='itemshop-description'>{item.description}</span>
                <Button href={`#/description/${item.id}`} className='itemshop-button'>Purchase</Button>
              </div>
            }
          </div>
          </Col>
        </Row>
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
