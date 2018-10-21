import { gql } from 'apollo-boost'

export default gql`
  mutation(
    $title: String!,
    $company: String!,
    $completion: Int
  ) {
    setCourse(
      title: $title,
      company: $company,
      completion: $completion
    ) {
      id,
      email,
      firstName,
      lastName,
      courses {
        title,
        company,
        completion
      }
    }
  }
`