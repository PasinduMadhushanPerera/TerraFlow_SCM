import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Layout, Menu, Button, Drawer, Dropdown, Avatar, Space } from 'antd';
import { HomeOutlined, ShoppingCartOutlined, UserOutlined, DashboardOutlined, LogoutOutlined, MenuOutlined, ShoppingOutlined, FileTextOutlined, TeamOutlined, BarChartOutlined, SettingOutlined } from '@ant-design/icons';
import { useAuth } from '../../context/AuthContext';
const {
  Header
} = Layout;
const Navbar: React.FC = () => {
  const {
    user,
    isAuthenticated,
    logout
  } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  // Navigation items based on user role
  const getNavItems = () => {
    if (!isAuthenticated) {
      return [{
        key: 'home',
        icon: <HomeOutlined />,
        label: 'Home',
        path: '/'
      }, {
        key: 'products',
        icon: <ShoppingOutlined />,
        label: 'Products',
        path: '/products'
      }, {
        key: 'about',
        icon: <FileTextOutlined />,
        label: 'About Us',
        path: '/about'
      }, {
        key: 'contact',
        icon: <TeamOutlined />,
        label: 'Contact',
        path: '/contact'
      }];
    }
    switch (user?.role) {
      case 'admin':
        return [{
          key: 'dashboard',
          icon: <DashboardOutlined />,
          label: 'Dashboard',
          path: '/admin/dashboard'
        }, {
          key: 'users',
          icon: <TeamOutlined />,
          label: 'Users',
          path: '/admin/users'
        }, {
          key: 'inventory',
          icon: <ShoppingOutlined />,
          label: 'Inventory',
          path: '/admin/inventory'
        }, {
          key: 'orders',
          icon: <FileTextOutlined />,
          label: 'Orders',
          path: '/admin/orders'
        }, {
          key: 'forecast',
          icon: <BarChartOutlined />,
          label: 'Forecast',
          path: '/admin/forecast'
        }, {
          key: 'reports',
          icon: <BarChartOutlined />,
          label: 'Reports',
          path: '/admin/reports'
        }];
      case 'supplier':
        return [{
          key: 'dashboard',
          icon: <DashboardOutlined />,
          label: 'Dashboard',
          path: '/supplier/dashboard'
        }, {
          key: 'requests',
          icon: <FileTextOutlined />,
          label: 'Requests',
          path: '/supplier/requests'
        }, {
          key: 'forecasts',
          icon: <BarChartOutlined />,
          label: 'Forecasts',
          path: '/supplier/forecasts'
        }, {
          key: 'history',
          icon: <FileTextOutlined />,
          label: 'History',
          path: '/supplier/history'
        }];
      case 'customer':
        return [{
          key: 'home',
          icon: <HomeOutlined />,
          label: 'Home',
          path: '/'
        }, {
          key: 'products',
          icon: <ShoppingOutlined />,
          label: 'Products',
          path: '/products'
        }, {
          key: 'orders',
          icon: <FileTextOutlined />,
          label: 'My Orders',
          path: '/customer/orders'
        }, {
          key: 'cart',
          icon: <ShoppingCartOutlined />,
          label: 'Cart',
          path: '/customer/cart'
        }];
      default:
        return [];
    }
  };
  const navItems = getNavItems();
  const userMenu = <Menu>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        <Link to={`/${user?.role}/profile`}>Profile</Link>
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />}>
        <Link to={`/${user?.role}/settings`}>Settings</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>;
  return <Header className="bg-white shadow-md px-4 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <div className="text-xl font-bold text-[#8B6E4F] mr-4">TerraFlow</div>
      </Link>
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-1 justify-center">
        <Menu mode="horizontal" selectedKeys={[location.pathname]} className="border-0" items={navItems.map(item => ({
        key: item.path,
        icon: item.icon,
        label: <Link to={item.path}>{item.label}</Link>
      }))} />
      </div>
      {/* Auth Buttons or User Menu */}
      <div className="hidden md:flex items-center">
        {isAuthenticated ? <Dropdown overlay={userMenu} trigger={['click']}>
            <Space className="cursor-pointer">
              <Avatar icon={<UserOutlined />} />
              <span>{user?.name}</span>
            </Space>
          </Dropdown> : <Space>
            <Button type="default" onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button type="primary" onClick={() => navigate('/register')}>
              Register
            </Button>
          </Space>}
      </div>
      {/* Mobile Menu Button */}
      <Button className="md:hidden" icon={<MenuOutlined />} onClick={() => setMobileMenuOpen(true)} />
      {/* Mobile Navigation Drawer */}
      <Drawer title="Menu" placement="right" onClose={() => setMobileMenuOpen(false)} visible={mobileMenuOpen} width={280}>
        <Menu mode="vertical" selectedKeys={[location.pathname]} items={navItems.map(item => ({
        key: item.path,
        icon: item.icon,
        label: <Link to={item.path} onClick={() => setMobileMenuOpen(false)}>
                {item.label}
              </Link>
      }))} />
        <div className="mt-8">
          {isAuthenticated ? <div className="space-y-4">
              <div className="flex items-center space-x-2 p-4 bg-gray-50 rounded-lg">
                <Avatar icon={<UserOutlined />} />
                <span>{user?.name}</span>
              </div>
              <Menu mode="vertical">
                <Menu.Item key="profile" icon={<UserOutlined />}>
                  <Link to={`/${user?.role}/profile`} onClick={() => setMobileMenuOpen(false)}>
                    Profile
                  </Link>
                </Menu.Item>
                <Menu.Item key="settings" icon={<SettingOutlined />}>
                  <Link to={`/${user?.role}/settings`} onClick={() => setMobileMenuOpen(false)}>
                    Settings
                  </Link>
                </Menu.Item>
                <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
                  Logout
                </Menu.Item>
              </Menu>
            </div> : <Space direction="vertical" className="w-full">
              <Button block type="default" onClick={() => {
            navigate('/login');
            setMobileMenuOpen(false);
          }}>
                Login
              </Button>
              <Button block type="primary" onClick={() => {
            navigate('/register');
            setMobileMenuOpen(false);
          }}>
                Register
              </Button>
            </Space>}
        </div>
      </Drawer>
    </Header>;
};
export default Navbar;