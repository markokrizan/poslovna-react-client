import React, { useState } from "react";
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
import Unauthorized from "./components/Unauthorized";
import ProtectedComponent from "./components/ProtectedComponent";
import "./App.css";
import {mockLogin} from './services/mock';

export default function App(){

    const [mockUser, setMockUser] = useState(null);

    const handleMockLogin = async () => {
      const { mockUser, mockToken } = await mockLogin();
      localStorage.setItem('token', mockToken);
      setMockUser(mockUser);
    }

    return (
      <Router>
        <Header mockUser = {mockUser}/>
        <Toolbar mockUser = {mockUser}/>
        <Switch>
          <ProtectedComponent path="/warehouses" exact component={Warehouses}/>} />
          <Redirect from="/" to="/warehouses" exact />
          <ProtectedComponent path="/warehouses/:id" exact component={Warehouses} />
          <ProtectedComponent
            path="/warehouses/:warehouseId/article/:articleId"
            exact
            component={Product}
          />
          <ProtectedComponent path="/products/:id/analytics" exact component={Analytics} />
          <Route path="/login" exact component={() => <Login handleMockLogin={handleMockLogin}/>} />
          <ProtectedComponent
            path="/order-products/receipts"
            exact
            component={OrderReciept}
          />
          <ProtectedComponent path="/order-products" exact component={OrderProducts} />
          <ProtectedComponent path="/documents" exact component={Documents} />
          <ProtectedComponent path="/documents/:id/items" exact component={DocumentItems} />
          <ProtectedComponent path="/ship-products" exact component={ShipProducts} />
          <ProtectedComponent path="/in-house-tranzit" exact component={InHouseTranzit} />
          <ProtectedComponent path="/user" exact component={() => <User mockUser = {mockUser}/>} />
          <Route path="/company-info" exact component={Company} />
          <Route path="/unauthorized" exact component={Unauthorized} />
        </Switch>
      </Router>
    );
}

