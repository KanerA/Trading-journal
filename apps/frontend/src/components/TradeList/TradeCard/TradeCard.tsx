import type { Trade } from "@trading-journal/shared";
import ExitPositionsDisplay from "../ExitPositionsDisplay/ExitPositionsDisplay";
import TradeCardEntryData from "../TradeCardEntryData/TradeCardEntryData";
import TradeCardHeader from "../TradeCardTitle/TradeCardHeader";
import TradeTotalDisplay from "../TradeTotalsDisplay/TradeTotalsDisplay";
import "./tradeCard.scss";

type Props = {
    trade: Trade;
};

const TradeCard = ({ trade }: Props) => (
    <div className="tradeCard">
        <TradeCardHeader ticker={trade.ticker} status={trade.status} outcome={trade.outcome} />

        <TradeCardEntryData entryPrice={trade.entryPrice} entryDate={trade.entryDate} amount={trade.amount} />


        <ExitPositionsDisplay exits={trade.exits} />

        <TradeTotalDisplay pnl={trade.pnl} returnPercent={trade.returnPercent} />
    </div>
);

export default TradeCard;
