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
    console.log(payload)
    return {
        type: 'ui/drawer',
        payload
    }
}