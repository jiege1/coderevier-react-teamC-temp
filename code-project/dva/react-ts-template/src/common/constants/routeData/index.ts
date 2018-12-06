
import React from 'react';
import lazyComponent from 'components/lazyComponent';

export interface IRoute {
  key: string;
  label: string;
  path: string;
  component: React.ComponentType;
  icon?: string;
  desc?: string;
  isAuth?: boolean;
  children?: IRoute[];
}

const routeData: IRoute[] = [
  {
    key: 'home',
    label: '首页',
    path: '/',
    desc: '首页',
    component: lazyComponent('home'),
    children: [],
  },
];

export default routeData;
