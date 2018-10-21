import React from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  Button,
  CardImg,
  CardBody
} from 'reactstrap'
import { Mutation } from 'react-apollo' 
import { withRouter, Redirect } from 'react-router-dom'
import './CoursePage.css'

import COURSE_MUTATION from './coursesMutation'

import HtmlImg from '../../Assets/images/cover/html.jpg'
import ReactImg from '../../Assets/images/cover/react.png'
import SassImg from '../../Assets/images/cover/sass.jpg'

import Samsung from '../../Assets/images/company-samsung.png'
import Accenture from '../../Assets/images/company-accenture.png'
import UnionBank from '../../Assets/images/company-unionbank.png'

// Advanced HTML 5 and CSS 3
const Course1 = ({ history }) => (
  <Mutation mutation={COURSE_MUTATION}>
    {(setCourse, {loading, errors}) => (
      <Container>
        <Card style={{ marginTop: '30px'}}>
          <CardBody>
            <Row>
              <Col md={3}>
                <img className="main-course-img" src={HtmlImg}/>
              </Col>
              <Col md={6}>
                <CardTitle>Advanced HTML 5 and CSS 3</CardTitle>
                <CardText>
                  Start from the very basics of HTML5 to advanced HTML5 by learning what it is, why it's something you should learn and the new elements that have been added to HTML.
                </CardText>
              </Col>
              <Col md={3}>
                <Button 
                  style={{
                    backgroundColor: '#8c54a1',
                    border: 0, 
                    marginLeft: '30px', 
                    marginTop: '30px',
                    padding: '10px 40px'}}
                  onClick={()=> {
                    setCourse({ 
                      variables: {
                        title: 'Advanced HTML 5 and CSS 3',
                        company: 'Samsung R&D Philippines',
                        completion: 0
                      }
                    })
                    .then(() => {
                      history.push('/my-course/advanced-html5-and-css3')
                    })
                  }}>
                  Enroll this course
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
    
        <Card style={{ marginTop: '30px'}}>
          <CardBody>
            <CardTitle>About this course</CardTitle>
            <CardText>
              Coding is great, but it's not everything that matters. That's why we will go through the entire process of building and launching our website project. This includes designing, coding, planning, writing clean and organized code, website optimization, best practices, and so much more.
              <br />
              <br />
              Designing is really, really important. Have you seen all these beautiful and modern websites lately? Great! Because I will show you how it's done. And not just in theory, but also in practice. This is the only course on the market which focuses on both coding and designing, together.
            </CardText>
            <br/>
            <CardTitle>Provider of this course</CardTitle>
            <img height="50" style={{ marginTop: '10px', marginBottom: '10px' }} src={Samsung}/>
            <br/>
            Samsung R&D Philippines
          </CardBody>
        </Card>
    
      </Container>
    )}
  </Mutation>
)

// Modern React
const Course2 = ({ history }) => (
  <Mutation mutation={COURSE_MUTATION}>
    {(setCourse, {loading, errors}) => (
      <Container>
        <Card style={{ marginTop: '30px'}}>
          <CardBody>
            <Row>
              <Col md={3}>
                <img className="main-course-img" src={ReactImg}/>
              </Col>
              <Col md={6}>
                <CardTitle>Modern React</CardTitle>
                <CardText>
                  React is all about components - basically custom HTML elements - with which you can quickly build amazing and powerful web apps.
                </CardText>
              </Col>
              <Col md={3}>
                <Button 
                  style={{
                    backgroundColor: '#8c54a1',
                    border: 0, 
                    marginLeft: '30px', 
                    marginTop: '30px',
                    padding: '10px 40px'}}
                  onClick={()=> {
                    setCourse({ 
                      variables: {
                        title: 'Modern React',
                        company: 'Accenture Philippines',
                        completion: 0
                      }
                    })
                    .then(() => {
                      history.push('/my-course/modern-react')
                    })
                  }}>
                  Enroll this course
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
    
        <Card style={{ marginTop: '30px'}}>
          <CardBody>
            <CardTitle>About this course</CardTitle>
            <CardText>
              This course will get you up and running quickly, and teach you the core knowledge you need to deeply understand and build React components and structure applications with Redux.
              <br />
              <br />
              We'll start by mastering the fundamentals of React, including JSX, “props", “state", and eventing. Source code is provided for each lecture, so you will always stay up-to-date with the course pacing. After an introduction to React, we'll dive right in to Redux, covering topics like reducers, actions, and the state tree.
            </CardText>
            <br/>
            <CardTitle>Provider of this course</CardTitle>
            <img height="50" style={{ marginTop: '10px', marginBottom: '10px' }} src={Accenture}/>
            <br/>
            Accenture Philippines
          </CardBody>
        </Card>
    
      </Container>
    )}
  </Mutation>
)

// Advanced SASS Maps
const Course3 = ({ history }) => (
  <Mutation mutation={COURSE_MUTATION}>
    {(setCourse, {loading, errors}) => (
      <Container>
        <Card style={{ marginTop: '30px'}}>
          <CardBody>
            <Row>
              <Col md={3}>
                <img className="main-course-img" src={SassImg}/>
              </Col>
              <Col md={6}>
                <CardTitle>Advanced SASS Maps</CardTitle>
                <CardText>
                  In this course I will be teaching you the complete Sass scripting language. I’ll be taking you all the way from variables right up to writing your own Sass functions.
                </CardText>
              </Col>
              <Col md={3}>
                <Button 
                  style={{
                    backgroundColor: '#8c54a1',
                    border: 0, 
                    marginLeft: '30px', 
                    marginTop: '30px',
                    padding: '10px 40px'}}
                  onClick={()=> {
                    setCourse({ 
                      variables: {
                        title: 'Advanced SASS Maps',
                        company: 'Unionbank Philippines',
                        completion: 0
                      }
                    })
                    .then(() => {
                      history.push('/my-course/advanced-sass-maps')
                    })
                  }}>
                  Enroll this course
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
    
        <Card style={{ marginTop: '30px'}}>
          <CardBody>
            <CardTitle>About this course</CardTitle>
            <CardText>
              The Next Step with Sass and Compass is an intermediate level course in Sass for people who already know the basics of Sass. It is a follow up course to Step by Step Sass, but can be completed by anyone who understands the basic Sass concepts of variables, mixins, nesting, extend and parent selectors.
              <br />
              <br />
              In this class we will get deeper into Sass and learn how powerful it can be by using Math, Lists, and Control Directives, like @for, @each or @if and @else. All of these things let you actually write your CSS more like a programming language, which can make your code easier to maintain.
            </CardText>
            <br/>
            <CardTitle>Provider of this course</CardTitle>
            <img height="50" style={{ marginTop: '10px', marginBottom: '10px' }} src={UnionBank}/>
            <br/>
            Unionbank Philippines
          </CardBody>
        </Card>
    
      </Container>
    )}
  </Mutation>
)


const CoursePage = ({ match, history }) => {

  let { courseTitle } = match.params

  switch(courseTitle) {
    case 'advanced-html5-and-css3': return <Course1 history={history} />
    case 'modern-react': return <Course2 history={history} />
    case 'advanced-sass-maps': return <Course3 history={history} />
  }
  
  return null

}

export default withRouter(CoursePage)