import type { Trade } from '@trading-journal/shared';
import EmptyState from '../EmptyState';
import TradeCard from './TradeCard/TradeCard';
import "./tradeList.scss";

interface TradeListProps {
    trades: Trade[]
}

const TradeList = ({ trades }: TradeListProps) => {
    const hasTrades = trades.length > 0;

    return (
        <div className="tradeListContainer">
            {hasTrades ? (
                trades.map((trade, index) => (
                    <TradeCard key={`Tradecard-${index}`} trade={trade} />
                ))
            ) : (
                <EmptyState />
            )}
        </div>
    );
};

export default TradeList;
