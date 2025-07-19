import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { TradeModalTitles } from "../../enums/tradeModal";

interface ModalState {
    isOpen: boolean,
    title: TradeModalTitles
}

const initialState: ModalState = {
    isOpen: false,
    title: TradeModalTitles.CreateTrade
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<TradeModalTitles>) => {
            state.isOpen = true;
            state.title = action.payload
        },
        closeModal: (state) => {
            state.isOpen = false
        },

    }
})

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
