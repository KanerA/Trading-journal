import { Box, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { useLogin } from 'src/hooks/useLogin';
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
    const trades = useSelector(getAllTrades);
    const loginMutation = useLogin()

    const onClick = () => {
        loginMutation("john", "changeme")
    }
    return (
        <Box>
            <Button variant="contained" color="primary" onClick={onClick}>
                CLICK HERE TO LOGIN
            </Button>
            <StatsGrid />
            <Tabs trades={trades} />
        </Box>
    );
}

export default MainPage;
