import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: false,
    reducers: {
        openModal: (_) => true,
        closeModal: (_) => false
    }
})

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
