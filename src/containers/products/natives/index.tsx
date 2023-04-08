import type { FC } from 'react';

import { Space } from 'antd';
import moment from 'moment';

import MyButton from '@/components/basic/button';
import MyTable from '@/components/core/table';

const { Column } = MyTable;

interface ColumnType {
  key: string;
  nativeId: string;
  nativeName: string;
  updatedAt: string;
  status: string;
}

const data: ColumnType[] = [
  {
    key: '1',
    nativeId: '4013197767003',
    nativeName: 'Việt Nam',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Active',
  },
  {
    key: '2',
    nativeId: '4013197767005',
    nativeName: 'Hàn Quốc',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Active',
  },
  {
    key: '3',
    nativeId: '4013197767005',
    nativeName: 'Mỹ',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Active',
  },
  {
    key: '4',
    nativeId: '4013197767005',
    nativeName: 'Canada',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Active',
  },
];

const NativeContainer: FC = () => {
  return (
    <div className="aaa">
      <MyTable<ColumnType> dataSource={data} rowKey={record => record.key}>
        <Column title="Mã" dataIndex="nativeId" key="nativeId" />
        <Column title="Xuất xứ" dataIndex="nativeName" key="nativeName" />
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

export default NativeContainer;
