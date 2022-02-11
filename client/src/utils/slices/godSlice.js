const initialState = {
    god: {}
}

function godReducer(state = initialState, action) {

    switch (action.type) {
        case 'god/data':
            return {
                ...state,
                god: action.payload
            }
        default:
            return state
    }
}
export default godReducer