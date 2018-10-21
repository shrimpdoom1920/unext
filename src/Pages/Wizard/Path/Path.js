import React from 'react'
import {
  Col,
  Row,
  Container,
  Card,
  CardTitle,
  CardBody,
  CardImg
} from 'reactstrap'
import { Redirect, withRouter } from 'react-router-dom'

import WebImg from '../../../Assets/images/wizard-web-developer.jpeg'
import Designer from '../../../Assets/images/wizard-designer.jpg'
import MobileDev from '../../../Assets/images/wizard-mobile-developer.jpeg'
import SoftEng from '../../../Assets/images/wizard-software-engineering.jpeg'
import NetworkEng from '../../../Assets/images/wizard-network.jpeg'
import DataSci from '../../../Assets/images/wizard-data-scientist.jpeg'

const Path = ({ history }) => {

  return (
    <div>
      <h2 className='select-career-path'>
        Select your career path
      </h2>
      <Row>
        <Col md={4} onClick={() => history.push('/course/web-developer')}>
          <Card
            className='wizard-card'
            style={{ 
              backgroundImage: `
                linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${WebImg})` 
            }}
            >
            <CardBody >
              Web Developer
            </CardBody>
          </Card>
        </Col>

        <Col md={4} onClick={() => history.push('/course/web-designer')}>
          <Card
            className='wizard-card'
            style={{ 
              backgroundImage: `
                linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Designer})` 
            }}
            >
            <CardBody >
              Web Designer
            </CardBody>
          </Card>
        </Col>

        <Col md={4} onClick={() => history.push('/course/mobile-developer')}>
          <Card
            className='wizard-card'
            style={{ 
              backgroundImage: `
                linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${MobileDev})` 
            }}
            >
            <CardBody >
              Mobile Developer
            </CardBody>
          </Card>
        </Col>
        
        <Col md={4} onClick={() => history.push('/course/software-engineer')}>
          <Card
            className='wizard-card'
            style={{ 
              backgroundImage: `
                linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${SoftEng})` 
            }}
            >
            <CardBody >
              Software Engineer
            </CardBody>
          </Card>
        </Col>

        <Col md={4} onClick={() => history.push('/course/network-engineer')}>
          <Card
            className='wizard-card'
            style={{ 
              backgroundImage: `
                linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${NetworkEng})` 
            }}
            >
            <CardBody >
              Network Engineer
            </CardBody>
          </Card>
        </Col>

        <Col md={4} onClick={() => history.push('/course/data-scientist')}>
          <Card
            className='wizard-card'
            style={{ 
              backgroundImage: `
                linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${DataSci})` 
            }}
            >
            <CardBody >
              Data Scientist
            </CardBody>
          </Card>
        </Col>

      </Row>
    </div>
  )

}

export default withRouter(Path)