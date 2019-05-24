import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Header from './components/Header';
import Toolbar from './components/Toolbar';
import Warehouses from './components/Warehouses';
import Product from './components/Product';
import Analytics from './components/Analytics';
import Login from './components/Login';
import OrderProducts from './components/OrderProducts';
import PendingOrders from './components/PendingOrders';
import { PendingOrderDetails } from './components/PendingOrderDetails';
import User from './components/User';
import Company from './components/Company';
import OrderReciept from './components/OrderReciept';

import './App.css';

function App() {
  return (
      <Router>
        <Header/>
        <Toolbar/>
        <Switch>
              <Route
                path="/warehouses"
                exact
                component={Warehouses}
              />
              <Redirect from="/" to="/warehouses" exact />
              <Route
                path="/warehouse/:id"
                exact
                component={Warehouses}
              />
              <Route
                path="/product/:id"
                exact
                component={Product}
              />
              <Route
                path="/product/:id/analytics"
                exact
                component={Analytics}
              />
              <Route
                path="/login"
                exact
                component={Login}
              />
              <Route
                path="/order-products/receipt"
                exact
                component={OrderReciept}
              />
              <Route
                path="/order-products"
                exact
                component={OrderProducts}
              />
              <Route
                path="/order"
                exact
                component={Company}
              />
              <Route
                path="/pending-orders/:id"
                exact
                component={PendingOrderDetails}
              />
              <Route
                path="/pending-orders"
                exact
                component={PendingOrders}
              />
              <Route
                path="/user"
                exact
                component={User}
              />
              <Route
                path="/company-info"
                exact
                component={Company}
              />
        </Switch>
      </Router>
  );
}

export default App;
