import React from 'react'
import { Container, Col, Row, Button, Carousel } from 'react-bootstrap'

import './ProductDescription.scss'

import { itemGallery } from '../../helpers/images/Items/itemGallery'
import handleWindowSize from '../../helpers/handleWindowSize'

class ProductDescription extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      id: props.props.match.params.id,
      type: itemGallery.find(x => x.id === props.props.match.params.id).type,
      src: itemGallery.find(x => x.id === props.props.match.params.id).src,
      name: itemGallery.find(x => x.id === props.props.match.params.id).name,
      description: itemGallery.find(x => x.id === props.props.match.params.id).description,
      price: itemGallery.find(x => x.id === props.props.match.params.id).price,
      gallery: itemGallery.find(x => x.id === props.props.match.params.id).gallery,
      windowSize: window.innerWidth >= 1000 ? true : false
    }
  }

  handleSize = () => {
    this.setState(handleWindowSize)
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    window.addEventListener('resize', this.handleSize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleSize)
  }

  render () {

    const { src, name, description, price, gallery, type, windowSize } = this.state

    let galleryJsx = []

    if (gallery) { galleryJsx = gallery.map(gallery => (
      <Carousel.Item key={gallery.id}>
            {
              <div>
                <img className='product-image-jsx' src={gallery.src} alt={gallery.name} />
                <h1>{gallery.name}</h1>
              </div>
            }
      </Carousel.Item>
    ))}

    return (
      <div className='product-display'>
        <Container>
          <Row>
            <Col>
              <h1>{name}</h1>
            </Col>
          </Row>

          <Row className="justify-content-md-center description-row">
            <Col lg={8}>
              <div className='product-description'>
                <span>{description}</span>
                <p>Price: {price}</p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <img className='product-image' src={src} alt={name}/>
            </Col>
          </Row>

          <Row className="justify-content-md-center description-row">
            <Col lg={2} md={2} sm={4} xs={4}>
              <Button className='product-display-button' href='#shop'>Purchase</Button>
            </Col>
            <Col lg={2} md={2} sm={4} xs={4}>
              <Button className='product-display-button' href={`#item-shop/${type}`}>{type} SHOP</Button>
            </Col>
            <Col lg={2} md={2} sm={4} xs={4}>
              <Button className='product-display-button' href='#gallery'>Gallery</Button>
            </Col>
          </Row>

          <Row className='description-row'>
            <Col>
              {gallery && <Carousel controls={windowSize} className='carousel'>
                {galleryJsx}
              </Carousel>}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default ProductDescription
