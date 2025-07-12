import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { getTradesStats } from '../../store/selectors/tradeSelector';
import StatCard from './StatCard/StatCard';

export default function StatsGrid() {
    // TODO: maybe create enum with labels and conditions for these cards
    const mainStats = useSelector(getTradesStats)

    return (
        <Box sx={{ width: "95vw", margin: "auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
            <StatCard label="Total P&L" value={mainStats.totalPnL} isWin={mainStats.totalPnL >= 0} />
            <StatCard label="Win Rate" value={mainStats.winRate} />
            <StatCard label="Winning Trades" value={mainStats.winners} isWin={mainStats.totalPnL >= 0} />
            <StatCard label="Losing Trades" value={mainStats.losers} isWin={mainStats.totalPnL <= 0} />
        </Box>
    );
}
