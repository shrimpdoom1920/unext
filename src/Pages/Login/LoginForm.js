import React from 'react'
import { Formik } from 'formik'
import { Mutation } from 'react-apollo'
import * as Yup from 'yup'
import _ from 'lodash'
import {
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  Button,
  Alert,
} from 'reactstrap'
import LOGIN_MUTATION from './loginMutation'
import './Login.css'

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required()
})

const LoginForm = ({ history, userRefetch }) => (
  <Formik
    initialValues={{
      email: '',
      password: ''
    }}
    validationSchema={validationSchema}
    >
    
    {props => {

      const {
        touched,
        errors,
        values,
        handleChange,
        handleBlur,
        validateForm,
        isSubmitting,
        setSubmitting,
        dirty
      } = props

      return (
        <Mutation
          mutation={LOGIN_MUTATION}
          variables={values}>
          {(loginUser, {loading, error}) => (
            <Card id="login-form">
              <CardBody>
                <Form onSubmit={e => {
                  e.preventDefault()
                    setSubmitting(true)
                    validateForm()
                      .then(formErrors => {
                        if (_.isEmpty(formErrors)) {
                          loginUser()
                            .then(async ({ data }) => {
                              setSubmitting(false)
                              localStorage.setItem('token', data.login.token)
                              await userRefetch()
                              history.push('/')
                            })
                        }
                      })
                  }}>
                  {/** Error form group */}
                  {error && (
                    <Alert color="danger">
                      {error.message.replace('GraphQL error:', '')}
                    </Alert>
                  )}
                  
                  {/** Email form group */}
                  <FormGroup>
                    <Row>
                      <Col md={12}>
                        <Label for="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur} />
                        { (errors.email && touched.email) || isSubmitting ? (
                          <small>{errors.email}</small>
                        ) : null}
                      </Col>
                    </Row>
                  </FormGroup>
                  {/** Password form group */}
                  <FormGroup>
                    <Row>
                      <Col md={12}>
                        <Label for="password">Password</Label>
                        <Input
                          id="password"
                          type="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur} />
                        { (errors.password && touched.password) || isSubmitting ? (
                          <small>{errors.password}</small>
                        ) : null}
                      </Col>
                    </Row>
                  </FormGroup>
                  {/** Login button form group */}
                  <FormGroup>
                    <Row>
                      <Col md={12}>
                        <Button 
                          block
                          disabled={!dirty || loading || !_.isEmpty(errors)}
                          style={{ 
                            backgroundColor: '#8c54a1',
                            border: 0,
                          }}
                          type="submit"
                          className="mt-1"
                          color="primary">
                          Login
                        </Button>
                      </Col>
                    </Row>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          )}
        </Mutation>
      )

    }}

  </Formik>
)

export default LoginForm