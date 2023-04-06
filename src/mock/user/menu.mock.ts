import type { MenuList } from '@/interface/layout/menu.interface';

import { intercepter, mock } from '../config';

const mockMenuList: MenuList = [
  {
    code: 'dashboard',
    label: {
      zh_CN: '首页',
      en_US: 'Tổng quan',
    },
    icon: 'dashboard',
    path: '/dashboard',
  },
  {
    code: 'order',
    label: {
      zh_CN: '首页',
      en_US: 'Đơn hàng',
    },
    icon: 'order',
    path: '/orders',
  },
  {
    code: 'product',
    label: {
      zh_CN: '首页',
      en_US: 'Sản phẩm',
    },
    icon: 'product',
    path: '/products',
  },
  {
    code: 'stock',
    label: {
      zh_CN: '首页',
      en_US: 'Nhập kho',
    },
    icon: 'stock',
    path: '/stocks',
  },
  {
    code: 'customer',
    label: {
      zh_CN: '文档',
      en_US: 'Khách hàng',
    },
    icon: 'customer',
    path: '/customers',
  },
];

mock.mock('/user/menu', 'get', intercepter(mockMenuList));
