import uiReducer from "./slices/uiSlice"
import userReducer from "./slices/userSlice"
import worldReducer from "./slices/worldSlice"
import { combineReducers } from 'redux'

const reducer = combineReducers({
    ui: uiReducer,
    user: userReducer,
    world: worldReducer
})

export default reducer