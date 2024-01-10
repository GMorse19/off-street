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
            <Col className='portfolio-image' lg={6} xs={6}>
              <div className='img-wrap'>
                <a className="portfolio-item" href="https://gmorse19.github.io/whats-your-problem-client/" target="_blank" rel="noreferrer">
                  <img  width={400} src={portfolioImages.portfolioImages.wyp} alt='Whats Your Problem'/>
                  <p className='img-text'>
                    <p className='img-title'>What's Your Problem?</p>
                    <p className='img-text-content'>A full stack SPA built using React.js and Ruby on Rails.</p>
                  </p>
                </a>
                <a href="https://github.com/GMorse19/whats-your-problem-client" target="_blank" rel="noreferrer">What's Your Problem? Repo</a>
              </div>
              <div className='img-wrap'>
                <a href="https://sei-uxdi-collab.github.io/work_from_roam-client/#/" target="_blank" rel="noreferrer">
                  <img  width={400} src={portfolioImages.portfolioImages.WorkFromRoam} alt='WorkFromRoam'/>
                  <p className='img-text'>
                    <p className='img-title'>Work From Roam</p>
                    <p className='img-text-content'>A group collaboration using Google Maps API. Built using React.js and Ruby on Rails.</p>
                  </p>
                </a>
                <a href="https://github.com/sei-uxdi-collab/work_from_roam-client" target="_blank" rel="noreferrer">Work From Roam Repo</a>
              </div>
              <div className='img-wrap'>
                <a href="https://gmorse19.github.io/beehiveClient/" target="_blank" rel="noreferrer">
                  <img  width={400} src={portfolioImages.portfolioImages.BeeHive} alt='BeeHive'/>
                  <p className='img-text'>
                    <p className='img-title'>BeeHive</p>
                    <p className='img-text-content'>Group Project. A full stack SPA built using Express, MongoDB and JavaScript.</p>
                  </p>
                </a>
                <a href="https://github.com/GMorse19/beehiveClient" target="_blank" rel="noreferrer">Bee Hive Repo</a>
              </div>
              <div className='img-wrap'>
                <a href="https://gmorse19.github.io/ConstGamer/" target="_blank" rel="noreferrer">
                  <img  width={400} src={portfolioImages.portfolioImages.ConstGamer} alt='Whats Your Problem'/>
                  <p className='img-text'>
                    <p className='img-title'>Const Gamer</p>
                    <p className='img-text-content'>A full stack SPA built using React.js and Ruby on Rails.</p>
                  </p>
                </a>
                <a href="https://github.com/GMorse19/ConstGamer" target="_blank" rel="noreferrer">Const Gamer Repo</a>
              </div>
            </Col>
            <Col className='portfolio-image' lg={6} xs={6}>
              <div className='img-wrap'>
                <a href="https://gmorse19.github.io/Quip-Pro-Code/" target="_blank" rel="noreferrer">
                  <img  width={400} src={portfolioImages.portfolioImages.QuipProCode} alt='QuipProCode'/>
                  <p className='img-text'>
                    <p className='img-title'>Quip Pro Code</p>
                    <p className='img-text-content'>A full stack SPA built with JavaScript and Ruby on Rails</p>
                  </p>
                </a>
                <a href="https://github.com/GMorse19/Quip-Pro-Code" target="_blank" rel="noreferrer">Quip Pro Code Repo</a>
              </div>
              <div className='img-wrap'>
                <a href="https://gmorse19.github.io/tic-tac-toe-GMorse19/" target="_blank" rel="noreferrer">
                  <img  width={400} src={portfolioImages.portfolioImages.TicTacToe} alt='TicTacToe'/>
                  <p className='img-text'>
                    <p className='img-title'>Tic Tac Toe</p>
                    <p className='img-text-content'>A front-end SPA built using JavaScript.</p>
                  </p>
                </a>
                <a href="https://github.com/GMorse19/tic-tac-toe-GMorse19" target="_blank" rel="noreferrer">Tic Tac Toe Repo</a>              </div>
              <div className='img-wrap'>
                <a href="https://gmorse19.github.io/PollPosition/" target="_blank" rel="noreferrer">
                  <img  width={400} src={portfolioImages.portfolioImages.PollPosition} alt='PollPosition'/>
                  <p className='img-text'>
                    <p className='img-title'>Poll Position</p>
                    <p className='img-text-content'>A full stack SPA built using React.js and Ruby on Rails.</p>
                  </p>
                </a>
                <a href="https://github.com/GMorse19/PollPosition" target="_blank" rel="noreferrer">Poll Position Repo</a>
              </div>
              <div className='img-wrap'>
                <a href="https://gmorse19.github.io/HappySlider/" target="_blank" rel="noreferrer">
                  <img  width={400} src={portfolioImages.portfolioImages.HappySlider} alt='HappySlider'/>
                  <p className='img-text'>
                    <p className='img-title'>Happy Slider</p>
                    <p className='img-text-content'>A fun CSS variable project.</p>
                  </p>
                </a>
                <a href="https://github.com/GMorse19/HappySlider" target="_blank" rel="noreferrer">Happy Slider Repo</a>
              </div>
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
