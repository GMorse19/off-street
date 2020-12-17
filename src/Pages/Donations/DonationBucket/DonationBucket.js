import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './DonationBucket.scss'

 const DonationBucket = (props) => (
     <div>
         <Container className='donation-bucket'>
             <Row className='justify-content-center'>
                 <Col xs={12} md={5}className='donation-bucket-title'>
                    {props.title}
                 </Col>
                 <Col className='donation-bucket-content'>
                    {props.content}
                 </Col>
             </Row>
         </Container>
     </div>
 )

export default DonationBucket
