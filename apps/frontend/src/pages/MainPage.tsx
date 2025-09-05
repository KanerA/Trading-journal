import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import StatsGrid from '../components/StatsGrid/StatsGrid';
import Tabs from '../components/Tabs/Tabs';
import { getAllTrades } from '../store/selectors/tradeSelector';

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
