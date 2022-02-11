const initialState = {
    drawerOpen: true,
    activeDrags: 0,
    deltaPosition: {
        x: 0, y: 0
    },
    controlledPosition: {
        x: -400, y: 200
    }
}

function uiReducer(state = initialState, action) {
    switch (action.type) {
        case 'ui/drawer':
            return {
                ...state,
                drawerOpen: action.payload
            }
        default:
            return state
    }
}

export default uiReducer