// Creates a Redux store that holds the state of the app. Only one store should exist.
import { configureStore } from '@reduxjs/toolkit';

// Importing the reducer file that is mostly unchanged
import counterReducer from './counterSlice';

export default configureStore({
    reducer: {
        counter: counterReducer
    }
});
