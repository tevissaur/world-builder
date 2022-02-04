const { Character, Country, Class, City, Race, User, World } = require('../models')

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
            return User.findById(_id).populate(
                {
                    path: 'worlds',
                    model: 'World',
                    populate: [
                        {
                            path: 'regions',
                            model: 'Region',
                            populate: {
                                path: 'countries',
                                model: 'Country',
                                populate: [
                                    {
                                        path: 'cities',
                                        model: 'City'
                                    },
                                    {
                                        path: 'religions',
                                        model: 'Religion',
                                        populate: {
                                            path: 'gods',
                                            model: 'God'
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            path: 'religions',
                            model: 'Religion',
                            populate: {
                                path: 'gods',
                                model: 'God'
                            }
                        },
                        {
                            path: 'characters',
                            model: 'Character',
                            populate: {
                                path: 'race',
                                model: 'Race'
                            }
                        }
                    ]
                }
            )
        },
        worlds: async (parent, args) => {
            return World.find().populate([
                {
                    path: 'regions',
                    model: 'Region',
                    populate: {
                        path: 'countries',
                        model: 'Country',
                        populate: [
                            {
                                path: 'cities',
                                model: 'City'
                            },
                            {
                                path: 'religions',
                                model: 'Religion',
                                populate: {
                                    path: 'gods',
                                    model: 'God'
                                }
                            }
                        ]
                    }
                },
                {
                    path: 'religions',
                    model: 'Religion',
                    populate: {
                        path: 'gods',
                        model: 'God'
                    }
                },
                {
                    path: 'characters',
                    model: 'Character',
                    populate: {
                        path: 'race',
                        model: 'Race'
                    }
                }
            ])
        },
        userWorlds: async (parent, { creator }) => {
            try {
                const worlds = await World.find({ creator })
                return worlds
            } catch (err) {
                console.log(err)
                return err
            }
        },
        world: async (parent, { name }) => {
            console.log(name)
            try {
                const world = await World.findOne({ name }).populate([
                    {
                        path: 'regions',
                        model: 'Region',
                        populate: {
                            path: 'countries',
                            model: 'Country',
                            populate: [
                                {
                                    path: 'cities',
                                    model: 'City'
                                },
                                {
                                    path: 'religions',
                                    model: 'Religion',
                                    populate: {
                                        path: 'gods',
                                        model: 'God'
                                    }
                                }
                            ]
                        }
                    },
                    {
                        path: 'religions',
                        model: 'Religion',
                        populate: {
                            path: 'gods',
                            model: 'God'
                        }
                    },
                    {
                        path: 'characters',
                        model: 'Character',
                        populate: {
                            path: 'race',
                            model: 'Race'
                        }
                    }
                ])
                return world
            } catch (err) {
                console.log(err)
                return err
            }

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
        },
        createWorld: async (parent, { world }) => {
            try {
                const newWorld = await World.create(world)
                const updatedUser = await User.findOneAndUpdate({ _id: world.creator }, {
                    $push: { worlds: newWorld }
                }, {
                    new: true
                })
                return newWorld
            } catch (err) {
                return err
            }
        }
    }

}
module.exports = resolvers;