import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'

import './ProductDescription.scss'

import { itemGallery } from '../../helpers/images/Items/itemGallery'

class ProductDescription extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      src: itemGallery.find(x => x.id === props.props.match.params.id).src,
      name: itemGallery.find(x => x.id === props.props.match.params.id).name,
      description: itemGallery.find(x => x.id === props.props.match.params.id).description,
      price: itemGallery.find(x => x.id === props.props.match.params.id).price,
      gallery: itemGallery.find(x => x.id === props.props.match.params.id).gallery,
    }
  }

  render () {

    const { src, name, description, price, gallery } = this.state

    let galleryJsx = []

    if (gallery) { galleryJsx = gallery.map(gallery => (
      <div key={gallery.id}>
        {
          <div>
            <img width={300} src={gallery.src} alt={gallery.name} />
            <h1>{gallery.name}</h1>
          </div>
        }
      </div>
    ))}

    return (
      <div className='product-display'>
        <Container>
          <Row>
            <Col>
              <h1>{name}</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <img width={300} src={src} alt={name}/>
            </Col>
          </Row>
          <Row className="justify-content-md-center description-row">
            <Col lg={2}>
              <Button href='#shop'>Purchase</Button>
            </Col>
            <Col lg={2}>
              <Button href='#gallery'>Gallery</Button>
            </Col>
          </Row>
          <Row className="justify-content-md-center description-row">
            <Col lg={10}>
              <div className='product-description'>
                <span>{description}</span>
                <p>Price: {price}</p>
              </div>
            </Col>
          </Row>
          <Row>
          <Col>{galleryJsx}</Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default ProductDescription
