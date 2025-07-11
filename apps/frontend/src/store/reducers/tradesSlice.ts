import { createSlice } from "@reduxjs/toolkit";
import type { Trade } from "@trading-journal/shared";

const initialState: Trade[] = [];

const tradesSlice = createSlice({
    name: "trades",
    initialState,
    reducers: {
        addTrade: (state, action) => {
            state.push(action.payload);
        },
    }
})

export const { addTrade } = tradesSlice.actions;
export default tradesSlice.reducer;