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
    }

    type Query {
        characters: [Character]!
        cities: [City]!
        races: [Race]!
        classes: [Class]!
        countries: [Country]
    }
`

module.exports = typeDefs;