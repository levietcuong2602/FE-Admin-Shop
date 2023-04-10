import type { FC } from 'react';

import './index.less';

import {
  CheckCircleOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  InfoCircleOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import { Button, Modal, Space, Typography } from 'antd';
import moment from 'moment';
import { useState } from 'react';

import MyButton from '@/components/basic/button';
import MyModal from '@/components/basic/modal';
import MyTable from '@/components/core/table';

const { Column } = MyTable;
const { Title } = Typography;

interface ColumnType {
  key: string;
  customerName: string;
  debt: number;
  totalPurchase: number;
  status: string;
}

const data: ColumnType[] = [
  {
    key: '1',
    customerName: 'Việt Cường',
    debt: 0,
    totalPurchase: 0,
    status: 'Active',
  },
  {
    key: '2',
    customerName: 'Lý Tuấn',
    debt: 0,
    totalPurchase: 0,
    status: 'Active',
  },
  {
    key: '3',
    customerName: 'Thuỳ Linh',
    debt: 0,
    totalPurchase: 0,
    status: 'Active',
  },
  {
    key: '4',
    customerName: 'Thu Phương',
    debt: 0,
    totalPurchase: 0,
    status: 'Active',
  },
];

const CustomerContainer: FC = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [deleteConfirm, deleteContextHolder] = Modal.useModal();

  const handleShowCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const handleOkCreate = () => {
    setIsCreateModalOpen(false);
  };

  const handleCancelCreate = () => {
    setIsCreateModalOpen(false);
  };

  const handleShowDeleteItemConfirm = () => {
    deleteConfirm.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: 'Bla bla ...',
      okText: 'Xác nhận',
      cancelText: 'Huỷ',
    });
  };

  const handleShowUpdateItemModal = () => {
    setIsUpdateModalOpen(true);
  };

  const handleOkUpdate = () => {
    setIsUpdateModalOpen(false);
  };

  const handleCancelUpdate = () => {
    setIsUpdateModalOpen(false);
  };

  return (
    <div className="customer">
      <Typography className="inner-text">
        <Title level={4}>
          {/* <LocaleFormatter id="product.native.title" /> */}
          Khách hàng
        </Title>
      </Typography>
      <div className="customer-header">
        <Button type="primary" icon={<PlusCircleOutlined />} onClick={handleShowCreateModal}>
          Thêm mới
        </Button>
      </div>
      <MyTable<ColumnType> dataSource={data} rowKey={record => record.key}>
        <Column title="Khách hàng" dataIndex="customerName" key="customerName" width="20%" />
        <Column title="Công nợ" dataIndex="debt" key="debt" width="20%" />
        <Column title="Tổng mua" dataIndex="totalPurchase" key="totalPurchase" width="20%" />
        <Column title="Trạng thái" dataIndex="status" key="status" width="15%" />
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

      {/* Modal place */}
      <MyModal title="Tạo mới thương hiệu" open={isCreateModalOpen} onOk={handleOkCreate} onCancel={handleCancelCreate}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </MyModal>
      <MyModal
        title="Cập nhật thương hiệu"
        open={isUpdateModalOpen}
        onOk={handleOkUpdate}
        onCancel={handleCancelUpdate}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </MyModal>
      {deleteContextHolder}
    </div>
  );
};

export default CustomerContainer;
