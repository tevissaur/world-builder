


const initialState = {
    openWorld: {},
    worlds: [],
    username: '',
    games: []
}

export default function testReducer(state = initialState, action) {

    switch (action.type) {
        case 'SET_OPEN_WORLD':
            return { ...state, openWorld: action.payload }
        case 'SET_WORLDS':
            return { ...state, worlds: action.payload }
        default:
            return state
    }
}