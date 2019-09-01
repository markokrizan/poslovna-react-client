import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import Warehouses from "./components/Warehouses";
import Product from "./components/Product";
import Analytics from "./components/Analytics";
import Login from "./components/Login";
import OrderProducts from "./components/OrderProducts";
import User from "./components/User";
import Company from "./components/Company";
import OrderReciept from "./components/OrderReciept";
import ShipProducts from "./components/ShipProducts";
import InHouseTranzit from "./components/InHouseTranzit";
import Documents from "./components/Documents";
import DocumentItems from "./components/DocumentItems";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Toolbar />
        <Switch>
          <Route path="/warehouses" exact component={Warehouses} />
          <Redirect from="/" to="/warehouses" exact />
          <Route path="/warehouses/:id" exact component={Warehouses} />
          <Route
            path="/warehouses/:warehouseId/article/:articleId"
            exact
            component={Product}
          />
          <Route path="/products/:id/analytics" exact component={Analytics} />
          <Route path="/login" exact component={Login} />
          <Route
            path="/order-products/receipts"
            exact
            component={OrderReciept}
          />
          <Route path="/order-products" exact component={OrderProducts} />
          <Route path="/documents" exact component={Documents} />
          <Route path="/documents/:id/items" exact component={DocumentItems} />
          <Route path="/ship-products" exact component={ShipProducts} />
          <Route path="/in-house-tranzit" exact component={InHouseTranzit} />
          <Route path="/user" exact component={User} />
          <Route path="/company-info" exact component={Company} />
        </Switch>
      </Router>
    );
  }
}

export default App;
