const initialState = {
    religion: {}
}

function religionReducer(state = initialState, action) {

    switch (action.type) {
        case 'religion/data':
            return {
                ...state,
                religion: action.payload
            }
        default:
            return state
    }
}
export default religionReducer