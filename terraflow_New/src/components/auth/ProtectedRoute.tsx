import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Spin } from 'antd';
interface ProtectedRouteProps {
  children: React.ReactNode;
  role?: 'admin' | 'supplier' | 'customer';
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  role
}) => {
  const {
    user,
    isAuthenticated,
    loading
  } = useAuth();
  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">
        <Spin size="large" tip="Loading..." />
      </div>;
  }
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  if (role && user?.role !== role) {
    // Redirect to appropriate dashboard based on role
    if (user?.role === 'admin') {
      return <Navigate to="/admin/dashboard" replace />;
    } else if (user?.role === 'supplier') {
      return <Navigate to="/supplier/dashboard" replace />;
    } else {
      return <Navigate to="/customer/dashboard" replace />;
    }
  }
  return <>{children}</>;
};
export default ProtectedRoute;