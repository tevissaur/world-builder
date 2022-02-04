
const initialState = {
    openWorld: {},
    worlds: [],
    username: '',
    games: [],
    characters: [],
    drawerOpen: true
}

const reducer = (state = initialState, action) => {
    console.log(action.type, action.payload, state)
    switch (action.type) {
        case 'SET_OPEN_WORLD':
            let x = {
                ...state,
                openWorld: action.payload
            }
            console.log(x)
            return {
                ...state,
                openWorld: action.payload
            }
        case 'SET_WORLDS':
            return {
                ...state,
                worlds: action.payload
            }
        case 'SET_CHARACTERS':
            return {
                ...state,
                characters: action.payload
            }
        case 'SET_OPEN':
            return {
                ...state,
                drawerOpen: action.payload
            }
        case 'SET_USERNAME':
            return { ...state, drawerOpen: action.payload }
        default:
            return state
    }
}

export {
    reducer
}