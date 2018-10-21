import React from 'react'
import {
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  CardText,
  Button,
  CardImg,
  Container
} from 'reactstrap'
import { Redirect, withRouter } from 'react-router-dom'
import './Courses.css'

import HtmlImg from '../../Assets/images/cover/html.jpg'
import ReactImg from '../../Assets/images/cover/react.png'
import SassImg from '../../Assets/images/cover/sass.jpg'

const WebDeveloper = ({ history }) => (
  <Container>
    <div>
      <h2 className='select-course'>
        Web developer courses
      </h2>
      <Row>
        <Col md={4}>
          <Card>
            <CardBody>
              <CardImg
                top
                width="100%"
                src={HtmlImg}
                />
              <CardTitle style={{ marginTop: '20px' }}>Advanced HTML 5 and CSS 3</CardTitle>
              <div 
                style={{ 
                  paddingBottom: '10px',
                  fontWeight: '300',
                }}>
                Samsung R&D Philippines
              </div>
              <CardText>
                Start from the very basics of HTML5 to advanced HTML5 by learning what it is, why it's something you should learn and the new elements that have been added to HTML.
              </CardText>
              <Button 
                style={{ 
                  backgroundColor: '#8c54a1',
                  border: 0,
                }}
                onClick={() => history.push('/enroll/advanced-html5-and-css3')} 
                block>Take this course</Button>
            </CardBody>
          </Card>
        </Col>
        
        <Col md={4}>
          <Card>
            <CardBody>
              <CardImg
                top
                width="100%"
                src={ReactImg}
                />
              <CardTitle style={{ marginTop: '20px' }}>Modern React</CardTitle>
              <div 
                style={{ 
                  paddingBottom: '10px',
                  fontWeight: '300',
                }}>
                Accenture Philippines
              </div>
              <CardText>
                React is all about components - basically custom HTML elements - with which you can quickly build amazing and powerful web apps. 
              </CardText>
              <br></br>
              <Button 
                onClick={() => history.push('/enroll/modern-react')}
                style={{ 
                  backgroundColor: '#8c54a1',
                  border: 0,
                }}
                block>Take this course</Button>
            </CardBody>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <CardBody>
              <CardImg
                top
                width="100%"
                src={SassImg}
                />
              <CardTitle style={{ marginTop: '20px' }}>Advanced SASS Maps</CardTitle>
              <div 
                style={{ 
                  paddingBottom: '10px',
                  fontWeight: '300',
                }}>
                Unionbank Philippines
              </div>
              <CardText>
              In this course I will be teaching you the complete Sass scripting language. I’ll be taking you all the way from variables right up to writing your own Sass functions.
              </CardText>
              <div style={{ paddingBottom: '11px' }}>&nbsp;</div>
              <Button
                style={{ 
                  backgroundColor: '#8c54a1',
                  border: 0,
                }} 
                onClick={() => history.push('/enroll/advanced-sass-maps')} 
                block>Take this course</Button>
            </CardBody>
          </Card>
        </Col>

      </Row>
    </div>
  </Container>
)

const Courses = ({ match, history }) => {

  let { path } = match.params

  switch (path) {
    case 'web-developer': return <WebDeveloper history={history} />
  }

  return null

}

export default withRouter(Courses)