import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getWarehouses } from "../services/WarehouseService";

export default function WarehouseList({ warehouses }) {
  const renderWarehouseList = () => {
    return warehouses.map(warehouse => {
      return (
        <li className="list-group-item d-flex align-items-center justify-content-center">
          <Link className="custom-link" to={`/warehouses/${warehouse.id}`}>
            {warehouse.name}
          </Link>
        </li>
      );
    });
  };

  return (
    <div className="col-md-2 h-100 p-0 bg-info">
      <ul className="list-group">
        {warehouses ? renderWarehouseList() : null}
      </ul>
    </div>
  );
}
