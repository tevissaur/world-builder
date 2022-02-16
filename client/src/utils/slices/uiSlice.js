const initialState = {
    drawerOpen: true,
    modalOpen: false
}

function uiReducer(state = initialState, action) {
    switch (action.type) {
        case 'ui/drawer':
            return {
                ...state,
                drawerOpen: action.payload
            }
        case 'ui/modal':
            return {
                ...state,
                modalOpen: action.payload
            }
        default:
            return state
    }
}

export default uiReducer