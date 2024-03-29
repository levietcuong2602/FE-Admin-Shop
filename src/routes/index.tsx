import type { FC } from 'react';
import type { RouteObject } from 'react-router';

import { lazy } from 'react';
import { Navigate } from 'react-router';
import { useRoutes } from 'react-router-dom';

import Dashboard from '@/pages/dashboard';
import LayoutPage from '@/pages/layout';
import LoginPage from '@/pages/login';
import CreateFormPurchasePage from '@/pages/transactions/create-purchase';
import CreateFormSalePage from '@/pages/transactions/create-sale';

import WrapperRouteComponent from './config';

const NotFound = lazy(() => import(/* webpackChunkName: "404'"*/ '@/pages/404'));
const Documentation = lazy(() => import(/* webpackChunkName: "404'"*/ '@/pages/doucumentation'));
const Guide = lazy(() => import(/* webpackChunkName: "guide'"*/ '@/pages/guide'));
const RoutePermission = lazy(() => import(/* webpackChunkName: "route-permission"*/ '@/pages/permission/route'));
const FormPage = lazy(() => import(/* webpackChunkName: "form'"*/ '@/pages/components/form'));
const TablePage = lazy(() => import(/* webpackChunkName: "table'"*/ '@/pages/components/table'));
const SearchPage = lazy(() => import(/* webpackChunkName: "search'"*/ '@/pages/components/search'));
const TabsPage = lazy(() => import(/* webpackChunkName: "tabs'"*/ '@/pages/components/tabs'));
const AsidePage = lazy(() => import(/* webpackChunkName: "aside'"*/ '@/pages/components/aside'));
const RadioCardsPage = lazy(() => import(/* webpackChunkName: "radio-cards'"*/ '@/pages/components/radio-cards'));
const BusinessBasicPage = lazy(() => import(/* webpackChunkName: "basic-page" */ '@/pages/business/basic'));
const BusinessWithSearchPage = lazy(() => import(/* webpackChunkName: "with-search" */ '@/pages/business/with-search'));
const BusinessWithAsidePage = lazy(() => import(/* webpackChunkName: "with-aside" */ '@/pages/business/with-aside'));
const BusinessWithRadioCardsPage = lazy(
  () => import(/* webpackChunkName: "with-aside" */ '@/pages/business/with-radio-cards'),
);
const BusinessWithTabsPage = lazy(() => import(/* webpackChunkName: "with-tabs" */ '@/pages/business/with-tabs'));

const ProductNativePage = lazy(() => import(/* webpackChunkName: "products/native" */ '@/pages/products/natives'));
const ProductManagementPage = lazy(
  () => import(/* webpackChunkName: "products/management" */ '@/pages/products/management'),
);
const ProductTradeMarkedPage = lazy(
  () => import(/* webpackChunkName: "products/trademarked" */ '@/pages/products/trademarked'),
);
const ProductCategoryPage = lazy(
  () => import(/* webpackChunkName: "products/trademarked" */ '@/pages/products/categories'),
);

const TransactionSalePage = lazy(
  () => import(/* webpackChunkName: "transactions/sales" */ '@/pages/transactions/sale'),
);
const TransactionPurchasePage = lazy(
  () => import(/* webpackChunkName: "transactions/purchases" */ '@/pages/transactions/purchase'),
);
const TransactionRevertPage = lazy(
  () => import(/* webpackChunkName: "transactions/reverts" */ '@/pages/transactions/revert'),
);

