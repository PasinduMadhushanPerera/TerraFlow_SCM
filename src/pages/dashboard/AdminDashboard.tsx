import React from 'react';
import { Typography, Row, Col, Card, Table, Badge, Space, Button, Tabs } from 'antd';
import { ShoppingOutlined, UserOutlined, DollarOutlined, AlertOutlined, BarChartOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import StatCard from '../../components/dashboard/StatCard';
const {
  Title,
  Text
} = Typography;
const {
  TabPane
} = Tabs;
const AdminDashboard: React.FC = () => {
  // Mock data for the dashboard
  const lowStockItems = [{
    id: 1,
    name: 'Red Clay',
    currentStock: 120,
    threshold: 200,
    supplier: 'ClayWorks Inc.'
  }, {
    id: 2,
    name: 'White Porcelain',
    currentStock: 85,
    threshold: 150,
    supplier: 'Pure Materials Co.'
  }, {
    id: 3,
    name: 'Stoneware Mix',
    currentStock: 210,
    threshold: 300,
    supplier: 'EarthGoods Ltd.'
  }];
  const recentOrders = [{
    id: 'ORD-1234',
    customer: 'John Smith',
    items: 3,
    total: 529.99,
    status: 'Processing'
  }, {
    id: 'ORD-1235',
    customer: 'Sarah Johnson',
    items: 1,
    total: 129.99,
    status: 'Shipped'
  }, {
    id: 'ORD-1236',
    customer: 'Michael Brown',
    items: 5,
    total: 899.5,
    status: 'Delivered'
  }, {
    id: 'ORD-1237',
    customer: 'Emma Wilson',
    items: 2,
    total: 259.99,
    status: 'Processing'
  }];
  const supplierPerformance = [{
    id: 1,
    name: 'ClayWorks Inc.',
    onTimeDelivery: 95,
    qualityRating: 4.8,
    responseTime: '2 hours'
  }, {
    id: 2,
    name: 'Pure Materials Co.',
    onTimeDelivery: 88,
    qualityRating: 4.5,
    responseTime: '5 hours'
  }, {
    id: 3,
    name: 'EarthGoods Ltd.',
    onTimeDelivery: 92,
    qualityRating: 4.7,
    responseTime: '3 hours'
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
            Admin Dashboard
          </Title>
          <Text className="text-gray-500">
            Overview of your supply chain operations
          </Text>
        </div>
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={12} lg={6}>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }}>
              <StatCard title="Total Orders" value={458} prefix={<ShoppingOutlined className="mr-2" />} change={12.5} changeType="increase" />
            </motion.div>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }}>
              <StatCard title="Active Users" value={1243} prefix={<UserOutlined className="mr-2" />} change={8.2} changeType="increase" />
            </motion.div>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }}>
              <StatCard title="Revenue" value={52689} prefix={<DollarOutlined className="mr-2" />} precision={2} change={5.3} changeType="increase" />
            </motion.div>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.4
          }}>
              <StatCard title="Low Stock Items" value={5} prefix={<AlertOutlined className="mr-2" />} change={2.1} changeType="decrease" />
            </motion.div>
          </Col>
        </Row>
        <Row gutter={[24, 24]} className="mt-6">
          <Col xs={24} lg={16}>
            <Card title={<div className="flex items-center">
                  <BarChartOutlined className="mr-2" />
                  <span>System Overview</span>
                </div>} className="h-full">
              <Tabs defaultActiveKey="1">
                <TabPane tab="Recent Orders" key="1">
                  <Table dataSource={recentOrders} rowKey="id" pagination={false} columns={[{
                  title: 'Order ID',
                  dataIndex: 'id',
                  key: 'id'
                }, {
                  title: 'Customer',
                  dataIndex: 'customer',
                  key: 'customer'
                }, {
                  title: 'Items',
                  dataIndex: 'items',
                  key: 'items'
                }, {
                  title: 'Total',
                  dataIndex: 'total',
                  key: 'total',
                  render: total => `$${total.toFixed(2)}`
                }, {
                  title: 'Status',
                  dataIndex: 'status',
                  key: 'status',
                  render: status => {
                    let color = 'blue';
                    if (status === 'Shipped') color = 'orange';
                    if (status === 'Delivered') color = 'green';
                    return <Badge color={color} text={status} />;
                  }
                }, {
                  title: 'Action',
                  key: 'action',
                  render: () => <Space>
                            <Button type="link" size="small">
                              View
                            </Button>
                          </Space>
                }]} />
                </TabPane>
                <TabPane tab="Low Stock" key="2">
                  <Table dataSource={lowStockItems} rowKey="id" pagination={false} columns={[{
                  title: 'Item',
                  dataIndex: 'name',
                  key: 'name'
                }, {
                  title: 'Current Stock',
                  dataIndex: 'currentStock',
                  key: 'currentStock'
                }, {
                  title: 'Threshold',
                  dataIndex: 'threshold',
                  key: 'threshold'
                }, {
                  title: 'Supplier',
                  dataIndex: 'supplier',
                  key: 'supplier'
                }, {
                  title: 'Status',
                  key: 'status',
                  render: (_, record) => <Badge color="red" text={`${Math.round(record.currentStock / record.threshold * 100)}% of threshold`} />
                }, {
                  title: 'Action',
                  key: 'action',
                  render: () => <Space>
                            <Button type="primary" size="small">
                              Order
                            </Button>
                          </Space>
                }]} />
                </TabPane>
                <TabPane tab="Supplier Performance" key="3">
                  <Table dataSource={supplierPerformance} rowKey="id" pagination={false} columns={[{
                  title: 'Supplier',
                  dataIndex: 'name',
                  key: 'name'
                }, {
                  title: 'On-Time Delivery',
                  dataIndex: 'onTimeDelivery',
                  key: 'onTimeDelivery',
                  render: value => `${value}%`
                }, {
                  title: 'Quality Rating',
                  dataIndex: 'qualityRating',
                  key: 'qualityRating',
                  render: value => `${value}/5.0`
                }, {
                  title: 'Response Time',
                  dataIndex: 'responseTime',
                  key: 'responseTime'
                }, {
                  title: 'Action',
                  key: 'action',
                  render: () => <Space>
                            <Button type="link" size="small">
                              Details
                            </Button>
                          </Space>
                }]} />
                </TabPane>
              </Tabs>
            </Card>
          </Col>
          <Col xs={24} lg={8}>
            <Card title="Quick Actions" className="h-full">
              <div className="space-y-4">
                <Button type="primary" block>
                  Create New Order
                </Button>
                <Button block>Add New Product</Button>
                <Button block>Manage Inventory</Button>
                <Button block>View Reports</Button>
                <Button block>Supplier Management</Button>
                <Button block>User Management</Button>
              </div>
              <div className="mt-8">
                <Title level={5}>System Notifications</Title>
                <div className="space-y-2 mt-4">
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <Text strong>System Update</Text>
                    <Text className="block text-sm text-gray-500">
                      New features available in inventory module
                    </Text>
                  </div>
                  <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                    <Text strong>Urgent: Low Stock Alert</Text>
                    <Text className="block text-sm text-gray-500">
                      5 items below threshold level
                    </Text>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                    <Text strong>Order Fulfilled</Text>
                    <Text className="block text-sm text-gray-500">
                      Order #ORD-1230 has been delivered
                    </Text>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </motion.div>
    </div>;
};
export default AdminDashboard;