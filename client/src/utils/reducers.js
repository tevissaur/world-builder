
const initialState = {
    openWorld: {},
    worlds: [],
    username: '',
    games: [],
    characters: [],
    drawerOpen: true
}

const reducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'SET_OPEN_WORLD':
            return { ...state, openWorld: action.payload }
        case 'SET_WORLDS':
            return { ...state, worlds: action.payload }
        case 'SET_CHARACTERS':
            return { ...state, characters: action.payload }
        case 'SET_OPEN':
            return { ...state, drawerOpen: action.payload}
        default:
            return state
    }
}

export {
    reducer
}