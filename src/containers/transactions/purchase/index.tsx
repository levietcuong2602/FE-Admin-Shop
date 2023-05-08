import type { FC } from 'react';

import './index.less';

import { CheckCircleOutlined, EditOutlined, InfoCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Button, Space, Typography } from 'antd';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

import MyButton from '@/components/basic/button';
import MyTable from '@/components/core/table';
import { ROUTE } from '@/constants/router';

const { Column } = MyTable;
const { Title } = Typography;

interface ColumnType {
  key: string;
  transId: string;
  supplierName: string;
  promotion: number;
  debt: number;
  totalAmount: number;
  updatedAt: string;
  status: string;
}

const data: ColumnType[] = [
  {
    key: '1',
    transId: '4013197767003',
    supplierName: 'Hoà phát',
    promotion: 18900000,
    debt: 1,
    totalAmount: 18900000,
    updatedAt: moment().format('HH:mm DD-MM-YYY'),
    status: 'Đang giao',
  },
  {
    key: '2',
    transId: '4013197767005',
    supplierName: 'Hoà phát',
    promotion: 18900000,
    debt: 1,
    totalAmount: 18900000,
    updatedAt: moment().format('HH:mm DD-MM-YYY'),
    status: 'Đang giao',
  },
  {
    key: '3',
    transId: '4013197767005',
    supplierName: 'Hoà phát',
    promotion: 18900000,
    debt: 1,
    totalAmount: 18900000,
    updatedAt: moment().format('HH:mm DD-MM-YYY'),
    status: 'Đang giao',
  },
];

new Array(30).fill(undefined).forEach((item, index) => {
  data.push({
    key: index + 4 + '',
    transId: `${4013197767005 + index}`,
    supplierName: 'Sofa' + index,
    promotion: 18900000,
    debt: 1,
    totalAmount: 18900000,
    updatedAt: moment().format('HH:mm DD-MM-YYY'),
    status: 'Đang giao',
  });
});

const PurchasePage: FC = () => {
  const navigate = useNavigate();

  const handleCreatePurchaseTransaction = () => {
    navigate(ROUTE.CREATE_PURCHASE);
  };

  return (
    <div className="purchase">
      <Typography className="inner-text">
        <Title level={4}>
          {/* <LocaleFormatter id="order.sale.title" /> */}
          Hoá đơn nhập hàng
        </Title>
      </Typography>
      <div className="purchase-header">
        <Button type="primary" icon={<PlusCircleOutlined />} onClick={handleCreatePurchaseTransaction}>
          Tạo hoá đơn
        </Button>
      </div>
      <MyTable<ColumnType> dataSource={data} rowKey={record => record.key} height="100%">
        <Column title="Hoá đơn" dataIndex="transId" key="transId" width="10%" />
        <Column title="Nhà cung cấp" dataIndex="supplierName" key="supplierName" width="15%" />
        <Column title="Giá trị" dataIndex="totalAmount" key="totalAmount" width="10%" />
        <Column title="Khuyến mại" dataIndex="promotion" key="promotion" width="10%" />
        <Column title="Công nợ" dataIndex="debt" key="debt" width="10%" />
        <Column title="Cập nhật" dataIndex="updatedAt" key="updatedAt" width="15%" />
        <Column title="Trạng thái" dataIndex="status" key="status" width="15%" />
        <Column
          title="Hành động"
          key="action"
          align="center"
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

export default PurchasePage;
