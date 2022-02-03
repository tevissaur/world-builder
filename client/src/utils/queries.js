import { gql } from '@apollo/client'

export const ALL_CHARACTERS = gql`
    query AllCharacters {
        characters {
            _id
            name
        }
    }
`

export const GET_USER_WORLDS = gql`
    query GetUserWorlds($creator: ID!) {
      userWorlds(creator: $creator) {
        _id
        name
      }

    }
`

export const GET_WORLD = gql`
    query GetWorld($name: String!) {
      world(name: $name) {
        _id
      }
    }
`

export const GET_ME = gql`
  query GetMe($id: ID!) {
    me(_id: $id) {
      username
      worlds {
        _id
        name
        regions {
          _id
          name
          countries {
            _id
            name
            cities {
              _id
              name
            }
          }
        }
        religions {
          _id
          name
          gods {
            _id
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