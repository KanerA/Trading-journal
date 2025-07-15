import { Box, Divider } from "@mui/material";
import type { Trade } from "@trading-journal/shared";
import EntryDataItem from "../TradeCard/EntryDataItem";

interface TradeCardEntryDataProps {
    entryPrice: Trade["entryPrice"],
    entryDate: Trade["entryDate"],
    sharesBought: Trade["sharesBought"]
}

const TradeCardEntryData = ({ sharesBought, entryDate, entryPrice }: TradeCardEntryDataProps) => {
    return (
        <>
            <Box sx={{
                display: "flex",
            }}>
                <EntryDataItem label="Entry Price" value={`$${entryPrice.toFixed(2)}`} />
                <EntryDataItem label="Entry Date" value={entryDate} />
                <EntryDataItem label="Amount" value={`${sharesBought} Shares`} />
            </Box>
            <Divider sx={{ my: 2 }} />
        </>
    );
};

export default TradeCardEntryData;