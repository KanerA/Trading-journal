import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import StatsGrid from '../components/StatsGrid/StatsGrid.tsx';
import Tabs from '../components/Tabs/Tabs.tsx';
import { getAllTrades } from '../store/selectors/tradeSelector.ts';

export interface MainStats {
    totalPnL: number,
    winRate: string,
    winners: number,
    losers: number,
}

const MainPage = () => {


    const trades = useSelector(getAllTrades)



    return (
        <Box>
            <StatsGrid />
            <Tabs trades={trades} />
        </Box>
    );
}

export default MainPage;
