import type { FC } from 'react';

import { Space } from 'antd';
import moment from 'moment';

import MyButton from '@/components/basic/button';
import MyTable from '@/components/core/table';

const { Column } = MyTable;

interface ColumnType {
  key: string;
  categoryId: string;
  categoryName: string;
  updatedAt: string;
  status: string;
}

const data: ColumnType[] = [
  {
    key: '1',
    categoryId: '4013197767003',
    categoryName: 'Ghế Sofa',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Active',
  },
  {
    key: '2',
    categoryId: '4013197767005',
    categoryName: 'Sofa phòng khách',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Active',
  },
  {
    key: '3',
    categoryId: '4013197767005',
    categoryName: 'Bàn trà',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Active',
  },
  {
    key: '4',
    categoryId: '4013197767005',
    categoryName: 'Bàn ăn',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Active',
  },
  {
    key: '5',
    categoryId: '4013197767005',
    categoryName: 'Giường ngủ',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Active',
  },
  {
    key: '6',
    categoryId: '4013197767005',
    categoryName: 'Quạt trần đèn',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Active',
  },
  {
    key: '7',
    categoryId: '4013197767005',
    categoryName: 'Kệ tivi',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Active',
  },
  {
    key: '8',
    categoryId: '4013197767005',
    categoryName: 'Bàn trang điểm',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Active',
  },
  {
    key: '9',
    categoryId: '4013197767005',
    categoryName: 'Tủ quần áo',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Active',
  },
  {
    key: '10',
    categoryId: '4013197767005',
    categoryName: 'Tranh decor',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Active',
  },
];

const CategoryContainer: FC = () => {
  return (
    <div className="aaa">
      <MyTable<ColumnType> dataSource={data} rowKey={record => record.key}>
        <Column title="Mã" dataIndex="categoryId" key="categoryId" />
        <Column title="Danh mục" dataIndex="categoryName" key="categoryName" />
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

export default CategoryContainer;
