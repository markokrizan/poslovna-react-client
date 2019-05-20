import React, { Component } from 'react'

export class WarehouseList extends Component {
  render() {
    return (
        <div className="col-md-2 h-100 p-0 bg-info">
            <ul className="list-group">
            <li className="list-group-item d-flex align-items-center justify-content-center">Warehouse 1 </li>
            <li className="list-group-item d-flex align-items-center justify-content-center">Warehouse 2&nbsp;</li>
            <li className="list-group-item d-flex align-items-center justify-content-center">Warehouse 3 </li>
            </ul>
        </div>
    )
  }
}

export default WarehouseList
