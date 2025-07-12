import { Box, Divider } from "@mui/material";
import type { Trade } from "@trading-journal/shared";
import { format } from "date-fns";
import EntryDataItem from "../TradeCard/EntryDataItem";

interface TradeCardEntryDataProps {
    entryPrice: Trade["entryPrice"],
    entryDate: Trade["entryDate"],
    entryAmount: Trade["entryAmount"]
}

const TradeCardEntryData = ({ entryAmount, entryDate, entryPrice }: TradeCardEntryDataProps) => {
    return (
        <>
            <Box sx={{
                display: "flex",
            }}>
                <EntryDataItem label="Entry Price" value={`$${entryPrice.toFixed(2)}`} />
                <EntryDataItem label="Entry Date" value={format(entryDate, "dd/MM/yyyy")} />
                <EntryDataItem label="Amount" value={`${entryAmount} Shares`} />
            </Box>
            <Divider sx={{ my: 2 }} />
        </>
    );
};

export default TradeCardEntryData;