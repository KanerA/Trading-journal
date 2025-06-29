import type { Trade } from "@trading-journal/shared";
import { useState } from "react";
import EmptyState from "../EmptyState";
import TradeList from "../TradeList/TradeList";
import "./tabs.scss";

interface TabsProps {
    trades: Trade[]
}

export default function Tabs({ trades }: TabsProps) {
    const [displaySectionSelector, setDisplaySectionSelector] = useState<"trades" | "analytics">("trades");


    return (
        <div className="tabContainer">
            <div className="tabButtonContainer">
                <button onClick={() => setDisplaySectionSelector('trades')}>
                    All Trades
                </button>
                <button onClick={() => setDisplaySectionSelector('analytics')}>
                    Analytics
                </button>
            </div>
            {
                displaySectionSelector === "trades" ? <TradeList trades={trades} /> : <EmptyState />
            }
        </div>
    );
}
