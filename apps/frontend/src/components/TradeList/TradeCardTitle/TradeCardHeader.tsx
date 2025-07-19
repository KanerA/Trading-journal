import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Chip, IconButton, Typography } from "@mui/material";
import type { Trade } from "@trading-journal/shared";
import { useDispatch } from "react-redux";
import { Colors } from "../../../enums/colors";
import { TradeModalTitles } from "../../../enums/tradeModal";
import { useDeleteTrade } from "../../../hooks/useDeleteTrade";
import { openModalEditMode } from "../../../store/reducers/modalSlice";
import { removeTrade } from "../../../store/reducers/tradesSlice";

interface TradeCardHeaderProps {
    tradeId: Trade["id"],
    ticker: Trade["ticker"],
    status: Trade["status"],
    outcome: Trade["outcome"],
}

const sharedChipSx = {
    borderRadius: "15px",
    padding: "0.2rem 0.5rem",
    margin: "0.4rem",
    fontSize: "0.8rem",
}

const TradeCardHeader = ({ tradeId, outcome, status, ticker }: TradeCardHeaderProps) => {
    const dispatch = useDispatch();
    const mutateDeleteTrade = useDeleteTrade();

    const onClickEdit = () => {
        dispatch(openModalEditMode({ title: TradeModalTitles.EditTrade, tradeId }))
    }

    const onClickDelete = () => {
        dispatch(removeTrade(tradeId));
        mutateDeleteTrade(tradeId)
    }

    return (
        <Box sx={{
            display: "flex"
        }}>
            <Box sx={{
                display: "flex",
                flexGrow: 2,
                alignItems: "center",
            }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>{ticker}</Typography>
                <Chip size="small" variant="outlined" label={status} sx={sharedChipSx} />
                <Chip size="small" variant="outlined" label={outcome} sx={{ ...sharedChipSx, backgroundColor: outcome === "winner" ? Colors.Win : Colors.Lose, fontWeight: 600 }} />
            </Box>
            <Box>
                <IconButton><EditIcon onClick={onClickEdit} sx={{ color: "black" }} /></IconButton>
                <IconButton><DeleteOutlineIcon sx={{ color: "black" }} onClick={onClickDelete} /></IconButton>
            </Box>
        </Box>
    );
};

export default TradeCardHeader;