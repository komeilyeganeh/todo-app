import { createSlice } from "@reduxjs/toolkit";

const defaulState = [
    {id: 1, title: "Todo 1", completed: false},
    {id: 2, title: "Todo 2", completed: false},
    {id: 3, title: "Todo 3", completed: false},
]

export const TodoSlice = createSlice({
    name: "todos",
    initialState: defaulState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: new Date,
                title: action.payload.title,
                completed: action.payload.completed
            };
            state.push(todo);
        }
    }
});

export const { addTodo } = TodoSlice.actions;
export default TodoSlice.reducer;