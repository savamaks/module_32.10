import { combineReducers,configureStore } from "@reduxjs/toolkit";
import reducer from './slice'
import tod from './sliceTodos'

const rootReducer = combineReducers({
    ticket:reducer,
    tod:tod
})

export const store = configureStore({
reducer:rootReducer
})