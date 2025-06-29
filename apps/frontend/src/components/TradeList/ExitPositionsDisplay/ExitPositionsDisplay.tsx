import type { Trade } from "@trading-journal/shared";
import "./exitPositionsDisplay.scss";

interface ExitPositionsDisplayProps {
    exits: Trade["exits"]
}

const ExitPositionsDisplay = ({ exits }: ExitPositionsDisplayProps) => {
    return (
        <div className="exitPositionsDisplay">
            <h3>Exit Positions</h3>
            {exits.map((exit, i) => (
                <div className="exitPositionContainer">
                    <div>Exit #{i + 1}: <strong>${exit.price.toFixed(2)}</strong></div>
                    <div>Amount: <strong>{exit.amount} shares</strong></div>
                    <div>Date: <strong>{exit.date}</strong></div>
                </div>
            ))}
        </div>
    );
};

export default ExitPositionsDisplay;