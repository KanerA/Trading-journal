import type { Trade } from "@trading-journal/shared";
import EntryDataItem from "../TradeCard/EntryDataItem";
import "./TradeCardEntryData.scss";

interface TradeCardEntryDataProps {
    entryPrice: Trade["entryPrice"],
    entryDate: Trade["entryDate"],
    amount: Trade["amount"]
}

const TradeCardEntryData = ({ amount, entryDate, entryPrice }: TradeCardEntryDataProps) => {
    return (
        <div className="tradeCardEntryData">
            <EntryDataItem label="Entry Price" value={`$${entryPrice.toFixed(2)}`} />
            <EntryDataItem label="Entry Date" value={entryDate} />
            <EntryDataItem label="Amount" value={`${amount} Shares`} />
        </div>
    );
};

export default TradeCardEntryData;