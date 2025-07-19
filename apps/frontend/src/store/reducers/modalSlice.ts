import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { TradeModalTitles } from "../../enums/tradeModal";

interface ModalState {
    isOpen: boolean,
    title: TradeModalTitles,
    editTradeId: string | null
}

const initialState: ModalState = {
    isOpen: false,
    title: TradeModalTitles.CreateTrade,
    editTradeId: null
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
            state.isOpen = false;
            state.editTradeId = null
        },
        openModalEditMode: (state, action: PayloadAction<{ title: TradeModalTitles, tradeId: string }>) => {
            state.isOpen = true;
            state.title = action.payload.title;
            state.editTradeId = action.payload.tradeId;
        }
    }
})

export const { openModal, closeModal, openModalEditMode } = modalSlice.actions;
export default modalSlice.reducer;
