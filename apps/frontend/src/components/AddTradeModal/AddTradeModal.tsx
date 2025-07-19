
import { Dialog, DialogTitle } from "@mui/material";
import TradeForm from "../TradeForm/TradeForm";

interface AddTradeModalProps {
    closeModal: () => void;
    isModalOpen: boolean;
    modalTitle: string
}

const AddTradeModal = ({ isModalOpen, closeModal, modalTitle }: AddTradeModalProps) => {

    return (
        <Dialog scroll="paper"
            open={isModalOpen}
            onKeyDown={(evt) => {
                evt.stopPropagation();
                if (evt.key === "Escape") closeModal()
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
            <TradeForm closeModal={closeModal} />
        </Dialog >
    );
}
export default AddTradeModal;


