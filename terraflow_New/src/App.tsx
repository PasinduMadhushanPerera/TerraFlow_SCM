import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { AuthProvider } from './context/AuthContext';
import MainLayout from './components/layout/MainLayout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';
import CustomerDashboard from './pages/dashboard/CustomerDashboard';
import SupplierDashboard from './pages/dashboard/SupplierDashboard';
import AdminDashboard from './pages/dashboard/AdminDashboard';
import ProtectedRoute from './components/auth/ProtectedRoute';
// Custom theme with earth-tone colors
const theme = {
  token: {
    colorPrimary: '#8B6E4F',
    colorSuccess: '#5D7B6F',
    colorWarning: '#D9A566',
    colorError: '#B85C38',
    colorInfo: '#4D6A6D',
    borderRadius: 8,
    fontFamily: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
  }
};
export function App() {
  return <ConfigProvider theme={theme}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              {/* Protected routes */}
              <Route path="customer/dashboard" element={<ProtectedRoute role="customer">
                    <CustomerDashboard />
                  </ProtectedRoute>} />
              <Route path="supplier/dashboard" element={<ProtectedRoute role="supplier">
                    <SupplierDashboard />
                  </ProtectedRoute>} />
              <Route path="admin/dashboard" element={<ProtectedRoute role="admin">
                    <AdminDashboard />
                  </ProtectedRoute>} />
              {/* Fallback route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ConfigProvider>;
}