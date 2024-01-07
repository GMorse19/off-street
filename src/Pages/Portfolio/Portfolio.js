import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './Portfolio.scss'

import { portfolioImages } from '../../helpers/images/PortfolioImages/PortfolioImages'

import Footer from '../../Components/Footer/Footer'

class Portfolio extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      <div>
      <div id='donations'>
        <div>
          <p className='donation-header'>Geoffrey A. G. Morse</p>
          <p>Software Engineer</p>
        </div>


        <Container className='donation-content'>
          <Row>
            <Col>
              <div>

                <p style={{ padding: '5%' }}>
                  I am builder by trade... Currently, I am building projects using JavaScript,
                  React.js, React Native, Ruby on Rails, and many oter technologies, but I also have experience building with musical instruments,
                  cameras, power tools and my bare hands.
                </p>
                <p style={{ padding: '5%' }}>
                  Some of my other areas of interest are Express.js, Node.js, wood-working, postgreSQL,
                  camping, sketching, NoSQL, MongoDB, music(anything from Bach up to and including 80's hair metal),
                  hockey, BootStrap, SaSS, geocaching, and film-making.
                </p>


              </div>
            </Col>
          </Row>
          <Row>
            <Col className='home-page-mission' lg={{ span: 4, offset: 2 }}>
              <p><img  width={500} src={portfolioImages.portfolioImages.wyp} alt='Whats Your Problem'/>What's Your Problem</p>
              <p><img  width={500} src={portfolioImages.portfolioImages.WorkFromRoam} alt='WorkFromRoam'/>Work From Roam</p>
              <p><img  width={500} src={portfolioImages.portfolioImages.BeeHive} alt='BeeHive'/>BeeHive</p>
              <p><img  width={500} src={portfolioImages.portfolioImages.ConstGamer} alt='Whats Your Problem'/>Const Gamer</p>
              <p><img  width={500} src={portfolioImages.portfolioImages.HappySlider} alt='WorkFromRoam'/>Happy Slider</p>
              <p><img  width={500} src={portfolioImages.portfolioImages.QuipProCode} alt='QuipProCode'/>Quip Pro Code</p>
              <p><img  width={500} src={portfolioImages.portfolioImages.TicTacToe} alt='TicTacToe'/>Tic Tac Toe</p>
              <p><img  width={500} src={portfolioImages.portfolioImages.PollPosition} alt='PollPosition'/>Poll Position</p>
            </Col>
          </Row>
        </Container>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Portfolio
