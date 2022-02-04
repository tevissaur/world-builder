export const setWorldAction = (payload) => {
    return {
        type: 'SET_OPEN_WORLD',
        payload
    }
}

export const setWorldsAction = (payload) => {
    return {
        type: 'SET_WORLDS',
        payload
    }
}

export const setCharacters = (payload) => {
    return {
        type: 'SET_CHARACTERS',
        payload
    }
}

export const setDrawerOpen = (payload) => {
    console.log(payload)
    return {
        type: 'SET_OPEN',
        payload
    }
}