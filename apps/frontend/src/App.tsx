import { Box } from '@mui/material'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router'
import './App.css'
import { AuthProvider, useAuth } from './authentication/useAuth'
import ProtectedRoute from './components/ProtectedRoute'
import { useGetAllTrades } from './hooks/useGetAllTrades'
import Login from './pages/LoginPage'
import MainPage from './pages/MainPage'

const PublicRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading) return null;
  if (isAuthenticated) return <Navigate to="/" replace />;
  return <Outlet />;
};

function App() {
  useGetAllTrades()
  return (
    <Box sx={{ backgroundColor: "#eff4ff", minHeight: "100vh", padding: "1rem" }}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route element={<PublicRoute />}>
              <Route path="/login" element={<Login />} />
            </Route>

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<MainPage />} />
            </Route>

            {/* Fallback Route */}
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Box>
  )
}

export default App;
