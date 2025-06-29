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

function MainPage() {
    const [mainStats, setMainStats] = useState<MainStats>({
        totalPnL: 0,
        winRate: "0%",
        winners: 0,
        losers: 0,
    })

    const mockTrades: Trade[] = [
        {
            ticker: 'TSLA',
            status: 'Closed',
            outcome: 'winner',
            entryPrice: 1500,
            entryDate: '2/15/2000',
            amount: 50,
            exits: [
                {
                    price: 1800,
                    amount: 50,
                    date: '6/24/2025',
                },
            ],
            pnl: 15000,
            returnPercent: 20,
        },
        {
            ticker: 'ASTS',
            status: 'Closed',
            outcome: 'loser',
            entryPrice: 25.1,
            entryDate: '2/15/2000',
            amount: 40,
            exits: [
                {
                    price: 27.8,
                    amount: 10,
                    date: '6/24/2025',
                },
                {
                    price: 23.1,
                    amount: 30,
                    date: '6/24/2025',
                },
            ],
            pnl: (27.8 * 10 + 23.1 * 30) - (40 * 25.1),
            returnPercent: ((27.8 * 10 + 23.1 * 30) - (40 * 25.1)) / (40 * 25.1) * 100,
        },
    ];

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
        <div>
            <div>
                <StatsGrid mainStats={mainStats} />
                <Tabs trades={mockTrades} />
            </div>
        </div>
    );
}

export default MainPage;
