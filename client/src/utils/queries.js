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