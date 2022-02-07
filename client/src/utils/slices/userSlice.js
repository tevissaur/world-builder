const initialState = {
    userData: {}
}

function userReducer(state = initialState, action) {

    switch (action.type) {
        case 'user/profileData':
            return {
                ...state,
                drawerOpen: action.payload
            }

        default:
            return state
    }

}

export default userReducer