import { gql } from 'apollo-boost'

export default gql`
  mutation(
    $email: String!,
    $password: String!,
    $firstName: String,
    $lastName: String,
    $school: String,
  ) {
    signup(
      email: $email,
      password: $password,
      firstName: $firstName,
      lastName: $lastName,
      school: $school,
    ) {
      token
    }
  }
`