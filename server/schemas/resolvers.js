const { Character, Country, Class, City, Race } = require('../models')

const resolvers = {
    Query: {
        characters: async () => {
            return Character.find().populate('race')
        },
        cities: async () => {
            return City.find()
        },
        races: async () => {
            return Race.find()
        },
        countries: async () => {
            return Country.find()
        },
        classes: () => {
            return Class.find()
        }
    },
    // Mutation: {

    // }

}
module.exports = resolvers;