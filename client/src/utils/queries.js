import { gql } from '@apollo/client'


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
        name
        regions {
          _id
          name
          countries {
            _id
            name
            government {
              style
            }
            cities {
              _id
              name
            }
          }
          landmarks {
            name
            description
          }
          monsters {
            _id
          }
        }
        religions {
          _id
          name
          gods {
            _id
            name
            description
            domains
            symbol
            alignment
          }
        }
        description
        characters {
          _id
          name
          description
          backstory
          bonds
          goals
          fears
        }
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
            government {
              style
            }
            cities {
              _id
              name
            }
          }
          landmarks {
            name
            description
          }
          monsters {
            _id
          }
        }
        religions {
          _id
          name
          gods {
            _id
            name
            description
            domains
            symbol
            alignment
          }
        }
        description
        characters {
          _id
          name
          description
          backstory
          bonds
          goals
          fears
        }
      }
    }
  }
`