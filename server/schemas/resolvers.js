const { Character, Country, Class, City, Race, User } = require('../models')

const { signToken } = require('../utils/auth')


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
        classes: async () => {
            return Class.find()
        },
        me: async (parent, { _id }) => {
            return User.findById(_id).populate({
                path: 'worlds',
                model: 'World',
                populate: {
                    path: 'regions',
                    model: 'Region',
                    populate: {
                        path: 'countries',
                        model: 'Country'
                    }
                }
            })
        }
    },
    Mutation: {
        createUser: async (parent, args) => {
            try {

                const user = await User.create(args)
                const token = signToken(user)
                return { user, token }

            } catch (err) {
                console.log(err)
                return err
            }
        },
        updateToken: async (parents, args) => {

        },
        login: async (parent, { email, password }) => {
            try {
                const user = await User.findOne({ email })

                if (!user) {
                    throw new AuthenticationError('No Profile with that email')
                }

                const correctPw = await user.isCorrectPassword(password)

                if (!correctPw) {
                    throw new AuthenticationError('Incorrect password!');
                }
                const token = signToken(user)
                return { token, user }
            } catch (err) {
                console.log(err)
            }
        }
    }

}
module.exports = resolvers;