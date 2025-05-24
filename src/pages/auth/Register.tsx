import React, { useState } from 'react';
import { Form, Input, Button, Card, Typography, Select, Upload, message, Alert, Divider } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined, HomeOutlined, UploadOutlined, ShopOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { motion } from 'framer-motion';
import TermsModal from '../../components/auth/TermsModal';
const {
  Title,
  Text
} = Typography;
const {
  Option
} = Select;
const Register: React.FC = () => {
  const {
    register
  } = useAuth();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [role, setRole] = useState<'customer' | 'supplier'>('customer');
  const [termsModalVisible, setTermsModalVisible] = useState(false);
  const [formValues, setFormValues] = useState<any>(null);
  const navigate = useNavigate();
  const showTermsModal = (values: any) => {
    setFormValues(values);
    setTermsModalVisible(true);
  };
  const handleTermsAccept = async () => {
    setTermsModalVisible(false);
    if (!formValues) return;
    try {
      setLoading(true);
      setError(null);
      await register(formValues, role);
      message.success('Registration successful!');
      // Redirect based on role
      if (role === 'supplier') {
        navigate('/supplier/dashboard');
      } else {
        navigate('/customer/dashboard');
      }
    } catch (err: any) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  const onFinish = (values: any) => {
    showTermsModal(values);
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
    }} className="w-full max-w-2xl">
        <Card className="w-full shadow-lg rounded-lg overflow-hidden" bordered={false}>
          <div className="text-center mb-6">
            <Title level={2} className="text-[#8B6E4F]">
              Create an Account
            </Title>
            <Text className="text-gray-500">
              Join TerraFlow and start managing your clay products
            </Text>
          </div>
          {error && <Alert message={error} type="error" showIcon className="mb-6" />}
          <Form form={form} name="register" onFinish={onFinish} layout="vertical" size="large" scrollToFirstError>
            <Form.Item name="role" label="I am a" initialValue="customer" rules={[{
            required: true,
            message: 'Please select your role!'
          }]}>
              <Select onChange={value => setRole(value as 'customer' | 'supplier')}>
                <Option value="customer">Customer</Option>
                <Option value="supplier">Supplier</Option>
              </Select>
            </Form.Item>
            <Divider />
            <Form.Item name="fullName" label="Full Name" rules={[{
            required: true,
            message: 'Please input your full name!'
          }]}>
              <Input prefix={<UserOutlined className="text-gray-400" />} placeholder="Full Name" />
            </Form.Item>
            <Form.Item name="email" label="Email" rules={[{
            required: true,
            message: 'Please input your email!'
          }, {
            type: 'email',
            message: 'Please enter a valid email!'
          }]}>
              <Input prefix={<MailOutlined className="text-gray-400" />} placeholder="Email" />
            </Form.Item>
            <Form.Item name="password" label="Password" rules={[{
            required: true,
            message: 'Please input your password!'
          }, {
            min: 8,
            message: 'Password must be at least 8 characters!'
          }]} hasFeedback>
              <Input.Password prefix={<LockOutlined className="text-gray-400" />} placeholder="Password" />
            </Form.Item>
            <Form.Item name="confirmPassword" label="Confirm Password" dependencies={['password']} rules={[{
            required: true,
            message: 'Please confirm your password!'
          }, ({
            getFieldValue
          }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords do not match!'));
            }
          })]} hasFeedback>
              <Input.Password prefix={<LockOutlined className="text-gray-400" />} placeholder="Confirm Password" />
            </Form.Item>
            <Form.Item name="phone" label="Mobile Number" rules={[{
            required: true,
            message: 'Please input your mobile number!'
          }]}>
              <Input prefix={<PhoneOutlined className="text-gray-400" />} placeholder="Mobile Number" />
            </Form.Item>
            <Form.Item name="address" label={role === 'supplier' ? 'Business Address' : 'Address'} rules={[{
            required: true,
            message: 'Please input your address!'
          }]}>
              <Input.TextArea prefix={<HomeOutlined className="text-gray-400" />} placeholder="Address" rows={3} />
            </Form.Item>
            {role === 'supplier' && <>
                <Form.Item name="businessName" label="Business Name" rules={[{
              required: true,
              message: 'Please input your business name!'
            }]}>
                  <Input prefix={<ShopOutlined className="text-gray-400" />} placeholder="Business Name" />
                </Form.Item>
                <Form.Item name="businessDocument" label="Business Registration Document" rules={[{
              required: true,
              message: 'Please upload your business registration document!'
            }]}>
                  <Upload beforeUpload={() => false} maxCount={1}>
                    <Button icon={<UploadOutlined />}>Upload Document</Button>
                  </Upload>
                </Form.Item>
              </>}
            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full rounded-md" loading={loading}>
                Register
              </Button>
            </Form.Item>
            <div className="text-center">
              <Text className="text-gray-500">
                Already have an account?{' '}
                <Link to="/login" className="text-[#8B6E4F] hover:text-[#6E563D]">
                  Login
                </Link>
              </Text>
            </div>
          </Form>
        </Card>
      </motion.div>
      <TermsModal visible={termsModalVisible} onAccept={handleTermsAccept} onCancel={() => setTermsModalVisible(false)} />
    </div>;
};
export default Register;