import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { getTradesStats } from '../../store/selectors/tradeSelector';
import StatCard from './StatCard/StatCard';

export default function StatsGrid() {
    // TODO: maybe create enum with labels and conditions for these cards
    // ?: maybe option to choose what currency is used
    const mainStats = useSelector(getTradesStats);

    const labelColor = mainStats.totalPnL <= 0 ? "rgb(247, 0, 0)" : "rgb(2, 176, 2)";
    const formatTotalPnLNumber = (total: number): string => {
        return total.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }

    return (
        <Box sx={{ width: "95vw", margin: "auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
            <StatCard label="Total P&L" value={formatTotalPnLNumber(mainStats.totalPnL)} color={labelColor} />
            <StatCard label="Win Rate" value={mainStats.winRate} color="black" />
            <StatCard label="Winning Trades" value={mainStats.winners} color={"rgb(2, 176, 2)"} />
            <StatCard label="Losing Trades" value={mainStats.losers} color={"rgb(247, 0, 0)"} />
        </Box>
    );
}
