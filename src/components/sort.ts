import { Ticket } from "./API/dataApi";

export const sortPrice = (data: Array<Ticket>): Array<Ticket> => {
    return data.sort((a: Ticket, b: Ticket) => (+a.price > +b.price ? 1 : -1));
};

export const sortOptimal = (data: Array<Ticket>): Array<Ticket> => {
    return data.sort((a: Ticket, b: Ticket) => (+a.transplant > +b.transplant ? 1 : -1));
};

export const sortFast = (data: Array<Ticket>): Array<Ticket> => {
    return data.sort((a: Ticket, b: Ticket) => (+a.duration > +b.duration ? 1 : -1));
};
