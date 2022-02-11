const initialState = {
    character: {}
}

function characterReducer(state = initialState, action) {

    switch (action.type) {
        case 'character/data':
            return {
                ...state,
                character: action.payload
            }
        default:
            return state
    }
}
export default characterReducer