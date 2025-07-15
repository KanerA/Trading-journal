import { Box } from "@mui/material";
import type { Trade } from "@trading-journal/shared";
import ExitPositionsDisplay from "../ExitPositionsDisplay/ExitPositionsDisplay";
import TradeCardEntryData from "../TradeCardEntryData/TradeCardEntryData";
import TradeCardHeader from "../TradeCardTitle/TradeCardHeader";
import TradeTotalDisplay from "../TradeTotalsDisplay/TradeTotalsDisplay";

type Props = {
    trade: Trade;
};

const TradeCard = ({ trade }: Props) => (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '85vw',
        margin: '0.7rem auto',
        backgroundColor: "#fff",
        padding: '1.3rem',
        borderRadius: '15px',
        border: '1px solid rgba(0,0,0,0.1)',
    }}>
        <TradeCardHeader tradeId={trade.id} ticker={trade.ticker} status={trade.status} outcome={trade.outcome} />

        <TradeCardEntryData entryPrice={trade.entryPrice} entryDate={trade.entryDate} sharesBought={trade.sharesBought} />

        <ExitPositionsDisplay exits={trade.exits} />

        <TradeTotalDisplay pnl={trade.pnl} returnPercent={trade.returnPercent} />
    </Box>
);

export default TradeCard;
