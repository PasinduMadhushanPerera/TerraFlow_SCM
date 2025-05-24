import React from 'react';
import { Card, Typography, Statistic } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
const {
  Text
} = Typography;
interface StatCardProps {
  title: string;
  value: number;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  precision?: number;
  change?: number;
  changeType?: 'increase' | 'decrease';
  loading?: boolean;
}
const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  prefix,
  suffix,
  precision = 0,
  change,
  changeType,
  loading = false
}) => {
  return <Card loading={loading} className="h-full">
      <Statistic title={title} value={value} precision={precision} prefix={prefix} suffix={suffix} />
      {change !== undefined && <div className="mt-2">
          <Text type={changeType === 'increase' ? 'success' : 'danger'} className="flex items-center">
            {changeType === 'increase' ? <ArrowUpOutlined className="mr-1" /> : <ArrowDownOutlined className="mr-1" />}
            {change}%
          </Text>
          <Text type="secondary" className="ml-2">
            Since last month
          </Text>
        </div>}
    </Card>;
};
export default StatCard;