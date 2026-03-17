import { createSlice } from "@reduxjs/toolkit";
import type { Trade } from "@trading-journal/types";

const initialState: Trade[] = [];

const tradesSlice = createSlice({
    name: "trades",
    initialState,
    reducers: {
        addTrade: (state, action) => {
            state.push(action.payload);
        },
        removeTrade: (state, action) => {
            const indexToRemove = state.findIndex(trade => trade.id === action.payload);
            if (indexToRemove === -1) return;
            state.splice(indexToRemove, 1);
        },
        updateTrade: (state, action) => {
            const index = state.findIndex(trade => trade.id === action.payload.id);
            if (index !== -1) state[index] = action.payload;
        },
        initTrades: (_, action) => action.payload
    }
})

export const { addTrade, removeTrade, updateTrade, initTrades } = tradesSlice.actions;
export default tradesSlice.reducer;