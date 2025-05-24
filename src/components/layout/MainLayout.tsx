import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Layout, BackTop } from 'antd';
import Navbar from './Navbar';
import Footer from './Footer';
const {
  Content
} = Layout;
const MainLayout: React.FC = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
  return <Layout className="min-h-screen">
      <Navbar />
      <Content className="bg-[#F9F7F4]">
        {isAuthPage ? <div className="min-h-[calc(100vh-64px-80px)]">
            <Outlet />
          </div> : <div className="min-h-[calc(100vh-64px-80px)]">
            <Outlet />
          </div>}
      </Content>
      <Footer />
      <BackTop />
    </Layout>;
};
export default MainLayout;