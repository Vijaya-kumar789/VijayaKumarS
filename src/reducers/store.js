import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./Reducer";


export const store = configureStore({
    reducer : {
                app: counterSlice.reducer
            }
})