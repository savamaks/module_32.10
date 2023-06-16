import { createSlice } from "@reduxjs/toolkit";

const reducer = createSlice({
    name: "reduc",
    initialState: {
        stateButton: "cheap",
        stateCompany: {
            pobeda: true,
            s7Airlines: true,
            redWings: true,
        },
        stateTransplant: {
            no: true,
            one: true,
            two: true,
            three: true,
        },
        ticket: [],
        
    },
    reducers: {
        cheap(state) {
            state.stateButton = "cheap";
        },
        fast(state) {
            state.stateButton = "fast";
        },
        optimal(state) {
            state.stateButton = "optimal";
        },

        pobeda(state) {
            state.stateCompany.pobeda=!state.stateCompany.pobeda
        },
        s7Airlines(state) {
            state.stateCompany.s7Airlines = !state.stateCompany.s7Airlines
        },
        redWings(state) {
            state.stateCompany.redWings = !state.stateCompany.redWings
        },

        noTransplant(state) {
            state.stateTransplant.no  =  !state.stateTransplant.no;
        },
        oneTransplant(state) {
            state.stateTransplant.one =!state.stateTransplant.one 
        },
        twoTransplant(state) {
            state.stateTransplant.two =! state.stateTransplant.two 
        },
        threeTransplant(state) {
            state.stateTransplant.three =! state.stateTransplant.three 
        },
        addTicket(state,action) {
            state.ticket= action.payload
        },
    },
});

export default reducer.reducer;
export const {addTicket, cheap, fast, optimal, pobeda, s7Airlines, redWings, noTransplant, oneTransplant, twoTransplant, threeTransplant } = reducer.actions;
