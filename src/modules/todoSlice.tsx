import { createSlice } from "@reduxjs/toolkit";

export interface Todos {
  id: number;
  text: string;
  checked: boolean;
  important: boolean;
}

const initialState: Todos[] = [];

export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    onInsert: (state, { payload: text }) => {
      state.push({
        id: Date.now(),
        text,
        checked: false,
        important: false,
      });
    },
    onRemove: (state, { payload: id }) => {
      return state.filter((todo: Todos) => todo.id !== id);
    },
    onChecked: (state, { payload: id }) => {
      return state.map((todo: Todos) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      );
    },
    onImportant: (state, { payload: id }) => {
      return state.map((todo: Todos) =>
        todo.id === id ? { ...todo, important: !todo.important } : todo
      );
    },
    onUpdate: (state, actions) => {
      const { id, text } = actions.payload;
      return state.map((todo: Todos) =>
        todo.id === id ? { ...todo, text } : todo
      );
    },
  },
});

export const { onInsert, onRemove, onChecked, onImportant, onUpdate } =
  todoSlice.actions;
export default todoSlice.reducer;
