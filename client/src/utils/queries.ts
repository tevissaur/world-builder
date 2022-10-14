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

export const SINGLE_CHARACTER = gql`
    query SingleCharacter($_id: ID!) {
      singleCharacter(_id: $_id) {
        _id
        name
        description
        size
        race {
          name
        }
        class {
          _id
        }
        backstory
        bonds
        goals
        fears
      }
    }

`

export const SINGLE_RELIGION = gql`
    query SingleReligion($id: ID!) {
      singleReligion(_id: $id) {
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
    }
`
export const SINGLE_GOD = gql`
    query SingleGod($_id: ID!) {
      singleGod(_id: $_id) {
        _id
        name
        description
        domains
        symbol
        alignment
      }
    }
`

export default {
  GET_ME,
  GET_USER_WORLDS,
  GET_WORLD,
  SINGLE_CHARACTER,
  SINGLE_GOD,
  SINGLE_RELIGION
}