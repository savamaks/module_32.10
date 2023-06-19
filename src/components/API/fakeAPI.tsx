import { setAllTodo } from "../reduxToolkit/sliceTodos";
import { data } from "./dataApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export function fakeApiRequest(data: any): Promise<unknown> {
    return new Promise((resolve): void => {
        setTimeout((): void => {
            resolve(data);
        }, 1500);
    });
}

export const fetchTicket: any = createAsyncThunk(
    "requestApi",

    async () => {
        const response = await fakeApiRequest(data);
        return response;
    }
);


export const fetchTodos: any = createAsyncThunk(
    "requestJSON",

    async (_,{dispatch}) => {
        const response =  await fakeApiRequest(data)
        // const dataS = await response.json();
        dispatch(setAllTodo(response))
    }
);
