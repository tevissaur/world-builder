import uiReducer from "./slices/uiSlice"
import userReducer from "./slices/userSlice"
import worldReducer from "./slices/worldSlice"
import { combineReducers } from 'redux'
import characterReducer from "./slices/characterSlice"
import religionReducer from "./slices/religionSlice"
import godReducer from "./slices/godSlice"

const reducer = combineReducers({
    ui: uiReducer,
    user: userReducer,
    world: worldReducer,
    character: characterReducer,
    religion: religionReducer,
    god: godReducer,
})

export default reducer