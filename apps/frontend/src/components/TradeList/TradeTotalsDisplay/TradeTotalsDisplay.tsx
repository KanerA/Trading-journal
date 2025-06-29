import type { Trade } from "@trading-journal/shared";
import "./TradeTotalsDisplay.scss";

interface TradeTotalDisplayProps {
    pnl: Trade["pnl"],
    returnPercent: Trade["returnPercent"]
}

const TradeTotalDisplay = ({ pnl, returnPercent }: TradeTotalDisplayProps) => {
    return (
        <div className="tradeTotalDisplay">
            <div>
                <p>Total P&L</p>
                <p className={`${+pnl.toFixed(2) > 0 ? "winner" : "loser"}`}>${pnl.toFixed(2)}</p>
            </div>
            <div>
                <p>Return %</p>
                <p className={`${+returnPercent.toFixed(2) > 0 ? "winner" : "loser"}`}>{returnPercent.toFixed(2)}%</p>
            </div>
        </div>
    );
};

export default TradeTotalDisplay;