import React from 'react';
import { Layout, Row, Col, Typography, Space, Divider } from 'antd';
import { EnvironmentOutlined, PhoneOutlined, MailOutlined, FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const {
  Footer: AntFooter
} = Layout;
const {
  Title,
  Text
} = Typography;
const Footer: React.FC = () => {
  return <AntFooter className="bg-[#433A31] text-white p-8 pt-12">
      <div className="container mx-auto">
        <Row gutter={[24, 36]}>
          <Col xs={24} sm={12} md={6}>
            <Title level={4} className="text-white mb-4">
              TerraFlow
            </Title>
            <Text className="text-gray-300 block mb-4">
              Premium clay products for your construction and artistic needs.
              Quality materials sourced responsibly.
            </Text>
            <Space className="text-gray-300">
              <FacebookOutlined className="text-xl hover:text-white cursor-pointer transition-colors" />
              <TwitterOutlined className="text-xl hover:text-white cursor-pointer transition-colors" />
              <InstagramOutlined className="text-xl hover:text-white cursor-pointer transition-colors" />
              <LinkedinOutlined className="text-xl hover:text-white cursor-pointer transition-colors" />
            </Space>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Title level={4} className="text-white mb-4">
              Quick Links
            </Title>
            <ul className="p-0 m-0 list-none">
              <li className="mb-2">
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Title level={4} className="text-white mb-4">
              Support
            </Title>
            <ul className="p-0 m-0 list-none">
              <li className="mb-2">
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/shipping" className="text-gray-300 hover:text-white transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/returns" className="text-gray-300 hover:text-white transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Title level={4} className="text-white mb-4">
              Contact Us
            </Title>
            <ul className="p-0 m-0 list-none">
              <li className="mb-3 flex items-start">
                <EnvironmentOutlined className="mt-1 mr-2" />
                <Text className="text-gray-300">
                  123 Clay Avenue, Pottery District, CA 90210, USA
                </Text>
              </li>
              <li className="mb-3 flex items-center">
                <PhoneOutlined className="mr-2" />
                <Text className="text-gray-300">+1 (555) 123-4567</Text>
              </li>
              <li className="mb-3 flex items-center">
                <MailOutlined className="mr-2" />
                <Text className="text-gray-300">info@terraflow.com</Text>
              </li>
            </ul>
          </Col>
        </Row>
        <Divider className="bg-gray-600 mt-8 mb-6" />
        <div className="text-center text-gray-400">
          <Text>
            © {new Date().getFullYear()} TerraFlow. All rights reserved.
          </Text>
        </div>
      </div>
    </AntFooter>;
};
export default Footer;