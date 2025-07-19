
import { Dialog, DialogTitle } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/reducers/modalSlice";
import { getIsModalOpen } from "../../store/selectors/modalSelectors";
import TradeForm from "../TradeForm/TradeForm";

interface AddTradeModalProps {
    modalTitle: string
}

const AddTradeModal = ({ modalTitle }: AddTradeModalProps) => {
    const dispatch = useDispatch();

    const isModalOpen = useSelector(getIsModalOpen);
    const closeModalHandler = () => dispatch(closeModal())

    return (
        <Dialog scroll="paper"
            open={isModalOpen}
            onKeyDown={(evt) => {
                evt.stopPropagation();
                if (evt.key === "Escape") closeModalHandler()
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
            <TradeForm onCloseModal={closeModalHandler} />
        </Dialog >
    );
}
export default AddTradeModal;


