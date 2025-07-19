import type { RootState } from "..";

export const getIsModalOpen = (state: RootState) => state.modal.isOpen;
export const getModalTitle = (state: RootState) => state.modal.title;
export const getEditTradeId = (state: RootState) => state.modal.editTradeId;