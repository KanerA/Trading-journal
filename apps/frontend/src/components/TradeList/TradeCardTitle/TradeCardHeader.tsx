import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Chip, IconButton, Typography } from "@mui/material";
import type { Trade } from "@trading-journal/shared";
import { useDispatch } from "react-redux";
import { useDeleteTrade } from "../../../hooks/useDeleteTrade";
import { removeTrade } from "../../../store/reducers/tradesSlice";

interface TradeCardHeaderProps {
    tradeId: Trade["id"],
    ticker: Trade["ticker"],
    status: Trade["status"],
    outcome: Trade["outcome"],
}

// TODO: create const for win / lose colors : rgb(247, 0, 0), rgb(2, 176, 2)

const sharedChipSx = {
    borderRadius: "15px",
    padding: "0.2rem 0.5rem",
    margin: "0.4rem",
    fontSize: "0.8rem",
}

const TradeCardHeader = ({ tradeId, outcome, status, ticker }: TradeCardHeaderProps) => {
    const dispatch = useDispatch();
    const mutateDeleteTrade = useDeleteTrade();
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
                <Chip size="small" variant="outlined" label={outcome} sx={{ ...sharedChipSx, backgroundColor: outcome === "winner" ? "rgb(2, 176, 2)" : "rgb(247, 0, 0)", fontWeight: 600 }} />
            </Box>
            <Box>
                <IconButton><EditIcon sx={{ color: "black" }} /></IconButton>
                <IconButton><DeleteOutlineIcon sx={{ color: "black" }} onClick={() => {
                    dispatch(removeTrade(tradeId));
                    mutateDeleteTrade(tradeId)
                }} /></IconButton>
            </Box>
        </Box>
    );
};

export default TradeCardHeader;