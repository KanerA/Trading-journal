import { Box } from '@mui/material';
import type { Trade } from '@trading-journal/shared';
import { useEffect, useState } from 'react';
import StatsGrid from '../components/StatsGrid/StatsGrid.tsx';
import Tabs from '../components/Tabs/Tabs.tsx';

export interface MainStats {
    totalPnL: number,
    winRate: string,
    winners: number,
    losers: number,
}

const MainPage = () => {
    const [mainStats, setMainStats] = useState<MainStats>({
        totalPnL: 0,
        winRate: "0%",
        winners: 0,
        losers: 0,
    })

    const mockTrades: Trade[] = localStorage.getItem("trades") ? JSON.parse(localStorage.getItem("trades")!) : [];

    const calcStats = (trades: Trade[]) => {
        return trades.reduce((prev, acc) => {
            if (acc.outcome === "loser") prev["losers"] += 1;
            if (acc.outcome === "winner") prev["winners"] += 1;
            prev.totalPnL += acc.pnl
            prev.winRate = `${prev.winners / (prev.winners + prev.losers) * 100}%`;
            return prev;
        }, { ...mainStats });
    }

    useEffect(() => {
        const calculatedStats = calcStats(mockTrades);
        setMainStats(calculatedStats)
    }, [])

    return (
        <Box>
            <StatsGrid mainStats={mainStats} />
            <Tabs trades={mockTrades} />
        </Box>
    );
}

export default MainPage;
