import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../authentication/useAuth';
import AddTradeModal from '../components/AddTradeModal/AddTradeModal';
import Header from '../components/Header/Header';
import StatsGrid from '../components/StatsGrid/StatsGrid';
import Tabs from '../components/Tabs/Tabs';
import { TradeModalTitles } from '../enums/tradeModal';
import { initTrades } from '../store/reducers/tradesSlice';
import { getAllTrades } from '../store/selectors/tradeSelector';

export interface MainStats {
    totalPnL: number,
    winRate: string,
    winners: number,
    losers: number,
}

const MainPage = () => {
    const trades = useSelector(getAllTrades);
    const dispatch = useDispatch();
    const { logout } = useAuth();

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalTitle, setModalTitle] = useState<TradeModalTitles>(TradeModalTitles.CreateTrade)
    const openModal = (title: TradeModalTitles) => {
        setIsModalOpen(true);
        setModalTitle(title)
    }
    const closeModal = () => setIsModalOpen(false)


    useEffect(() => {
        if (trades) {
            dispatch(initTrades(trades))
        }
    }, [trades]);

    return (
        <>
            <Header openModal={openModal} onLogout={logout} />
            <Box>
                <StatsGrid />
                <Tabs trades={trades} />
            </Box>
            <AddTradeModal isModalOpen={isModalOpen} closeModal={closeModal} modalTitle={modalTitle} />
        </>
    );
}

export default MainPage;
