import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody
} from 'reactstrap'

import HtmlImg from '../../Assets/images/cover/html.jpg'
import ReactImg from '../../Assets/images/cover/react.png'
import SassImg from '../../Assets/images/cover/sass.jpg'

import PlayBtn from '../../Assets/images/play-btn.png'


const Content1 = () => {
  return (
    <div>
      <div style={{
        height: '320px',
        backgroundColor: '#2c3e50'
      }}>
        <Container>
          <Row>
            <Col md={4}>
              <img src={HtmlImg} height="210" width="320" style={{ marginTop: '45px' }} />
            </Col>
            <Col md={8}>
              <h2 style={{ marginTop: '45px', color: 'white' }}>Advanced HTML 5 and CSS 3</h2>
              <Button style={{      backgroundColor: '#8c54a1',
                            border: 0, marginTop: '15px' }}>Continue course</Button>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row style={{ marginTop: '30px' }}>
          <Col md={12}>
            <Card>
              <CardBody>
                Section 1
                <h4 style={{ marginBottom: '25px' }}>Introducing the Course</h4>
                <Row>
                  <Col md={12}>
                    <Card>
                      <div style={{ padding: '25px', display: 'inline-block'}}>
                        <img height="30" width="30" style={{ marginLeft: '5px', marginRight: '10px' }} src={PlayBtn} /> 1. Welcome
                      </div>
                    </Card>
                  </Col>
                </Row>
                <Row style={{ marginTop: '10px', marginBottom: '10px' }}>
                  <Col md={12}>
                    <Card>
                      <div style={{ padding: '25px', display: 'inline-block'}}>
                        <img height="30" width="30" style={{ marginLeft: '5px', marginRight: '10px' }} src={PlayBtn} /> 2. Environment Setup
                      </div>
                    </Card>
                  </Col>
                </Row>
                <Row style={{ marginTop: '10px', marginBottom: '10px' }}>
                  <Col md={12}>
                    <Card>
                      <div style={{ padding: '25px', display: 'inline-block'}}>
                        <img height="30" width="30" style={{ marginLeft: '5px', marginRight: '10px' }} src={PlayBtn} /> 3. Installing Dependencies
                      </div>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row style={{ marginTop: '30px' }}>
          <Col md={12}>
            <Card>
              <CardBody>
                Section 2
                <h4 style={{ marginBottom: '25px' }}>New HTML 5 Features</h4>
                <Row>
                  <Col md={12}>
                    <Card>
                      <div style={{ padding: '25px', display: 'inline-block'}}>
                        <img height="30" width="30" style={{ marginLeft: '5px', marginRight: '10px' }} src={PlayBtn} /> 4. Using subtitles in embeded videos
                      </div>
                    </Card>
                  </Col>
                </Row>
                <Row style={{ marginTop: '10px', marginBottom: '10px' }}>
                  <Col md={12}>
                    <Card>
                      <div style={{ padding: '25px', display: 'inline-block'}}>
                        <img height="30" width="30" style={{ marginLeft: '5px', marginRight: '10px' }} src={PlayBtn} /> 5. Using time tag
                      </div>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const Content2 = () => {
  return (
    <div>
      <div style={{
        height: '320px',
        backgroundColor: '#2c3e50'
      }}>
        <Container>
          <Row>
            <Col md={4}>
              <img src={ReactImg} height="210" width="320" style={{ marginTop: '45px' }} />
            </Col>
            <Col md={8}>
              <h2 style={{ marginTop: '45px', color: 'white' }}>Modern React</h2>
              <Button style={{      backgroundColor: '#8c54a1',
                            border: 0, marginTop: '15px' }}>Continue course</Button>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row style={{ marginTop: '30px' }}>
          <Col md={12}>
            <Card>
              <CardBody>
                Section 1
                <h4 style={{ marginBottom: '25px' }}>Introducing the Course</h4>
                <Row>
                  <Col md={12}>
                    <Card>
                      <div style={{ padding: '25px', display: 'inline-block'}}>
                        <img height="30" width="30" style={{ marginLeft: '5px', marginRight: '10px' }} src={PlayBtn} /> 1. Welcome
                      </div>
                    </Card>
                  </Col>
                </Row>
                <Row style={{ marginTop: '10px', marginBottom: '10px' }}>
                  <Col md={12}>
                    <Card>
                      <div style={{ padding: '25px', display: 'inline-block'}}>
                        <img height="30" width="30" style={{ marginLeft: '5px', marginRight: '10px' }} src={PlayBtn} /> 2. Environment Setup
                      </div>
                    </Card>
                  </Col>
                </Row>
                <Row style={{ marginTop: '10px', marginBottom: '10px' }}>
                  <Col md={12}>
                    <Card>
                      <div style={{ padding: '25px', display: 'inline-block'}}>
                        <img height="30" width="30" style={{ marginLeft: '5px', marginRight: '10px' }} src={PlayBtn} /> 3. Installing Dependencies
                      </div>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row style={{ marginTop: '30px' }}>
          <Col md={12}>
            <Card>
              <CardBody>
                Section 2
                <h4 style={{ marginBottom: '25px' }}>What's new in React 16</h4>
                <Row>
                  <Col md={12}>
                    <Card>
                      <div style={{ padding: '25px', display: 'inline-block'}}>
                        <img height="30" width="30" style={{ marginLeft: '5px', marginRight: '10px' }} src={PlayBtn} /> 4. Using Context API
                      </div>
                    </Card>
                  </Col>
                </Row>
                <Row style={{ marginTop: '10px', marginBottom: '10px' }}>
                  <Col md={12}>
                    <Card>
                      <div style={{ padding: '25px', display: 'inline-block'}}>
                        <img height="30" width="30" style={{ marginLeft: '5px', marginRight: '10px' }} src={PlayBtn} /> 5. Using Provider API
                      </div>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const Content3 = () => {
  return (
    <div>
      <div style={{
        height: '320px',
        backgroundColor: '#2c3e50'
      }}>
        <Container>
          <Row>
            <Col md={4}>
              <img src={SassImg} height="210" width="320" style={{ marginTop: '45px' }} />
            </Col>
            <Col md={8}>
              <h2 style={{ marginTop: '45px', color: 'white' }}>Advanced SASS Maps</h2>
              <Button style={{
                backgroundColor: '#8c54a1',
                border: 0,
                marginTop: '15px' 
                }}>Continue course</Button>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row style={{ marginTop: '30px' }}>
          <Col md={12}>
            <Card>
              <CardBody>
                Section 1
                <h4 style={{ marginBottom: '25px' }}>Introducing the Course</h4>
                <Row>
                  <Col md={12}>
                    <Card>
                      <div style={{ padding: '25px', display: 'inline-block'}}>
                        <img height="30" width="30" style={{ marginLeft: '5px', marginRight: '10px' }} src={PlayBtn} /> 1. Welcome
                      </div>
                    </Card>
                  </Col>
                </Row>
                <Row style={{ marginTop: '10px', marginBottom: '10px' }}>
                  <Col md={12}>
                    <Card>
                      <div style={{ padding: '25px', display: 'inline-block'}}>
                        <img height="30" width="30" style={{ marginLeft: '5px', marginRight: '10px' }} src={PlayBtn} /> 2. Environment Setup
                      </div>
                    </Card>
                  </Col>
                </Row>
                <Row style={{ marginTop: '10px', marginBottom: '10px' }}>
                  <Col md={12}>
                    <Card>
                      <div style={{ padding: '25px', display: 'inline-block'}}>
                        <img height="30" width="30" style={{ marginLeft: '5px', marginRight: '10px' }} src={PlayBtn} /> 3. Installing Dependencies
                      </div>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row style={{ marginTop: '30px' }}>
          <Col md={12}>
            <Card>
              <CardBody>
                Section 2
                <h4 style={{ marginBottom: '25px' }}>Mixins Recap</h4>
                <Row>
                  <Col md={12}>
                    <Card>
                      <div style={{ padding: '25px', display: 'inline-block'}}>
                        <img height="30" width="30" style={{ marginLeft: '5px', marginRight: '10px' }} src={PlayBtn} /> 4. Mixins 
                      </div>
                    </Card>
                  </Col>
                </Row>
                <Row style={{ marginTop: '10px', marginBottom: '10px' }}>
                  <Col md={12}>
                    <Card>
                      <div style={{ padding: '25px', display: 'inline-block'}}>
                        <img height="30" width="30" style={{ marginLeft: '5px', marginRight: '10px' }} src={PlayBtn} /> 5. Mixins With Arguments 
                      </div>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}


const CourseContent = ({ match }) => {

  let { courseTitle } = match.params

  switch(courseTitle) {
    case 'advanced-html5-and-css3': return <Content1 />
    case 'modern-react': return <Content2 />
    case 'advanced-sass-maps': return <Content3 />
  }

  return null

}

export default withRouter(CourseContent)