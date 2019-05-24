import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class WarehouseList extends Component {
  render() {
    return (
        <div className="col-md-2 h-100 p-0 bg-info">
            <ul className="list-group">
            <li className="list-group-item d-flex align-items-center justify-content-center"><Link className = "custom-link" to={`/warehouse/1`}>Warehouse 1</Link></li>
            <li className="list-group-item d-flex align-items-center justify-content-center"><Link className = "custom-link" to={`/warehouse/2`}>Warehouse 2</Link></li>
            <li className="list-group-item d-flex align-items-center justify-content-center"><Link className = "custom-link" to={`/warehouse/3`}>Warehouse 3</Link></li>
            </ul>
        </div>
    )
  }
}

export default WarehouseList
         