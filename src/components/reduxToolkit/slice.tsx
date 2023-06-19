import {  createSlice } from "@reduxjs/toolkit";
import { fetchTicket } from "../API/fakeAPI";
import {Ticket,TicketTime} from '../API/dataApi'

type actionType =
    {
        payload: any;
        type: string;
    }
type actionTypeData ={
    payload: [];
    type: string;
}
const Red = createSlice({
    name: "ticket",
    initialState: {
        status: "",
        error: "",
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
        dataApi: [],
        transplantActive: "любое кол-во пересадок",
        companyActive: "Любая авиакомпания,",
       
    },
    reducers: {
        cheap(state): void {
            state.stateButton = "cheap";
        },
        fast(state): void {
            state.stateButton = "fast";
        },
        optimal(state): void {
            state.stateButton = "optimal";
        },

        pobeda(state): void {
            state.stateCompany.pobeda = !state.stateCompany.pobeda;
        },
        s7Airlines(state): void {
            state.stateCompany.s7Airlines = !state.stateCompany.s7Airlines;
        },
        redWings(state): void {
            state.stateCompany.redWings = !state.stateCompany.redWings;
        },

        noTransplant(state): void {
            state.stateTransplant.no = !state.stateTransplant.no;
        },
        oneTransplant(state): void {
            state.stateTransplant.one = !state.stateTransplant.one;
        },
        twoTransplant(state): void {
            state.stateTransplant.two = !state.stateTransplant.two;
        },
        threeTransplant(state): void {
            state.stateTransplant.three = !state.stateTransplant.three;
        },
        addPanelNameCompany(state, action:actionType): void {
            state.companyActive = action.payload;
        },
        addPanelTransplant(state, action:actionType): void {
            state.transplantActive = action.payload;
        },
    },
    extraReducers: {
        [fetchTicket.pending]: (state) => {
            state.status = "loading";
            state.error = "";
        },
        [fetchTicket.fulfilled]: (state, action:actionTypeData) => {
            state.dataApi = action.payload;
            state.status = "true";
        },
        [fetchTicket.rejected]: (state) => {
            state.status = "";
            state.error = "error";
        },

    },
});

export default Red.reducer;
export const {
    addPanelTransplant,
    addPanelNameCompany,
    cheap,
    fast,
    optimal,
    pobeda,
    s7Airlines,
    redWings,
    noTransplant,
    oneTransplant,
    twoTransplant,
    threeTransplant,
} = Red.actions;
