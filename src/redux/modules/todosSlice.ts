import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Todo {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}
interface TodoState {
  todos: Todo[];
  isLoading: boolean;
  isError: boolean;
  error: any;
}

// createSlice
const todosSlice = createSlice({
  name: "todos",
  initialState: {},
  reducers: {},
});

export default todosSlice.reducer;
