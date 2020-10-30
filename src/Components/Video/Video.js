import React from 'react'
import ReactPlayer from 'react-player'
import { Container, Row, Col } from 'react-bootstrap'

import './Video.scss'

const Video = (props) => (
  <div className='video'>
    <Container>
      <Row>
        <Col>
          <div>
            <p className='video-header'>{props.header}</p>
            <p className='video-description'>{props.description}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 8, offset: 2 }}>
          <ReactPlayer
            url={props.url}
            width='100%'
            height='100%'
            controls={true}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='video-pdf-div'>
            {props.pdf && <a href={props.pdf}>{props.pdfName}</a>}
          </div>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Video
