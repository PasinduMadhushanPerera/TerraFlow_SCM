import React, { Children } from 'react';
import { Typography, Button, Row, Col, Card, Carousel, Space, Divider } from 'antd';
import { ShoppingCartOutlined, RightOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const {
  Title,
  Text,
  Paragraph
} = Typography;
const Home: React.FC = () => {
  // Animation variants
  const fadeIn = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.6
    }
  };
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  // Mock data
  const categories = [{
    title: 'Pottery Clay',
    description: 'Premium clay for all your pottery needs',
    image: 'https://images.unsplash.com/photo-1565193298442-2373bcb33c38?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  }, {
    title: 'Ceramic Tiles',
    description: 'Durable and beautiful ceramic tiles',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  }, {
    title: 'Clay Sculptures',
    description: 'Materials for artistic expression',
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  }, {
    title: 'Building Materials',
    description: 'Clay-based construction supplies',
    image: 'https://images.unsplash.com/photo-1541976590-713941681591?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  }];
  const testimonials = [{
    name: 'Sarah Johnson',
    role: 'Pottery Studio Owner',
    content: 'TerraFlow has transformed our supply chain. Their clay products are consistently high quality, and the management system makes ordering and tracking a breeze.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  }, {
    name: 'Michael Chen',
    role: 'Construction Manager',
    content: "As a contractor handling multiple projects, TerraFlow's platform has simplified our material procurement process. Their forecasting feature helps us plan ahead effectively.",
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  }, {
    name: 'Emily Rodriguez',
    role: 'Interior Designer',
    content: "The quality and consistency of TerraFlow's ceramic tiles are unmatched. Their supply chain system ensures I always have the materials I need for client projects.",
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
  }];
  const values = [{
    title: 'Sustainability',
    description: 'Responsibly sourced materials with minimal environmental impact',
    icon: '🌱'
  }, {
    title: 'Quality',
    description: 'Premium clay products meeting the highest industry standards',
    icon: '✨'
  }, {
    title: 'Innovation',
    description: 'Continuously improving our products and supply chain processes',
    icon: '💡'
  }];
  return <div className="min-h-screen w-full bg-[#F9F7F4]">
      {/* Hero Section */}
      <section className="relative bg-[#433A31] text-white">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <motion.div className="md:w-1/2 mb-8 md:mb-0 md:pr-8" initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }}>
            <Title level={1} className="text-white text-4xl md:text-5xl font-bold mb-4">
              Streamlined Clay Supply Chain Management
            </Title>
            <Paragraph className="text-gray-300 text-lg mb-6">
              TerraFlow connects suppliers, manufacturers, and customers in a
              seamless ecosystem for premium clay products.
            </Paragraph>
            <Space size="middle">
              <Button type="primary" size="large" icon={<ShoppingCartOutlined />} className="bg-[#D9A566] border-[#D9A566] hover:bg-[#C89355] hover:border-[#C89355]">
                Shop Products
              </Button>
              <Button size="large" className="border-white text-white hover:bg-white hover:text-[#433A31]">
                Learn More
              </Button>
            </Space>
          </motion.div>
          <motion.div className="md:w-1/2" initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8
        }}>
            <img src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" alt="Clay pottery production" className="rounded-lg shadow-xl max-w-full h-auto" />
          </motion.div>
        </div>
      </section>
      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-12" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <Title level={2} className="text-[#433A31] text-3xl md:text-4xl">
              Our Product Categories
            </Title>
            <Text className="text-gray-500 text-lg">
              Explore our range of premium clay products
            </Text>
          </motion.div>
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{
          once: true
        }}>
            <Row gutter={[24, 24]}>
              {categories.map((category, index) => <Col xs={24} sm={12} lg={6} key={index}>
                  <motion.div variants={fadeIn} className="h-full">
                    <Card hoverable cover={<div className="h-48 overflow-hidden">
                          <img alt={category.title} src={category.image} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                        </div>} className="h-full">
                      <Card.Meta title={category.title} description={category.description} />
                      <Button type="link" className="mt-4 p-0 flex items-center text-[#8B6E4F]">
                        Explore <RightOutlined className="ml-1" />
                      </Button>
                    </Card>
                  </motion.div>
                </Col>)}
            </Row>
          </motion.div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-16 bg-[#F9F7F4]">
        <div className="container mx-auto px-4">
          <Row gutter={[48, 32]} align="middle">
            <Col xs={24} md={12}>
              <motion.div initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }} viewport={{
              once: true
            }}>
                <Title level={2} className="text-[#433A31] text-3xl md:text-4xl mb-4">
                  Our Story & Values
                </Title>
                <Paragraph className="text-gray-700 text-lg mb-4">
                  TerraFlow began with a simple mission: to create a seamless
                  connection between clay suppliers, manufacturers, and end
                  customers. Today, we're revolutionizing the clay product
                  industry with our innovative supply chain management system.
                </Paragraph>
                <Paragraph className="text-gray-700 text-lg mb-6">
                  Our platform enables efficient resource allocation, reduces
                  waste, and ensures the highest quality products reach our
                  customers. By integrating traditional craftsmanship with
                  modern technology, we're creating a sustainable future for
                  clay-based industries.
                </Paragraph>
                <Space direction="vertical" size="large" className="w-full">
                  {values.map((value, index) => <motion.div key={index} initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: index * 0.2
                }} viewport={{
                  once: true
                }} className="flex items-start">
                      <div className="text-3xl mr-4">{value.icon}</div>
                      <div>
                        <Text strong className="text-lg block">
                          {value.title}
                        </Text>
                        <Text className="text-gray-600">
                          {value.description}
                        </Text>
                      </div>
                    </motion.div>)}
                </Space>
              </motion.div>
            </Col>
            <Col xs={24} md={12}>
              <motion.div initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.8
            }} viewport={{
              once: true
            }} className="relative">
                <img src="https://images.unsplash.com/photo-1551907234-fb9b0d5c37e3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" alt="Clay workshop" className="rounded-lg shadow-xl w-full" />
                <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-lg shadow-lg hidden md:block">
                  <Title level={4} className="text-[#8B6E4F] mb-2">
                    25+ Years
                  </Title>
                  <Text>Of industry experience</Text>
                </div>
              </motion.div>
            </Col>
          </Row>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-12" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }}>
            <Title level={2} className="text-[#433A31] text-3xl md:text-4xl">
              Why Choose TerraFlow
            </Title>
            <Text className="text-gray-500 text-lg">
              Our comprehensive supply chain management system offers unique
              advantages
            </Text>
          </motion.div>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.1
            }} viewport={{
              once: true
            }} className="bg-[#F9F7F4] p-6 rounded-lg h-full">
                <div className="text-4xl text-[#8B6E4F] mb-4">📊</div>
                <Title level={4} className="text-[#433A31]">
                  Real-time Tracking
                </Title>
                <Paragraph className="text-gray-600">
                  Monitor your orders and shipments at every stage of the supply
                  chain with our advanced tracking system.
                </Paragraph>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <CheckCircleOutlined className="text-[#5D7B6F] mr-2" />
                    <Text>End-to-end visibility</Text>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleOutlined className="text-[#5D7B6F] mr-2" />
                    <Text>Instant status updates</Text>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleOutlined className="text-[#5D7B6F] mr-2" />
                    <Text>Delivery predictions</Text>
                  </li>
                </ul>
              </motion.div>
            </Col>
            <Col xs={24} md={8}>
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} viewport={{
              once: true
            }} className="bg-[#F9F7F4] p-6 rounded-lg h-full">
                <div className="text-4xl text-[#8B6E4F] mb-4">🔮</div>
                <Title level={4} className="text-[#433A31]">
                  Demand Forecasting
                </Title>
                <Paragraph className="text-gray-600">
                  Our AI-powered forecasting helps you anticipate market demands
                  and optimize your inventory levels.
                </Paragraph>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <CheckCircleOutlined className="text-[#5D7B6F] mr-2" />
                    <Text>Reduce overstock</Text>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleOutlined className="text-[#5D7B6F] mr-2" />
                    <Text>Prevent stockouts</Text>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleOutlined className="text-[#5D7B6F] mr-2" />
                    <Text>Seasonal trend analysis</Text>
                  </li>
                </ul>
              </motion.div>
            </Col>
            <Col xs={24} md={8}>
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.3
            }} viewport={{
              once: true
            }} className="bg-[#F9F7F4] p-6 rounded-lg h-full">
                <div className="text-4xl text-[#8B6E4F] mb-4">🔄</div>
                <Title level={4} className="text-[#433A31]">
                  Seamless Integration
                </Title>
                <Paragraph className="text-gray-600">
                  Connect suppliers, manufacturers, and customers in one unified
                  platform for maximum efficiency.
                </Paragraph>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <CheckCircleOutlined className="text-[#5D7B6F] mr-2" />
                    <Text>Role-based access</Text>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleOutlined className="text-[#5D7B6F] mr-2" />
                    <Text>Streamlined communication</Text>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleOutlined className="text-[#5D7B6F] mr-2" />
                    <Text>Automated workflows</Text>
                  </li>
                </ul>
              </motion.div>
            </Col>
          </Row>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-16 bg-[#433A31] text-white">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-12" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }}>
            <Title level={2} className="text-white text-3xl md:text-4xl">
              What Our Clients Say
            </Title>
            <Text className="text-gray-300 text-lg">
              Trusted by professionals across the industry
            </Text>
          </motion.div>
          <Carousel autoplay className="pb-12">
            {testimonials.map((testimonial, index) => <div key={index}>
                <div className="bg-[#524A41] p-8 rounded-lg max-w-3xl mx-auto">
                  <div className="flex items-center mb-4">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4 object-cover" />
                    <div>
                      <Text strong className="text-white text-lg block">
                        {testimonial.name}
                      </Text>
                      <Text className="text-gray-300">{testimonial.role}</Text>
                    </div>
                  </div>
                  <Paragraph className="text-gray-200 text-lg italic">
                    "{testimonial.content}"
                  </Paragraph>
                </div>
              </div>)}
          </Carousel>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="bg-[#F9F7F4] p-8 md:p-12 rounded-xl text-center max-w-4xl mx-auto">
            <Title level={2} className="text-[#433A31] text-3xl md:text-4xl mb-4">
              Ready to Transform Your Supply Chain?
            </Title>
            <Paragraph className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
              Join TerraFlow today and experience the benefits of our integrated
              supply chain management system. Whether you're a supplier,
              manufacturer, or customer, we have solutions designed for you.
            </Paragraph>
            <Space size="large">
              <Link to="/register">
                <Button type="primary" size="large" className="bg-[#8B6E4F] border-[#8B6E4F] hover:bg-[#6E563D] hover:border-[#6E563D]">
                  Create Account
                </Button>
              </Link>
              <Button size="large">Contact Sales</Button>
            </Space>
          </motion.div>
        </div>
      </section>
    </div>;
};
export default Home;