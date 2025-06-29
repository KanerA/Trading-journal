import type { MainStats } from '../../pages/MainPage';
import StatCard from './StatCard/StatCard';
import "./statsGrid.scss";

interface StatsGridProps {
    mainStats: MainStats
}

export default function StatsGrid({ mainStats: { losers, totalPnL, winRate, winners } }: StatsGridProps) {
    return (
        <div className="FlexContainer">
            <StatCard label="Total P&L" value={totalPnL} />
            <StatCard label="Win Rate" value={winRate} />
            <StatCard label="Winning Trades" value={winners} />
            <StatCard label="Losing Trades" value={losers} />
        </div>
    );
}
