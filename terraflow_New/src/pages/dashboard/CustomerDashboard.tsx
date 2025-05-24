import React from 'react';
import { Typography, Row, Col, Card, List, Avatar, Button, Tag, Steps, Divider } from 'antd';
import { ShoppingOutlined, ClockCircleOutlined, CheckCircleOutlined, StarOutlined, RightOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
const {
  Title,
  Text
} = Typography;
const {
  Step
} = Steps;
const CustomerDashboard: React.FC = () => {
  // Mock data for the dashboard
  const recentOrders = [{
    id: 'ORD-5678',
    date: 'May 5, 2023',
    items: [{
      name: 'Terracotta Planter',
      quantity: 2,
      price: 45.99
    }, {
      name: 'Clay Tiles (10 pack)',
      quantity: 1,
      price: 89.99
    }],
    total: 181.97,
    status: 'Processing'
  }, {
    id: 'ORD-5675',
    date: 'Apr 28, 2023',
    items: [{
      name: 'Ceramic Bowl Set',
      quantity: 1,
      price: 129.99
    }],
    total: 129.99,
    status: 'Shipped'
  }, {
    id: 'ORD-5670',
    date: 'Apr 15, 2023',
    items: [{
      name: 'Clay Sculpting Tools',
      quantity: 1,
      price: 59.5
    }, {
      name: 'Pottery Clay (5kg)',
      quantity: 2,
      price: 35.99
    }],
    total: 131.48,
    status: 'Delivered'
  }];
  const recommendedProducts = [{
    id: 1,
    name: 'Ceramic Vase',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1612196808214-b7e239b5bcde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  }, {
    id: 2,
    name: 'Clay Pot Set',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1605883705077-8d3d3cebe78c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  }, {
    id: 3,
    name: 'Decorative Tiles',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  }];
  return <div className="min-h-[calc(100vh-144px)] bg-[#F9F7F4] p-6">
      <motion.div initial={{
      opacity: 0,
      y: 10
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5
    }}>
        <div className="mb-6">
          <Title level={2} className="text-[#433A31] mb-1">
            Customer Dashboard
          </Title>
          <Text className="text-gray-500">
            Welcome back! Here's an overview of your recent activity
          </Text>
        </div>
        <Row gutter={[24, 24]}>
          <Col xs={24} lg={16}>
            <Card title={<div className="flex items-center">
                  <ShoppingOutlined className="mr-2" />
                  <span>Recent Orders</span>
                </div>} extra={<Button type="link">View All Orders</Button>} className="h-full">
              <List itemLayout="vertical" dataSource={recentOrders} renderItem={order => <List.Item key={order.id} extra={<div className="text-right">
                        <Text strong className="block">
                          ${order.total.toFixed(2)}
                        </Text>
                        <Tag color={order.status === 'Processing' ? 'blue' : order.status === 'Shipped' ? 'orange' : 'green'}>
                          {order.status}
                        </Tag>
                      </div>}>
                    <List.Item.Meta title={<div className="flex justify-between">
                          <span>Order #{order.id}</span>
                          <Text type="secondary">{order.date}</Text>
                        </div>} description={<div className="mt-2">
                          {order.items.map((item, index) => <div key={index} className="flex justify-between mb-1">
                              <Text>
                                {item.quantity}x {item.name}
                              </Text>
                              <Text>
                                ${(item.price * item.quantity).toFixed(2)}
                              </Text>
                            </div>)}
                        </div>} />
                    <div className="mt-3 flex justify-between">
                      <Button size="small">View Details</Button>
                      {order.status === 'Delivered' && <Button type="primary" size="small" icon={<StarOutlined />}>
                          Leave Review
                        </Button>}
                    </div>
                  </List.Item>} />
            </Card>
          </Col>
          <Col xs={24} lg={8}>
            <Card title="Order Tracking" className="mb-6">
              <div className="mb-4">
                <Text strong>Order #ORD-5675</Text>
                <Text className="block text-sm text-gray-500">
                  Placed on Apr 28, 2023
                </Text>
              </div>
              <Steps direction="vertical" current={2} size="small">
                <Step title="Order Placed" description="Apr 28, 2023" icon={<CheckCircleOutlined />} />
                <Step title="Processing" description="Apr 29, 2023" icon={<CheckCircleOutlined />} />
                <Step title="Shipped" description="May 1, 2023" icon={<ClockCircleOutlined />} />
                <Step title="Out for Delivery" description="Expected: May 8, 2023" />
                <Step title="Delivered" />
              </Steps>
              <Button type="link" className="mt-2 p-0">
                View Tracking Details
              </Button>
            </Card>
            <Card title="Recommended For You">
              <List itemLayout="horizontal" dataSource={recommendedProducts} renderItem={item => <List.Item>
                    <List.Item.Meta avatar={<Avatar shape="square" size={64} src={item.image} />} title={item.name} description={<Text strong>${item.price.toFixed(2)}</Text>} />
                    <Button type="primary" shape="circle" icon={<ShoppingCartOutlined />} />
                  </List.Item>} />
              <Divider />
              <Button type="link" className="w-full flex justify-between items-center">
                <span>Browse More Products</span>
                <RightOutlined />
              </Button>
            </Card>
          </Col>
        </Row>
      </motion.div>
    </div>;
};
export default CustomerDashboard;