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
    type Landmark {
        name: String
        description: String
    }
    type Region {
        _id: ID!
        name: String
        countries: [Country]
        landmarks: [Landmark]
        monsters: [Monster]
    }
    type God {
        _id: ID!
        name: String!
        description: String!
        domains: [String]
        symbol: String!
        religion: Religion
        alignment: String
    }
    type Religion {
        _id: ID!
        name: String
        gods: [God]
    }
    type Monster {
        _id: ID!
        name: String!
        description: String
        size: String
    }
    type World {
        _id: ID!
        name: String
        creator: User
        regions: [Region]
        religions: [Religion]
        description: String
        characters: [Character]
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
        religions: [Religion]
    }

    type Auth {
        token: ID!
        user: User
    }
    input MonsterInput {
        _id: ID
        name: String
        description: String
        size: String
    }
    input UserInput {
        _id: ID
        username: String
        password: String
        email: String
        worlds: [WorldInput]
    }

    input RegionInput {
        _id: ID
        name: String
        countries: [CountryInput]
        landmarks: [LandmarkInput]
        monsters: [MonsterInput]
    }

    input LandmarkInput {
        name: String
        description: String
    }
    input GodInput {
        name: String
        description: String
        domains: [String]
        symbol: String
        alignment: String
    }
    input ReligionInput {
        _id: ID
        name: String
        gods: [GodInput]
    }

    input GovernmentInput {
        members: [CharacterInput]
        style: String
    }

    input CountryInput {
        _id: ID
        name: String
        government: GovernmentInput
        cities: [CityInput]
        religions: [ReligionInput]
    }

    input CityInput {
        _id: ID
        name: String
    }

    input CharacterInput {
        _id: ID
        name: String
        description: String
        size: String
        race: RaceInput
        class: ClassInput
        backstory: String
        bonds: [String]
        goals: [String]
        fears: [String]
    }

    input ClassInput {
        _id: ID
        name: String
    }

    input RaceInput {
        _id: ID
        name: String
    }

    input WorldInput {
        _id: ID
        name: String
        creator: ID
        regions: [RegionInput]
        religions: [ReligionInput]
        description: String
        characters: [CharacterInput]
    }

    type Query {
        characters: [Character]!
        cities: [City]!
        races: [Race]!
        classes: [Class]!
        countries: [Country]
        worlds: [World]
        singleCharacter(_id: ID!): Character
        singleReligion(_id: ID!): Religion
        singleGod(_id: ID!): God
        singleRegion(_id: ID!): Region
        singleMonster(_id: ID!): Monster
        me(_id: ID!): User
        userWorlds(creator: ID!): [World]
        world(name: String!): World
    }

    type Mutation {

        createUser(username: String!, password: String!, email: String!): Auth
        updateToken(userId: ID!): Auth
        login(email: String!, password: String!): Auth

        createWorld(world: WorldInput): World
        updateWorld(world: WorldInput): World
        deleteWorld(worldId: ID): World

        createCharacter(character: CharacterInput, worldId: ID): World
        updateCharacter(character: CharacterInput, worldId: ID): World
        deleteCharacter(characterId: ID, worldId: ID): World

        createReligion(religion: ReligionInput, worldId: ID): World
        updateReligion(religion: ReligionInput, worldId: ID): World
        deleteReligion(religionId: ID, worldId: ID): World

        createGod(god: GodInput, worldId: ID, religionId: ID): World
        updateGod(god: GodInput, worldId: ID, religionId: ID): World
        deleteGod(godId: ID, worldId: ID): World

        createRegion(region: RegionInput, worldId: ID): World
        updateRegion(region: RegionInput, worldId: ID): World
        deleteRegion(regionId: ID, worldId: ID): World

        createMonster(monster: MonsterInput, worldId: ID, regionId: ID): World
        updateMonster(monster: MonsterInput, worldId: ID, regionId: ID): World
        deleteMonster(monsterId: ID, worldId: ID): World
        
    }
`

module.exports = typeDefs;