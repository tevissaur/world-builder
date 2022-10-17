import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import request, {  gql, ClientError, GraphQLClient } from 'graphql-request'
import { api } from '../utils/api';



export const worldMakerApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getMe: builder.query({
            query: (id) => ({
                body: gql`
                query {
                  me(_id: "${id}") {
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
              `,
            }),
            transformResponse: (response) => response.me
        }),
        getWorld: builder.query({
            query: (name) => ({
                body: gql`
                query {
                  world(name: "${name}") {
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
            }),
            transformResponse: (response) => response.world
        })
    })
})



export const GET_USER_WORLDS = gql`
    query GetUserWorlds($creator: ID!) {
      userWorlds(creator: $creator) {
        _id
        name
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

export const { useGetMeQuery,  useLazyGetWorldQuery } = worldMakerApi
