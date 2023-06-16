import { data } from "./dataApi";
import { addTicket } from "../reduxToolkit/slice";
function fakeApiRequest(data: any): Promise<unknown> {
    return new Promise((resolve): void => {
        setTimeout((): void => {
            resolve(data);
        }, 2000);
    });
}

export function fetchPosts() {
    return async (dispatch: any) => {

        try {
            // Имитация асинхронного запроса к серверу
            const response = await fakeApiRequest(data);

            dispatch(addTicket(response));
        } catch (error) {
            dispatch();
        }
    };
}
