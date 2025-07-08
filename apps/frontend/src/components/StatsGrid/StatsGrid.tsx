import { Box } from '@mui/material';
import type { MainStats } from '../../pages/MainPage';
import StatCard from './StatCard/StatCard';

interface StatsGridProps {
    mainStats: MainStats
}

export default function StatsGrid({ mainStats: { losers, totalPnL, winRate, winners } }: StatsGridProps) {
    // TODO: maybe create enum with labels and conditions for these cards
    return (
        <Box sx={{ width: "95vw", margin: "auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
            <StatCard label="Total P&L" value={totalPnL} isWin={totalPnL >= 0} />
            <StatCard label="Win Rate" value={winRate} />
            <StatCard label="Winning Trades" value={winners} isWin={totalPnL >= 0} />
            <StatCard label="Losing Trades" value={losers} isWin={totalPnL <= 0} />
        </Box>
    );
}
