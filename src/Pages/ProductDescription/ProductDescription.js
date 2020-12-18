import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import Slider from "react-slick";

import './ProductDescription.scss'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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
      windowSize: window.innerWidth >= 1000 ? true : false,
    }
  }

  handleSize = () => {
    this.setState(handleWindowSize)
  }

  handlePurchase = () => {
    alert('Sorry, this feature is not yet available.')
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
      <div key={gallery.id}>
        {
          <div className='jsx-img-div'>
            <img className='product-image-jsx' src={gallery.src} alt={gallery.name} />
          </div>
        }
      </div>
    ))}

    let slideCount = galleryJsx.length > 2 && windowSize

    const settings =
      {
        className: "center",
        dots: windowSize ? false : true,
        infinite: true,
        speed: 500,
        slidesToShow: slideCount ? 3 : 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "60px",
        autoplay: true,
        autoplaySpeed: 2000,
        swipeToSlide: true,
        arrows: windowSize ? true : false,
      }

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
              <Button className='product-display-button' onClick={this.handlePurchase}>Purchase</Button>
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
              <Slider {...settings}>
                {galleryJsx}
              </Slider>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default ProductDescription
