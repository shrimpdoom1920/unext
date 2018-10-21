import React from 'react'
import _ from 'lodash'
import { Container } from 'reactstrap'
import { withRouter, Redirect } from 'react-router-dom'
import LoginForm from './LoginForm'

const Login = ({ history, userSession, userRefetch }) => (
  _.isEmpty(userSession) ? (
    <Container>
      <LoginForm history={history} userRefetch={userRefetch}  />
    </Container>
  ) : (
    <Redirect to="/" />
  )
)

export default withRouter(Login)