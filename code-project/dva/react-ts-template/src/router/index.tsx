import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import { Router as DvaRouter } from 'dva';
// import dynamic from 'dva/dynamic';
import routeData, { IRoute } from 'common/constants/routeData';

const buildRoute = (list: IRoute[], parentPath: string = ''): React.ReactNode[] => {
  return list.map(item => {
    if (item.children && item.children.length) {
      return buildRoute(item.children, item.path);
    }
    const props = {
      path: parentPath + item.path,
      component: item.component,
      exact: true,
    };
    return <Route key={`route_${item.key}`} {...props} />;
  });
};

const Routers: DvaRouter = ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        {buildRoute(routeData)}
      </Switch>
    </Router>
  );
};

export default Routers;
