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



import './App.css';


function App() {
  return (
    <Fragment>
      <Header/>
      <Toolbar/>
      <Router>
        <Switch>
              <Route
                path="/warehouses"
                component={Warehouses}
              />
              <Route
                path="/product"
                component={Product}
              />
              <Route
                path="/analytics"
                component={Analytics}
              />
              <Route
                path="/login"
                component={Login}
              />
              <Route
                path="/login"
                component={Login}
              />
              <Route
                path="/order-products"
                component={OrderProducts}
              />
              <Route
                path="/pending-orders/1"
                component={PendingOrderDetails}
              />
              <Route
                path="/pending-orders"
                component={PendingOrders}
              />
              <Route
                path="/user"
                component={User}
              />
              <Redirect from="/" to="/warehouses" exact />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
