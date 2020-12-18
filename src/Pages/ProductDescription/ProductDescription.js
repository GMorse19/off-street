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
      <Col className='productshop' key={gallery.id}>
        {

            <img className='product-image' src={gallery.src} alt={gallery.name} />

        }
      </Col>
    ))}

    let slideCount = galleryJsx.length > 2 && windowSize

    const settings =
      {
        className: "center",
        dots: windowSize ? false : true,
        infinite: true,
        speed: 500,
        slidesToShow: slideCount ? 3 : 2,
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

          <Row className='justify-content-center'>

          <Col xs={12} md={6} lg={4}>
            <div className='itemshop'>
                <div className='itemshop-jsx'>
                  <div className='itemshop-image-div'>
                      <img className='itemshop-image' src={src} alt={name} />
                  </div>
                  <Row>

                    <Col xs={8} lg={8} className='itemshop-title'>
                      {name}
                    </Col>

                    <Col>
                      <p>{price}</p>
                    </Col>

                  </Row>
                </div>
            </div>
          </Col>

          <Col lg={2} md={2} sm={12} xs={12} className='button-pad'>
              <Button className='product-display-button' onClick={this.handlePurchase}>Purchase</Button>

              <Button className='product-display-button' href={`#item-shop/${type}`}>SHOP</Button>

              <Button className='product-display-button' href='#gallery'>Gallery</Button>
          </Col>

         </Row>

         <Row className="justify-content-md-center description-row">
            <Col lg={6}>
              <div className='product-description'>
                <span>{description}</span>
              </div>
            </Col>
          </Row>

          <Row className='justify-content-center'>
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
