import React from 'react'
import Hero from './Hero/Hero'
import _ from 'lodash'
import { withRouter, Redirect } from 'react-router-dom'

const Homepage = ({ userSession }) => {
  if (_.isEmpty(userSession)) {
    return  (
      <div>
        <Hero />
      </div>
    ) 
  } else {

    if (!_.isEmpty(userSession.currentUser.courses)) {
      return  (
        <div>
          <Hero />
        </div>
      ) 
    } 

    return <Redirect to="/wizard" />
  }

  return null
}

export default Homepage