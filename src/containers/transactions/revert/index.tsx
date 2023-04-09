import type { FC } from 'react';

import './index.less';

import { CheckCircleOutlined, EditOutlined, InfoCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space, Typography } from 'antd';
import moment from 'moment';

import MyButton from '@/components/basic/button';
import MyTable from '@/components/core/table';

const { Column } = MyTable;
const { Title } = Typography;

interface ColumnType {
  key: string;
  transId: string;
  productName: string;
  tranSaleId: number;
  price: number;
  quantity: number;
  updatedAt: string;
  status: string;
  customerName: string;
  description: string;
}

const data: ColumnType[] = [
  {
    key: '1',
    transId: '4013197767003',
    tranSaleId: 0,
    price: 0,
    quantity: 0,
    productName: 'KIKA LUXURY 1',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Đã thanh toán',
    customerName: '',
    description: '',
  },
  {
    key: '2',
    transId: '4013197767005',
    tranSaleId: 0,
    price: 0,
    quantity: 0,
    productName: 'KIKA LUXURY 2',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Đã thanh toán',
    customerName: '',
    description: '',
  },
  {
    key: '3',
    transId: '4013197767005',
    tranSaleId: 0,
    price: 0,
    quantity: 0,
    productName: 'KIKA LUXURY 3',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Đã thanh toán',
    customerName: '',
    description: '',
  },
  {
    key: '4',
    transId: '4013197767005',
    tranSaleId: 0,
    price: 0,
    quantity: 0,
    productName: 'KIKA LUXURY 4',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Đã thanh toán',
    customerName: '',
    description: '',
  },
];

const RevertContainer: FC = () => {
  const handleCreateSaleTransaction = () => {};

  return (
    <div className="sale">
      <Typography className="inner-text">
        <Title level={4}>
          {/* <LocaleFormatter id="order.sale.title" /> */}
          Hoá đơn trả hàng
        </Title>
      </Typography>
      <div className="sale-header">
        <Button type="primary" icon={<PlusCircleOutlined />} onClick={handleCreateSaleTransaction}>
          Tạo hoá đơn
        </Button>
      </div>
      <MyTable<ColumnType> dataSource={data} rowKey={record => record.key}>
        <Column title="Mã phiếu trả" dataIndex="transId" key="transId" />
        <Column title="Sản phẩm" dataIndex="productName" key="productName" width="10%" />
        <Column title="Hoá đơn bán" dataIndex="tranSaleId" key="tranSaleId" width="10%" />
        <Column title="Giá bán" dataIndex="price" key="price" width="10%" />
        <Column title="Số lượng" dataIndex="quantity" key="quantity" width="10%" />
        <Column title="Khách hàng" dataIndex="customerName" key="customerName" width="10%" />
        <Column title="Cập nhật" dataIndex="updatedAt" key="updatedAt" width="15%" />
        <Column title="Trạng thái" dataIndex="status" key="status" width="10%" />
        <Column title="Mô tả" dataIndex="description" key="description" width="10%" />
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

export default RevertContainer;
