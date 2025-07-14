import { Outcome, type Trade } from "@trading-journal/shared";
import type { RootState } from "../index.ts";

const calcStats = (trades: Trade[]) => {
    const defaultStatsObject = {
        totalPnL: 0,
        winRate: "0%",
        winners: 0,
        losers: 0,
    }
    return trades.reduce((prev, acc) => {
        if (acc.outcome === Outcome.Loser) prev["losers"] += 1;
        if (acc.outcome === Outcome.Winner) prev["winners"] += 1;
        prev.totalPnL += acc.pnl
        prev.winRate = `${(prev.winners / (prev.winners + prev.losers) * 100).toFixed(2)}%`;
        return prev;
    }, { ...defaultStatsObject });
}

export const getAllTrades = (state: RootState) => state.trades;

export const getTradesStats = (state: RootState) => {
    return calcStats(state.trades)
}