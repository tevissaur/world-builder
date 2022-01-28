import { gql } from '@apollo/client'

export const QUERY_CHARACTERS = gql`
    query AllCharacters {
        characters {
            _id
            name
            skills
        }
    }
`

export const GET_ME = gql`
  query GetMe($id: ID!) {
    me(_id: $id) {
      username
      worlds {
          name
          regions {
            name
            countries {
              name
            }
          }
      }
    }
  }
`