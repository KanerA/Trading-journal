
import { Dialog } from "@mui/material";
import TradeForm from "../TradeForm/TradeForm";

interface AddTradeModalProps {
    closeModal: () => void;
    isModalOpen: boolean;
}

const AddTradeModal = ({ isModalOpen, closeModal }: AddTradeModalProps) => {

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
            <TradeForm />
        </Dialog >
    );
}
export default AddTradeModal;


