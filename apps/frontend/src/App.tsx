import { Box } from '@mui/material'
import { useState } from 'react'
import './App.css'
import AddTradeModal from './components/AddTradeModal/AddTradeModal'
import Header from './components/Header/Header'
import MainPage from './pages/MainPage'

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  return (
    <Box sx={{ backgroundColor: "#eff4ff", minHeight: "100vh", padding: "1rem" }}>
      <Header openModal={openModal} />
      <MainPage />
      <AddTradeModal closeModal={closeModal} isModalOpen={isModalOpen} />
    </Box>
  )
}

export default App
