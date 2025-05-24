import React from 'react';
import { Typography, Row, Col, Card, Table, Badge, Space, Button, Progress, List, Avatar } from 'antd';
import { FileTextOutlined, CheckCircleOutlined, ClockCircleOutlined, BellOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import StatCard from '../../components/dashboard/StatCard';
const {
  Title,
  Text
} = Typography;
const SupplierDashboard: React.FC = () => {
  // Mock data for the dashboard
  const pendingRequests = [{
    id: 'REQ-2345',
    material: 'Red Clay',
    quantity: '500 kg',
    deadline: '2023-05-15',
    status: 'Pending'
  }, {
    id: 'REQ-2346',
    material: 'White Porcelain',
    quantity: '300 kg',
    deadline: '2023-05-18',
    status: 'In Progress'
  }, {
    id: 'REQ-2347',
    material: 'Stoneware Mix',
    quantity: '450 kg',
    deadline: '2023-05-20',
    status: 'Pending'
  }];
  const notifications = [{
    id: 1,
    title: 'New Material Request',
    message: 'You have a new request for Red Clay',
    time: '10 minutes ago'
  }, {
    id: 2,
    title: 'Delivery Confirmation',
    message: 'Order REQ-2340 was confirmed as delivered',
    time: '2 hours ago'
  }, {
    id: 3,
    title: 'Forecast Updated',
    message: 'The demand forecast for next month has been updated',
    time: '1 day ago'
  }, {
    id: 4,
    title: 'Performance Review',
    message: 'Your quarterly performance review is available',
    time: '3 days ago'
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
            Supplier Dashboard
          </Title>
          <Text className="text-gray-500">
            Manage your material requests and deliveries
          </Text>
        </div>
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={12} lg={8}>
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
              <StatCard title="Pending Requests" value={5} prefix={<FileTextOutlined className="mr-2" />} change={2} changeType="increase" />
            </motion.div>
          </Col>
          <Col xs={24} sm={12} lg={8}>
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
              <StatCard title="On-Time Delivery Rate" value={92} suffix="%" change={3.5} changeType="increase" />
            </motion.div>
          </Col>
          <Col xs={24} sm={12} lg={8}>
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
              <StatCard title="Quality Rating" value={4.7} suffix="/5.0" precision={1} change={0.2} changeType="increase" />
            </motion.div>
          </Col>
        </Row>
        <Row gutter={[24, 24]} className="mt-6">
          <Col xs={24} lg={16}>
            <Card title={<div className="flex items-center">
                  <FileTextOutlined className="mr-2" />
                  <span>Material Requests</span>
                </div>} className="h-full" extra={<Button type="primary" size="small">
                  View All
                </Button>}>
              <Table dataSource={pendingRequests} rowKey="id" pagination={false} columns={[{
              title: 'Request ID',
              dataIndex: 'id',
              key: 'id'
            }, {
              title: 'Material',
              dataIndex: 'material',
              key: 'material'
            }, {
              title: 'Quantity',
              dataIndex: 'quantity',
              key: 'quantity'
            }, {
              title: 'Deadline',
              dataIndex: 'deadline',
              key: 'deadline'
            }, {
              title: 'Status',
              dataIndex: 'status',
              key: 'status',
              render: status => {
                const color = status === 'Pending' ? 'gold' : status === 'In Progress' ? 'blue' : 'green';
                return <Badge color={color} text={status} />;
              }
            }, {
              title: 'Action',
              key: 'action',
              render: (_, record) => <Space>
                        <Button type="primary" size="small">
                          Update Status
                        </Button>
                        <Button size="small">Details</Button>
                      </Space>
            }]} />
              <div className="mt-6">
                <Title level={5}>Monthly Performance</Title>
                <div className="mt-4 space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <Text>On-Time Delivery</Text>
                      <Text strong>92%</Text>
                    </div>
                    <Progress percent={92} status="active" strokeColor="#5D7B6F" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <Text>Quality Compliance</Text>
                      <Text strong>98%</Text>
                    </div>
                    <Progress percent={98} status="active" strokeColor="#8B6E4F" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <Text>Response Time</Text>
                      <Text strong>85%</Text>
                    </div>
                    <Progress percent={85} status="active" strokeColor="#D9A566" />
                  </div>
                </div>
              </div>
            </Card>
          </Col>
          <Col xs={24} lg={8}>
            <Card title={<div className="flex items-center">
                  <BellOutlined className="mr-2" />
                  <span>Notifications</span>
                </div>} className="h-full" extra={<Button type="text" size="small">
                  Mark All as Read
                </Button>}>
              <List itemLayout="horizontal" dataSource={notifications} renderItem={item => <List.Item>
                    <List.Item.Meta avatar={item.title.includes('Request') ? <Avatar icon={<FileTextOutlined />} style={{
                backgroundColor: '#D9A566'
              }} /> : item.title.includes('Delivery') ? <Avatar icon={<CheckCircleOutlined />} style={{
                backgroundColor: '#5D7B6F'
              }} /> : <Avatar icon={<ClockCircleOutlined />} style={{
                backgroundColor: '#8B6E4F'
              }} />} title={item.title} description={<>
                          <Text className="block">{item.message}</Text>
                          <Text type="secondary" className="text-xs">
                            {item.time}
                          </Text>
                        </>} />
                  </List.Item>} />
              <div className="mt-6">
                <Title level={5}>Upcoming Deadlines</Title>
                <div className="space-y-4 mt-4">
                  <div className="p-3 bg-orange-50 rounded-lg border border-orange-100">
                    <Text strong>Red Clay (REQ-2345)</Text>
                    <div className="flex justify-between mt-1">
                      <Text className="text-sm text-gray-500">500 kg</Text>
                      <Text className="text-sm text-gray-500">
                        Due: May 15, 2023
                      </Text>
                    </div>
                    <Progress percent={40} size="small" status="active" strokeColor="#D9A566" />
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <Text strong>White Porcelain (REQ-2346)</Text>
                    <div className="flex justify-between mt-1">
                      <Text className="text-sm text-gray-500">300 kg</Text>
                      <Text className="text-sm text-gray-500">
                        Due: May 18, 2023
                      </Text>
                    </div>
                    <Progress percent={65} size="small" status="active" strokeColor="#4D6A6D" />
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg border border-orange-100">
                    <Text strong>Stoneware Mix (REQ-2347)</Text>
                    <div className="flex justify-between mt-1">
                      <Text className="text-sm text-gray-500">450 kg</Text>
                      <Text className="text-sm text-gray-500">
                        Due: May 20, 2023
                      </Text>
                    </div>
                    <Progress percent={25} size="small" status="active" strokeColor="#D9A566" />
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </motion.div>
    </div>;
};
export default SupplierDashboard;