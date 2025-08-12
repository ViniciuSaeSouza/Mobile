import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        age: 0,
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setAge: (state, action) => {
            state.age = action.payload;
        },
        resetUser: (state) => {
            state.name = null;	
            state.age = 0;
        },
    },
});
export const {setName, setAge} = userSlice.actions;
export default userSlice.reducer;
