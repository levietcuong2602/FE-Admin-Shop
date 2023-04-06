import type { FC } from 'react';

import { Space } from 'antd';

import MyButton from '@/components/basic/button';
import MyTable from '@/components/core/table';

const { Column } = MyTable;

interface ColumnType {
  key: string;
  stockId: string;
  date: string;
  note: string;
  totalMoney: number;
  createdBy: string;
}

const data: ColumnType[] = [
  {
    key: '1',

    stockId: '',
    date: '',
    note: '',
    totalMoney: 0,
    createdBy: '',
  },
  {
    key: '2',
    stockId: '',
    date: '',
    note: '',
    totalMoney: 0,
    createdBy: '',
  },
  {
    key: '3',
    stockId: '',
    date: '',
    note: '',
    totalMoney: 0,
    createdBy: '',
  },
];

new Array(30).fill(undefined).forEach((item, index) => {
  data.push({
    key: index + 4 + '',
    stockId: '',
    date: '',
    note: '',
    totalMoney: 0,
    createdBy: '',
  });
});

const ProductPage: FC = () => {
  return (
    <div className="aaa">
      <MyTable<ColumnType> dataSource={data} rowKey={record => record.key} height="100%">
        <Column title="Mã nhập" dataIndex="stockId" key="stockId" />
        <Column title="Ngày ghi" dataIndex="date" key="date" />
        <Column title="Ghi chú" dataIndex="noted" key="noted" />
        <Column title="Tổng tiền" dataIndex="totalMoney" key="totalMoney" />
        <Column title="Người tạo" dataIndex="createdBy" key="createdBy" width="100px" />
        <Column
          title="Hành động"
          key="action"
          render={(text, record: any) => (
            <Space size="middle">
              <MyButton type="text">Sửa</MyButton>
            </Space>
          )}
        />
      </MyTable>
    </div>
  );
};

export default ProductPage;
