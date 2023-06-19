import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

interface TypeTodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
const todosAdapter = createEntityAdapter({
    selectId: (todo: any) => todo.id,
    sortComparer: (a, b) => (+a.duration > +b.duration ? 1 : -1),
});

const todo = createSlice({
    name: "todo",
    initialState: todosAdapter.getInitialState(),
    reducers: {
        setAllTodo: todosAdapter.setAll,
    },
    extraReducers: {},
});

export default todo.reducer;

export const { setAllTodo } = todo.actions;

export const { selectAll, selectById, selectEntities, selectIds, selectTotal } = todosAdapter.getSelectors((state: any) => state.todo);

