import { Box } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import AddTradeModal from './components/AddTradeModal/AddTradeModal'
import Header from './components/Header/Header'
import { useGetAllTrades } from './hooks/useGetAllTrades'
import MainPage from './pages/MainPage'
import { initTrades } from './store/reducers/tradesSlice'

function App() {
  const { data } = useGetAllTrades();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(initTrades(data))
    }
  }, [data]);
  return (
    <Box sx={{ backgroundColor: "#eff4ff", minHeight: "100vh", padding: "1rem" }}>
      <Header />
      <MainPage />
      <AddTradeModal />
    </Box>
  )
}

export default App
