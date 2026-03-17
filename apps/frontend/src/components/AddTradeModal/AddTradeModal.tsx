import { Dialog, DialogTitle } from "@mui/material";
import type { Trade } from "@trading-journal/types";
import TradeForm from "../TradeForm/TradeForm";

interface TradeModalProps {
    closeModal: () => void;
    isModalOpen: boolean;
    modalTitle: string;
    tradeToEdit?: Trade;
}

const TradeModal = ({ isModalOpen, closeModal, modalTitle, tradeToEdit }: TradeModalProps) => {
    return (
        <Dialog
            scroll="paper"
            open={isModalOpen}
            onKeyDown={(evt) => {
                evt.stopPropagation();
                if (evt.key === "Escape") closeModal();
            }}
            slotProps={{
                paper: {
                    sx: {
                        width: '60vw',
                        borderRadius: 2,
                        maxWidth: "none",
                    },
                },
            }}
        >
            <DialogTitle sx={{ m: 0, paddingBottom: 0, fontSize: "2rem" }}>
                {modalTitle}
            </DialogTitle>
            <TradeForm key={tradeToEdit?.id ?? 'new'} closeModal={closeModal} tradeToEdit={tradeToEdit} />
        </Dialog>
    );
}

export default TradeModal;
