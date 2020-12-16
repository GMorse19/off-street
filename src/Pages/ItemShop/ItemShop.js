import React from 'react'
import { Col, Row } from 'react-bootstrap'

import ProductInfo from '../../Components/Products/ProductInfo/ProductInfo'
import Footer from '../../Components/Footer/Footer'

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

  handleClick = (event) => {
      window.scrollTo(0, 0)
    this.setState({ type: event.target.name })
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
          <Col xs={12} md={6} lg={4}>
            <div key={item.id} className='itemshop'>
              {
                <div className='itemshop-jsx'>
                  <div className='itemshop-image-div'>
                    <a href={`#/description/${item.id}`}>
                      <img className='itemshop-image' src={item.src} alt={item.name} />
                    </a>
                  </div>
                  <Row>
                    <Col xs={8} lg={8} className='itemshop-title'>
                      {item.name}
                    </Col>
                    <Col>
                      <p>{item.price}</p>
                    </Col>
                  </Row>
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
          handleClick={this.handleClick}
        />

        <Footer />
      </div>
    )
  }
}

export default ItemShop
