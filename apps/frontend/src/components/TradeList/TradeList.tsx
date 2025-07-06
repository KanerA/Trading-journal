import { Box } from '@mui/material';
import type { Trade } from '@trading-journal/shared';
import EmptyState from '../EmptyState';
import TradeCard from './TradeCard/TradeCard';

interface TradeListProps {
    trades: Trade[]
}

const TradeList = ({ trades }: TradeListProps) => {
    const hasTrades = trades.length > 0;

    return (
        <Box>
            {hasTrades ? (
                trades.map((trade, index) => (
                    <TradeCard key={`TradeCard-${index}`} trade={trade} />
                ))
            ) : (
                <EmptyState />
            )}
        </Box>
    );
};

export default TradeList;
