const { gql } = require('apollo-server-express')


const typeDefs = gql`
    type Character {
        _id: ID
        name: String
        description: String
        size: String
        race: Race
        class: Class
        backstory: String
        bonds: [String]
        goals: [String]
        fears: [String]
    }
    type Region {
        _id: ID!
        name: String
        countries: [Country]
    }
    type World {
        _id: ID!
        name: String
        creator: User
        regions: [Region]
    }
    type User {
        _id: ID!
        username: String!
        password: String!
        email: String!
        worlds: [World]
    }
    type City {
        _id: ID
        name: String
    }
    type Class {
        _id: ID
        name: String
    }

    type Race {
        _id: ID
        name: String
    }
    
    type Government {
        members: [Character]
        style: String
    }

    type Country {
        _id: ID
        name: String
        government: Government
        cities: [City]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        characters: [Character]!
        cities: [City]!
        races: [Race]!
        classes: [Class]!
        countries: [Country]
        me(_id: ID!): User
        worlds: [World]
    }

    type Mutation {
        createUser(username: String!, password: String!, email: String!): Auth
        updateToken(userId: ID!): Auth
        login(email: String!, password: String!): Auth
    }
`

module.exports = typeDefs;