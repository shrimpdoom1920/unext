import React from 'react'
import _ from 'lodash'
import { Container } from 'reactstrap'
import { withRouter, Redirect } from 'react-router-dom'
import SignupForm from './SignupForm'
import './Signup.css'

const Signup = ({ history, userRefetch, userSession }) => (
  _.isEmpty(userSession) ? (
    <Container>
      <SignupForm history={history} userRefetch={userRefetch} />
    </Container>
  ) : (
    <Redirect to='/' />
  )
)

export default withRouter(Signup)