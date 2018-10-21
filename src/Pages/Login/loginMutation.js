import { gql } from 'apollo-boost'

export default gql`
  mutation (
    $email: String!,
    $password: String!
  ) {
    login(
      email: $email,
      password: $password
    ) {
      token
    }
  }
`