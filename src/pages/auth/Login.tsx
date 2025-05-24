import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox, Card, Typography, message, Alert } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { motion } from 'framer-motion';
const {
  Title,
  Text
} = Typography;
const Login: React.FC = () => {
  const {
    login,
    isAuthenticated,
    user
  } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      switch (user?.role) {
        case 'admin':
          navigate('/admin/dashboard');
          break;
        case 'supplier':
          navigate('/supplier/dashboard');
          break;
        case 'customer':
          navigate('/customer/dashboard');
          break;
        default:
          navigate('/');
      }
    }
  }, [isAuthenticated, user, navigate]);
  const onFinish = async (values: {
    email: string;
    password: string;
    remember: boolean;
  }) => {
    try {
      setLoading(true);
      setError(null);
      await login(values.email, values.password, values.remember);
      message.success('Login successful!');
      // Navigation is handled by the useEffect above
    } catch (err: any) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  return <div className="min-h-[calc(100vh-144px)] flex items-center justify-center bg-[#F9F7F4] py-12 px-4">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5
    }} className="w-full max-w-md">
        <Card className="w-full shadow-lg rounded-lg overflow-hidden" bordered={false}>
          <div className="text-center mb-6">
            <Title level={2} className="text-[#8B6E4F]">
              Welcome to TerraFlow
            </Title>
            <Text className="text-gray-500">Sign in to your account</Text>
          </div>
          {error && <Alert message={error} type="error" showIcon className="mb-6" />}
          <Form name="login" initialValues={{
          remember: true
        }} onFinish={onFinish} layout="vertical" size="large">
            <Form.Item name="email" rules={[{
            required: true,
            message: 'Please input your email!'
          }, {
            type: 'email',
            message: 'Please enter a valid email!'
          }]}>
              <Input prefix={<UserOutlined className="text-gray-400" />} placeholder="Email" className="rounded-md" />
            </Form.Item>
            <Form.Item name="password" rules={[{
            required: true,
            message: 'Please input your password!'
          }]}>
              <Input.Password prefix={<LockOutlined className="text-gray-400" />} placeholder="Password" className="rounded-md" />
            </Form.Item>
            <Form.Item>
              <div className="flex justify-between items-center">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Link to="/forgot-password" className="text-[#8B6E4F] hover:text-[#6E563D]">
                  Forgot password?
                </Link>
              </div>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full rounded-md" loading={loading}>
                Sign In
              </Button>
            </Form.Item>
            <div className="text-center">
              <Text className="text-gray-500">
                Don't have an account?{' '}
                <Link to="/register" className="text-[#8B6E4F] hover:text-[#6E563D]">
                  Register now
                </Link>
              </Text>
            </div>
          </Form>
          <div className="mt-4 bg-gray-50 p-4 rounded-md">
            <Text className="block text-gray-500 mb-2 text-sm">
              Demo Accounts:
            </Text>
            <Text className="block text-xs text-gray-500">
              Admin: admin@terraflow.com / admin123
            </Text>
            <Text className="block text-xs text-gray-500">
              Supplier: supplier@terraflow.com / any password
            </Text>
            <Text className="block text-xs text-gray-500">
              Customer: customer@terraflow.com / any password
            </Text>
          </div>
        </Card>
      </motion.div>
    </div>;
};
export default Login;