import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Header from './components/Header';
import Toolbar from './components/Toolbar';
import Footer from './components/Footer';
import Warehouses from './components/Warehouses';
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
              <Redirect from="/" to="/warehouses" exact />
        </Switch>
      </Router>
      <Footer/>
    </Fragment>
  );
}

export default App;
