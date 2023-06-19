import { combineReducers,configureStore } from "@reduxjs/toolkit";
import reducer from './slice'

const rootReducer = combineReducers({
    ticket:reducer,
})

export const store = configureStore({
reducer:rootReducer
})