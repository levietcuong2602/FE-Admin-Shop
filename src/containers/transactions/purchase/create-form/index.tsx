import type { FC } from 'react';

import './index.less';

import { CheckCircleOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Space, Typography } from 'antd';

import MyButton from '@/components/basic/button';
import MyTable from '@/components/core/table';

const { Title } = Typography;
const { Column } = MyTable;

interface ColumnType {
  key: string;
  transId: string;
  productName: string;
  price: number;
  amount: number;
  totalPrice: number;
  description: string;
}

const data: ColumnType[] = [
  {
    key: '1',
    transId: '4013197767003',
    productName: 'Ghế Sofa',
    price: 10000,
    amount: 2,
    totalPrice: 20000,
    description: '',
  },
];

const PurchaseContainer: FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="create-purchase">
      <Typography className="inner-text">
        <Title level={4}>
          {/* <LocaleFormatter id="order.purchase.title" /> */}
          Hoá đơn nhập hàng
        </Title>
      </Typography>

      <Row className="create-purchase-container" gutter={24}>
        <Col span={16}>
          <div className="list-product-header">
            <Button type="primary" icon={<EditOutlined />}>
              Thêm sảm phẩm
            </Button>
          </div>
          <MyTable<ColumnType> dataSource={data} rowKey={record => record.key}>
            <Column title="Mã" dataIndex="transId" key="transId" width="10%" />
            <Column title="Sản phẩm" dataIndex="productName" key="productName" width="10%" />
            <Column title="Giá nhập" dataIndex="price" key="price" width="10%" />
            <Column title="Số lượng" dataIndex="amount" key="amount" width="10%" />
            <Column title="Mô tả" dataIndex="description" key="description" width="15%" />
            <Column title="Thành tiền" dataIndex="totalPrice" key="totalPrice" width="10%" />
            <Column
              title="Hành động"
              key="action"
              width="10%"
              render={(text, record: any) => (
                <Space size="middle">
                  <MyButton type="text" icon={<CheckCircleOutlined />}></MyButton>
                </Space>
              )}
            />
          </MyTable>
        </Col>
        <Col span={8}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: '100%' }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item label="Mã HĐ" name="transId" rules={[{ required: true, message: 'Tổng tiền!' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Ngày" name="date" rules={[{ required: true, message: 'Please input your date!' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Nhà cung cấp" name="partner" rules={[{ required: true, message: 'Tổng tiền!' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Tổng tiền" name="totalPrice" rules={[{ required: true, message: 'Tổng tiền!' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Phải trả" name="debt" rules={[{ required: true, message: 'Please input staff!' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Đã thanh toán" name="paid" rules={[{ required: true, message: 'Please input staff!' }]}>
              <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Lưu hoá đơn
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default PurchaseContainer;
