import React, { Component, Fragment } from 'react'
import WarehouseList from '../components/Warehouse';
import Warehouse from '../components/WarehouseList';

class Warehouses extends Component {
  render() {
    return (
    <div className="row">
        {/* Check if there is a number at the end, render that particular warehouse */}
        <Warehouse/>
        <WarehouseList/>
    </div>
    )
  }
}

export default Warehouses
