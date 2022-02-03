import { gql } from '@apollo/client'

export const ALL_CHARACTERS = gql`
    query AllCharacters {
        characters {
            _id
            name
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
              cities {
                name
              }
            }
          }
          religions {
            name
            gods {
              name
              description
              alignment
              domains
              symbol
            }
          }
          
      }
    }
  }
`