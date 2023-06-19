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


