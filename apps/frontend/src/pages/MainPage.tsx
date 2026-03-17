import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { Trade } from '@trading-journal/types';
import { useAuth } from '../authentication/useAuth';
import TradeModal from '../components/AddTradeModal/AddTradeModal';
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
    const [modalTitle, setModalTitle] = useState<TradeModalTitles>(TradeModalTitles.CreateTrade);
    const [tradeToEdit, setTradeToEdit] = useState<Trade | undefined>(undefined);

    const openModal = (title: TradeModalTitles, trade?: Trade) => {
        setIsModalOpen(true);
        setModalTitle(title);
        setTradeToEdit(trade);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTradeToEdit(undefined);
    };

    const openEditModal = (trade: Trade) => openModal(TradeModalTitles.EditTrade, trade);

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
                <Tabs trades={trades} onEditTrade={openEditModal} />
            </Box>
            <TradeModal isModalOpen={isModalOpen} closeModal={closeModal} modalTitle={modalTitle} tradeToEdit={tradeToEdit} />
        </>
    );
}

export default MainPage;
