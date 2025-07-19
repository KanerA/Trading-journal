import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import AddTradeModal from './components/AddTradeModal/AddTradeModal'
import Header from './components/Header/Header'
import { TradeModalTitles } from './enums/tradeModal'
import { useGetAllTrades } from './hooks/useGetAllTrades'
import MainPage from './pages/MainPage'
import { openModal as openModalState } from './store/reducers/modalSlice'
import { initTrades } from './store/reducers/tradesSlice'

function App() {
  const { data } = useGetAllTrades();
  const dispatch = useDispatch();

  const [modalTitle, setModalTitle] = useState<TradeModalTitles>(TradeModalTitles.CreateTrade)
  const openModal = (title: TradeModalTitles) => {
    dispatch(openModalState())
    setModalTitle(title)
  }

  useEffect(() => {
    if (data) {
      dispatch(initTrades(data))
    }
  }, [data]);
  return (
    <Box sx={{ backgroundColor: "#eff4ff", minHeight: "100vh", padding: "1rem" }}>
      <Header openModal={openModal} />
      <MainPage />
      <AddTradeModal modalTitle={modalTitle} />
    </Box>
  )
}

export default App
