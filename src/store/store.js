import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice/todoSlice";

export const store = configureStore({
    reducer:{
        todo:todoSlice
    }
})