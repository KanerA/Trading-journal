import { Box, Divider } from "@mui/material";
import type { Trade } from "@trading-journal/shared";
import EntryDataItem from "../TradeCard/EntryDataItem";

interface TradeCardEntryDataProps {
    entryPrice: Trade["entryPrice"],
    entryDate: Trade["entryDate"],
    amount: Trade["amount"]
}

const TradeCardEntryData = ({ amount, entryDate, entryPrice }: TradeCardEntryDataProps) => {
    return (
        <>
            <Box sx={{
                display: "flex",
            }}>
                <EntryDataItem label="Entry Price" value={`$${entryPrice.toFixed(2)}`} />
                <EntryDataItem label="Entry Date" value={entryDate} />
                <EntryDataItem label="Amount" value={`${amount} Shares`} />
            </Box >
            <Divider sx={{ my: 2 }} />
        </>
    );
};

export default TradeCardEntryData;