// Creates a Redux store that holds the state of the app. Only one store should exist.
import uiReducer from "./slices/uiSlice"
import userReducer from "./slices/userSlice"
import worldReducer from "./slices/worldSlice"
import characterReducer from "./slices/characterSlice"
import religionReducer from "./slices/religionSlice"
import godReducer from "./slices/godSlice"
import { configureStore } from '@reduxjs/toolkit';
import { api } from '../services/requests.service'







const store = configureStore({
    reducer: {
        ui: uiReducer,
        user: userReducer,
        world: worldReducer,
        character: characterReducer,
        religion: religionReducer,
        god: godReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoreState: true,
                ignoreActions: true
            }
        }) 
});


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch



export default store