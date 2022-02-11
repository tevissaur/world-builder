const { Character, Country, Class, City, Race, User, World, Religion, God, Monster, Region } = require('../models')

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

        },
        singleCharacter: async (parent, { _id }) => {
            return Character.findById(_id).populate([
                {
                    path: 'race',
                    model: 'Race'
                }
            ])
        },
        singleReligion: async (parent, { _id }) => {
            try {
                return Religion.findById(_id).populate('gods')
            } catch (error) {
                console.log(error)
                return error
            }
        },
        singleGod: async (parent, { _id }) => {
            try {
                return God.findById(_id)
            } catch (error) {
                console.log(error)
                return error
            }
        },
        singleMonster: async (parent, { _id }) => {
            try {
                return Monster.findById(_id)
            } catch (error) {
                console.log(error)
                return error
            }
        },
        singleRegion: async (parent, { _id }) => {
            try {
                return Region.findById(_id).populate([
                    {
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
                                poplulate: {
                                    path: 'gods',
                                    model: 'God'
                                }
                            }
                        ]
                    }
                ])
            } catch (error) {
                console.log(error)
                return error
            }
        },
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
                return newWorld.populate([
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
            } catch (err) {
                return err
            }
        },
        createCharacter: async (parent, { character, worldId }) => {
            try {
                const newCharacter = await Character.create(character)
                const updatedWorld = await World.findOneAndUpdate({ _id: worldId }, {
                    $push: { characters: newCharacter }
                }, {
                    new: true
                }).populate([
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
                return updatedWorld
            } catch (error) {
                console.log(error)
            }

        },
        createMonster: async (parent, { monster, worldId, regionId }) => {
            try {
                const newMonster = await Monster.create(monster)
                const updatedRegion = await Region.findByIdAndUpdate(regionId, {
                    $push: { monsters: newMonster }
                }, {
                    new: true
                })
                const world = await World.findById(worldId).populate([
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
            } catch (error) {
                console.log(error)
            }
        },
        createRegion: async (parent, { region, worldId }) => {
            try {
                const newRegion = await Region.create(region)
                const updatedWorld = await World.findOneAndUpdate({ _id: worldId }, {
                    $push: { regions: newRegion }
                }, {
                    new: true
                }).populate([
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
                return updatedWorld
            } catch (error) {
                console.log(error)
            }
        },
        createReligion: async (parent, { religion, worldId }) => {
            try {
                const newReligion = await Religion.create(religion)
                const updatedWorld = await World.findOneAndUpdate({ _id: worldId }, {
                    $push: { religions: newReligion }
                }, {
                    new: true
                }).populate([
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
                return updatedWorld
            } catch (error) {
                console.log(error)
            }
        },
        createGod: async (parent, { god, worldId, religionId }) => {
            try {
                const newGod = await God.create(god)
                const updatedReligion = await Religion.findByIdAndUpdate(religionId, {
                    $push: { gods: newGod }
                }, {
                    new: true
                })
                const world = await World.findById(worldId).populate([
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
            } catch (error) {
                console.log(error)
            }
        }
    }

}
module.exports = resolvers;