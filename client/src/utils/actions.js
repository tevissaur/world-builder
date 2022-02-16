export const setWorldAction = (payload) => {
    return {
        type: 'world/openWorld',
        payload
    }
}

export const setWorldsAction = (payload) => {
    return {
        type: 'world/allUserWorlds',
        payload
    }
}

export const setCharacters = (payload) => {
    return {
        type: 'world/characters',
        payload
    }
}

export const setDrawerOpen = (payload) => {
    return {
        type: 'ui/drawer',
        payload
    }
}

export const setModalOpen = (payload) => {
    return {
        type: 'ui/modal',
        payload
    }
}

export const setCharacter = (payload) => {
    return {
        type: 'character/data',
        payload
    }
}

export const addCharacter = (payload) => {
    return {
        type: 'world/addCharacter',
        payload
    }
}

export const setReligion = (payload) => {
    return {
        type: 'religion/data',
        payload
    }
}

export const setGod = (payload) => {
    return {
        type: 'god/data',
        payload
    }
}