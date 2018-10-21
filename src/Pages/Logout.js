import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { ApolloConsumer } from 'react-apollo' 

const Logout = () => (
  <div>
    <ApolloConsumer>
      {client => {
        localStorage.setItem('token', '')
        client.resetStore()
        return <Redirect to="/" />
      }}
    </ApolloConsumer>
  </div>
)

export default withRouter(Logout)