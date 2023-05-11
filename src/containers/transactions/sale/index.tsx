import type { FC } from 'react';

import './index.less';

import { CheckCircleOutlined, EditOutlined, InfoCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space, Typography } from 'antd';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

import MyButton from '@/components/basic/button';
import MyModal from '@/components/basic/modal';
import MyTable from '@/components/core/table';
import { ROUTES } from '@/constants/routes';

const { Column } = MyTable;
const { Title } = Typography;

interface ColumnType {
  key: string;
  transId: string;
  customerName: string;
  totalAmount: number;
  promotion: number;
  debt: number;
  updatedAt: string;
  status: string;
}

const data: ColumnType[] = [
  {
    key: '1',
    transId: '4013197767003',
    totalAmount: 0,
    promotion: 0,
    debt: 0,
    customerName: 'KIKA LUXURY 1',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Đã thanh toán',
  },
  {
    key: '2',
    transId: '4013197767005',
    totalAmount: 0,
    promotion: 0,
    debt: 0,
    customerName: 'KIKA LUXURY 2',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Đã thanh toán',
  },
  {
    key: '3',
    transId: '4013197767005',
    totalAmount: 0,
    promotion: 0,
    debt: 0,
    customerName: 'KIKA LUXURY 3',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Đã thanh toán',
  },
  {
    key: '4',
    transId: '4013197767005',
    totalAmount: 0,
    promotion: 0,
    debt: 0,
    customerName: 'KIKA LUXURY 4',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Đã thanh toán',
  },
];

const SaleContainer: FC = () => {
  const navigate = useNavigate();

  const handleCreateSaleTransaction = () => {
    navigate(ROUTES.CREATE_SALES);
  };

  return (
    <div className="sale">
      <Typography className="inner-text">
        <Title level={4}>
          {/* <LocaleFormatter id="order.sale.title" /> */}
          Hoá đơn bán hàng
        </Title>
      </Typography>
      <div className="sale-header">
        <Button type="primary" icon={<PlusCircleOutlined />} onClick={handleCreateSaleTransaction}>
          Tạo hoá đơn
        </Button>
      </div>
      <MyTable<ColumnType> dataSource={data} rowKey={record => record.key}>
        <Column title="Hoá đơn" dataIndex="transId" key="transId" />
        <Column title="Khách hàng" dataIndex="customerName" key="customerName" width="10%" />
        <Column title="Giá trị" dataIndex="totalAmount" key="totalAmount" width="10%" />
        <Column title="Khuyến mại" dataIndex="promotion" key="promotion" width="10%" />
        <Column title="Công nợ" dataIndex="debt" key="debt" width="10%" />
        <Column title="Cập nhật" dataIndex="updatedAt" key="updatedAt" width="15%" />
        <Column title="Trạng thái" dataIndex="status" key="status" width="10%" />
        <Column
          title="Hành động"
          key="action"
          render={(text, record: any) => (
            <Space size="middle">
              <MyButton type="text" icon={<CheckCircleOutlined />}></MyButton>
              <MyButton type="text" icon={<EditOutlined />}></MyButton>
              <MyButton type="text" icon={<InfoCircleOutlined />}></MyButton>
            </Space>
          )}
        />
      </MyTable>
    </div>
  );
};

export default SaleContainer;
