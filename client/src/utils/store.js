// Creates a Redux store that holds the state of the app. Only one store should exist.
import { configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';

// Importing the reducer file that is mostly unchanged
// import counterReducer from './counterSlice';
import testReducer from './reducers'

const store = createStore(testReducer)


export default store
// export default configureStore({
//     reducer: {
//         counter: counterReducer
//     }
// });
