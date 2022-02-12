import { gql } from '@apollo/client'

export const CREATE_USER = gql`
    mutation CreateUser($username: String!, $email: String!, $password: String!) {
        createUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            worlds {
                _id
            }
            }
        }
    }
`

export const LOG_IN = gql`
    mutation LogIn($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
            }
        }
    }
`

export const UPDATE_USER = gql`
    mutation UpdateUser($user: UpdatedUser) {
        updateUser(user: $user) {
            _id
            username
            email
            password
    }
}
`

export const CREATE_WORLD = gql`
    mutation CreateWorld($world: WorldInput) {
        createWorld(world: $world) {
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

export const CREATE_CHARACTER = gql`
    mutation CreateCharacter($character: CharacterInput, $worldId: ID) {
        createCharacter(character: $character, worldId: $worldId) {
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

export const CREATE_RELIGION = gql`
    mutation CreateReligion($religion: ReligionInput, $worldId: ID){
        createReligion(religion: $religion, worldId: $worldId) {
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

export const CREATE_GOD = gql`
    mutation CreateGod($god: GodInput, $worldId: ID, $religionId: ID) {
        createGod(god: $god, worldId: $worldId, religionId: $religionId) {
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
export const CREATE_MONSTER = gql`
    mutation CreateMonster($monster: MonsterInput, $worldId: ID, $regionId: ID) {
        createMonster(monster: $monster, worldId: $worldId, regionId: $regionId) {
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
export const CREATE_REGION = gql`
    mutation CreateRegion($region: RegionInput, $worldId: ID) {
        createRegion(region: $region, worldId: $worldId) {
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