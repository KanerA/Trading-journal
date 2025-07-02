
import { Dialog } from "@mui/material";
import AddTradeForm from "../AddTradeForm/AddTradeForm";

interface AddTradeModalProps {
    closeModal: () => void;
    isModalOpen: boolean;
}

const AddTradeModal = ({ isModalOpen, closeModal }: AddTradeModalProps) => {

    return (
        <Dialog open={isModalOpen} onKeyDown={(evt) => {
            evt.stopPropagation();
            if (evt.key === "Escape") closeModal()
        }}>
            <AddTradeForm />
        </Dialog >
    );
}
export default AddTradeModal;


