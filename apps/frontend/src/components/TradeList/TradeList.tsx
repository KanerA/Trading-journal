import { Box } from '@mui/material';
import type { Trade } from '@trading-journal/types';
import NoTrades from '../NoTrades';
import TradeCard from './TradeCard/TradeCard';

interface TradeListProps {
    trades: Trade[]
    onEditTrade: (trade: Trade) => void
}

const TradeList = ({ trades, onEditTrade }: TradeListProps) => {
    const hasTrades = trades.length > 0;

    return (
        <Box>
            {hasTrades ? (
                trades.map((trade, index) => (
                    <TradeCard key={`TradeCard-${index}`} trade={trade} onEditTrade={onEditTrade} />
                ))
            ) : (
                <NoTrades />
            )}
        </Box>
    );
};

export default TradeList;
