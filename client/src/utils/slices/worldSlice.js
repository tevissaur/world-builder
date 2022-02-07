const initialState = {
    openWorld: {},
    worlds: [],
}

function worldReducer(state = initialState, action) {
    switch (action.type) {
        case 'world/openWorld':
            return {
                ...state,
                openWorld: action.payload
            }
        case 'world/allUserWorlds':
            return {
                ...state,
                worlds: action.payload
            }
        default:
            return state
    }
}

export default worldReducer
