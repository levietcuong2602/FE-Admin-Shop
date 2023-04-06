import type { FC } from 'react';

import { ReactComponent as AccountSvg } from '@/assets/menu/account.svg';
import { ReactComponent as CustomerSvg } from '@/assets/menu/customer.svg';
import { ReactComponent as DashboardSvg } from '@/assets/menu/dashboard.svg';
import { ReactComponent as DocumentationSvg } from '@/assets/menu/documentation.svg';
import { ReactComponent as GuideSvg } from '@/assets/menu/guide.svg';
import { ReactComponent as OrderSvg } from '@/assets/menu/order.svg';
import { ReactComponent as PermissionSvg } from '@/assets/menu/permission.svg';
import { ReactComponent as ProductSvg } from '@/assets/menu/product.svg';
import { ReactComponent as StockSvg } from '@/assets/menu/stock.svg';

interface CustomIconProps {
  type: string;
}

export const CustomIcon: FC<CustomIconProps> = props => {
  const { type } = props;
  let com = <GuideSvg />;

  if (type === 'guide') {
    com = <GuideSvg />;
  } else if (type === 'permission') {
    com = <PermissionSvg />;
  } else if (type === 'dashboard') {
    com = <DashboardSvg />;
  } else if (type === 'account') {
    com = <AccountSvg />;
  } else if (type === 'documentation') {
    com = <DocumentationSvg />;
  } else if (type === 'order') {
    com = <OrderSvg />;
  } else if (type === 'product') {
    com = <ProductSvg />;
  } else if (type === 'stock') {
    com = <StockSvg />;
  } else if (type === 'customer') {
    com = <CustomerSvg />;
  } else {
    com = <GuideSvg />;
  }

  return <span className="anticon">{com}</span>;
};
