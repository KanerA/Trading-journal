import type { Trade } from "@trading-journal/shared";
import "./tradeCardHeader.scss";
interface TradeCardHeaderProps {
    ticker: Trade["ticker"],
    status: Trade["status"],
    outcome: Trade["outcome"],
}
const TradeCardHeader = ({ outcome, status, ticker }: TradeCardHeaderProps) => {
    return (
        <div className="tradeCardHeader">
            <div className="tradeCardTitle">
                <h2>{ticker}</h2>
                <div className="cardStatus">{status}</div>
                <div className={`cardOutcome ${outcome === "winner" ? "winnerOutcome" : "loserOutcome"}`}>{outcome}</div>
            </div>
            <div className="tradeCardActionButtons">
                <button >✏️</button>
                <button >🗑️</button>
            </div>
        </div>
    );
};

export default TradeCardHeader;