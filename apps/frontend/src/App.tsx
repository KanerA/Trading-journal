import { Box } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Body from './Body'
import Login from './pages/LoginPage'
import MainPage from './pages/MainPage'

function App() {

  return (
    <Box sx={{ backgroundColor: "#eff4ff", minHeight: "100vh", padding: "1rem" }}>

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Body Component={MainPage} />} />
          <Route path='*' element={<div>
            404 NOT FOUND
          </div>} />
        </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App;
