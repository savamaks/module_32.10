import { combineReducers,configureStore } from "@reduxjs/toolkit";
import reducer from './slice'
import { TypedUseSelectorHook, useSelector } from "react-redux";

const rootReducer = combineReducers({
    ticket:reducer,
})

export const store = configureStore({
reducer:rootReducer
})

export type RootState = ReturnType<typeof store.getState>;
