import React from 'react'
import * as Yup from 'yup'
import _ from 'lodash'
import { Formik } from 'formik'
import { Mutation } from 'react-apollo'
import {
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap'
import './Signup.css'
import SIGNUP_MUTATION from './signupMutation'

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  password: Yup.string().required(),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null], 
    'Password does not match'
  ).required('Password is a required field')
})

const SignupForm = ({ history, userRefetch }) => (
  <Formik
    initialValues={{
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
      school: 'FEU - Institute of Technology'
    }}
    validationSchema={validationSchema}
    >
    { props => {
    
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
          mutation={SIGNUP_MUTATION}
          variables={values}
          >
          {(signupUser, {loading, error}) => (
            <Card id="signup-form">
              <CardBody>
                <Form onSubmit={e => {
                  e.preventDefault()
                  setSubmitting(true)
                  validateForm()
                    .then(formErrors => {
                      if (_.isEmpty(formErrors)) {
                        signupUser()
                          .then(async ({ data }) => {
                            setSubmitting(false)
                            localStorage.setItem('token', data.signup.token)
                            await userRefetch()
                            history.push('/')
                          })
                      }
                    })
                }}>
                  {/** First name and Last name form-group */}
                  <FormGroup>
                    <Row>
                      <Col md={6}>
                        <Label for="firstName">First name</Label>
                        <Input 
                          id="firstName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.firstName} />
                        { (errors.firstName && touched.firstName) || isSubmitting ? (
                          <small>{errors.firstName}</small>
                        ) : null}

                      </Col>
                      <Col md={6}>
                        <Label for="lastName">Last name</Label>
                        <Input 
                          id="lastName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.lastName} />
                        { (errors.lastName && touched.lastName) || isSubmitting ? (
                          <small>{errors.lastName}</small>
                        ) : null}
                      </Col>
                    </Row>
                  </FormGroup>
                  {/** Email form-group */}
                  <FormGroup>
                    <Row>
                      <Col md={12}>
                        <Label for="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email} />
                        { (errors.email && touched.email) || isSubmitting ? (
                          <small>{errors.email}</small>
                        ) : null}
                      </Col>
                    </Row>
                  </FormGroup>
                  {/** Password and confirm password form-group */}
                  <FormGroup>
                    <Row>
                      <Col md={6}>
                        <Label for="password">Password</Label>
                        <Input 
                          id="password"
                          type="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password} />
                          { (errors.password && touched.password) || isSubmitting ? (
                          <small>{errors.password}</small>
                          ) : null}
                      </Col>
                      <Col md={6}>
                        <Label for="confirmPassword">Confirm password</Label>
                        <Input 
                          id="confirmPassword"
                          type="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.confirmPassword} />
                        { (errors.confirmPassword && touched.confirmPassword) || isSubmitting ? (
                          <small>{errors.confirmPassword}</small>
                        ) : null}
                      </Col>
                    </Row>
                  </FormGroup>
                  {/** School form-group */}
                  <FormGroup>
                    <Row>
                      <Col md={12}>
                        <Label for="school">School</Label>
                        <Input
                          id="school"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.school} />
                        { (errors.school && touched.school) || isSubmitting ? (
                          <small>{errors.school}</small>
                        ) : null}
                      </Col>
                    </Row>
                  </FormGroup>
                  {/** Sign up button form group */}
                  <FormGroup>
                    <Row>
                      <Col md={12}>
                        <Button 
                          block
                          disabled={!dirty || loading || !_.isEmpty(errors)}
                          type="submit"
                          style={{ 
                            backgroundColor: '#8c54a1',
                            border: 0,
                          }}
                          className="mt-1"
                          color="primary">
                          Sign up
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

export default SignupForm