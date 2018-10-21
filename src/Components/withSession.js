import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const currentUserQuery = gql`
  query {
    currentUser {
      id,
      email,
      firstName,
      lastName,
      school,
      courses {
        title,
        company,
        completion
      }
    }
  }
`

const withSession = Component => props => (
  <Query query={currentUserQuery}>
    {({data, loading, refetch }) => {

      if (loading) return null

      return (
        <Component {...props} userRefetch={refetch} userSession={data} />
      )

    }}
  </Query>
)

export default withSession