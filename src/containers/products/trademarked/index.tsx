import type { FC } from 'react';

import { Space } from 'antd';
import moment from 'moment';

import MyButton from '@/components/basic/button';
import MyTable from '@/components/core/table';

const { Column } = MyTable;

interface ColumnType {
  key: string;
  tradeMarkedId: string;
  tradeMarkedName: string;
  updatedAt: string;
  status: string;
}

const data: ColumnType[] = [
  {
    key: '1',
    tradeMarkedId: '4013197767003',
    tradeMarkedName: 'KIKA LUXURY 1',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Active',
  },
  {
    key: '2',
    tradeMarkedId: '4013197767005',
    tradeMarkedName: 'KIKA LUXURY 2',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Active',
  },
  {
    key: '3',
    tradeMarkedId: '4013197767005',
    tradeMarkedName: 'KIKA LUXURY 3',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Active',
  },
  {
    key: '4',
    tradeMarkedId: '4013197767005',
    tradeMarkedName: 'KIKA LUXURY 4',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Active',
  },
];

const TradeMarkedContainer: FC = () => {
  return (
    <div className="aaa">
      <MyTable<ColumnType> dataSource={data} rowKey={record => record.key}>
        <Column title="Mã" dataIndex="tradeMarkedId" key="tradeMarkedId" />
        <Column title="Thương hiệu" dataIndex="tradeMarkedName" key="tradeMarkedName" />
        <Column title="Trạng thái" dataIndex="status" key="status" />
        <Column title="Cập nhật" dataIndex="updatedAt" key="updatedAt" />
        <Column
          title="Hành động"
          key="action"
          render={(text, record: any) => (
            <Space size="middle">
              <MyButton type="text">Sửa</MyButton>
              <MyButton type="text">Xoá</MyButton>
            </Space>
          )}
        />
      </MyTable>
    </div>
  );
};

export default TradeMarkedContainer;