const PartnerCustomerPage = lazy(
  () => import(/* webpackChunkName: "partners/customers" */ '@/pages/partners/customer'),
);
const PartnerSupplierPage = lazy(
  () => import(/* webpackChunkName: "partners/suppliers" */ '@/pages/partners/supplier'),
);
const routeList: RouteObject[] = [
  {
    path: '/login',
    element: <WrapperRouteComponent element={<LoginPage />} titleId="title.login" />,
  },
  {
    path: '/',
    element: <WrapperRouteComponent element={<LayoutPage />} titleId="" />,
    children: [
      {
        path: '',
        element: <Navigate to="dashboard" />,
      },
      {
        path: 'dashboard',
        element: <WrapperRouteComponent element={<Dashboard />} titleId="title.dashboard" />,
      },
      {
        path: 'transactions/sales',
        element: <WrapperRouteComponent element={<TransactionSalePage />} titleId="title.transactions.sales" />,
      },
      {
        path: 'transactions/sales/create',
        element: <WrapperRouteComponent element={<CreateFormSalePage />} titleId="title.transactions.sales.create" />,
      },
      {
        path: 'transactions/purchases',
        element: <WrapperRouteComponent element={<TransactionPurchasePage />} titleId="title.transactions.purchases" />,
      },
      {
        path: 'transactions/purchases/create',
        element: (
          <WrapperRouteComponent element={<CreateFormPurchasePage />} titleId="title.transactions.purchases.create" />
        ),
      },
      {
        path: 'transactions/reverts',
        element: <WrapperRouteComponent element={<TransactionRevertPage />} titleId="title.transactions.reverts" />,
      },
      {
        path: 'products/natives',
        element: <WrapperRouteComponent element={<ProductNativePage />} titleId="title.products.natives" />,
      },
      {
        path: 'products/management',
        element: <WrapperRouteComponent element={<ProductManagementPage />} titleId="title.products.management" />,
      },
      {
        path: 'products/trademarked',
        element: <WrapperRouteComponent element={<ProductTradeMarkedPage />} titleId="title.products.trademarked" />,
      },
      {
        path: 'products/categories',
        element: <WrapperRouteComponent element={<ProductCategoryPage />} titleId="title.products.categories" />,
      },
      {
        path: 'partners/customers',
        element: <WrapperRouteComponent element={<PartnerCustomerPage />} titleId="title.partners.customers" />,
      },
      {
        path: 'partners/suppliers',
        element: <WrapperRouteComponent element={<PartnerSupplierPage />} titleId="title.partners.suppliers" />,
      },
      {
        path: 'documentation',
        element: <WrapperRouteComponent element={<Documentation />} titleId="title.documentation" />,
      },
      {
        path: 'guide',
        element: <WrapperRouteComponent element={<Guide />} titleId="title.guide" />,
      },
      {
        path: 'permission/route',
        element: <WrapperRouteComponent element={<RoutePermission />} titleId="title.permission.route" auth />,
      },
      {
        path: 'component/form',
        element: <WrapperRouteComponent element={<FormPage />} titleId="title.account" />,
      },
      {
        path: 'component/table',
        element: <WrapperRouteComponent element={<TablePage />} titleId="title.account" />,
      },
      {
        path: 'component/search',
        element: <WrapperRouteComponent element={<SearchPage />} titleId="title.account" />,
      },
      {
        path: 'component/tabs',
        element: <WrapperRouteComponent element={<TabsPage />} titleId="title.account" />,
      },
      {
        path: 'component/aside',
        element: <WrapperRouteComponent element={<AsidePage />} titleId="title.account" />,
      },
      {
        path: 'component/radio-cards',
        element: <WrapperRouteComponent element={<RadioCardsPage />} titleId="title.account" />,
      },
      {
        path: 'business/basic',
        element: <WrapperRouteComponent element={<BusinessBasicPage />} titleId="title.account" />,
      },
      {
        path: 'business/with-search',
        element: <WrapperRouteComponent element={<BusinessWithSearchPage />} titleId="title.account" />,
      },
      {
        path: 'business/with-aside',
        element: <WrapperRouteComponent element={<BusinessWithAsidePage />} titleId="title.account" />,
      },
      {
        path: 'business/with-radio-cards',
        element: <WrapperRouteComponent element={<BusinessWithRadioCardsPage />} titleId="title.account" />,
      },
      {
        path: 'business/with-tabs',
        element: <WrapperRouteComponent element={<BusinessWithTabsPage />} titleId="title.account" />,
      },
      {
        path: '*',
        element: <WrapperRouteComponent element={<NotFound />} titleId="title.notFount" />,
      },
    ],
  },
];

const RenderRouter: FC = () => {
  const element = useRoutes(routeList);

  return element;
};

export default RenderRouter;
